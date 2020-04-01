#!/usr/local/bin/python3
# -*- coding: utf-8 -*-

# TODO: parse apocrphya reference

import credentials
import json
import logging
import pprint
import re
import requests
import sys

LOGGER = logging.getLogger()
LOGGER.setLevel(logging.INFO)

API_URL = 'https://api.esv.org/v3/passage/text/'

# Query the ESV API to retrieve the passage.
#
# passage, fuzzy string describing the passage, e.g. Ps+23, "Psalm 23"
def get_esv_text(passage):
    params = {
        'q': passage,
        'include-headings': False,
        'include-footnotes': False,
        'include-verse-numbers': True,
        'include-short-copyright': False,
        'include-passage-references': False
    }

    headers = {
        'Authorization': 'Token %s' % credentials.API_KEY
    }

    response = requests.get(API_URL, params=params, headers=headers)
    passages = response.json()['passages']
    return passages[0].strip() if passages else 'Error: Passage not found'

# Is the reference part of the apocrphya?
def is_apocrypha(ref):
    return ref.startswith("Baruch") or ref.startswith("Wisdom") or ref.startswith("Judith") or ref.startswith("Susanna") or ref.startswith("1 Macc") or ref.startswith("2 Macc")

# Get texts for the lectionary entry on the provided month and day
#
# lectionary, a hash of month -> day -> [array of scripture references of size 2]
# month, the month to query
# day, the day to query
def get_lesson_texts(lectionary, month, day):
    texts = []
    for ref in lectionary[month][day]:
        full_ref = re.sub('†.*$', '', ref)
        if (is_apocrypha(ref)):
            texts.append("apocrypha text")
        else:
            texts.append(get_esv_text(full_ref))
    return texts

# Get texts for the psalms lectionary entry on the provided month and day
# lectionary, a hash of month -> day -> ,-separated string of psalm references
# month, the month to query
# day, the day to query
def get_psalm_texts(lectionary, month, day):
    texts = []
    psalms = lectionary[month][day]
    for psalm_chapter in psalms:
        full_ref = 'Psalm+' + psalm_chapter
        texts.append({'psalm_section': psalm_chapter, 'psalm_text': get_esv_text(full_ref)})
    return texts
    

# Main hook for where Lambda gets run. event is the input to the function
#
# event.date date to get scripture in ISO format, e.g. 2019-03-01
# event.office the office to retrieve. must be 'morning' or 'evening'
def lambda_handler(event, context):
    
    # Event input validation
    
    # Get the date
    try:
        date = event['date']
        if not re.match(r'^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]', date):
            return {'statusCode': 400}
    except KeyError as e:
        return {'statusCode': 400}

    # Get the office type (morning/evening)
    try:
        office = event['office']
    except KeyError as e:
        return {'statusCode': 400}

    # Extract year/month/day
    pieces = date.split("-")
    year = str(int(pieces[0]))
    month = str(int(pieces[1]))
    day = str(int(pieces[2]))
    
    body = {}

    # Construct the output

    if office == 'morning':
        with open('morning-lectionary.json') as f:
            body['morning'] = get_lesson_texts(json.load(f), month, day)
        with open('psalms-morning-lectionary.json') as f:
            body['morning-psalms'] = get_psalm_texts(json.load(f), month, day)
    elif office == 'evening':
        with open('evening-lectionary.json') as f:
            body['evening'] = get_lesson_texts(json.load(f), month, day)
        with open('psalms-evening-lectionary.json') as f:
            body['evening-psalms'] = get_psalm_texts(json.load(f), month, day)
    else:
        LOGGER.info('Unknown office type: ' + office)
        return {'statusCode': 404}

    # TODO cache these on disk
    # TODO cache these on Elasticache

    return {
        'statusCode': 200,
        'body': body
    }

# To test locally:
#print(lambda_handler({'date': '2019-03-01', 'office': 'morning'}, None))
#print(lambda_handler({'date': '2019-03-04', 'office': 'morning'}, None))
#print(lambda_handler({'date': '2019-03-01', 'office': 'evening'}, None))
#print(lambda_handler({'date': '2019-03-04', 'office': 'evening'}, None))

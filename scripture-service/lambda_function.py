#!/usr/local/bin/python3
# -*- coding: utf-8 -*-

# TODO: parse apocrphya reference

import credentials
import json
import logging
import pprint
import re
# Uncomment to run in Python 3.8 - also need to 'pip3 install requests'
# TODO Bundle up a Python runtime environment and automatically deploy to Lambda...
#import requests
from botocore.vendored import requests
import sys

LOGGER = logging.getLogger()
LOGGER.setLevel(logging.INFO)

API_URL = 'https://api.esv.org/v3/passage/text/'

# Query the ESV API to retrieve the passage.
#
# Parameters:
#   passage, fuzzy string describing the passage, e.g. Ps+23, "Psalm 23"
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

# Split a 'str' that has verses formatted in square brackets into the logical representation with verses as keys in a hash.
#
# Example:
#   Input: str="[1] foo [2] bar [3] baz"
#   Output: [{verse: 1, text: "foo"}, {verse: 2, text: "bar"}, {verse: 3, text: "baz"}]
#
# Parameters:
#   str, the string to split
def splitByVerse(str):
    pairs = []

    i = 0
    scanningNumber = False
    scanningText = False

    substringNumber = ""
    substringText = ""
    while i < len(str):
        c = str[i]

        if c == '[':
            # End of the previous fragment
            if substringText != "":
                pairs.append({'verse': substringNumber.strip(), 'text': substringText.strip().split('\n')})
            # ... and start of a new string.
            substringNumber = ""
            substringText = ""
            scanningNumber = True
            scanningText = False
        elif c == ']':
            scanningNumber = False
            scanningText = True
        else:
            if scanningNumber:
                substringNumber += c
            if scanningText:
                substringText += c
        i = i + 1


    if substringText != "":
        pairs.append({'verse': substringNumber.strip(), 'text': substringText.strip().split('\n')})

    return pairs

# Get texts for the lectionary entry on the provided month and day
#
# Parameters:
#   lectionary, a hash of month -> day -> [array of scripture references of size 2]
#   month, the month to query (e.g. 1 for January)
#   day, the day to query (e.g. 30 for the 30th day of the month)
def get_lesson_texts(lectionary, month, day):
    texts = []
    for ref in lectionary[month][day]:
        full_ref = re.sub('†.*$', '', ref)
        if (is_apocrypha(ref)):
            # TODO query apocrphya.json and extract this
            texts.append("apocrypha text")
        else:
            texts.append(get_esv_text(full_ref))
    return texts

# Get texts for the psalms lectionary entry on the provided month and day
#
# Parameters:
#   lectionary, a hash of month -> day -> [ array of psalm references ]
#   month, the month to query (e.g. 1 for January)
#   day, the day to query (e.g. 30 for the 30th day of the month)
def get_psalm_texts(lectionary, month, day):
    texts = []
    psalms = lectionary[month][day]
    for psalm_chapter in psalms:
        full_ref = 'Psalm+' + psalm_chapter
        full_text = get_esv_text(full_ref)
        verses = splitByVerse(full_text)
        texts.append({'psalm_section': psalm_chapter, 'psalm_text': full_text, 'psalm_verses': verses})
    return texts


# Main hook for where Lambda gets run. event is the input to the function
#
# Parameters:
#   event.date date to get scripture in ISO format, e.g. 2019-03-01
#   event.office the office to retrieve. must be 'morning' or 'evening'
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


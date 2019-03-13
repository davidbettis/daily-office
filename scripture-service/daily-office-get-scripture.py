#!/usr/bin/python

from botocore.vendored import requests
import json
import logging
import pprint
import re
import sys

import credentials

LOGGER = logging.getLogger()
LOGGER.setLevel(logging.INFO)

API_URL = 'https://api.esv.org/v3/passage/text/'

with open('morning-lectionary.json') as f:
    MORNING_LECTIONARY = json.load(f)

with open('evening-lectionary.json') as f:
    EVENING_LECTIONARY = json.load(f)

# Query the ESV API to retrieve the passage.
#
# passage, fuzzy string describing the passage, e.g. Ps+23, "Psalm 23"
def get_esv_text(passage):
    params = {
        'q': passage,
        'include-headings': False,
        'include-footnotes': False,
        'include-verse-numbers': False,
        'include-short-copyright': False,
        'include-passage-references': True
    }

    headers = {
        'Authorization': 'Token %s' % credentials.API_KEY
    }

    response = requests.get(API_URL, params=params, headers=headers)
    passages = response.json()['passages']
    return passages[0].strip() if passages else 'Error: Passage not found'

# Get texts for the lectionary entry on the provided month and day
#
# lectionary, a hash of month -> day -> [array of scripture references of size 2]
# month, the month to query
# day, the day to query
def get_texts(lectionary, month, day):
    texts = []
    for ref in lectionary[month][day]:
        texts.append(get_esv_text(ref))
    return texts

# Main hook for where Lambda gets run. event is the input to the function
#
# event.date date to get scripture in ISO format, e.g. 2019-03-01
def lambda_handler(event, context):
    # Get the date
    try:
        date = event['date']
        if not re.match(r'^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]', date):
            return {'statusCode': 400}
    except KeyError as e:
        return {'statusCode': 400}

    pieces = date.split("-")
    year = str(int(pieces[0]))
    month = str(int(pieces[1]))
    day = str(int(pieces[2]))
    
    # Get the verses
    morningTexts = get_texts(MORNING_LECTIONARY, month, day)
    eveningTexts = get_texts(EVENING_LECTIONARY, month, day)

    # TODO cache these in Elasticache

    return {
        'statusCode': 200,
        'body': {
            "morning": morningTexts,
            "evening": eveningTexts
        }
    }

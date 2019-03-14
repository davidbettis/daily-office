# Summary

This project is to support the Daily Office as prescribed by the ACNA
(http://anglicanchurch.net/).  The Daily Office is an historic Christian
devotional, walking the reader through a set of Bible readings and various
prayers.

I originally started this project because I wanted to be able to easily go
through the Daily Office on my phone. My hope is that individuals and churches
might use this as a starting point to provide web-enabled editions of their own
liturgies.

# Technical Overview

## Website

`website/`

The web site is written in React. It uses Gatsby, a static site generator.

## Scripture Service

`scripture-service/`

There is a service component to vend scripture text to the web site.  It's
written in Python and intended to be used on AWS Lambda. It queries the ESV API
(https://api.esv.org/) to fetch scripture content, which requires an API key.

# TODO List

## Website

* scripture-service integration, only return the morning/evening content, as appropriate
* Add option for traditional / contemporary Lord's prayer
* (Morning Prayer) "From Easter Day through the Day of Pentecost “Alleluia, alleluia” may be added to the preceding versicle and response."
* Opening sentences of scripture that vary according to the church calendar

## Service

* Add support for the handful of apocryphal texts
* Cache the ESV API's response on disk, so warm Lambda containers don't have to hit api.esv.org again
* Cache the ESV API's response in Elasticache to prevent the ESV service from being overloaded; key will be the day of the year
* Add support for different lectionaries
* Is there an equivalent of Amazon's Odin for storing API keys? credentials.py seems awful

# Credits

* Service order is from the ACNA: http://anglicanchurch.net/?/main/texts_for_common_prayer
    * Morning prayer is found here: https://s3.amazonaws.com/acna/2__Morning%20Prayer%2C%209.26.18.pdf
    * Evening prayer is found here: https://s3.amazonaws.com/acna/4__Evening%20Prayer%2C%209.26.18.pdf
    * Compline is found here: https://s3.amazonaws.com/acna/5__Compline.%209.26.18.pdf

# Development

To start a development server, run: gatsby develop

To configure credentials for the scripture service: cd scripture-service; mv credentials.EDITME credentials.py

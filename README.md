# Summary

The Daily Office is an historic Christian devotional, according to the Anglican tradition.

I originally started this project because I wanted to be able to easily go
through the ACNA's version (http://anglicanchurch.net/) of the Daily Office on
my phone. My hope is that individuals and churches might use this as a starting
point to provide web-enabled editions of Christian liturgies.

# Technical Overview

## Website

`website/`

The web site is written in React. It uses Gatsby, a static site generator.

Check out the Makefile for a variety of developer convenience targets.

* no arguments or 'release' - runs tests and builds the project; output to upload is in "public"
* build: generates the output for the static site; output to upload is in "public"
* test: runs automated unit tests
* update-snapshot: React caches a skeleton of the DOM structure to run unit tests against; update that template
* clean: removes old build artifacts
* server: runs a local development server on port 8000 (Gatsby default)
* deploy: push the contents of "public" to an S3 bucket defined in the environment variable DAILYOFFICE_S3; to use run "DAILYOFFICE_S3='s3://my.bucket/dir' make deploy"

## Scripture Service

`scripture-service/`

There is a service component to vend scripture text to the web site.  It's
written in Python and intended to be used on AWS Lambda. It queries the ESV API
(https://api.esv.org/) to fetch scripture content, which requires an API key.

# TODO List

## Website

* add an abbreviated version of the office that can be completed in under 30 minutes
* pull in daily psalms from scripture-service and format them in a poetic way
* add superscript verse numbers to the lessons
* Add option for traditional / contemporary Lord's prayer
* (Morning Prayer) "From Easter Day through the Day of Pentecost “Alleluia, alleluia” may be added to the preceding versicle and response."
* Opening sentences of scripture that vary according to the church calendar

## Service

* Cache the ESV API's response on disk, so warm Lambda containers don't have to hit api.esv.org again
* Cache the ESV API's response in Elasticache to prevent the ESV service from being overloaded; key will be the day of the year
* Add support for different lectionaries
* Is there a secure way to store API keys? credentials.py seems awful

# Credits

* Service order is from the ACNA: http://anglicanchurch.net/?/main/texts_for_common_prayer
    * Morning prayer is found here: https://s3.amazonaws.com/acna/2__Morning%20Prayer%2C%209.26.18.pdf
    * Evening prayer is found here: https://s3.amazonaws.com/acna/4__Evening%20Prayer%2C%209.26.18.pdf
    * Compline is found here: https://s3.amazonaws.com/acna/5__Compline.%209.26.18.pdf

# Development

To start a development server, run: gatsby develop

To configure credentials for the scripture service: cd scripture-service; mv credentials.EDITME credentials.py

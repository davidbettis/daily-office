# Summary

The Daily Office is an historic Christian devotional, according to the Anglican tradition.

I originally started this project because I wanted to be able to easily go
through the ACNA's version (http://anglicanchurch.net/) of the Daily Office on
my phone. My hope is that individuals and churches might use this as a starting
point to provide web-enabled editions of Christian liturgies.

# Technical Overview

The web site is written in React. It uses react-static to generate the scaffolding for a static site.

The website has a dependency on the Daily Office Scripture web service. Please see https://github.com/davidbettis/daily-office-scripture

Check out the Makefile for a variety of developer convenience targets.

* no arguments or 'release' - runs tests and builds the project; output to upload is in "public"
* build: generates the output for the static site; output to upload is in "public"
* test: runs automated unit tests
* update-snapshot: React caches a skeleton of the DOM structure to run unit tests against; update that template
* clean: removes old build artifacts
* server: runs a local development server on port 3000 (react-static default)
* deploy: push the contents of "public" to an S3 bucket defined in the environment variable DAILYOFFICE_S3; to use run "DAILYOFFICE_S3='s3://my.bucket/dir' make deploy"

# TODO List

* Opening sentences of scripture that vary according to the church calendar
* use the Cloverdale psalter for psalms
* (Morning Prayer) "From Easter Day through the Day of Pentecost “Alleluia, alleluia” may be added to the preceding versicle and response."
* remember the brevity chosen in a cookie and default to that length
* Add option for traditional / contemporary Lord's prayer

# Release Notes

* 2020-12-27: removed JSON file dependency from website
* 2020-12-26: launched scripture-service API V2 managed by AWS CDK, programmatic CloudFormation
* 2020-11-25: fixed a bug: added the morning office readings of Eccleasticus to the apocrypha
* 2019-08-04: added abbreviated versions of the office (short/medium/long)

# Credits

* Service order is from the ACNA: http://anglicanchurch.net/?/main/texts_for_common_prayer
    * Morning prayer is found here: https://s3.amazonaws.com/acna/2__Morning%20Prayer%2C%209.26.18.pdf
    * Evening prayer is found here: https://s3.amazonaws.com/acna/4__Evening%20Prayer%2C%209.26.18.pdf
    * Compline is found here: https://s3.amazonaws.com/acna/5__Compline.%209.26.18.pdf

# Development

## Initial setup

* Install Node: https://nodejs.org/en/download/
* Install react-static: yarn install global react-static
* Install dependencies: cd website; yarn install

## Ongoing development

To start a development server, run: make server

To configure credentials for the scripture service: cd scripture-service; mv credentials.EDITME credentials.py

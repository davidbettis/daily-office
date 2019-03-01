# Summary

This project is to support the Daily Office as prescribed by the ACNA
(http://anglicanchurch.net/).  The Daily Office is an historic devotional,
walking the reader through a set of readings from the Bible and various
prayers.

I originally started this project because I wanted to be able to easily go
through the Daily Office liturgies on my phone. My hope is that individuals and
churches might use this as a starting point to provide web-enabled editions of
their own liturgies.

# Technical Overview

This project is written in React. It uses Gatsby, a static site generator.

# TODO List

## For all sections
* Move office-specific CSS outside of global CSS
* Add option for traditional / contemporary Lord's prayer; how to add preferences? How does that work in React?
* Inline the scripts from the psalm and the lessons using the API from esv.org (https://api.esv.org/). This would be a fun opportunity to experiment with AWS Lambda - or running a microservice on EC2!
* Add afternoon prayer?

## Morning Prayer 
* The Lessons
    * Is it possible to bring in Bible passages? Is there a public domain edition of the Bible out there?
* "From Easter Day through the Day of Pentecost “Alleluia, alleluia” may be added to the preceding versicle and response."
* Opening sentences of scripture that vary according to the calendar

## Evening Prayer
## Compline
* Add an option to pick psalms on each day
* Add unit testing for AlleluiaComponent. All that date stuff... gosh

# Credits
* Service order is from the ACNA: http://anglicanchurch.net/?/main/texts_for_common_prayer
    * Morning prayer is found here: https://s3.amazonaws.com/acna/2__Morning%20Prayer%2C%209.26.18.pdf
    * Evening prayer is found here: https://s3.amazonaws.com/acna/4__Evening%20Prayer%2C%209.26.18.pdf
    * Compline is found here: https://s3.amazonaws.com/acna/5__Compline.%209.26.18.pdf
* Favicon is a scaled down edition of https://en.wikipedia.org/wiki/File:Christian_cross.svg, which is in the public domain

# Development
To start a development server, run: gatsby develop

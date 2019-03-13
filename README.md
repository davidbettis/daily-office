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

This project is written in React. It uses Gatsby, a static site generator.

# TODO List

* Add option for traditional / contemporary Lord's prayer
* Inline the scripts from the psalm and the lessons using the API from esv.org (https://api.esv.org/). This would be a fun opportunity to experiment with AWS Lambda - or running a microservice on EC2!
* (Morning Prayer) "From Easter Day through the Day of Pentecost “Alleluia, alleluia” may be added to the preceding versicle and response."
* Opening sentences of scripture that vary according to the church calendar

# Credits
* Service order is from the ACNA: http://anglicanchurch.net/?/main/texts_for_common_prayer
    * Morning prayer is found here: https://s3.amazonaws.com/acna/2__Morning%20Prayer%2C%209.26.18.pdf
    * Evening prayer is found here: https://s3.amazonaws.com/acna/4__Evening%20Prayer%2C%209.26.18.pdf
    * Compline is found here: https://s3.amazonaws.com/acna/5__Compline.%209.26.18.pdf

# Development
To start a development server, run: gatsby develop

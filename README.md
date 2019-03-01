# Summary

This is a static website to vend the Daily Office as prescribed by the ACNA
(http://anglicanchurch.net/).  The Daily Office is an historic devotional,
which walks the reader through a set of readings from the Bible and various
prayers.

# TODO

## For all sections
* Move office-specific CSS outside of global CSS
* Add option for traditional / contemporary Lord's prayer

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

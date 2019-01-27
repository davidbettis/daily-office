# Summary

This is a static website to vend the Daily Office as prescribed by the ACNA
(http://anglicanchurch.net/).  The Daily Office is an historic devotional,
which walks the reader through a set of readings from the Bible and various
prayers.

# TODO

## Morning Prayer 

* Display collects on a per-day basis 
* Conditional Pascha Nostrum during 1st week of Easter
* What psalms for "The Psalm or Psalms Appointed" ?
* The Lessons
** Get the lectionary in JSON form 
** Is it possible to bring in Bible passages? Is there a public domain edition of the Bible out there?
* "During Lent the Benedictus es, Domine usually replaces the Te Deum and may be used at other times."
* "From Easter Day through the Day of Pentecost “Alleluia, alleluia” may be added to the preceding versicle and response."
* Opening sentences of scripture vary throughout the church year

Morning prayer is found here: https://s3.amazonaws.com/acna/2__Morning%20Prayer%2C%209.26.18.pdf

## Evening Prayer
* Not scoped yet.

Evening prayer is found here: https://s3.amazonaws.com/acna/4__Evening%20Prayer%2C%209.26.18.pdf

## Compline
* Move office-specific CSS outside of global CSS
* Add option for traditional / contemporary Lord's prayer
* Add an option to pick psalsm on each day
* Add preferences for various reading plans / configurations
* Add unit testing for AlleluiaComponent. All that date stuff... gosh

Compline is found here: https://s3.amazonaws.com/acna/5__Compline.%209.26.18.pdf

# Credits

* Service order is from the ACNA: http://anglicanchurch.net/?/main/texts_for_common_prayer
* Favicon is a scaled down edition of https://en.wikipedia.org/wiki/File:Christian_cross.svg, which is in the public domain

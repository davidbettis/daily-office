import React from 'react';

// Class to interact with esv.org
export class ESV {

    static isApocryphal(text) {
        return text.startsWith("Baruch")
            || text.startsWith("Wisdom")
            || text.startsWith("Judith")
            || text.startsWith("Susanna")
            || text.startsWith("1 Macc")
            || text.startsWith("2 Macc");
    }

    static link(text, linkText) {
        if (!ESV.isApocryphal(text)) {
            var shortener = /†.*$/;
            var shortenedText = text.replace(shortener, "").trim();
            var link = "http://esv.to/" + shortenedText;
            return (<a href={ link } target="_new">{ linkText }</a>);
        }
        return "";
    }
}

export default ESV

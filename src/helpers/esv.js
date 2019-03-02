import React from 'react';

// Class to interact with esv.org
export class ESV {

    // Is the provided book part of the apocrypha? ESV doesn't provide
    // translations for these books.
    static isApocryphal(book) {
        return book.startsWith("Baruch")
            || book.startsWith("Wisdom")
            || book.startsWith("Judith")
            || book.startsWith("Susanna")
            || book.startsWith("1 Macc")
            || book.startsWith("2 Macc");
    }

    // Makes a link using esv.to to the provided scripture.
    //  text - a reference to the scripture text (e.g. Psalm 3)
    static makeURL(text) {
        if (!ESV.isApocryphal(text)) {
            var shortener = /†.*$/;
            var shortenedText = text.replace(shortener, "").trim();
            var link = "http://esv.to/" + shortenedText;
            return link;
        }
        return "";
    }

    // Generate a link that opens a new tab to the provided scripture reference.
    //  text - a reference to the scripture text (e.g. Psalm 3)
    //  linkText - how should the link be displayed? (e.g. "link to ESV")
    static link(text, linkText) {
        var url = ESV.makeURL(text);
        if (url !== "") {
            return (<a href={ url } target="_blank" rel="noopener noreferrer">{ linkText }</a>);
        }
        return "";
    }
}

export default ESV

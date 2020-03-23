import React from 'react';
import ESV from '../helpers/esv'

// Makes a link to an ESV text
//  scriptureText - the reference to link to
//  linkText - the text of the link that the user clicks on
function ESVLink(props) {
    var scriptureText = String(props.scriptureText)
    var linkText = String(props.linkText)

    var url = "http://esv.to/" + scriptureText.replace(/†.*$/, "").trim();
    if (url !== "") {
        return (<span><a href={url} target="_blank">{ linkText }</a></span>);
    }
    return "";
}

export default ESVLink

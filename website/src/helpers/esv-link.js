import React from 'react';
import ESV from './esv'

// Makes a link to an ESV text
//  text - the reference to link to
//  linkText - the text of the link that the user clicks on
function ESVLink(props) {
    var text = props.text
    var linkText = props.linkText

    var url = ESV.makeURL(text);
    if (url !== "") {
        return (<span><a href={ url } target="_blank" rel="noopener noreferrer">{ linkText }</a><span style={{display: 'none'}}>text={text}, linkText={linkText}</span></span>);
    }
    return "";
}

export default ESVLink

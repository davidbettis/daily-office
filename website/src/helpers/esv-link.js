import React from 'react';
import ESV from './esv'

// Makes a link to an ESV text
//  text - the reference to link to
//  linkText - the text of the link that the user clicks on
function ESVLink(props) {
    var text = props.text
    var linkText = props.linkText

    var url = "http://esv.to/" + text.replace(/†.*$/, "").trim();
    if (url !== "") {
        return React.createElement('span', null, 
            React.createElement('a', {href: url, target: "_blank"}, linkText),
            React.createElement('span', {style: {display: 'none'}}, `text=${text}, linkText=${linkText}, url=${url}`)
        );
    }
    return "";
}

export default ESVLink

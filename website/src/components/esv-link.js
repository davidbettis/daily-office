import React from 'react'

// Makes a link to an ESV text
//  scriptureText - the reference to link to
//  linkText - the text of the link that the user clicks on
function ESVLink (props) {
  var scriptureText = String(props.scriptureText)
  var linkText = String(props.linkText)

  var url = 'http://esv.to/' + scriptureText.replace(/†.*$/, '').trim()
  if (url !== '') {
    return (<span><a href={url} target="_blank" rel="noopener noreferrer">{ linkText }</a></span>)
  }
  return ''
}

export default ESVLink

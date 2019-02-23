import React from 'react';

// Intro prints out a verse of scripture to open the office
//
// TODO:
//
// 1. Pick a random text
// 2. Include the season-specific introduction openers
export class Intro extends React.Component {

    // Constructs a new Intro
    //    props.texts: 'morning' or 'evening'
    constructor(props) {
        super(props);

        if (this.props.texts === 'morning') {
            this.texts = [
                {'text': 'Grace to you and peace from God our Father and the Lord Jesus Christ.',
                 'scripture': 'Philippians 1:2'},
                {'text': 'I was glad when they said to me, “Let us go to the house of the LORD!”',
                 'scripture': 'Psalm 122:1'},
                {'text': 'Let the words of my mouth and the meditation of my heart be acceptable in your sight, O LORD, my rock and my redeemer.',
                 'scripture': 'Psalm 19:14'}
            ];
        } else if (this.props.texts === 'evening') {
            this.texts = [
                {'text': 'Jesus spoke to them, saying, “I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life.”',
                 'scripture': 'John 8:12'},
                {'text': 'O Lord, I love the habitation of your house and the place where your glory dwells.',
                 'scripture': 'Psalm 26:8'},
                {'text': 'Let my prayer be set forth in your sight as incense, the lifting up of my hands as the evening sacrifice.',
                 'scripture': 'Psalm 141:2'}
            ];
        } else {
            throw "Intro error: unknown texts reference; please specify one of ['morning','evening']";
        }
    }

    render() {
        var day = new Date().getDate(); // day of the month
        var selected = this.texts[day % this.texts.length];
        
        return (
            <div>
                <span>
                    { selected['text'] }<br/>
                    <i>{ selected['scripture'] }</i>
                </span>
            </div>);
    }
}

export default Intro

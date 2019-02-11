import React from 'react';
import * as DateEaster from 'date-easter'

// IntroComponent prints out a verse of scripture to open the office
//
// TODO:
//
// 1. Pick a random text
// 2. Include the season-specific introduction openers
// 3. Support for evening
export class IntroComponent extends React.Component {

    // Constructs a new IntroComponent
    //    props.morning: standard texts for morning
    constructor(props) {
        super(props);

        this.state = {
            morning: props.morning
        }

        this.morningTexts = [
            {'text': 'Grace to you and peace from God our Father and the Lord Jesus Christ.',
             'scripture': 'Philippians 1:2'},
            {'text': 'I was glad when they said to me, “Let us go to the house of the LORD!”',
             'scripture': 'Psalm 122:1'},
            {'text': 'Let the words of my mouth and the meditation of my heart be acceptable in your sight, O LORD, my rock and my redeemer.',
             'scripture': 'Psalm 19:14'}
        ];
    }

    render() {
        if (this.state.morning) {
            return (
                <div>
                    <span>
                        { this.morningTexts[0]['text'] }<br/>
                        <i>{ this.morningTexts[0]['scripture'] }</i>
                    </span>
                </div>);
        } else {
            return (<div>Unknown introduction!</div>);
        }
    }
}

export default IntroComponent

import React from 'react';

// MorningCollectsComponent prints out a closing verse of scripture
export class MorningCollectsComponent extends React.Component {

    // Constructs a new MorningCollectsComponent
    constructor(props) {
        super(props);

        this.texts = [
            {'text': 'The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit, be with us all evermore.',
             'scripture': '2 Corinthians 13:14'},
            {'text': 'May the God of hope fill us with all joy and peace in believing through the power of the Holy Spirit.',
             'scripture': 'Romans 15:13'},
            {'text': 'Glory to God whose power, working in us, can do infinitely more than we can ask or imagine: Glory to him from generation to generation in the Church, and in Christ Jesus for ever and ever.',
             'scripture': 'Ephesians 3:20-21'}
        ]
    }

    render() {
        var day = new Date().getDay();
        var selected = this.texts[day % this.texts.length];
        return (
            <div>
                <span>
                    { selected['text'] } <i>Amen.</i><br/>
                    <i>{ selected['scripture'] }</i>
                </span>
            </div>);
    }
}

export default MorningCollectsComponent

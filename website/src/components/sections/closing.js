import React from 'react';

// Closing prints out a closing verse of scripture
export class Closing extends React.Component {

    // Constructs a new Closing
    constructor(props) {
        super(props);

        this.state = {
            texts: [
                {'text': 'The grace of our Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit, be with us all evermore.',
                 'scripture': '2 Corinthians 13:14'},
                {'text': 'May the God of hope fill us with all joy and peace in believing through the power of the Holy Spirit.',
                 'scripture': 'Romans 15:13'},
                {'text': 'Glory to God whose power, working in us, can do infinitely more than we can ask or imagine: Glory to him from generation to generation in the Church, and in Christ Jesus for ever and ever.',
                 'scripture': 'Ephesians 3:20-21'}
            ]
        };
    }

    render() {
        var day = new Date().getDate(); // day of the month
        var selected = this.state.texts[day % this.state.texts.length];
        return (
            <div>
                <p class="section">Closing</p>
                <p>
                  <span className="officiant">Let us bless the Lord.</span><br/>
                  <span className="people">Thanks be to God.</span><br/>
                </p>
                <p className="instructions">Officiant and People</p>
                <p>
                    { selected['text'] } <i>Amen.</i><br/>
                    <i>{ selected['scripture'] }</i>
                </p>
            </div>);
    }
}

export default Closing;

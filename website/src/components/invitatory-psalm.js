import React from 'react';
import Seasons from '../helpers/seasons'
import * as dayOfYear from 'day-of-year'

// InvitatoryPsalm is for the psalm read after the morning invitatory
//
// TODO:
// - Add Jubliate?
export class InvitatoryPsalm extends React.Component {

    // Constructs a new InvitatoryPsalm
    constructor(props) {
        super(props);

        this.state = {
            antiphons: [
                {'call': 'The earth is the Lord\'s for he made it:',
                 'response': 'O come let us adore him.'},
                {'call': 'Worship the Lord in the beauty of holiness:',
                 'response': 'O come let us adore him.'},
                {'call': 'The mercy of the Lord is everlasting:',
                 'response': 'O come let us adore him.'}
            ]
        };
    }

    antiphon(i) {
        var antiphon = this.state.antiphons[i % this.state.antiphons.length];
        return (
<div>
  <p>
    <span class="officiant">{ antiphon['call'] }</span><br/>
    <span class="people">{ antiphon['response'] }</span><br/>
  </p>
</div>
        );
    }

    forLent() {
        if (Seasons.inLent(new Date().getTime())) {
            return (
                <p>
                Today, if you will hear his voice, harden not your hearts *<br/>
                as in the provocation, and as in the day of temptation in the wilderness.<br/>
                When your fathers tested me, *<br/>
                proved me, and saw my works.<br/>
                Forty years long was I grieved with this generation, and said, *<br/>
                “It is a people that do err in their hearts, for they have not known my ways.”<br/>
                Of whom I swore in my wrath *<br/>
                that they should not enter into my rest.<br/>
                </p>
            );
        }
        return (<p></p>);
    }

    paschaNostrum() {
        return (
            <div>
            <b>Pascha Nostrum</b> <i>Christ our Passover</i><br/>
            <i>1 Corinthians 5:7-8; Romans 6:9-11; 1 Corinthians 15:20-22</i><br/>
            <p>
            Alleluia.<br/>
            Christ our Passover has been sacrificed for us; *<br/>
            therefore let us keep the feast,<br/>
            Not with the old leaven, the leaven of malice and evil, *<br/>
            but with the unleavened bread of sincerity and truth. Alleluia.<br/>
            Christ being raised from the dead will never die again; *<br/>
            death no longer has dominion over him.<br/>
            The death that he died, he died to sin, once for all; *<br/>
            but the life he lives, he lives to God. So also consider yourselves dead to sin, *<br/>
            and alive to God in Jesus Christ our Lord. Alleluia.<br/>
            Christ has been raised from the dead, *<br/>
            the first fruits of those who have fallen asleep.<br/>
            For since by a man came death, *<br/>
            by a man has come also the resurrection of the dead.<br/>
            For as in Adam all die, *<br/>
            so also in Christ shall all be made alive. Alleluia.
            </p>
            </div>
        );
    }

    render() {
        if (Seasons.inEastertide()) {
            return this.paschaNostrum();
        } else {
            var doy = dayOfYear();
            return (
                <div>
                { this.antiphon(doy) }

                <b>Venite</b> <i>O Come</i><br/>
                <i>Psalm 95:1-7; 8-11</i><br/>
                <p class="venite">
                O come, let us sing unto the LORD; *<br/>
                let us heartily rejoice in the strength of our salvation.<br/>
                Let us come before his presence with thanksgiving *<br/>
                and show ourselves glad in him with psalms.<br/>
                For the LORD is a great God *<br/>
                and a great King above all gods.<br/>
                In his hand are all the depths of the earth *<br/>
                and the heights of the hills are his also.<br/>
                The sea is his, and he made it, *<br/>
                and his hands prepared the dry land.<br/>
                O come, let us worship and fall down, *<br/>
                and kneel before the LORD our Maker.<br/>
                For he is our God, *<br/>
                and we are the people of his pasture, and the sheep of his hand.
                </p>
                { this.forLent() }

                { this.antiphon(doy) }
                </div>
            );
        }
    }
}

export default InvitatoryPsalm;

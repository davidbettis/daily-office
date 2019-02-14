import React from 'react';

// InvitatoryPsalm is for the psalm read after the morning invitatory
//
// TODO:
// - Conditionally add Lent text
// - Choose antiphons randomly
// - Add Jubliate?
// - support Pascha Nostrum during the first week of Easter - or all of Eastertide (with no antiphons)
export class InvitatoryPsalmComponent extends React.Component {

    // Constructs a new InvitatoryPsalmComponent
    //    props.morning: standard texts for morning
    constructor(props) {
        super(props);

        this.antiphons = [
            {'call': 'The earth is the Lord\'s for he made it:',
             'response': 'O come let us adore him.'},
            {'call': 'Worship the Lord in the beauty of holiness:',
             'response': 'O come let us adore him.'},
            {'call': 'The mercy of the Lord is everlasting:',
             'response': 'O come let us adore him.'}
        ];
    }

    antiphon() {
        return (
<p>
<div class="officiant">{ this.antiphons[0]['call'] }</div>
<div class="people">{ this.antiphons[0]['response'] }</div>
</p>
        );
    }

    render() {
        return (
<div>
{ this.antiphon() }

<b>Venite</b> <i>O Come</i><br/>
<i>Psalm 95:1-7; 8-11</i><br/>
<p>
O come, let us sing unto the LORD; *<br/>
let us heartily rejoice in the strength of our salvation.<br/>
Let us come before his presence with thanksgiving<br/>
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
<p class="instructions">In Lent, and on other penitential occasions, the following verses are added.</p>
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

{ this.antiphon() }
</div>
);
    }
}

export default InvitatoryPsalmComponent

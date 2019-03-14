import React from 'react';
import * as dayOfYear from 'day-of-year'
import ESV from '../helpers/esv'

// Psalter prints out a psalm to read according to the current day and the series provided
export class Psalter extends React.Component {

    // Construct a new Psalter
    //
    // props.series - 'morning' or 'evening' (60 day rotation split between morning and evening)
    constructor(props) {
        super(props);

        // 60 day rotation
        var morningPsalms = [
            '1, 2', '5, 6', '9', '8, 11', '12, 13, 14', '18:1-20v', '19', '22', '25', '26, 28', '29, 30', '34', '32, 36', '37:1-18v', '40', '42, 43', '45', '47, 48', '50', '52, 53, 54', '56, 57', '59', '61, 62', '68:1-18', '69:1-18v', '66', '71', '74', '75, 76', '78:1-18v', '78:41-73v', '24, 81', '83', '86, 87', '89:1-18v', '90', '92, 93', '95, 96', '99, 100, 101', '103', '105:1-22v', '106:1-18v', '107:1-22', '108, 110', '111, 112', '115', '119:1-24', '119:49-72', '119:89-104', '119:129-152', '118', '122, 123', '127, 128', '132, 133', '136', '139', '140', '144', '146', '148'
        ];
        var eveningPsalms = [
            '3, 4', '7', '10', '15, 16', '17', '18:21-50v', '20, 21', '23, 24', '27', '31', '33', '35', '38', '37:19-42v', '39, 41', '44', '46', '49', '51', '55', '58, 60', '63, 64', '65, 67', '68:19-36', '69:19-38v', '70, 72', '73', '77', '79, 82', '78:19-40v', '80', '84', '85', '88', '89:19-52v', '91', '94', '97, 98', '102', '104', '105:23-45v', '106:19-48v', '107:23-43', '109', '113, 114', '116, 117', '119:25-48', '119:73-88', '119:105-128', '119:153-176', '120, 121', '124, 125, 126', '129, 130, 131', '134, 135', '137, 138', '141, 142', '143', '145', '147', '149, 150'
        ];

        var doy = dayOfYear();

        var psalm;
        if (props.series === 'morning') {
            psalm = morningPsalms[doy % morningPsalms.length];
        } else if (props.series === 'evening') {
            psalm = eveningPsalms[doy % eveningPsalms.length];
        } else {
            throw new Error("Psalter error: series must specify one of ['morning','evening']");
        }

        this.state = {
            psalm: psalm
        };
    }

    render() {
        return (
        <div>
        <p>Psalm { this.state.psalm } { ESV.link("Psalm+" + this.state.psalm, "(ESV)") }</p>

        <p>
        <div class="officiant">Glory be to the Father, and to the Son, and to the Holy Spirit; *</div>
        <div class="people">As it was in the beginning, is now, and ever shall be, world without end. Amen.</div>
        </p>
        </div>
        );
    }
}

export default Psalter

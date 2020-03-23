import React from 'react';
import * as dayOfYear from 'day-of-year'
import ESVLink from '../esv-link'

// 60 day rotation
const MORNING_PSALMS = [
    '1, 2', '5, 6', '9', '8, 11', '12, 13, 14', '18:1-20v', '19', '22', '25', '26, 28', '29, 30', '34', '32, 36', '37:1-18v', '40', '42, 43', '45', '47, 48', '50', '52, 53, 54', '56, 57', '59', '61, 62', '68:1-18', '69:1-18', '66', '71', '74', '75, 76', '78:1-18', '78:41-72', '24, 81', '83', '86, 87', '89:1-18', '90', '92, 93', '95, 96', '99, 100, 101', '103', '105:1-22', '106:1-18', '107:1-22', '108, 110', '111, 112', '115', '119:1-24', '119:49-72', '119:89-104', '119:129-152', '118', '122, 123', '127, 128', '132, 133', '136', '139', '140', '144', '146', '148'
];

const EVENING_PSALMS = [
    '3, 4', '7', '10', '15, 16', '17', '18:21-50', '20, 21', '23, 24', '27', '31', '33', '35', '38', '37:19-42', '39, 41', '44', '46', '49', '51', '55', '58, 60', '63, 64', '65, 67', '68:19-36', '69:19-38', '70, 72', '73', '77', '79, 82', '78:19-40', '80', '84', '85', '88', '89:19-52', '91', '94', '97, 98', '102', '104', '105:23-45', '106:19-48', '107:23-43', '109', '113, 114', '116, 117', '119:25-48', '119:73-88', '119:105-128', '119:153-176', '120, 121', '124, 125, 126', '129, 130, 131', '134, 135', '137, 138', '141, 142', '143', '145', '147', '149, 150'
];

// Psalter prints out a psalm to read according to the current day and the series provided
export class Psalter extends React.PureComponent {
    render() {
        var doy = dayOfYear(this.props.date)

        var psalm;
        if (this.props.series === 'morning') {
            psalm = MORNING_PSALMS[doy % MORNING_PSALMS.length];
        } else if (this.props.series === 'evening') {
            psalm = EVENING_PSALMS[doy % EVENING_PSALMS.length];
        } else {
            throw new Error("Psalter error: series must specify one of ['morning','evening']");
        }

        var psalmRef = "Psalm+" + psalm;
        var psalmLinkText = "(ESV)";

        return (
            <div>
              <p className="section">Psalms Appointed</p>
              <p>Psalm { psalm } <ESVLink scriptureText={psalmRef} linkText={psalmLinkText} /></p>
              <p>
                <span className="officiant">☩ Glory be to the Father, and to the Son, and to the Holy Spirit; *</span><br/>
                <span className="people">As it was in the beginning, is now, and ever shall be, world without end. Amen.</span><br/>
              </p>
            </div>
        );
    }
}

export default Psalter;

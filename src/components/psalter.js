import React from 'react';

export class PsalterComponent extends React.Component {
    constructor() {
        super();
        var psalms = [];
        psalms[0] = '1,2';
        psalms[1] = '5,6';
        psalms[2] = '9';
        psalms[3] = '8, 11';
        psalms[4] = '12, 13, 14';
        psalms[5] = '96, 97';
        psalms[6] = '18:1-20v';
        psalms[7] = '19';
        psalms[8] = '22';
        psalms[9] = '25';
        psalms[10] = '26, 28';
        psalms[11] = '29, 30';
        psalms[12] = '34';
        psalms[13] = '32, 36';
        psalms[14] = '37:1-18v';
        psalms[15] = '40';
        psalms[16] = '42, 43';
        psalms[17] = '45';
        psalms[18] = '47, 48';
        psalms[19] = '50';
        psalms[20] = '52, 53, 54';
        psalms[21] = '56, 57';
        psalms[22] = '59';
        psalms[23] = '61, 62';
        psalms[24] = '68:1-18';
        psalms[25] = '69:1-18v';
        psalms[26] = '66';
        psalms[27] = '71';
        psalms[28] = '74';
        psalms[29] = '75, 76';
        psalms[30] = '78:1-18v';
        psalms[31] = '78:41-73v';
        psalms[32] = '24, 81';
        psalms[33] = '83';
        psalms[34] = '86, 87';
        psalms[35] = '89:1-18v';
        psalms[36] = '90';
        psalms[37] = '92, 93';
        psalms[38] = '95, 96';
        psalms[39] = '99, 100, 101';
        psalms[40] = '103';
        psalms[41] = '105:1-22v';
        psalms[42] = '106:1-18v';
        psalms[43] = '107:1-22';
        psalms[44] = '108, 110';
        psalms[45] = '111, 112';
        psalms[46] = '115';
        psalms[47] = '119:1-24';
        psalms[48] = '119:49-72';
        psalms[49] = '119:89-104';
        psalms[50] = '119:129-152';
        psalms[51] = '118';
        psalms[52] = '122, 123';
        psalms[53] = '127, 128';
        psalms[54] = '132, 133';
        psalms[55] = '136';
        psalms[56] = '139';
        psalms[57] = '140';
        psalms[58] = '144';
        psalms[59] = '146';
        psalms[60] = '148';

        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        var oneDay = 1000 * 60 * 60 * 24;
        var dayOfYear = Math.floor(diff / oneDay);

        this.psalm = psalms[dayOfYear % psalms.length];
    }

    render() {
        return (
        <div>
        <p>Psalm { this.psalm }</p>

        <p>
        <div class="officiant">Glory be to the Father, and to the Son, and to the Holy Spirit; *</div>
        <div class="people">As it was in the beginning, is now, and ever shall be, world without end. Amen.</div>
        </p>
        </div>
        );
    }
}

export default PsalterComponent

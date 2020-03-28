import React from 'react';

import Seasons from '../../helpers/seasons'
import ESV from '../../helpers/esv'
import ScriptureService from '../../helpers/scripture-service'

import ESVLink from '../esv-link'

import MorningLectionary from '../../data/morning-lectionary.json'
import EveningLectionary from '../../data/evening-lectionary.json'

// Lesson is a set of scripture chunks to read as part of the office.
//
// Props:
//      props.date: Date object for the lesson (keyed to particular day)
//      props.lectionary: lectionary to use for the two readings (see LECTIONARY options below)
//      props.lessons: array of scripture text for the first and second readings
//      props.postFirstReading: after the first reading (see POST_READING options below)
//      props.postSecondReading: after the second reading (see POST_READING options below)
//
// LECTIONARY: morning, evening
// POST_READING: te-deum-laudamus, benedictus, benedictus-es-domine, magnificat, nunc-dimittis, none
class Lesson extends React.Component {
    constructor(props) {
        super(props);
        if (!(props.date instanceof Date)) {
            throw new Error("Lesson error: date must be a Date object");
        }
    }

    // Get the readings in lectionaryMap at the provided date.
    getReadingReferences(lectionaryMap, date) {
        var month = date.getMonth() + 1; // month, 1-12
        var day = date.getDate(); // day, 1-31

        return lectionaryMap[month][day];
    }

    getLectionaryMap() {
        var lectionaryMap;
        if (this.props.lectionary === 'morning') {
            lectionaryMap = MorningLectionary;
        } else if (this.props.lectionary === 'evening') {
            lectionaryMap = EveningLectionary;
        } else {
            throw new Error("Lesson error: lectionary must be one of ['morning','evening']");
        }
        return lectionaryMap;
    }

    render() {
        var lectionaryMap = this.getLectionaryMap();
        var references = this.getReadingReferences(lectionaryMap, this.props.date);
        var firstScriptureRef = references[0];
        var secondScriptureRef = references[1];

        return (
            <div>
                <p className="section">The Lessons</p>
                <Reading text={firstScriptureRef} fullText={this.props.lessons[0]} />
                <PostReading reading={this.props.postFirstReading} />
                <Reading text={secondScriptureRef} fullText={this.props.lessons[1]} />
                <PostReading reading={this.props.postSecondReading} />
            </div>
        );
    }
}

function Reading(props) {
    var text = props.text;
    var fullText = props.fullText;

    var after = "";
    if (!ESV.isApocryphal(text)) {
        after = (
            <p>
              <span className="officiant">The Word of the Lord.</span><br/>
              <span className="people">Thanks be to God.</span>
            </p>
        );
    }

    return (
        <div>
            <p>A reading from { text }. <ESVLink scriptureText={text} linkText="(ESV)" /></p>
            <p>{ fullText }</p>
            { after }
        </div>
    );
}

function PostReading(props) {
    var reading = props.reading;
    if (reading === 'te-deum-laudamus') {
        if (Seasons.inLent(new Date().getTime())) {
            return (<BenedictusEsDomine />);
        } else {
            return (<TeDeumLaudamus />);
        }
    } else if (reading === 'benedictus') {
        return (<Benedictus />);
    } else if (reading === 'benedictus-es-domine') {
        return (<BenedictusEsDomine />);
    } else if (reading === 'magnificat') {
        return (<Magnificat />);
    } else if (reading === 'nunc-dimittis') {
        return (<NuncDimittis />);
    } else if (reading === 'none') {
        return (<div/>);
    } else {
        throw new Error("Lesson error: reading " + reading + " not found");
    }
}

function TeDeumLaudamus(props) {
    return (
        <div>
        <b>Te Deum Laudamus</b> <i>We Praise You, O God</i><br/>
        <i>Psalm 95:1-7; 8-11</i><br/>
        <p>
        We praise you, O God, we acclaim you as Lord; *<br/>
         all creation worships you, the Father everlasting.<br/>
        To you all angels, all the powers of heaven, *<br/>
        the cherubim and seraphim, sing in endless praise:<br/>
        Holy, Holy, Holy, Lord God of power and might, *<br/>
         heaven and earth are full of your glory.<br/>
        The glorious company of apostles praise you.*<br/>
         The noble fellowship of prophets praise you.<br/>
        The white-robed army of martyrs praise you. *<br/>
         Throughout the world the holy Church acclaims you:<br/>
        Father, of majesty unbounded,<br/>
        your true and only Son, worthy of all praise, *<br/>
        and the Holy Spirit, advocate and guide.<br/>
        You, Christ, are the king of glory, *<br/>
        the eternal Son of the Father.<br/>
        When you took our flesh to set us free *<br/>
        you humbly chose the Virgin’s womb.<br/>
        You overcame the sting of death *<br/>
        and opened the kingdom of heaven to all believers.<br/>
        You are seated at God’s right hand in glory. *<br/>
        We believe that you will come to be our judge.<br/>
        Come then, Lord, and help your people, *<br/>
        bought with the price of your own blood,<br/>
        and bring us with your saints *<br/>
        to glory everlasting.
        </p>
        </div>
    );
}

function Benedictus(props) {
    return (
        <div>
        <p>
        <b>Benedictus</b> <i>The Song of Zechariah</i><br/>
        <i> Luke 1:68-79</i><br/>
        Blessed be the Lord, the God of Israel; *<br/>
        he has come to his people and set them free.<br/>
        He has raised up for us a mighty savior, *<br/>
        born of the house of his servant David.<br/>
        Through his holy prophets he promised of old,<br/>
        that he would save us from our enemies, *<br/>
        from the hands of all who hate us.<br/>
        He promised to show mercy to our fathers *<br/>
        and to remember his holy covenant.<br/>
        This was the oath he swore to our father Abraham, *<br/>
        to set us free from the hands of our enemies,<br/>
        Free to worship him without fear, *<br/>
        holy and righteous in his sight<br/>
        all the days of our life.<br/>
        You, my child, shall be called the prophet of the Most High, *<br/>
        for you will go before the Lord to prepare his way,<br/>
         To give his people knowledge of salvation *<br/>
        by the forgiveness of their sins.<br/>
        In the tender compassion of our God *<br/>
        the dawn from on high shall break upon us,<br/>
        To shine on those who dwell in darkness and in the shadow of death, *<br/>
        and to guide our feet into the way of peace.<br/>
        Glory be to the Father, and to the Son, and to the Holy Spirit; *<br/>
        as it was in the beginning, is now, and ever shall be, world without end. Amen.
        </p>
        </div>
    );
}

function BenedictusEsDomine(props) {
    return (
        <div>
        <p>
        <b>Benedictus es, Domine</b> <i>A Song of Praise</i><br/>
        <i>Song of the Three Young Men, 29-34</i><br/>
        Glory to you, Lord God of our fathers; *<br/>
        you are worthy of praise; glory to you.<br/>
        Glory to you for the radiance of your holy Name; *<br/>
        we will praise you and highly exalt you for ever.<br/>
        Glory to you in the splendor of your temple; *<br/>
        on the throne of your majesty, glory to you.<br/>
        Glory to you, seated between the Cherubim; *<br/>
        we will praise you and highly exalt you for ever.<br/>
        Glory to you, beholding the depths; *<br/>
        in the high vault of heaven, glory to you.<br/>
        Glory to you, Father, Son, and Holy Spirit; *<br/>
        we will praise you and highly exalt you for ever.<br/>
        </p>
        </div>
    );
}

function Magnificat(props) {
    return (
        <div>
        <p>
        <b>Magnificat</b> <i>The Song of Mary</i><br/>
        <i>Luke 1:46-55</i><br/>
        My soul magnifies the Lord, *<br/>
        and my spirit rejoices in God my Savior.<br/>
        For he has regarded *<br/>
        the lowliness of his handmaiden.<br/>
        For behold, from now on, *<br/>
        all generations will call me blessed.<br/>
        For he that is mighty has magnified me, *<br/>
        and holy is his Name.<br/>
        And his mercy is on those who fear him, *<br/>
        throughout all generations.<br/>
        He has shown the strength of his arm; *<br/>
        he has scattered the proud in the imagination of their hearts.<br/>
        He has brought down the mighty from their thrones, *<br/>
        and has exalted the humble and meek.<br/>
        He has filled the hungry with good things, *<br/>
        and the rich he has sent empty away.<br/>
        He, remembering his mercy, has helped his servant Israel, *<br/>
        as he promised to our fathers, Abraham and his seed for ever.<br/>
        Glory be to the Father, and to the Son, and to the Holy Spirit; *<br/>
        as it was in the beginning, is now, and ever shall be, world without end. Amen.<br/>
        </p>
        </div>
    );
}

function NuncDimittis(props) {
    return (
        <div>
        <p>
        <b>Nunc dimittis</b> <i>The Song of Simeon</i><br/>
        <i>Luke 2:29-32</i><br/>
        Lord, now let your servant depart in peace, *<br/>
        according to your word.<br/>
        For my eyes have seen your salvation, *<br/>
        which you have prepared before the face of all people;<br/>
        To be a light to lighten the Gentiles, *<br/>
        and to be the glory of your people Israel.<br/>
        Glory be to the Father, and to the Son, and to the Holy Spirit; *<br/>
        as it was in the beginning, is now, and ever shall be, world without end. Amen.<br/>
        </p>
        </div>
    );
}

export default Lesson;

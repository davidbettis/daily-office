import React from 'react';

// Lesson is a set of scripture chunks to read as part of the office.
//
// Constructor params:
//      props.lectionary: lectionary to use for the two readings (see LECTIONARY options below)
//      props.postFirstReading: after the first reading (see POST_READING options below)
//      props.postSecondReading: after the second reading (see POST_READING options below)
//
// LECTIONARY:
//      - morning: readings for morning prayer
//      - evening: readings for evening prayer
// 
// POST_READING: te-deum-laudamus, benedictus, magnificat, nunc-dimittis
//
export class Lesson extends React.Component {

    constructor(props) {
        super(props);

        var lectionary;
        if (this.props.lectionary === 'morning') {
            lectionary = this.morningLectionary();
        } else if (this.props.lectionary === 'evening') {
            lectionary = this.eveningLectionary();
        } else {
            throw "Lesson error: lectionary must be one of ['morning','evening']";
        }

        var now = new Date();
        var month = now.getMonth() + 1; // month, 1-12
        var day = now.getDate(); // day, 1-31

        var readings = lectionary[month][day];

        this.firstReading = readings[0];
        this.secondReading = readings[1];

        this.postFirstReading = this.postReading(props.postFirstReading)
        this.postSecondReading = this.postReading(props.postSecondReading)
    }

    render() {
        return (
            <div>
                <p>A reading from { this.firstReading }.</p>
                <p>
                    <div class="officiant">The Word of the Lord.</div>
                    <div class="people">Thanks be to God.</div>
                </p>

                { this.postFirstReading }

                <p>A reading from { this.secondReading }.</p>
                <p>
                    <div class="officiant">The Word of the Lord.</div>
                    <div class="people">Thanks be to God.</div>
                </p>

                { this.postSecondReading }
            </div>
        );
    }

    morningLectionary() {
        var morning = {}; // month -> day -> [(str)scripture1, (str)scripture2]
        for (var i = 1; i <= 12; i++) {
            morning[i] = {}
        }
        morning[1][1] = ['Gen 1','John 1:1-28'];
        morning[1][2] = ['Gen 2','John 1:29-end'];
        morning[1][3] = ['Gen 3','John 2'];
        morning[1][4] = ['Gen 4','John 3:1-21'];
        morning[1][5] = ['Gen 5','John 3:22-end'];
        morning[1][6] = ['Gen 6','Matt 2:1-12'];
        morning[1][7] = ['Gen 7','John 4:1-26'];
        morning[1][8] = ['Gen 8','John 4:27-end'];
        morning[1][9] = ['Gen 9','John 5:1-24'];
        morning[1][10] = ['Gen 10 † 1-9, 15-22, 30-32','John 5:25-end'];
        morning[1][11] = ['Gen 11 † 1-9, 27-32','John 6:1-21'];
        morning[1][12] = ['Gen 12','John 6:22-40'];
        morning[1][13] = ['Gen 13','John 6:41-end'];
        morning[1][14] = ['Gen 14','John 7:1-24'];
        morning[1][15] = ['Gen 15','John 7:25-52'];
        morning[1][16] = ['Gen 16','John 7:53—8:30'];
        morning[1][17] = ['Gen 17','John 8:31-end'];
        morning[1][18] = ['Gen 18','Matt 16:13-20'];
        morning[1][19] = ['Gen 19 † 1-29','John 9'];
        morning[1][20] = ['Gen 20','John 10:1-21'];
        morning[1][21] = ['Gen 21 † 1-21','John 10:22-end'];
        morning[1][22] = ['Gen 22','John 11:1-44'];
        morning[1][23] = ['Gen 23','John 11:45-end'];
        morning[1][24] = ['Gen 24 † 1-28, 53-58','John 12:1-19'];
        morning[1][25] = ['Acts 9:1-22','John 12:20-end'];
        morning[1][26] = ['Gen 25 † 7-11, 19-34','John 13'];
        morning[1][27] = ['Gen 26 † 1-25','John 14:1-14'];
        morning[1][28] = ['Gen 27 † 1-13, 18-36, 39-40','John 14:15-end'];
        morning[1][29] = ['Gen 28','John 15:1-17'];
        morning[1][30] = ['Gen 29 † 1-28','John 15:18-end'];
        morning[1][31] = ['Gen 30 † 1-2, 22-43','John 16:1-15'];
        morning[2][1] = ['Gen 31 † 1-3, 17-45','John 16:16-end'];
        morning[2][2] = ['Gen 32 † 1-13, 21-32','Luke 2:22-40'];
        morning[2][3] = ['Gen 33','John 17'];
        morning[2][4] = ['Gen 34','John 18:1-27'];
        morning[2][5] = ['Gen 35','John 18:28-end'];
        morning[2][6] = ['Gen 36  † 1-8','John 19:1-37'];
        morning[2][7] = ['Gen 37 † 3-8, 12-36','John 19:38-end'];
        morning[2][8] = ['Gen 38 † 1-26','John 20'];
        morning[2][9] = ['Gen 39','John 21'];
        morning[2][10] = ['Gen 40','Matt 1:1-17'];
        morning[2][11] = ['Gen 41 † 1-15, 25-40','Matt 1:18-end'];
        morning[2][12] = ['Gen 42 † 1-28','Matt 2'];
        morning[2][13] = ['Gen 43 † 1-10, 15-34','Matt 3'];
        morning[2][14] = ['Gen 44 † 1-20, 30-34','Matt 4'];
        morning[2][15] = ['Gen 45','Matt 5:1-20'];
        morning[2][16] = ['Gen 46 † 1-7, 28-34','Matt 5:21-48'];
        morning[2][17] = ['Gen 47 † 1-15, 23-31','Matt 6:1-18'];
        morning[2][18] = ['Gen 48','Matt 6:19-end'];
        morning[2][19] = ['Gen 49','Matt 7'];
        morning[2][20] = ['Gen 50','Matt 8:1-17'];
        morning[2][21] = ['Exod 1','Matt 8:18-end'];
        morning[2][22] = ['Exod 2','Matt 9:1-17'];
        morning[2][23] = ['Exod 3','Matt 9:18-34'];
        morning[2][24] = ['Acts 1:15-26','Matt 9:35—10:23'];
        morning[2][25] = ['Exod 4','Matt 10:24-end'];
        morning[2][26] = ['Exod 5','Matt 11'];
        morning[2][27] = ['Exod 6 † 1-13','Matt 12:1-21'];
        morning[2][28] = ['Exod 7','Matt 12:22-end'];
        morning[2][29] = ['2 Kings 2','Luke 24:44-53']; // XXX
        morning[3][1] = ['Exod 8','Matt 13:1-23'];
        morning[3][2] = ['Exod 9 † 1-29, 33-34','Matt 13:24-43'];
        morning[3][3] = ['Exod 10','Matt 13:44-end'];
        morning[3][4] = ['Exod 11','Matt 14'];
        morning[3][5] = ['Exod 12 † 1-20, 28-36','Matt 15:1-28'];
        morning[3][6] = ['Exod 13','Matt 15:29—16:12'];
        morning[3][7] = ['Exod 14 † 5-31','Matt 16:13-end'];
        morning[3][8] = ['Exod 15','Matt 17:1-23'];
        morning[3][9] = ['Exod 16 † 1-7, 11-33','Matt 17:24—18:14'];
        morning[3][10] = ['Exod 17','Matt 18:15-end'];
        morning[3][11] = ['Exod 18','Matt 19:1-15'];
        morning[3][12] = ['Exod 19','Matt 19:16—20:16'];
        morning[3][13] = ['Exod 20','Matt 20:17-end'];
        morning[3][14] = ['Exod 21 † 1-19, 22-29','Matt 21:1-22'];
        morning[3][15] = ['Exod 22','Matt 21:23-end'];
        morning[3][16] = ['Exod 23 † 1-13, 18-30','Matt 22:1-33'];
        morning[3][17] = ['Exod 24','Matt 22:34—23:12'];
        morning[3][18] = ['Exod 25 † 1-23, 31-40','Matt 23:13-end'];
        morning[3][19] = ['Exod 26 † 1-10, 15-16, 29-37','Matt 24:1-28'];
        morning[3][20] = ['Exod 27','Matt 24:29-end'];
        morning[3][21] = ['Exod 28 † 1-6, 15-21, 29-43','Matt 25:1-30'];
        morning[3][22] = ['Exod 29 † 1-18, 35-46','Matt 25:31-end'];
        morning[3][23] = ['Exod 30 † 1-3, 7-33','Matt 26:1-30'];
        morning[3][24] = ['Exod 31','Matt 26:31-56'];
        morning[3][25] = ['Exod 32 † 1-29','Luke 1:26-38'];
        morning[3][26] = ['Exod 33','Matt 26:57-end'];
        morning[3][27] = ['Exod 34 † 1-17, 27-35','Matt 27:1-26'];
        morning[3][28] = ['Exod 35 † 1-10, 20-35','Matt 27:27-56'];
        morning[3][29] = ['Exod 36 † 1-10, 18-20, 31-38','Matt 27:57—28 end'];
        morning[3][30] = ['Exod 37 † 1-11, 16-29','Mark 1:1-13'];
        morning[3][31] = ['Exod 38 † 1-23','Mark 1:14-31'];
        morning[4][1] = ['Exod 39 † 1-14, 27-43','Mark 1:32-end'];
        morning[4][2] = ['Exod 40 † 1, 16-38','Mark 2:1-22'];
        morning[4][3] = ['Lev 1','Mark 2:23—3:12'];
        morning[4][4] = ['Lev 8 † 1-24, 30-36','Mark 3:13-end'];
        morning[4][5] = ['Lev 10','Mark 4:1-34'];
        morning[4][6] = ['Lev 16 † 1-22, 29-34','Mark 4:35—5:20'];
        morning[4][7] = ['Lev 17','Mark 5:21-end'];
        morning[4][8] = ['Lev 18','Mark 6:1-29'];
        morning[4][9] = ['Lev 19 † 1-2, 9-37','Mark 6:30-end'];
        morning[4][10] = ['Lev 20','Mark 7:1-23'];
        morning[4][11] = ['Lev 23 † 9-32, 39-43','Mark 7:24—8:10'];
        morning[4][12] = ['Lev 26 † 3-20, 38-46','Mark 8:11-end'];
        morning[4][13] = ['Num 6','Mark 9:1-29'];
        morning[4][14] = ['Num 8 † 5-26','Mark 9:30-end'];
        morning[4][15] = ['Num 11 † 4-6, 10-33','Mark 10:1-31'];
        morning[4][16] = ['Num 12','Mark 10:32-end'];
        morning[4][17] = ['Num 13 † 1-3, 17-33','Mark 11:1-26'];
        morning[4][18] = ['Num 14 † 1-31','Mark 11:27—12:12'];
        morning[4][19] = ['Num 15 † 22-41','Mark 12:13-34'];
        morning[4][20] = ['Num 16 † 1-11, 20-38','Mark 12:35—13:13'];
        morning[4][21] = ['Num 17','Mark 13:14-end'];
        morning[4][22] = ['Num 18 † 1-24','Mark 14:1-25'];
        morning[4][23] = ['Num 20','Mark 14:26-52'];
        morning[4][24] = ['Num 21 † 4-9, 21-35','Mark 14:53-end'];
        morning[4][25] = ['Acts 12:11-25','Mark 15'];
        morning[4][26] = ['Num 22 † 1-35','Mark 16'];
        morning[4][27] = ['Num 23 † 1-26','Luke 1:1-23'];
        morning[4][28] = ['Num 24','Luke 1:24-56'];
        morning[4][29] = ['Num 25','Luke 1:57-end'];
        morning[4][30] = ['Deut 1 † 1-21, 26-33','Luke 2:1-21'];
        morning[5][1] = ['Deut 2 † 1-9, 14-19, 24-37','Luke 2:22-end'];
        morning[5][2] = ['Deut 3','Luke 3:1-22'];
        morning[5][3] = ['Deut 4 † 1-18, 24-40','Luke 3:23-end'];
        morning[5][4] = ['Deut 5','Luke 4:1-30'];
        morning[5][5] = ['Deut 6','Luke 4:31-end'];
        morning[5][6] = ['Deut 7','Luke 5:1-16'];
        morning[5][7] = ['Deut 8','Luke 5:17-end'];
        morning[5][8] = ['Deut 9','Luke 6:1-19'];
        morning[5][9] = ['Deut 10','Luke 6:20-38'];
        morning[5][10] = ['Deut 11','Luke 6:39—7:10'];
        morning[5][11] = ['Deut 12','Luke 7:11-35'];
        morning[5][12] = ['Deut 13','Luke 7:36-end'];
        morning[5][13] = ['Deut 14','Luke 8:1-21'];
        morning[5][14] = ['Deut 15','Luke 8:22-end'];
        morning[5][15] = ['Deut 16','Luke 9:1-17'];
        morning[5][16] = ['Deut 17','Luke 9:18-50'];
        morning[5][17] = ['Deut 18','Luke 9:51-end'];
        morning[5][18] = ['Deut 19','Luke 10:1-24'];
        morning[5][19] = ['Deut 20','Luke 10:25-end'];
        morning[5][20] = ['Deut 21','Luke 11:1-28'];
        morning[5][21] = ['Deut 22','Luke 11:29-end'];
        morning[5][22] = ['Deut 23','Luke 12:1-34'];
        morning[5][23] = ['Deut 24','Luke 12:35-53'];
        morning[5][24] = ['Deut 25','Luke 12:54—13:9'];
        morning[5][25] = ['Deut 26','Luke 13:10-end'];
        morning[5][26] = ['Deut 27','Luke 14:1-24'];
        morning[5][27] = ['Deut 28 † 1-25, 64-68','Luke 14:25—15:10'];
        morning[5][28] = ['Deut 29','Luke 15:11-end'];
        morning[5][29] = ['Deut 30','Luke 16'];
        morning[5][30] = ['Deut 31','Luke 17:1-19'];
        morning[5][31] = ['Deut 32 † 1-10, 15-22, 39-52','Luke 1:39-56'];
        morning[6][1] = ['Deut 33','Luke 17:20-end'];
        morning[6][2] = ['Deut 34','Luke 18:1-30'];
        morning[6][3] = ['Josh 1','Luke 18:31—19:10'];
        morning[6][4] = ['Josh 2','Luke 19:11-28'];
        morning[6][5] = ['Josh 3','Luke 19:29-end'];
        morning[6][6] = ['Josh 4','Luke 20:1-26'];
        morning[6][7] = ['Josh 5','Luke 20:27—21:4'];
        morning[6][8] = ['Josh 6','Luke 21:5-end'];
        morning[6][9] = ['Josh 7','Luke 22:1-38'];
        morning[6][10] = ['Josh 8 † 1-22, 30-35','Luke 22:39-53'];
        morning[6][11] = ['Acts 4:32-37','Luke 22:54-end'];
        morning[6][12] = ['Josh 9','Luke 23:1-25'];
        morning[6][13] = ['Josh 10 † 1-27, 40-43','Luke:23:26-49'];
        morning[6][14] = ['Josh 14 † 5-15','Luke 23:50—24:12'];
        morning[6][15] = ['Josh 22   † 7-31','Luke 24:13-end'];
        morning[6][16] = ['Josh 23','Gal 1'];
        morning[6][17] = ['Josh 24 † 1-31','Gal 2'];
        morning[6][18] = ['Judg 1 † 1-21','Gal 3'];
        morning[6][19] = ['Judg 2 † 6-23','Gal 4'];
        morning[6][20] = ['Judg 3 † 7-30','Gal 5'];
        morning[6][21] = ['Judg 4','Gal 6'];
        morning[6][22] = ['Judg 5 † 1-5, 19-31 1','Thess 1'];
        morning[6][23] = ['Judg 6 † 1, 6, 11-24, 33-40 1','Thess 2:1-16'];
        morning[6][24] = ['1 Thess 2:17—3 end','Matt 14:1-13'];
        morning[6][25] = ['Judg 7 † 1-8, 16-25','1 Thess 4:1-12'];
        morning[6][26] = ['Judg 8 † 4-23, 28','1 Thess 4:13—5:11'];
        morning[6][27] = ['Judg 9 † 1-6, 22-25, 43-56','1 Thess 5:12-end'];
        morning[6][28] = ['Judg 10 † 6-18','2 Thess 1'];
        morning[6][29] = ['2 Thess 2','2 Pet 3:14-end'];
        morning[6][30] = ['Judg 11 † 1-11, 29-40','2 Thess 3'];
        morning[7][1] = ['Judg 12 1','Cor 1:1-25'];
        morning[7][2] = ['Judg 13 1','Cor 1:26—2 end'];
        morning[7][3] = ['Judg 14 1','Cor 3'];
        morning[7][4] = ['Judg 15 1','Cor 4:1-17'];
        morning[7][5] = ['Judg 16 1','Cor 4:18—5 end'];
        morning[7][6] = ['Ruth 1 1','Cor 6'];
        morning[7][7] = ['Ruth 2 1','Cor 7'];
        morning[7][8] = ['Ruth 3 1','Cor 8'];
        morning[7][9] = ['Ruth 4 1','Cor 9'];
        morning[7][10] = ['1 Sam 1 † 1-20 1','Cor 10'];
        morning[7][11] = ['1 Sam 2 † 1-21 1','Cor 11'];
        morning[7][12] = ['1 Sam 3 1','Cor 12'];
        morning[7][13] = ['1 Sam 4 1','Cor 13'];
        morning[7][14] = ['1 Sam 5 1','Cor 14:1-19'];
        morning[7][15] = ['1 Sam 6 † 1-15','1 Cor 14:20-end'];
        morning[7][16] = ['1 Sam 7','1 Cor 15:1-34'];
        morning[7][17] = ['1 Sam 8','1 Cor 15:35-end'];
        morning[7][18] = ['1 Sam 9','1 Cor 16'];
        morning[7][19] = ['1 Sam 10','2 Cor 1:1—2:11'];
        morning[7][20] = ['1 Sam 11','2 Cor 2:12—3 end'];
        morning[7][21] = ['1 Sam 12','2 Cor 4'];
        morning[7][22] = ['2 Cor 5','Luke 7:36—8:3'];
        morning[7][23] = ['1 Sam 13','2 Cor 6'];
        morning[7][24] = ['1 Sam 14 † 1-15,20,24-30','2 Cor 7'];
        morning[7][25] = ['2 Cor 8','Mark 1:14-20'];
        morning[7][26] = ['1 Sam 15','2 Cor 9'];
        morning[7][27] = ['1 Sam 16','2 Cor 10'];
        morning[7][28] = ['1 Sam 17 † 1-11,26-27,31-51','2 Cor 11'];
        morning[7][29] = ['1 Sam 18','2 Cor 12:1-13'];
        morning[7][30] = ['1 Sam 19','2 Cor 12:14—13 end'];
        morning[7][31] = ['1 Sam 20 † 1-7,24-42','Rom 1'];
        morning[8][1] = ['1 Sam 21','Rom 2'];
        morning[8][2] = ['1 Sam 22','Rom 3'];
        morning[8][3] = ['1 Sam 23','Rom 4'];
        morning[8][4] = ['1 Sam 24','Rom 5'];
        morning[8][5] = ['1 Sam 25 † 1-19, 23-25, 32-42','Rom 6'];
        morning[8][6] = ['Rom 7','Mark 9:2-10'];
        morning[8][7] = ['1 Sam 26','Rom 8:1-17'];
        morning[8][8] = ['1 Sam 27','Rom 8:18-end'];
        morning[8][9] = ['1 Sam 28','Rom 9'];
        morning[8][10] = ['1 Sam 29','Rom 10'];
        morning[8][11] = ['1 Sam 30 † 1-25','Rom 11'];
        morning[8][12] = ['1 Sam 31','Rom 12'];
        morning[8][13] = ['2 Sam 1','Rom 13'];
        morning[8][14] = ['2 Sam 2 † 1-17, 26-31','Rom 14'];
        morning[8][15] = ['2 Sam 3 † 6-11, 17-39','Luke 1:26-38'];
        morning[8][16] = ['2 Sam 4','Rom 15'];
        morning[8][17] = ['2 Sam 5','Rom 16'];
        morning[8][18] = ['2 Sam 6','Phil 1:1-11'];
        morning[8][19] = ['2 Sam 7','Phil 1:12-end'];
        morning[8][20] = ['2 Sam 8','Phil 2:1-11'];
        morning[8][21] = ['2 Sam 9','Phil 2:12-end'];
        morning[8][22] = ['2 Sam 10','Phil 3'];
        morning[8][23] = ['2 Sam 11','Phil 4'];
        morning[8][24] = ['Col 1:1-20','Luke 6:12-16'];
        morning[8][25] = ['2 Sam 12 † 1-25','Col 1:21—2:7'];
        morning[8][26] = ['2 Sam 13 † 1-29, 38-39','Col 2:8-19'];
        morning[8][27] = ['2 Sam 14 † 1-21, 28','Col 2:20—3:11'];
        morning[8][28] = ['2 Sam 15 † 1-18, 23-25, 32-34','Col 3:12-end'];
        morning[8][29] = ['2 Sam 16','Col 4'];
        morning[8][30] = ['2 Sam 17 † 1-23','Philemon'];
        morning[8][31] = ['2 Sam 18 † 1-15, 19-33','Eph 1:1-14'];
        morning[9][1] = ['2 Sam 19 † 1-30','Eph 1:15-end'];
        morning[9][2] = ['2 Sam 20','Eph 2:1-10'];
        morning[9][3] = ['2 Sam 21','Eph 2:11-end'];
        morning[9][4] = ['2 Sam 22 † 1-7, 14-20, 32-51','Eph 3'];
        morning[9][5] = ['2 Sam 23 † 1-23','Eph 4:1-16'];
        morning[9][6] = ['2 Sam 24','Eph 4:17-end'];
        morning[9][7] = ['1 Chron 22','Eph 5:1-17'];
        morning[9][8] = ['1 Kings 1 † 1-18, 29-40','Eph 5:18-end'];
        morning[9][9] = ['1 Chron 28','Eph 6'];
        morning[9][10] = ['1 Kings 2 † 1-25','Heb 1'];
        morning[9][11] = ['1 Kings 3','Heb 2'];
        morning[9][12] = ['1 Kings 4 † 1-6, 20-34','Heb 3'];
        morning[9][13] = ['1 Kings 5','Heb 4:1-13'];
        morning[9][14] = ['Heb 4:14—5:10','John 12:23-33'];
        morning[9][15] = ['1 Kings 6 † 1-7, 11-30, 37-38','Heb 5:11—6 end'];
        morning[9][16] = ['1 Kings 7 † 1-14, 40-44, 47-51','Heb 7'];
        morning[9][17] = ['1 Kings 8 † 1-11, 22-30, 54-63','Heb 8'];
        morning[9][18] = ['1 Kings 9 † 1-9, 15-28','Heb 9:1-14'];
        morning[9][19] = ['1 Kings 10  † 1-13, 23-29','Heb 9:15-end'];
        morning[9][20] = ['1 Kings 11 † 1-14, 23-33, 41-43','Heb 10:1-18'];
        morning[9][21] = ['Heb 10:19-end','Matt 9:9-13'];
        morning[9][22] = ['1 Kings 12 † 1-20, 25-30','Heb 11'];
        morning[9][23] = ['1 Kings 13 † 1-25, 33-34','Heb 12:1-17'];
        morning[9][24] = ['1 Kings 14','Heb 12:18-end'];
        morning[9][25] = ['2 Chron 12','Heb 13'];
        morning[9][26] = ['2 Chron 13','Jas 1'];
        morning[9][27] = ['2 Chron 14','Jas 2:1-13'];
        morning[9][28] = ['2 Chron 15','Jas 2:14-end'];
        morning[9][29] = ['Rev 12:7-12','Jas 3'];
        morning[9][30] = ['2 Chron 16','Jas 4'];
        morning[10][1] = ['1 Kings 15 † 1-30','Jas 5'];
        morning[10][2] = ['1 Kings 16 † 1-4, 8-19, 23-34','1 Pet 1:1-21'];
        morning[10][3] = ['1 Kings 17 1','Pet 1:22—2:10'];
        morning[10][4] = ['1 Kings 18 † 1-8, 17-46','1 Pet 2:11—3:7'];
        morning[10][5] = ['1 Kings 19','1 Pet 3:8—4:6'];
        morning[10][6] = ['1 Kings 20 † 1, 13, 21-43','1 Pet 4:7-end'];
        morning[10][7] = ['1 Kings 21','1 Pet 5'];
        morning[10][8] = ['1 Kings 22 † 1-23,29-38','2 Pet 1'];
        morning[10][9] = ['2 Chron 20','2 Pet 2'];
        morning[10][10] = ['2 Kings 1','2 Pet 3'];
        morning[10][11] = ['2 Kings 2','Jude'];
        morning[10][12] = ['2 Kings 3 1','John 1:1—2:6'];
        morning[10][13] = ['2 Kings 4 † 8-37 1','John 2:7-end'];
        morning[10][14] = ['2 Kings 5','1 John 3:1-10'];
        morning[10][15] = ['2 Kings 6 † 1-24','1 John 3:11—4:6'];
        morning[10][16] = ['2 Kings 7','1 John 4:7-end'];
        morning[10][17] = ['2 Kings 8 † 1-19,25-27','1 John 5'];
        morning[10][18] = ['Luke 2','John Luke 1:1-4'];
        morning[10][19] = ['2 Kings 9 † 1-26,30-37','3 John'];
        morning[10][20] = ['2 Kings 10 † 1-11,18-31','Acts 1:1-14'];
        morning[10][21] = ['2 Kings 11 † 1-16,23-27','Acts 1:15-end'];
        morning[10][22] = ['2 Kings 12','Acts 2:1-21'];
        morning[10][23] = ['James','Jer.  Acts 2:22-end James 1'];
        morning[10][24] = ['2 Kings 13','Acts 3:1—4:4'];
        morning[10][25] = ['2 Kings 14','Acts 4:5-31'];
        morning[10][26] = ['2 Chron 26','Acts 4:32—5:11'];
        morning[10][27] = ['2 Kings 15 † 1-29','Acts 5:12-end'];
        morning[10][28] = ['Acts 6:1—7:16','John 14:15-31'];
        morning[10][29] = ['2 Kings 16','Acts 7:17-34'];
        morning[10][30] = ['2 Kings 17 † 1-28, 41','Acts 7:35—8:3'];
        morning[10][31] = ['2 Chron 28','Acts 8:4-25'];
        morning[11][1] = ['Heb 11:32—12:2','Acts 8:26-end'];
        morning[11][2] = ['2 Chron 29 † 1-11,20-30,35-36','Acts 9:1-31'];
        morning[11][3] = ['2 Chron 30 † 1-22,26-27','Acts 9:32-end'];
        morning[11][4] = ['2 Kings 18 † 1-13,17-30,35-37','Acts 10:1-23'];
        morning[11][5] = ['2 Kings 19 † 1-20,29-31,35-37','Acts 10:24-end'];
        morning[11][6] = ['2 Kings 20','Acts 11:1-18'];
        morning[11][7] = ['2 Chron 33','Acts 11:19-end'];
        morning[11][8] = ['2 Kings 21','Acts 12:1-24'];
        morning[11][9] = ['2 Kings 22','Acts 12:25—13:12'];
        morning[11][10] = ['2 Kings 23 † 1-20, 26-30','Acts 13:13-43'];
        morning[11][11] = ['2 Kings 24','Acts 13:44—14:7'];
        morning[11][12] = ['2 Kings 25 † 1-22, 25-30','Acts 14:8-end'];
        morning[11][13] = ['Judith 4','Acts 15:1-21'];
        morning[11][14] = ['Judith 8','Acts 15:22-35'];
        morning[11][15] = ['Judith 9','Acts 15:36—16:5'];
        morning[11][16] = ['Judith 10','Acts 16:6-end'];
        morning[11][17] = ['Judith 11','Acts 17:1-15'];
        morning[11][18] = ['Judith 12','Acts 17:16-end'];
        morning[11][19] = ['Judith 13','Acts 18:1-23'];
        morning[11][20] = ['Judith 14','Acts 18:24—19:7'];
        morning[11][21] = ['Judith 15','Acts 19:8-20'];
        morning[11][22] = ['Judith 16','Acts 19:21-end'];
        morning[11][23] = ['Ecclesiasticus 1','Acts 20:1-16'];
        morning[11][24] = ['Ecclesiasticus 2','Acts 20:17-end'];
        morning[11][25] = ['Ecclesiasticus 4 † 1-19','Acts 21:1-16'];
        morning[11][26] = ['Ecclesiasticus 6 † 5-31','Acts 21:17-36'];
        morning[11][27] = ['Ecclesiasticus 7 † 1-21, 27-36','Acts 21:37—22:22'];
        morning[11][28] = ['Ecclesiasticus 9','Acts 22:23—23:11'];
        morning[11][29] = ['Ecclesiasticus 10 † 1-24','Acts 23:12-end'];
        morning[11][30] = ['Ecclesiasticus 11 † 1-9,18-28','John 1:35-42'];
        morning[12][1] = ['Ecclesiasticus 14','Acts 24:1-23'];
        morning[12][2] = ['Ecclesiasticus 17','Acts 24:24—25:12'];
        morning[12][3] = ['Ecclesiasticus 18 † 1-26, 30-33','Acts 25:13-end'];
        morning[12][4] = ['Ecclesiasticus 21','Acts 26'];
        morning[12][5] = ['Ecclesiasticus 34','Acts 27'];
        morning[12][6] = ['Ecclesiasticus 38 † 1-15, 24-34','Acts 28:1-15'];
        morning[12][7] = ['Ecclesiasticus 39 † 1-11, 16-35','Acts 28:16-end'];
        morning[12][8] = ['Ecclesiasticus 44','Rev 1'];
        morning[12][9] = ['Ecclesiasticus 45','Rev 2:1-17'];
        morning[12][10] = ['Ecclesiasticus 46','Rev 2:18—3:6'];
        morning[12][11] = ['Ecclesiasticus 47','Rev 3:7-end'];
        morning[12][12] = ['Ecclesiasticus 48','Rev 4'];
        morning[12][13] = ['Ecclesiasticus 49','Rev 5'];
        morning[12][14] = ['Ecclesiasticus 50','Rev 6'];
        morning[12][15] = ['Ecclesiasticus 51','Rev 7'];
        morning[12][16] = ['Wisdom 1','Rev 8'];
        morning[12][17] = ['Wisdom 2','Rev 9'];
        morning[12][18] = ['Wisdom 3','Rev 10'];
        morning[12][19] = ['Wisdom 4','Rev 11'];
        morning[12][20] = ['Wisdom 5','Rev 12'];
        morning[12][21] = ['Rev 13','John 14:1-7'];
        morning[12][22] = ['Wisdom 6','Rev 14'];
        morning[12][23] = ['Wisdom 7','Rev 15'];
        morning[12][24] = ['Wisdom 8','Rev 16'];
        morning[12][25] = ['Isa 9:1-8','Rev 17'];
        morning[12][26] = ['Acts 6:8—7:6, 7:44-60','Rev 18'];
        morning[12][27] = ['Rev 19','John 21:9-25'];
        morning[12][28] = ['Jer 31:1-17','Rev 20'];
        morning[12][29] = ['Wisdom 9','Rev 21:1-14'];
        morning[12][30] = ['Wisdom 10','Rev 21:15—22:5'];
        morning[12][31] = ['Wisdom 11','Rev 22:6-end'];
        
        return morning;
    }

    eveningLectionary() {
        var evening = {}; // month -> day -> [(str)scripture1, (str)scripture2]
        for (var i = 1; i <= 12; i++) {
            evening[i] = {}
        }
        evening[1][1] = ['Gal 1','Luke 2:8-21'];
        evening[1][2] = ['Jer 1','Gal 2'];
        evening[1][3] = ['Jer 2 † 1-22','Gal 3'];
        evening[1][4] = ['Jer 3','Gal 4'];
        evening[1][5] = ['Jer 4','Gal 5'];
        evening[1][6] = ['Jer 5','John 2:1-12'];
        evening[1][7] = ['Jer 6','Gal 6'];
        evening[1][8] = ['Jer 7 † 1-28,34','1 Thess 1'];
        evening[1][9] = ['Jer 8','1 Thess 2:1-16'];
        evening[1][10] = ['Jer 9','1 Thess 2:17‚ 3 end'];
        evening[1][11] = ['Jer 10','1 Thess 4:1-12'];
        evening[1][12] = ['Jer 11','1 Thess 4:13‚ 5:11'];
        evening[1][13] = ['Jer 12','1 Thess 5:12-end'];
        evening[1][14] = ['Jer 13','2 Thess 1'];
        evening[1][15] = ['Jer 14','2 Thess 2'];
        evening[1][16] = ['Jer 15','2 Thess 3'];
        evening[1][17] = ['Jer 16','1 Cor 1:1-25'];
        evening[1][18] = ['Jer 17','1 Cor 1:26‚ 2 end'];
        evening[1][19] = ['Jer 18','1 Cor 3'];
        evening[1][20] = ['Jer 19','1 Cor 4:1-17'];
        evening[1][21] = ['Jer 20','1 Cor 4:18‚ 5 end'];
        evening[1][22] = ['Jer 21','1 Cor 6'];
        evening[1][23] = ['Jer 22','1 Cor 7'];
        evening[1][24] = ['Jer 23 † 1-9,16-18,21-40','1 Cor 8'];
        evening[1][25] = ['Jer 24','1 Cor 9'];
        evening[1][26] = ['Jer 25 † 1-19,26-31','1 Cor 10'];
        evening[1][27] = ['Jer 26','1 Cor 11'];
        evening[1][28] = ['Jer 27','1 Cor 12'];
        evening[1][29] = ['Jer 28','1 Cor 13'];
        evening[1][30] = ['Jer 29 † 1-14,24-32','1 Cor 14:1-19'];
        evening[1][31] = ['Jer 30','1 Cor 14:20-end'];
        evening[2][1] = ['Jer 31 † 1-17,27-37','1 Cor 15:1-34'];
        evening[2][2] = ['Jer 32 † 1-15,36-44','1 Cor 15:35-end'];
        evening[2][3] = ['Jer 33','1 Cor 16'];
        evening[2][4] = ['Jer 34','2 Cor 1:1‚ 2:11'];
        evening[2][5] = ['Jer 35','2 Cor 2:12‚ 3 end'];
        evening[2][6] = ['Jer 36 † 1-10,19-32','2 Cor 4'];
        evening[2][7] = ['Jer 37','2 Cor 5'];
        evening[2][8] = ['Jer 38','2 Cor 6'];
        evening[2][9] = ['Jer 39','2 Cor 7'];
        evening[2][10] = ['Jer 40','2 Cor 8'];
        evening[2][11] = ['Jer 41','2 Cor 9'];
        evening[2][12] = ['Jer 42','2 Cor 10'];
        evening[2][13] = ['Jer 43','2 Cor 11'];
        evening[2][14] = ['Jer 44 † 1-19,24-30','2 Cor 12:1-13'];
        evening[2][15] = ['Jer 45','2 Cor 12:14‚ 13 end'];
        evening[2][16] = ['Jer 46','Rom 1'];
        evening[2][17] = ['Jer 47','Rom 2'];
        evening[2][18] = ['Jer 48 † 1-20,40-47','Rom 3'];
        evening[2][19] = ['Jer 49 † 1-13,23-39','Rom 4'];
        evening[2][20] = ['Jer 50 † 1-20,33-40','Rom 5'];
        evening[2][21] = ['Jer 51 † 6-10,45-64','Rom 6'];
        evening[2][22] = ['Jer 52 † 1-27,31-34','Rom 7'];
        evening[2][23] = ['Baruch 4 † 5-13,21-37','Rom 8:1-17'];
        evening[2][24] = ['Baruch 5','Rom 8:18-end'];
        evening[2][25] = ['Lam 1 † 1-12,17-22','Rom 9'];
        evening[2][26] = ['Lam 2 † 1-18','Rom 10'];
        evening[2][27] = ['Lam 3 † 1-9,19-33,52-66','Rom 11'];
        evening[2][28] = ['Lam 4','Rom 12'];
        evening[2][29] = ['Joel 2 † 1-2,12-32','2 Pet 3'];
        evening[3][1] = ['Lam 5','Rom 13'];
        evening[3][2] = ['Prov 1','Rom 14'];
        evening[3][3] = ['Prov 2','Rom 15'];
        evening[3][4] = ['Prov 3 † 1-27','Rom 16'];
        evening[3][5] = ['Prov 4','Phil 1:1-11'];
        evening[3][6] = ['Prov 5','Phil 1:12-end'];
        evening[3][7] = ['Prov 6 † 1-11,20-35','Phil 2:1-11'];
        evening[3][8] = ['Prov 7','Phil 2:12-end'];
        evening[3][9] = ['Prov 8','Phil 3'];
        evening[3][10] = ['Prov 9','Phil 4'];
        evening[3][11] = ['Prov 10','Col 1:1-20'];
        evening[3][12] = ['Prov 11','Col 1:21‚ 2:7'];
        evening[3][13] = ['Prov 12','Col 2:8-19'];
        evening[3][14] = ['Prov 13','Col 2:20‚ 3:11'];
        evening[3][15] = ['Prov 14','Col 3:12-end'];
        evening[3][16] = ['Prov 15','Col 4'];
        evening[3][17] = ['Prov 16','Philemon'];
        evening[3][18] = ['Prov 17','Eph 1:1-14'];
        evening[3][19] = ['Eph 1:15-end','Matt 1:18-26'];
        evening[3][20] = ['Prov 18','Eph 2:1-10'];
        evening[3][21] = ['Prov 19','Eph 2:11-end'];
        evening[3][22] = ['Prov 20','Eph 3'];
        evening[3][23] = ['Prov 21','Eph 4:1-16'];
        evening[3][24] = ['Prov 22','Eph 4:17-end'];
        evening[3][25] = ['Prov 23','Eph 5:1-17'];
        evening[3][26] = ['Prov 24 † 1-14, 23-34','Eph 5:18-end'];
        evening[3][27] = ['Prov 25','Eph 6:1-9'];
        evening[3][28] = ['Prov 26','Eph 6:10-end'];
        evening[3][29] = ['Prov 27','1 Tim 1:1-17'];
        evening[3][30] = ['Prov 28','1 Tim 1:18‚ 2 end'];
        evening[3][31] = ['Prov 29','1 Tim 3'];
        evening[4][1] = ['Prov 30 † 1-9,15-33','1 Tim 4'];
        evening[4][2] = ['Prov 31','1 Tim 5'];
        evening[4][3] = ['Job 1','1 Tim 6'];
        evening[4][4] = ['Job 2','Titus 1'];
        evening[4][5] = ['Job 3','Titus 2'];
        evening[4][6] = ['Job 4','Titus 3'];
        evening[4][7] = ['Job 5','2 Tim 1'];
        evening[4][8] = ['Job 6','2 Tim 2'];
        evening[4][9] = ['Job 7','2 Tim 3'];
        evening[4][10] = ['Job 8','2 Tim 4'];
        evening[4][11] = ['Job 9','Heb 1'];
        evening[4][12] = ['Job 10','Heb 2'];
        evening[4][13] = ['Job 11','Heb 3'];
        evening[4][14] = ['Job 12','Heb 4:1-13'];
        evening[4][15] = ['Job 13','Heb 4:14‚ 5:10'];
        evening[4][16] = ['Job 14','Heb 5:11‚ 6 end'];
        evening[4][17] = ['Job 15','Heb 7'];
        evening[4][18] = ['Job 16','Heb 8'];
        evening[4][19] = ['Job 17','Heb 9:1-14'];
        evening[4][20] = ['Job 18','Heb 9:15-end'];
        evening[4][21] = ['Job 19','Heb 10:1-18'];
        evening[4][22] = ['Job 20','Heb 10:19-end'];
        evening[4][23] = ['Job 21','Heb 11'];
        evening[4][24] = ['Job 22','Heb 12:1-17'];
        evening[4][25] = ['Job 23','Heb 12:18-end'];
        evening[4][26] = ['Job 24','Heb 13'];
        evening[4][27] = ['Job 25 & 26','Jas 1'];
        evening[4][28] = ['Job 27','Jas 2:1-13'];
        evening[4][29] = ['Job 28','Jas 2:14-end'];
        evening[4][30] = ['Job 29','Jas 3'];
        evening[5][1] = ['Jas 4','John 1:43-end'];
        evening[5][2] = ['Job 30','Jas 5'];
        evening[5][3] = ['Job 31 † 1-23,35-40','1 Pet 1:1-21'];
        evening[5][4] = ['Job 32','1 Pet 1:22‚ 2:10'];
        evening[5][5] = ['Job 33','1 Pet 2:11‚ 3:7'];
        evening[5][6] = ['Job 34 † 1-15,21-28,31-37','1 Pet 3:8‚ 4:6'];
        evening[5][7] = ['Job 35','1 Pet 4:7-end'];
        evening[5][8] = ['Job 36','1 Pet 5'];
        evening[5][9] = ['Job 37','2 Pet 1'];
        evening[5][10] = ['Job 38 † 1-27,31-33','2 Pet 2'];
        evening[5][11] = ['Job 39','2 Pet 3'];
        evening[5][12] = ['Job 40','Jude'];
        evening[5][13] = ['Job 41','1 John 1:1‚ 2:6'];
        evening[5][14] = ['Job 42','1 John 2:7-end'];
        evening[5][15] = ['Eccl 1','1 John 3:1-10'];
        evening[5][16] = ['Eccl 2','1 John 3:11‚ 4:6'];
        evening[5][17] = ['Eccl 3','1 John 4:7-end'];
        evening[5][18] = ['Eccl 4','1 John 5'];
        evening[5][19] = ['Eccl 5','2 John'];
        evening[5][20] = ['Eccl 6','3 John'];
        evening[5][21] = ['Eccl 7','Acts 1:1-14'];
        evening[5][22] = ['Eccl 8','Acts 1:15-end'];
        evening[5][23] = ['Eccl 9','Acts 2:1-21'];
        evening[5][24] = ['Eccl 10','Acts 2:22-end'];
        evening[5][25] = ['Eccl 11','Acts 3:1‚ 4:4'];
        evening[5][26] = ['Eccl 12','Acts 4:5-31'];
        evening[5][27] = ['Ezek 1','Acts 4:32‚ 5:11'];
        evening[5][28] = ['Ezek 2','Acts 5:12-end'];
        evening[5][29] = ['Ezek 3','Acts 6:1‚ 7:16'];
        evening[5][30] = ['Ezek 4','Acts 7:17-34'];
        evening[5][31] = ['Ezek 5','Acts 7:35‚ 8:3'];
        evening[6][1] = ['Ezek 6','Acts 8:4-25'];
        evening[6][2] = ['Ezek 7','Acts 8:26-end'];
        evening[6][3] = ['Ezek 8','Acts 9:1-31'];
        evening[6][4] = ['Ezek 9','Acts 9:32-end'];
        evening[6][5] = ['Ezek 10','Acts 10:1-23'];
        evening[6][6] = ['Ezek 11','Acts 10:24-end'];
        evening[6][7] = ['Ezek 12','Acts 11:1-18'];
        evening[6][8] = ['Ezek 13','Acts 11:19-end'];
        evening[6][9] = ['Ezek 14','Acts 12:1-24'];
        evening[6][10] = ['Ezek 15','Acts 12:25‚ 13:12'];
        evening[6][11] = ['Ezek 16 † 1-15,33-47, 59-63','Acts 13:13-43'];
        evening[6][12] = ['Ezek 17','Acts 13:44‚ 14:7'];
        evening[6][13] = ['Ezek 18','Acts 14:8-end'];
        evening[6][14] = ['Ezek 33 † 1-23,30-33','Acts 15:1-21'];
        evening[6][15] = ['Ezek 34','Acts 15:22-35'];
        evening[6][16] = ['Ezek 35','Acts 15:36‚ 16:5'];
        evening[6][17] = ['Ezek 36 † 16-37','Acts 16:6-end'];
        evening[6][18] = ['Ezek 37','Acts 17:1-15'];
        evening[6][19] = ['Ezek 40 † 1-5,17-19,35-49','Acts 17:16-end'];
        evening[6][20] = ['Ezek 43','Acts 18:1-23'];
        evening[6][21] = ['Ezek 47','Acts 18:24‚ 19:7'];
        evening[6][22] = ['Dan 1','Acts 19:8-20'];
        evening[6][23] = ['Dan 2 † 1-14,25-28,31-45','Acts 19:21-end'];
        evening[6][24] = ['Dan 3','Acts 20:1-16'];
        evening[6][25] = ['Dan 4 † 1-9,19-35','Acts 20:17-end'];
        evening[6][26] = ['Dan 5','Acts 21:1-16'];
        evening[6][27] = ['Dan 6','Acts 21:17-36'];
        evening[6][28] = ['Dan 7','Acts 21:37‚ 22:22'];
        evening[6][29] = ['Dan 8','Acts 22:23‚ 23:11'];
        evening[6][30] = ['Dan 9','Acts 23:12-end'];
        evening[7][1] = ['Dan 10','Acts 24:1-23'];
        evening[7][2] = ['Dan 11 † 1-19','Acts 24:24‚ 25:12'];
        evening[7][3] = ['Dan 12','Acts 25:13-end'];
        evening[7][4] = ['Susanna','Acts 26'];
        evening[7][5] = ['Esth 1','Acts 27'];
        evening[7][6] = ['Esth 2','Acts 28:1-15'];
        evening[7][7] = ['Esth 3','Acts 28:16-end'];
        evening[7][8] = ['Esth 4','Philemon'];
        evening[7][9] = ['Esth 5','1 Tim 1:1-17'];
        evening[7][10] = ['Esth 6','1 Tim 1:18‚ 2 end'];
        evening[7][11] = ['Esth 7','1 Tim 3'];
        evening[7][12] = ['Esth 8','1 Tim 4'];
        evening[7][13] = ['Esth 9 & 10','1 Tim 5'];
        evening[7][14] = ['Ezra 1','1 Tim 6'];
        evening[7][15] = ['Ezra 3','Titus 1'];
        evening[7][16] = ['Ezra 4','Titus 2'];
        evening[7][17] = ['Ezra 5','Titus 3'];
        evening[7][18] = ['Ezra 6','2 Tim 1'];
        evening[7][19] = ['Ezra 7','2 Tim 2'];
        evening[7][20] = ['Ezra 8 † 21-36','2 Tim 3'];
        evening[7][21] = ['Ezra 9','2 Tim 4'];
        evening[7][22] = ['Ezra 10 † 1-16','John 1:1-28'];
        evening[7][23] = ['Neh 1','John 1:29-end'];
        evening[7][24] = ['Neh 2','John 2'];
        evening[7][25] = ['Neh 3 † 1-15','John 3:1-21'];
        evening[7][26] = ['Neh 4','John 3:22-end'];
        evening[7][27] = ['Neh 5','John 4:1-26'];
        evening[7][28] = ['Neh 6','John 4:27-end'];
        evening[7][29] = ['Neh 8','John 5:1-24'];
        evening[7][30] = ['Neh 9 † 1-15,26-38','John 5:25-end'];
        evening[7][31] = ['Neh 10 † 28-39','John 6:1-21'];
        evening[8][1] = ['Neh 12 † 27-47','John 6:22-40'];
        evening[8][2] = ['Neh 13 † 1-22,30-31','John 6:41-end'];
        evening[8][3] = ['Hos 1','John 7:1-24'];
        evening[8][4] = ['Hos 2','John 7:25-52'];
        evening[8][5] = ['Hos 3','John 7:53‚ 8:30'];
        evening[8][6] = ['Hos 4','John 8:31-end'];
        evening[8][7] = ['Hos 5','John 9'];
        evening[8][8] = ['Hos 6','John 10:1-21'];
        evening[8][9] = ['Hos 7','John 10:22-end'];
        evening[8][10] = ['Hos 8','John 11:1-44'];
        evening[8][11] = ['Hos 9','John 11:45-end'];
        evening[8][12] = ['Hos 10','John 12:1-19'];
        evening[8][13] = ['Hos 11','John 12:20-end'];
        evening[8][14] = ['Hos 12','John 13'];
        evening[8][15] = ['Hos 13','John 14:1-14'];
        evening[8][16] = ['Hos 14','John 14:15-end'];
        evening[8][17] = ['Joel 1','John 15:1-17'];
        evening[8][18] = ['Joel 2 † 1-17,28-32','John 15:18-end'];
        evening[8][19] = ['Joel 3','John 16:1-15'];
        evening[8][20] = ['Amos 1','John 16:16-end'];
        evening[8][21] = ['Amos 2','John 17'];
        evening[8][22] = ['Amos 3','John 18:1-27'];
        evening[8][23] = ['Amos 4','John 18:28-end'];
        evening[8][24] = ['Amos 5','John 19:1-37'];
        evening[8][25] = ['Amos 6','John 19:38-end'];
        evening[8][26] = ['Amos 7','John 20'];
        evening[8][27] = ['Amos 8','John 21'];
        evening[8][28] = ['Amos 9','Matt 1:1-17'];
        evening[8][29] = ['Obadiah','Matt 1:18-end'];
        evening[8][30] = ['Jonah 1','Matt 2'];
        evening[8][31] = ['Jonah 2','Matt 3'];
        evening[9][1] = ['Jonah 3','Matt 4'];
        evening[9][2] = ['Jonah 4','Matt 5:1-20'];
        evening[9][3] = ['Mic 1','Matt 5:21-48'];
        evening[9][4] = ['Mic 2','Matt 6:1-18'];
        evening[9][5] = ['Mic 3','Matt 6:19-end'];
        evening[9][6] = ['Mic 4','Matt 7'];
        evening[9][7] = ['Mic 5','Matt 8:1-17'];
        evening[9][8] = ['Mic 6','Matt 8:18-end'];
        evening[9][9] = ['Mic 7','Matt 9:1-17'];
        evening[9][10] = ['Nahum 1','Matt 9:18-34'];
        evening[9][11] = ['Nahum 2','Matt 9:35‚ 10:23'];
        evening[9][12] = ['Nahum 3','Matt 10:24-end'];
        evening[9][13] = ['Hab 1','Matt 11'];
        evening[9][14] = ['Hab 2','Matt 12:1-21'];
        evening[9][15] = ['Hab 3','Matt 12:22-end'];
        evening[9][16] = ['Zeph 1','Matt 13:1-23'];
        evening[9][17] = ['Zeph 2','Matt 13:24-43'];
        evening[9][18] = ['Zeph 3','Matt 13:44-end'];
        evening[9][19] = ['Hag 1','Matt 14'];
        evening[9][20] = ['Hag 2','Matt 15:1-28'];
        evening[9][21] = ['Zech 1','Matt 15:29‚ 16:12'];
        evening[9][22] = ['Zech 2','Matt 16:13-end'];
        evening[9][23] = ['Zech 3','Matt 17:1-23'];
        evening[9][24] = ['Zech 4','Matt 17:24‚ 18:14'];
        evening[9][25] = ['Zech 5','Matt 18:15-end'];
        evening[9][26] = ['Zech 6','Matt 19:1-15'];
        evening[9][27] = ['Zech 7','Matt 19:16‚ 20:16'];
        evening[9][28] = ['Zech 8','Matt 20:17-end'];
        evening[9][29] = ['Zech 9','Matt 21:1-22'];
        evening[9][30] = ['Zech 10','Matt 21:23-end'];
        evening[10][1] = ['Zech 11','Matt 22:1-33'];
        evening[10][2] = ['Zech 12','Matt 22:34‚ 23:12'];
        evening[10][3] = ['Zech 13','Matt 23:13-end'];
        evening[10][4] = ['Zech 14','Matt 24:1-28'];
        evening[10][5] = ['Mal 1','Matt 24:29-end'];
        evening[10][6] = ['Mal 2','Matt 25:1-30'];
        evening[10][7] = ['Mal 3','Matt 25:31-end'];
        evening[10][8] = ['Mal 4','Matt 26:1-30'];
        evening[10][9] = ['1 Macc 1 † 1-15,20-25,41-64','Matt 26:31-56'];
        evening[10][10] = ['1 Macc 2 † 1-28','Matt 26:57-end'];
        evening[10][11] = ['2 Macc 6','Matt 27:1-26'];
        evening[10][12] = ['2 Macc 7','Matt 27:27-56'];
        evening[10][13] = ['2 Macc 8 † 1-29','Matt 27:57‚ 28 end'];
        evening[10][14] = ['2 Macc 10 † 1-8,24-38','Mark 1:1-13'];
        evening[10][15] = ['1 Macc 7 † 1-6,23-50','Mark 1:14-31'];
        evening[10][16] = ['1 Macc 9 † 1-31','Mark 1:32-end'];
        evening[10][17] = ['1 Macc 13 † 1-30,41-42','Mark 2:1-22'];
        evening[10][18] = ['1 Macc 14 † 4-18,35-43','Mark 2:23‚ 3:12'];
        evening[10][19] = ['Isa 1','Mark 3:13-end'];
        evening[10][20] = ['Isa 2','Mark 4:1-34'];
        evening[10][21] = ['Isa 3','Mark 4:35‚ 5:20'];
        evening[10][22] = ['Isa 4','Mark 5:21-end'];
        evening[10][23] = ['Isa 5','Mark 6:1-29'];
        evening[10][24] = ['Isa 6','Mark 6:30-end'];
        evening[10][25] = ['Isa 7','Mark 7:1-23'];
        evening[10][26] = ['Isa 8','Mark 7:24‚ 8:10'];
        evening[10][27] = ['Isa 9','Mark 8:11-end'];
        evening[10][28] = ['Isa 10','Mark 9:1-29'];
        evening[10][29] = ['Isa 11','Mark 9:30-end'];
        evening[10][30] = ['Isa 12','Mark 10:1-31'];
        evening[10][31] = ['Isa 13','Mark 10:32-end'];
        evening[11][1] = ['Isa 14','Rev 19:1-16'];
        evening[11][2] = ['Isa 15','Mark 11:1-26'];
        evening[11][3] = ['Isa 16','Mark 11:27‚ 12:12'];
        evening[11][4] = ['Isa 17','Mark 12:13-34'];
        evening[11][5] = ['Isa 18','Mark 12:35‚ 13:13'];
        evening[11][6] = ['Isa 19','Mark 13:14-end'];
        evening[11][7] = ['Isa 20','Mark 14:1-25'];
        evening[11][8] = ['Isa 21','Mark 14:26-52'];
        evening[11][9] = ['Isa 22','Mark 14:53-end'];
        evening[11][10] = ['Isa 23','Mark 15'];
        evening[11][11] = ['Isa 24','Mark 16'];
        evening[11][12] = ['Isa 25','Luke 1:1-23'];
        evening[11][13] = ['Isa 26','Luke 1:24-56'];
        evening[11][14] = ['Isa 27','Luke 1:57-end'];
        evening[11][15] = ['Isa 28','Luke 2:1-21'];
        evening[11][16] = ['Isa 29','Luke 2:22-end'];
        evening[11][17] = ['Isa 30','Luke 3:1-22'];
        evening[11][18] = ['Isa 31','Luke 3:23-end'];
        evening[11][19] = ['Isa 32','Luke 4:1-30'];
        evening[11][20] = ['Isa 33','Luke 4:31-end'];
        evening[11][21] = ['Isa 34','Luke 5:1-16'];
        evening[11][22] = ['Isa 35','Luke 5:17-end'];
        evening[11][23] = ['Isa 36','Luke 6:1-19'];
        evening[11][24] = ['Isa 37','Luke 6:20-38'];
        evening[11][25] = ['Isa 38','Luke 6:39‚ 7:10'];
        evening[11][26] = ['Isa 39','Luke 7:11-35'];
        evening[11][27] = ['Isa 40','Luke 7:36-end'];
        evening[11][28] = ['Isa 41','Luke 8:1-21'];
        evening[11][29] = ['Isa 42','Luke 8:22-end'];
        evening[11][30] = ['Isa 43','Luke 9:1-17'];
        evening[12][1] = ['Isa 44','Luke 9:18-50'];
        evening[12][2] = ['Isa 45','Luke 9:51-end'];
        evening[12][3] = ['Isa 46','Luke 10:1-24'];
        evening[12][4] = ['Isa 47','Luke 10:25-end'];
        evening[12][5] = ['Isa 48','Luke 11:1-28'];
        evening[12][6] = ['Isa 49','Luke 11:29-end'];
        evening[12][7] = ['Isa 50','Luke 12:1-34'];
        evening[12][8] = ['Isa 51','Luke 12:35-53'];
        evening[12][9] = ['Isa 52','Luke 12:54‚ 13:9'];
        evening[12][10] = ['Isa 53','Luke 13:10-end'];
        evening[12][11] = ['Isa 54','Luke 14:1-24'];
        evening[12][12] = ['Isa 55','Luke 14:25‚ 15:10'];
        evening[12][13] = ['Isa 56','Luke 15:11-end'];
        evening[12][14] = ['Isa 57','Luke 16'];
        evening[12][15] = ['Isa 58','Luke 17:1-19'];
        evening[12][16] = ['Isa 59','Luke 17:20-end'];
        evening[12][17] = ['Isa 60','Luke 18:1-30'];
        evening[12][18] = ['Isa 61','Luke 18:31‚ 19:10'];
        evening[12][19] = ['Isa 62','Luke 19:11-28'];
        evening[12][20] = ['Isa 63','Luke 19:29-end'];
        evening[12][21] = ['Isa 64','Luke 20:1-26'];
        evening[12][22] = ['Isa 65','Luke 20:27‚ 21:4'];
        evening[12][23] = ['Isa 66','Luke 21:5-end'];
        evening[12][24] = ['Song of Songs 1','Luke 22:1-38'];
        evening[12][25] = ['Song of Songs 2','Luke 2:1-14'];
        evening[12][26] = ['Song of Songs 3','Luke 22:39-53'];
        evening[12][27] = ['Song of Songs 4','Luke 22:54-end'];
        evening[12][28] = ['Song of Songs 5','Luke 23:1-25'];
        evening[12][29] = ['Song of Songs 6','Luke:23:26-49'];
        evening[12][30] = ['Song of Songs 7','Luke 23:50‚ 24:12'];
        evening[12][31] = ['Song of Songs 8','Luke 24:13-end'];

        return evening;
    }

    postReading(reading) {
        if (reading === 'te-deum-laudamus') {
            return this.teDeumLaudamus();
        } else if (reading === 'benedictus') {
            return this.benedictus();
        } else if (reading === 'magnificat') {
            return this.magnificat();
        } else if (reading === 'nunc-dimittis') {
            return this.nuncDimittis();
        } else {
            throw "Lesson error: post-reading reading " + reading + " not found";
        }
    }

    teDeumLaudamus() {
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

    benedictus() {
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

    magnificat() {
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

    nuncDimittis() {
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
}

export default Lesson

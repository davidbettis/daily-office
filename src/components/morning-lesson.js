import React from 'react';

export class MorningLessonComponent extends React.Component {
    constructor() {
        super();

        var texts = {};
        for (var i = 1; i <= 12; i++) {
            texts[i] = {}
        }
        texts[1][1] = ['Gen 1','John 1:1-28'];
        texts[1][2] = ['Gen 2','John 1:29-end'];
        texts[1][3] = ['Gen 3','John 2'];
        texts[1][4] = ['Gen 4','John 3:1-21'];
        texts[1][5] = ['Gen 5','John 3:22-end'];
        texts[1][6] = ['Gen 6','Matt 2:1-12'];
        texts[1][7] = ['Gen 7','John 4:1-26'];
        texts[1][8] = ['Gen 8','John 4:27-end'];
        texts[1][9] = ['Gen 9','John 5:1-24'];
        texts[1][10] = ['Gen 10 † 1-9, 15-22, 30-32','John 5:25-end'];
        texts[1][11] = ['Gen 11 † 1-9, 27-32','John 6:1-21'];
        texts[1][12] = ['Gen 12','John 6:22-40'];
        texts[1][13] = ['Gen 13','John 6:41-end'];
        texts[1][14] = ['Gen 14','John 7:1-24'];
        texts[1][15] = ['Gen 15','John 7:25-52'];
        texts[1][16] = ['Gen 16','John 7:53—8:30'];
        texts[1][17] = ['Gen 17','John 8:31-end'];
        texts[1][18] = ['Gen 18','Matt 16:13-20'];
        texts[1][19] = ['Gen 19 † 1-29','John 9'];
        texts[1][20] = ['Gen 20','John 10:1-21'];
        texts[1][21] = ['Gen 21 † 1-21','John 10:22-end'];
        texts[1][22] = ['Gen 22','John 11:1-44'];
        texts[1][23] = ['Gen 23','John 11:45-end'];
        texts[1][24] = ['Gen 24 † 1-28, 53-58','John 12:1-19'];
        texts[1][25] = ['Acts 9:1-22','John 12:20-end'];
        texts[1][26] = ['Gen 25 † 7-11, 19-34','John 13'];
        texts[1][27] = ['Gen 26 † 1-25','John 14:1-14'];
        texts[1][28] = ['Gen 27 † 1-13, 18-36, 39-40','John 14:15-end'];
        texts[1][29] = ['Gen 28','John 15:1-17'];
        texts[1][30] = ['Gen 29 † 1-28','John 15:18-end'];
        texts[1][31] = ['Gen 30 † 1-2, 22-43','John 16:1-15'];
        texts[2][1] = ['Gen 31 † 1-3, 17-45','John 16:16-end'];
        texts[2][2] = ['Gen 32 † 1-13, 21-32','Luke 2:22-40'];
        texts[2][3] = ['Gen 33','John 17'];
        texts[2][4] = ['Gen 34','John 18:1-27'];
        texts[2][5] = ['Gen 35','John 18:28-end'];
        texts[2][6] = ['Gen 36  † 1-8','John 19:1-37'];
        texts[2][7] = ['Gen 37 † 3-8, 12-36','John 19:38-end'];
        texts[2][8] = ['Gen 38 † 1-26','John 20'];
        texts[2][9] = ['Gen 39','John 21'];
        texts[2][10] = ['Gen 40','Matt 1:1-17'];
        texts[2][11] = ['Gen 41 † 1-15, 25-40','Matt 1:18-end'];
        texts[2][12] = ['Gen 42 † 1-28','Matt 2'];
        texts[2][13] = ['Gen 43 † 1-10, 15-34','Matt 3'];
        texts[2][14] = ['Gen 44 † 1-20, 30-34','Matt 4'];
        texts[2][15] = ['Gen 45','Matt 5:1-20'];
        texts[2][16] = ['Gen 46 † 1-7, 28-34','Matt 5:21-48'];
        texts[2][17] = ['Gen 47 † 1-15, 23-31','Matt 6:1-18'];
        texts[2][18] = ['Gen 48','Matt 6:19-end'];
        texts[2][19] = ['Gen 49','Matt 7'];
        texts[2][20] = ['Gen 50','Matt 8:1-17'];
        texts[2][21] = ['Exod 1','Matt 8:18-end'];
        texts[2][22] = ['Exod 2','Matt 9:1-17'];
        texts[2][23] = ['Exod 3','Matt 9:18-34'];
        texts[2][24] = ['Acts 1:15-26','Matt 9:35—10:23'];
        texts[2][25] = ['Exod 4','Matt 10:24-end'];
        texts[2][26] = ['Exod 5','Matt 11'];
        texts[2][27] = ['Exod 6 † 1-13','Matt 12:1-21'];
        texts[2][28] = ['Exod 7','Matt 12:22-end'];
        texts[2][29] = ['2 Kings 2','Luke 24:44-53']; // XXX
        texts[3][1] = ['Exod 8','Matt 13:1-23'];
        texts[3][2] = ['Exod 9 † 1-29, 33-34','Matt 13:24-43'];
        texts[3][3] = ['Exod 10','Matt 13:44-end'];
        texts[3][4] = ['Exod 11','Matt 14'];
        texts[3][5] = ['Exod 12 † 1-20, 28-36','Matt 15:1-28'];
        texts[3][6] = ['Exod 13','Matt 15:29—16:12'];
        texts[3][7] = ['Exod 14 † 5-31','Matt 16:13-end'];
        texts[3][8] = ['Exod 15','Matt 17:1-23'];
        texts[3][9] = ['Exod 16 † 1-7, 11-33','Matt 17:24—18:14'];
        texts[3][10] = ['Exod 17','Matt 18:15-end'];
        texts[3][11] = ['Exod 18','Matt 19:1-15'];
        texts[3][12] = ['Exod 19','Matt 19:16—20:16'];
        texts[3][13] = ['Exod 20','Matt 20:17-end'];
        texts[3][14] = ['Exod 21 † 1-19, 22-29','Matt 21:1-22'];
        texts[3][15] = ['Exod 22','Matt 21:23-end'];
        texts[3][16] = ['Exod 23 † 1-13, 18-30','Matt 22:1-33'];
        texts[3][17] = ['Exod 24','Matt 22:34—23:12'];
        texts[3][18] = ['Exod 25 † 1-23, 31-40','Matt 23:13-end'];
        texts[3][19] = ['Exod 26 † 1-10, 15-16, 29-37','Matt 24:1-28'];
        texts[3][20] = ['Exod 27','Matt 24:29-end'];
        texts[3][21] = ['Exod 28 † 1-6, 15-21, 29-43','Matt 25:1-30'];
        texts[3][22] = ['Exod 29 † 1-18, 35-46','Matt 25:31-end'];
        texts[3][23] = ['Exod 30 † 1-3, 7-33','Matt 26:1-30'];
        texts[3][24] = ['Exod 31','Matt 26:31-56'];
        texts[3][25] = ['Exod 32 † 1-29','Luke 1:26-38'];
        texts[3][26] = ['Exod 33','Matt 26:57-end'];
        texts[3][27] = ['Exod 34 † 1-17, 27-35','Matt 27:1-26'];
        texts[3][28] = ['Exod 35 † 1-10, 20-35','Matt 27:27-56'];
        texts[3][29] = ['Exod 36 † 1-10, 18-20, 31-38','Matt 27:57—28 end'];
        texts[3][30] = ['Exod 37 † 1-11, 16-29','Mark 1:1-13'];
        texts[3][31] = ['Exod 38 † 1-23','Mark 1:14-31'];
        texts[4][1] = ['Exod 39 † 1-14, 27-43','Mark 1:32-end'];
        texts[4][2] = ['Exod 40 † 1, 16-38','Mark 2:1-22'];
        texts[4][3] = ['Lev 1','Mark 2:23—3:12'];
        texts[4][4] = ['Lev 8 † 1-24, 30-36','Mark 3:13-end'];
        texts[4][5] = ['Lev 10','Mark 4:1-34'];
        texts[4][6] = ['Lev 16 † 1-22, 29-34','Mark 4:35—5:20'];
        texts[4][7] = ['Lev 17','Mark 5:21-end'];
        texts[4][8] = ['Lev 18','Mark 6:1-29'];
        texts[4][9] = ['Lev 19 † 1-2, 9-37','Mark 6:30-end'];
        texts[4][10] = ['Lev 20','Mark 7:1-23'];
        texts[4][11] = ['Lev 23 † 9-32, 39-43','Mark 7:24—8:10'];
        texts[4][12] = ['Lev 26 † 3-20, 38-46','Mark 8:11-end'];
        texts[4][13] = ['Num 6','Mark 9:1-29'];
        texts[4][14] = ['Num 8 † 5-26','Mark 9:30-end'];
        texts[4][15] = ['Num 11 † 4-6, 10-33','Mark 10:1-31'];
        texts[4][16] = ['Num 12','Mark 10:32-end'];
        texts[4][17] = ['Num 13 † 1-3, 17-33','Mark 11:1-26'];
        texts[4][18] = ['Num 14 † 1-31','Mark 11:27—12:12'];
        texts[4][19] = ['Num 15 † 22-41','Mark 12:13-34'];
        texts[4][20] = ['Num 16 † 1-11, 20-38','Mark 12:35—13:13'];
        texts[4][21] = ['Num 17','Mark 13:14-end'];
        texts[4][22] = ['Num 18 † 1-24','Mark 14:1-25'];
        texts[4][23] = ['Num 20','Mark 14:26-52'];
        texts[4][24] = ['Num 21 † 4-9, 21-35','Mark 14:53-end'];
        texts[4][25] = ['Acts 12:11-25','Mark 15'];
        texts[4][26] = ['Num 22 † 1-35','Mark 16'];
        texts[4][27] = ['Num 23 † 1-26','Luke 1:1-23'];
        texts[4][28] = ['Num 24','Luke 1:24-56'];
        texts[4][29] = ['Num 25','Luke 1:57-end'];
        texts[4][30] = ['Deut 1 † 1-21, 26-33','Luke 2:1-21'];
        texts[5][1] = ['Deut 2 † 1-9, 14-19, 24-37','Luke 2:22-end'];
        texts[5][2] = ['Deut 3','Luke 3:1-22'];
        texts[5][3] = ['Deut 4 † 1-18, 24-40','Luke 3:23-end'];
        texts[5][4] = ['Deut 5','Luke 4:1-30'];
        texts[5][5] = ['Deut 6','Luke 4:31-end'];
        texts[5][6] = ['Deut 7','Luke 5:1-16'];
        texts[5][7] = ['Deut 8','Luke 5:17-end'];
        texts[5][8] = ['Deut 9','Luke 6:1-19'];
        texts[5][9] = ['Deut 10','Luke 6:20-38'];
        texts[5][10] = ['Deut 11','Luke 6:39—7:10'];
        texts[5][11] = ['Deut 12','Luke 7:11-35'];
        texts[5][12] = ['Deut 13','Luke 7:36-end'];
        texts[5][13] = ['Deut 14','Luke 8:1-21'];
        texts[5][14] = ['Deut 15','Luke 8:22-end'];
        texts[5][15] = ['Deut 16','Luke 9:1-17'];
        texts[5][16] = ['Deut 17','Luke 9:18-50'];
        texts[5][17] = ['Deut 18','Luke 9:51-end'];
        texts[5][18] = ['Deut 19','Luke 10:1-24'];
        texts[5][19] = ['Deut 20','Luke 10:25-end'];
        texts[5][20] = ['Deut 21','Luke 11:1-28'];
        texts[5][21] = ['Deut 22','Luke 11:29-end'];
        texts[5][22] = ['Deut 23','Luke 12:1-34'];
        texts[5][23] = ['Deut 24','Luke 12:35-53'];
        texts[5][24] = ['Deut 25','Luke 12:54—13:9'];
        texts[5][25] = ['Deut 26','Luke 13:10-end'];
        texts[5][26] = ['Deut 27','Luke 14:1-24'];
        texts[5][27] = ['Deut 28 † 1-25, 64-68','Luke 14:25—15:10'];
        texts[5][28] = ['Deut 29','Luke 15:11-end'];
        texts[5][29] = ['Deut 30','Luke 16'];
        texts[5][30] = ['Deut 31','Luke 17:1-19'];
        texts[5][31] = ['Deut 32 † 1-10, 15-22, 39-52','Luke 1:39-56'];
        texts[6][1] = ['Deut 33','Luke 17:20-end'];
        texts[6][2] = ['Deut 34','Luke 18:1-30'];
        texts[6][3] = ['Josh 1','Luke 18:31—19:10'];
        texts[6][4] = ['Josh 2','Luke 19:11-28'];
        texts[6][5] = ['Josh 3','Luke 19:29-end'];
        texts[6][6] = ['Josh 4','Luke 20:1-26'];
        texts[6][7] = ['Josh 5','Luke 20:27—21:4'];
        texts[6][8] = ['Josh 6','Luke 21:5-end'];
        texts[6][9] = ['Josh 7','Luke 22:1-38'];
        texts[6][10] = ['Josh 8 † 1-22, 30-35','Luke 22:39-53'];
        texts[6][11] = ['Acts 4:32-37','Luke 22:54-end'];
        texts[6][12] = ['Josh 9','Luke 23:1-25'];
        texts[6][13] = ['Josh 10 † 1-27, 40-43','Luke:23:26-49'];
        texts[6][14] = ['Josh 14 † 5-15','Luke 23:50—24:12'];
        texts[6][15] = ['Josh 22   † 7-31','Luke 24:13-end'];
        texts[6][16] = ['Josh 23','Gal 1'];
        texts[6][17] = ['Josh 24 † 1-31','Gal 2'];
        texts[6][18] = ['Judg 1 † 1-21','Gal 3'];
        texts[6][19] = ['Judg 2 † 6-23','Gal 4'];
        texts[6][20] = ['Judg 3 † 7-30','Gal 5'];
        texts[6][21] = ['Judg 4','Gal 6'];
        texts[6][22] = ['Judg 5 † 1-5, 19-31 1','Thess 1'];
        texts[6][23] = ['Judg 6 † 1, 6, 11-24, 33-40 1','Thess 2:1-16'];
        texts[6][24] = ['1 Thess 2:17—3 end','Matt 14:1-13'];
        texts[6][25] = ['Judg 7 † 1-8, 16-25','1 Thess 4:1-12'];
        texts[6][26] = ['Judg 8 † 4-23, 28','1 Thess 4:13—5:11'];
        texts[6][27] = ['Judg 9 † 1-6, 22-25, 43-56','1 Thess 5:12-end'];
        texts[6][28] = ['Judg 10 † 6-18','2 Thess 1'];
        texts[6][29] = ['2 Thess 2','2 Pet 3:14-end'];
        texts[6][30] = ['Judg 11 † 1-11, 29-40','2 Thess 3'];
        texts[7][1] = ['Judg 12 1','Cor 1:1-25'];
        texts[7][2] = ['Judg 13 1','Cor 1:26—2 end'];
        texts[7][3] = ['Judg 14 1','Cor 3'];
        texts[7][4] = ['Judg 15 1','Cor 4:1-17'];
        texts[7][5] = ['Judg 16 1','Cor 4:18—5 end'];
        texts[7][6] = ['Ruth 1 1','Cor 6'];
        texts[7][7] = ['Ruth 2 1','Cor 7'];
        texts[7][8] = ['Ruth 3 1','Cor 8'];
        texts[7][9] = ['Ruth 4 1','Cor 9'];
        texts[7][10] = ['1 Sam 1 † 1-20 1','Cor 10'];
        texts[7][11] = ['1 Sam 2 † 1-21 1','Cor 11'];
        texts[7][12] = ['1 Sam 3 1','Cor 12'];
        texts[7][13] = ['1 Sam 4 1','Cor 13'];
        texts[7][14] = ['1 Sam 5 1','Cor 14:1-19'];
        texts[7][15] = ['1 Sam 6 † 1-15','1 Cor 14:20-end'];
        texts[7][16] = ['1 Sam 7','1 Cor 15:1-34'];
        texts[7][17] = ['1 Sam 8','1 Cor 15:35-end'];
        texts[7][18] = ['1 Sam 9','1 Cor 16'];
        texts[7][19] = ['1 Sam 10','2 Cor 1:1—2:11'];
        texts[7][20] = ['1 Sam 11','2 Cor 2:12—3 end'];
        texts[7][21] = ['1 Sam 12','2 Cor 4'];
        texts[7][22] = ['2 Cor 5','Luke 7:36—8:3'];
        texts[7][23] = ['1 Sam 13','2 Cor 6'];
        texts[7][24] = ['1 Sam 14 † 1-15,20,24-30','2 Cor 7'];
        texts[7][25] = ['2 Cor 8','Mark 1:14-20'];
        texts[7][26] = ['1 Sam 15','2 Cor 9'];
        texts[7][27] = ['1 Sam 16','2 Cor 10'];
        texts[7][28] = ['1 Sam 17 † 1-11,26-27,31-51','2 Cor 11'];
        texts[7][29] = ['1 Sam 18','2 Cor 12:1-13'];
        texts[7][30] = ['1 Sam 19','2 Cor 12:14—13 end'];
        texts[7][31] = ['1 Sam 20 † 1-7,24-42','Rom 1'];
        texts[8][1] = ['1 Sam 21','Rom 2'];
        texts[8][2] = ['1 Sam 22','Rom 3'];
        texts[8][3] = ['1 Sam 23','Rom 4'];
        texts[8][4] = ['1 Sam 24','Rom 5'];
        texts[8][5] = ['1 Sam 25 † 1-19, 23-25, 32-42','Rom 6'];
        texts[8][6] = ['Rom 7','Mark 9:2-10'];
        texts[8][7] = ['1 Sam 26','Rom 8:1-17'];
        texts[8][8] = ['1 Sam 27','Rom 8:18-end'];
        texts[8][9] = ['1 Sam 28','Rom 9'];
        texts[8][10] = ['1 Sam 29','Rom 10'];
        texts[8][11] = ['1 Sam 30 † 1-25','Rom 11'];
        texts[8][12] = ['1 Sam 31','Rom 12'];
        texts[8][13] = ['2 Sam 1','Rom 13'];
        texts[8][14] = ['2 Sam 2 † 1-17, 26-31','Rom 14'];
        texts[8][15] = ['2 Sam 3 † 6-11, 17-39','Luke 1:26-38'];
        texts[8][16] = ['2 Sam 4','Rom 15'];
        texts[8][17] = ['2 Sam 5','Rom 16'];
        texts[8][18] = ['2 Sam 6','Phil 1:1-11'];
        texts[8][19] = ['2 Sam 7','Phil 1:12-end'];
        texts[8][20] = ['2 Sam 8','Phil 2:1-11'];
        texts[8][21] = ['2 Sam 9','Phil 2:12-end'];
        texts[8][22] = ['2 Sam 10','Phil 3'];
        texts[8][23] = ['2 Sam 11','Phil 4'];
        texts[8][24] = ['Col 1:1-20','Luke 6:12-16'];
        texts[8][25] = ['2 Sam 12 † 1-25','Col 1:21—2:7'];
        texts[8][26] = ['2 Sam 13 † 1-29, 38-39','Col 2:8-19'];
        texts[8][27] = ['2 Sam 14 † 1-21, 28','Col 2:20—3:11'];
        texts[8][28] = ['2 Sam 15 † 1-18, 23-25, 32-34','Col 3:12-end'];
        texts[8][29] = ['2 Sam 16','Col 4'];
        texts[8][30] = ['2 Sam 17 † 1-23','Philemon'];
        texts[8][31] = ['2 Sam 18 † 1-15, 19-33','Eph 1:1-14'];
        texts[9][1] = ['2 Sam 19 † 1-30','Eph 1:15-end'];
        texts[9][2] = ['2 Sam 20','Eph 2:1-10'];
        texts[9][3] = ['2 Sam 21','Eph 2:11-end'];
        texts[9][4] = ['2 Sam 22 † 1-7, 14-20, 32-51','Eph 3'];
        texts[9][5] = ['2 Sam 23 † 1-23','Eph 4:1-16'];
        texts[9][6] = ['2 Sam 24','Eph 4:17-end'];
        texts[9][7] = ['1 Chron 22','Eph 5:1-17'];
        texts[9][8] = ['1 Kings 1 † 1-18, 29-40','Eph 5:18-end'];
        texts[9][9] = ['1 Chron 28','Eph 6'];
        texts[9][10] = ['1 Kings 2 † 1-25','Heb 1'];
        texts[9][11] = ['1 Kings 3','Heb 2'];
        texts[9][12] = ['1 Kings 4 † 1-6, 20-34','Heb 3'];
        texts[9][13] = ['1 Kings 5','Heb 4:1-13'];
        texts[9][14] = ['Heb 4:14—5:10','John 12:23-33'];
        texts[9][15] = ['1 Kings 6 † 1-7, 11-30, 37-38','Heb 5:11—6 end'];
        texts[9][16] = ['1 Kings 7 † 1-14, 40-44, 47-51','Heb 7'];
        texts[9][17] = ['1 Kings 8 † 1-11, 22-30, 54-63','Heb 8'];
        texts[9][18] = ['1 Kings 9 † 1-9, 15-28','Heb 9:1-14'];
        texts[9][19] = ['1 Kings 10  † 1-13, 23-29','Heb 9:15-end'];
        texts[9][20] = ['1 Kings 11 † 1-14, 23-33, 41-43','Heb 10:1-18'];
        texts[9][21] = ['Heb 10:19-end','Matt 9:9-13'];
        texts[9][22] = ['1 Kings 12 † 1-20, 25-30','Heb 11'];
        texts[9][23] = ['1 Kings 13 † 1-25, 33-34','Heb 12:1-17'];
        texts[9][24] = ['1 Kings 14','Heb 12:18-end'];
        texts[9][25] = ['2 Chron 12','Heb 13'];
        texts[9][26] = ['2 Chron 13','Jas 1'];
        texts[9][27] = ['2 Chron 14','Jas 2:1-13'];
        texts[9][28] = ['2 Chron 15','Jas 2:14-end'];
        texts[9][29] = ['Rev 12:7-12','Jas 3'];
        texts[9][30] = ['2 Chron 16','Jas 4'];
        texts[10][1] = ['1 Kings 15 † 1-30','Jas 5'];
        texts[10][2] = ['1 Kings 16 † 1-4, 8-19, 23-34','1 Pet 1:1-21'];
        texts[10][3] = ['1 Kings 17 1','Pet 1:22—2:10'];
        texts[10][4] = ['1 Kings 18 † 1-8, 17-46','1 Pet 2:11—3:7'];
        texts[10][5] = ['1 Kings 19','1 Pet 3:8—4:6'];
        texts[10][6] = ['1 Kings 20 † 1, 13, 21-43','1 Pet 4:7-end'];
        texts[10][7] = ['1 Kings 21','1 Pet 5'];
        texts[10][8] = ['1 Kings 22 † 1-23,29-38','2 Pet 1'];
        texts[10][9] = ['2 Chron 20','2 Pet 2'];
        texts[10][10] = ['2 Kings 1','2 Pet 3'];
        texts[10][11] = ['2 Kings 2','Jude'];
        texts[10][12] = ['2 Kings 3 1','John 1:1—2:6'];
        texts[10][13] = ['2 Kings 4 † 8-37 1','John 2:7-end'];
        texts[10][14] = ['2 Kings 5','1 John 3:1-10'];
        texts[10][15] = ['2 Kings 6 † 1-24','1 John 3:11—4:6'];
        texts[10][16] = ['2 Kings 7','1 John 4:7-end'];
        texts[10][17] = ['2 Kings 8 † 1-19,25-27','1 John 5'];
        texts[10][18] = ['Luke 2','John Luke 1:1-4'];
        texts[10][19] = ['2 Kings 9 † 1-26,30-37','3 John'];
        texts[10][20] = ['2 Kings 10 † 1-11,18-31','Acts 1:1-14'];
        texts[10][21] = ['2 Kings 11 † 1-16,23-27','Acts 1:15-end'];
        texts[10][22] = ['2 Kings 12','Acts 2:1-21'];
        texts[10][23] = ['James','Jer.  Acts 2:22-end James 1'];
        texts[10][24] = ['2 Kings 13','Acts 3:1—4:4'];
        texts[10][25] = ['2 Kings 14','Acts 4:5-31'];
        texts[10][26] = ['2 Chron 26','Acts 4:32—5:11'];
        texts[10][27] = ['2 Kings 15 † 1-29','Acts 5:12-end'];
        texts[10][28] = ['Acts 6:1—7:16','John 14:15-31'];
        texts[10][29] = ['2 Kings 16','Acts 7:17-34'];
        texts[10][30] = ['2 Kings 17 † 1-28, 41','Acts 7:35—8:3'];
        texts[10][31] = ['2 Chron 28','Acts 8:4-25'];
        texts[11][1] = ['Heb 11:32—12:2','Acts 8:26-end'];
        texts[11][2] = ['2 Chron 29 † 1-11,20-30,35-36','Acts 9:1-31'];
        texts[11][3] = ['2 Chron 30 † 1-22,26-27','Acts 9:32-end'];
        texts[11][4] = ['2 Kings 18 † 1-13,17-30,35-37','Acts 10:1-23'];
        texts[11][5] = ['2 Kings 19 † 1-20,29-31,35-37','Acts 10:24-end'];
        texts[11][6] = ['2 Kings 20','Acts 11:1-18'];
        texts[11][7] = ['2 Chron 33','Acts 11:19-end'];
        texts[11][8] = ['2 Kings 21','Acts 12:1-24'];
        texts[11][9] = ['2 Kings 22','Acts 12:25—13:12'];
        texts[11][10] = ['2 Kings 23 † 1-20, 26-30','Acts 13:13-43'];
        texts[11][11] = ['2 Kings 24','Acts 13:44—14:7'];
        texts[11][12] = ['2 Kings 25 † 1-22, 25-30','Acts 14:8-end'];
        texts[11][13] = ['Judith 4','Acts 15:1-21'];
        texts[11][14] = ['Judith 8','Acts 15:22-35'];
        texts[11][15] = ['Judith 9','Acts 15:36—16:5'];
        texts[11][16] = ['Judith 10','Acts 16:6-end'];
        texts[11][17] = ['Judith 11','Acts 17:1-15'];
        texts[11][18] = ['Judith 12','Acts 17:16-end'];
        texts[11][19] = ['Judith 13','Acts 18:1-23'];
        texts[11][20] = ['Judith 14','Acts 18:24—19:7'];
        texts[11][21] = ['Judith 15','Acts 19:8-20'];
        texts[11][22] = ['Judith 16','Acts 19:21-end'];
        texts[11][23] = ['Ecclesiasticus 1','Acts 20:1-16'];
        texts[11][24] = ['Ecclesiasticus 2','Acts 20:17-end'];
        texts[11][25] = ['Ecclesiasticus 4 † 1-19','Acts 21:1-16'];
        texts[11][26] = ['Ecclesiasticus 6 † 5-31','Acts 21:17-36'];
        texts[11][27] = ['Ecclesiasticus 7 † 1-21, 27-36','Acts 21:37—22:22'];
        texts[11][28] = ['Ecclesiasticus 9','Acts 22:23—23:11'];
        texts[11][29] = ['Ecclesiasticus 10 † 1-24','Acts 23:12-end'];
        texts[11][30] = ['Ecclesiasticus 11 † 1-9,18-28','John 1:35-42'];
        texts[12][1] = ['Ecclesiasticus 14','Acts 24:1-23'];
        texts[12][2] = ['Ecclesiasticus 17','Acts 24:24—25:12'];
        texts[12][3] = ['Ecclesiasticus 18 † 1-26, 30-33','Acts 25:13-end'];
        texts[12][4] = ['Ecclesiasticus 21','Acts 26'];
        texts[12][5] = ['Ecclesiasticus 34','Acts 27'];
        texts[12][6] = ['Ecclesiasticus 38 † 1-15, 24-34','Acts 28:1-15'];
        texts[12][7] = ['Ecclesiasticus 39 † 1-11, 16-35','Acts 28:16-end'];
        texts[12][8] = ['Ecclesiasticus 44','Rev 1'];
        texts[12][9] = ['Ecclesiasticus 45','Rev 2:1-17'];
        texts[12][10] = ['Ecclesiasticus 46','Rev 2:18—3:6'];
        texts[12][11] = ['Ecclesiasticus 47','Rev 3:7-end'];
        texts[12][12] = ['Ecclesiasticus 48','Rev 4'];
        texts[12][13] = ['Ecclesiasticus 49','Rev 5'];
        texts[12][14] = ['Ecclesiasticus 50','Rev 6'];
        texts[12][15] = ['Ecclesiasticus 51','Rev 7'];
        texts[12][16] = ['Wisdom 1','Rev 8'];
        texts[12][17] = ['Wisdom 2','Rev 9'];
        texts[12][18] = ['Wisdom 3','Rev 10'];
        texts[12][19] = ['Wisdom 4','Rev 11'];
        texts[12][20] = ['Wisdom 5','Rev 12'];
        texts[12][21] = ['Rev 13','John 14:1-7'];
        texts[12][22] = ['Wisdom 6','Rev 14'];
        texts[12][23] = ['Wisdom 7','Rev 15'];
        texts[12][24] = ['Wisdom 8','Rev 16'];
        texts[12][25] = ['Isa 9:1-8','Rev 17'];
        texts[12][26] = ['Acts 6:8—7:6, 7:44-60','Rev 18'];
        texts[12][27] = ['Rev 19','John 21:9-25'];
        texts[12][28] = ['Jer 31:1-17','Rev 20'];
        texts[12][29] = ['Wisdom 9','Rev 21:1-14'];
        texts[12][30] = ['Wisdom 10','Rev 21:15—22:5'];
        texts[12][31] = ['Wisdom 11','Rev 22:6-end'];

        var now = new Date();
        var month = now.getMonth() + 1; // 1-12
        var day = now.getDate(); // 1-31

        var readings = texts[month][day];
        this.firstReading = readings[0];
        this.secondReading = readings[1];
    }

    render() {
        return (
            <div>
                <p>A reading from { this.firstReading }.</p>
                <p>
                    <div class="officiant">The Word of the Lord.</div>
                    <div class="people">Thanks be to God.</div>
                </p>

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

                <p>A reading from { this.secondReading }.</p>
                <p>
                    <div class="officiant">The Word of the Lord.</div>
                    <div class="people">Thanks be to God.</div>
                </p>

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
}

export default MorningLessonComponent

import React from 'react';

// DailyCollect prints out a collect for the current day of the week
export class DailyCollect extends React.Component {

    // Constructs a new DailyCollect
    //      props.collects: 'morning' or 'evening'
    constructor(props) {
        super(props);

        if (this.props.collects === 'morning') {
            this.collects = [
                // Sunday
                'A Collect for Strength to Await Christ’s Return. O God our King, by the resurrection of your Son Jesus Christ on the first day of the week, you conquered sin, put death to flight, and gave us the hope of everlasting life: Redeem all our days by this victory; forgive our sins, banish our fears, make us bold to praise you and to do your will; and steel us to wait for the consummation of your kingdom on the last great Day; through the same Jesus Christ our Lord. Amen.',
                // Monday
                'A Collect for the Renewal of Life. O God, the King eternal, whose light divides the day from the night and turns the shadow of death into the morning: Drive far from us all wrong desires, incline our hearts to keep your law, and guide our feet into the way of peace; that, having done your will with cheerfulness during the day, we may, when night comes, rejoice to give you thanks; through Jesus Christ our Lord. Amen.',
                // Tuesday
                'A Collect for Peace. O God, the author of peace and lover of concord, to know you is eternal life and to serve you is perfect freedom: Defend us, your humble servants, in all assaults of our enemies; that we, surely trusting in your defense, may not fear the power of any adversaries, through the might of Jesus Christ our Lord. Amen.',
                // Wednesday
                'A Collect for Grace. O Lord, our heavenly Father, almighty and everlasting God, you have brought us safely to the beginning of this day: Defend us by your mighty power, that we may not fall into sin nor run into any danger; and that guided by your Spirit, we may do what is righteous in your sight; through Jesus Christ our Lord. Amen.',
                // Thursday
                'A Collect for Guidance. Heavenly Father, in you we live and move and have our being: We humbly pray you so to guide and govern us by your Holy Spirit, that in all the cares and occupations of our life we may not forget you, but may remember that we are ever walking in your sight; through Jesus Christ our Lord. Amen.',
                // Friday
                'A Collect for Endurance. Almighty God, whose most dear Son went not up to joy but first he suffered pain, and entered not into glory before he was crucified: Mercifully grant that we, walking in the way of the cross, may find it none other than the way of life and peace; through Jesus Christ your Son our Lord. Amen.',
                // Saturday
                'A Collect for Sabbath Rest. Almighty God, who after the creation of the world rested from all your works and sanctified a day of rest for all your creatures: Grant that we, putting away all earthly anxieties, may be duly prepared for the service of your sanctuary, and that our rest here upon earth may be a preparation for the eternal rest promised to your people in heaven; through Jesus Christ our Lord. Amen.'
            ]
        } else if (this.props.collects === 'evening') {
            this.collects = [
                // Sunday
                'A Collect for Resurrection Hope.  Lord God, whose Son our Savior Jesus Christ triumphed over the powers of death and prepared for us our place in the new Jerusalem: Grant that we, who have this day given thanks for his resurrection, may praise you in that City of which he is the light, and where he lives and reigns for ever and ever. Amen.',
                // Monday
                'A Collect for Peace Monday.  O God, the source of all holy desires, all good counsels, and all just works: Give to your servants that peace which the world cannot give, that our hearts may be set to obey your commandments, and that we, being defended from the fear of our enemies, may pass our time in rest and quietness, through the merits of Jesus Christ our Savior. Amen.',
                // Tuesday
                'A Collect for Aid against Perils.  Lighten our darkness, we beseech you, O Lord; and by your great mercy defend us from all perils and dangers of this night; for the love of your only Son, our Savior Jesus Christ. Amen.',
                // Wednesday
                'A Collect for Protection.  O God, the life of all who live, the light of the faithful, the strength of those who labor, and the repose of the dead: We thank you for the blessings of the day that is past, and humbly ask for your protection through the coming night. Bring us in safety to the morning hours; through him who died and rose again for us, your Son our Savior Jesus Christ. Amen.',
                // Thursday
                'A Collect for the Presence of Christ. Lord Jesus, stay with us, for evening is at hand and the day is past; be our companion in the way, kindle our hearts, and awaken hope, that we may know you as you are revealed in Scripture and the breaking of bread. Grant this for the sake of your love. Amen.',
                // Friday
                'A Collect for Faith Friday. Lord Jesus Christ, by your death you took away the sting of death: Grant to us your servants so to follow in faith where you have led the way, that we may at length fall asleep peacefully in you and wake up in your likeness; for your tender mercies’ sake. Amen.',
                // Saturday
                'A Collect for the Eve of Worship.  O God, the source of eternal light: Shed forth your unending day upon us who watch for you, that our lips may praise you, our lives may bless you, and our worship on the morrow give you glory; through Jesus Christ our Lord. Amen.'
            ];
        } else {
            throw "DailyCollect error: must specify morning or evening";
        }
    }

    render() {
        var day = new Date().getDay(); // day of the week; 0=Sunday, 1=Monday, ...
        var selectedCollect = this.collects[day];
        return (<div><p>{ selectedCollect }</p></div>);
    }
}

export default DailyCollect

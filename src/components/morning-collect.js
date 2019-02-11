import React from 'react';

// MorningCollectComponent prints out a collect for the current day of the week
export class MorningCollectComponent extends React.Component {

    // Constructs a new MorningCollectComponent
    constructor(props) {
        super(props);

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
    }

    render() {
        var day = new Date().getDay(); // day of the week; 0=Sunday, 1=Monday, ...
        var selectedCollect = this.collects[day];
        return (<div><span>{ selectedCollect }</span></div>);
    }
}

export default MorningCollectComponent

import React from 'react';

export class Collect extends React.Component {
    constructor() {
        super();

        this.state = {
            isSaturday: new Date().getDay() === 6
        };
    }

    render() {
        return (
          <div>
            {this.state.isSaturday === true &&
                <p>
                <i>A collect for Saturdays.</i> We give you thanks, O God, for revealing your Son Jesus Christ to us by the light of his resurrection: Grant that as we sing your glory at the close of this day, our joy may abound in the morning as we celebrate the Paschal mystery; through Jesus Christ our Lord.  <i>Amen.</i>
                </p>
            }

            <p>
            Visit this place, O Lord, and drive far from it all snares of the enemy; let your holy angels dwell with us to preserve us in peace; and let your blessing be upon us always; through Jesus Christ our Lord.  <i>Amen.</i>
            </p>
            
            <p>
            Lighten our darkness, we beseech you, O Lord; and by your great mercy defend us from all perils and dangers of this night; for the love of your only Son, our Savior Jesus Christ. <i>Amen.</i>
            </p>
            
            <p>
            Be present, O merciful God, and protect us through the hours of this night, so that we who are wearied by the changes and chances of this life may rest in your eternal changelessness; through Jesus Christ our Lord.  <i>Amen.</i>
            </p>
            
            <p>
            Look down, O Lord, from your heavenly throne, illumine this night with your celestial brightness, and from the children of light banish the deeds of darkness; through Jesus Christ our Lord.  <i>Amen.</i>
            </p>
            
          </div>
        );
    }
}

export default Collect;

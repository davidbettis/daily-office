import React from 'react'
import PropTypes from 'prop-types'

function ConfessionIntroShort (props) {
  return (<p>Let us humbly confess our sins to Almighty God.</p>)
}

function ConfessionIntroLong (props) {
  return (<p>Dearly beloved, the Scriptures teach us to acknowledge our many sins and offenses, not concealing them from our heavenly Father, but confessing them with humble and obedient hearts that we may obtain forgiveness by his infinite goodness and mercy. We ought at all times humbly to acknowledge our sins before Almighty God, but especially when we come together in his presence to give thanks for the great benefits we have received at his hands, to declare his most worthy praise, to hear his holy Word, and to ask, for ourselves and others, those things necessary for our life and our salvation. Therefore, come with me to the throne of heavenly grace.</p>)
}

function ConfessionAfterShort (props) {
  return (<p>The Almighty and merciful Lord grant you absolution and remission of all your sins, true repentance, amendment of life, and the grace and consolation of his Holy Spirit. <i>Amen.</i></p>)
}

function ConfessionAfterLong (props) {
  return (<p>Almighty God, the Father of our Lord Jesus Christ, desires not the death of sinners, but that they may turn from their wickedness and live. He has empowered and commanded his ministers to pronounce to his people, being penitent, the absolution and remission of their sins. He pardons and absolves all who truly repent and genuinely believe his holy Gospel. For this reason, we beseech him to grant us true repentance and his Holy Spirit, that our present deeds may please him, the rest of our lives may be pure and holy, and that at the last we may come to his eternal joy; through Jesus Christ our Lord. <i>Amen.</i></p>)
}

// Confession component
//  props.intro: style for the intro. 'short' or 'long'
//  props.after: style for the after section. 'short' or 'long'
function Confession (props) {
  var intro
  if (props.intro === 'short') {
    intro = (<ConfessionIntroShort />)
  } else if (props.intro === 'long') {
    intro = (<ConfessionIntroLong />)
  } else {
    throw Error('Unknown intro style: ' + intro)
  }

  var after
  if (props.after === 'short') {
    after = (<ConfessionAfterShort />)
  } else if (props.after === 'long') {
    after = (<ConfessionAfterLong />)
  } else {
    throw Error('Unknown after style: ' + after)
  }

  return (
    <div>
      <p className="section">Confession of Sin</p>

      <p className="instructions">The Officiant says to the People</p>

      { intro }

      <p className="instructions">Silence is kept. All kneeling the Officiant and People say</p>

      <p>
    Almighty and most merciful Father,<br/>
    we have erred and strayed from your ways like lost sheep.<br/>
    We have followed too much the devices and desires of our own hearts.<br/>
    We have offended against your holy laws.<br/>
    We have left undone those things which we ought to have done,<br/>
    and we have done those things which we ought not to have done;<br/>
    and apart from your grace, there is no health in us.<br/>
    O Lord, have mercy upon us.<br/>
    Spare all those who confess their faults.<br/>
    Restore all those who are penitent, according to your promises declared<br/>
    to all people in Christ Jesus our Lord;<br/>
    And grant, O most merciful Father, for his sake,<br/>
    that we may now live a godly, righteous, and sober life,<br/>
     to the glory of your holy Name. <i>Amen.</i><br/>
      </p>

      <p className="instructions">The Officiant alone stands and says</p>

      { after }

      <p className="instructions">A participant remains kneeling and prays</p>

      <p>
    Grant your faithful people, merciful Lord, pardon and peace; that we may be cleansed from all our sins, and serve you with a quiet mind; through Jesus Christ our Lord. <i>Amen</i>.
      </p>

    </div>
  )
}

Confession.propTypes = {
  intro: PropTypes.string.isRequired,
  after: PropTypes.string.isRequired
}

export default Confession

import React from 'react'

import AlleluiaComponent from '../components/alleluia'
import CollectComponent from '../components/collect'
import DateComponent from '../components/date'

const ComplineComponent = () => (
  <div>
    <h1>Night Prayer</h1>

    <DateComponent /> 

    <div class="prayer">
    
    <p>
    <div class="instructions">The Officiant begins</div>
    <div>The Lord Almighty grant us a peaceful night and a perfect end.  <i>Amen.</i></div>
    </p>
    
    <p>
    <div class="officiant">Our help is in the Name of the Lord;</div>
    <div class="people">The maker of heaven and earth.</div>
    </p>
    
    <p class="instructions">The Officiant continues</p>
    
    <p>Let us humbly confess our sins to Almighty God.</p>
    
    <p class="instructions">Silence may be kept. The Officiant and People then say</p>
    
    <p>
    Almighty God and Father, we confess to you,<br/>
    to one another, and to the whole company of heaven,<br/>
    that we have sinned, through our own fault,<br/>
    in thought, and word, and deed, <br/>
    and in what we have left undone.<br/>
    For the sake of your Son, our Lord Jesus Christ,<br/>
    have mercy upon us, forgive us our sins,<br/>
    and by the power of your Holy Spirit <br/>
    raise us up to serve you in newness of life,<br/>
    to the glory of your Name. <i>Amen.</i><br/>
    </p>
    
    <p class="instructions">The Officiant alone says</p>
    
    <p>
    May Almighty God grant us forgiveness of all our sins,<br/>
    and the grace and comfort of the Holy Spirit.  <i>Amen.</i>
    </p>
    
    <p>
    <p>
    <div class="officiant">O God, make speed to save us.</div>
    <div class="people">O Lord, make haste to help us.</div>
    <div class="officiant">Glory be to the Father, and to the Son, and to the Holy Spirit;</div>
    <div class="people">as it was in the beginning, is now, and ever shall be, world without end. Amen.</div>
    </p>
    
    <AlleluiaComponent notLent={true} />
    </p>
    
    <p class="instructions">
    One or more of the following, or some other suitable Psalm, is sung or said.
    </p>
    
    <p>
    <b>Psalm 4</b>  <i>Cum invocarem</i>
    
    <div class="psalm-verse">
    <span class="verse">1</span> Hear me when I call, O God of my righteousness; *<br/>
    <div class="psalm-verse-response">
    you set me free when I was in trouble;<br/>
    have mercy upon me, and hear my prayer.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">2</span>	O you children of men, how long will you blaspheme my honor *
    <div class="psalm-verse-response">
    And have such pleasure in vanity, and seek after falsehood?
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">3</span>	Know this also, that the LORD has chosen for himself the one that is godly *
    <div class="psalm-verse-response">
    when I call upon the LORD, he will hear me.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">4</span>	Stand in awe, and sin not; *
    <div class="psalm-verse-response">
    commune with your own heart upon your bed, and be still.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">5</span>	Offer the sacrifice of righteousness *
    <div class="psalm-verse-response">
    and put your trust in the LORD.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">6</span>	There are many who say, “Who will show us any good?” *
    <div class="psalm-verse-response">
    		LORD, lift up the light of your countenance upon us.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">7</span>	You have put gladness in my heart, *
    <div class="psalm-verse-response">
    more than when others' grain and wine and oil increased.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">8</span>	I will lay myself down in peace, and take my rest; *
    <div class="psalm-verse-response">
    for you, LORD, only, make me dwell in safety.
    </div>
    </div>
    
    </p>
     
    <p>
    <b>Psalm 31:1-6</b>  <i>In te, Domine, speravi</i>
    <div class="psalm-verse">
    <span class="verse">1</span>	In you, O LORD, have I put my trust; *
    <div class="psalm-verse-response">
    let me never be put to confusion; deliver me in your righteousness.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">2</span>	Bow down your ear to me; *
    <div class="psalm-verse-response">
    make haste to deliver me.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">3</span>	And be my strong rock, and house of defense, *
    <div class="psalm-verse-response">
    		that you may save me.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">4</span>	For you are my strong rock and my castle; *
    <div class="psalm-verse-response">
    be also my guide, and lead me for your Name’s sake.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">5</span>	Draw me out of the net that they have laid secretly for me, *
    <div class="psalm-verse-response">
    for you are my strength.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">6</span>	Into your hands I commend my spirit, *
    <div class="psalm-verse-response">
    for you have redeemed me, O LORD, O God of truth.
    </div>
    </div>
    </p>
    
    <p>
    <b>Psalm 91</b> <i>Qui habitat</i>
    <div class="psalm-verse">
    <span class="verse">1</span>	Whoever dwells under the defense of the Most High *
    <div class="psalm-verse-response">
    shall abide under the shadow of the Almighty.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">2</span>	I will say unto the LORD,
    “You are my refuge and my stronghold, *
    <div class="psalm-verse-response">
    my God in whom I will trust.”
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">3</span>	For he shall deliver you from the snare of the hunter *
    <div class="psalm-verse-response">
    and from the deadly pestilence.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">4</span>	He shall defend you under his wings,
    and you shall be safe under his feathers; *
    <div class="psalm-verse-response">
    his faithfulness and truth shall be your shield and buckler.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">5</span>	You shall not be afraid of any terror by night, *
    <div class="psalm-verse-response">
    nor of the arrow that flies by day;
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">6</span>	Of the pestilence that walks in the darkness, *
    <div class="psalm-verse-response">
    nor of the sickness that destroys at noonday.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">7</span>	A thousand shall fall beside you, and ten thousand at your right hand, *
    <div class="psalm-verse-response">
    but it shall not come near you.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">8</span>	Indeed, with your eyes you shall behold *
    <div class="psalm-verse-response">
    and see the reward of the ungodly.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">9</span>	For you, LORD, are my refuge; *
    <div class="psalm-verse-response">
    You have set your house of defense very high. 
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">10</span>	There shall no evil happen unto you, *
    <div class="psalm-verse-response">
    neither shall any plague come near your dwelling.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">11</span>	For he shall give his angels charge over you, *
    <div class="psalm-verse-response">
    to keep you in all your ways.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">12</span>	They shall bear you in their hands, *
    <div class="psalm-verse-response">
    That you not hurt your foot against a stone.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">13</span>	You shall tread upon the lion and adder; *
    <div class="psalm-verse-response">
    the young lion and the serpent you shall trample under your feet.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">14</span>	Because he has set his love upon me, therefore I will deliver him; *
    <div class="psalm-verse-response">
    I have set him up, because he has known my Name.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">15</span>	He shall call upon me, and I will hear him; *
    <div class="psalm-verse-response">
    indeed, I am with him in trouble;
    I will deliver him and bring him to honor.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">16</span>	With long life I will satisfy him, *
    <div class="psalm-verse-response">
    and show him my salvation.
    </div>
    </div>
    </p>
    
    <p>
    <b>Psalm 134</b>  <i>Ecce nunc</i>
    <div class="psalm-verse">
    <span class="verse">1</span>	Behold now, praise the LORD, *
    <div class="psalm-verse-response">
    		all you servants of the LORD.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">2</span>	You that stand by night in the house of the LORD, *
    <div class="psalm-verse-response">
    		even in the courts of the house of our God.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">3</span>	Lift up your hands in the sanctuary* 
    <div class="psalm-verse-response">
    		and sing praises unto the LORD.
    </div>
    </div>
    
    <div class="psalm-verse">
    <span class="verse">4</span>	The LORD who made heaven and earth * 
    <div class="psalm-verse-response">
    		give you blessing out of Zion.
    </div>
    </div>
    </p>
    
    <p class="instructions">At the end of the Psalms is sung or said</p>
    
    <p>
    Glory be to the Father, and to the Son, and to the Holy Spirit; as it was in the beginning, is now, and ever shall be, world without end. <i>Amen.</i>
    </p>
    
    <p class="instructions">
    One of the following, or some other suitable passage of Scripture, is read.
    </p>
    
    <p>
    You, O LORD, are in the midst of us, and we are called by your Name: do not forsake us.  - Jeremiah 14:9 
    </p>
    
    <p>
    Come to me, all who labor and are heavy laden, and I will give you rest.  Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls.  For my yoke is easy, and my burden is light. - Matthew 11:28-30
    </p>
    
    <p>
    Now may the God of peace who brought again from the dead our Lord Jesus, the great shepherd of the sheep, by the blood of the eternal covenant, equip you with everything good that you may do his will, working in us that which is pleasing in his sight, through Jesus Christ, to whom be glory forever and ever. Amen. - Hebrews 13:20-21
    </p>
    
    <p>
    Be sober-minded, be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour. Resist him, firm in your faith. - 1 Peter 5:8-9a
    </p>
    
    <p class="instructions">
    At the end of the reading is said
    </p>
    
    <p>
    <div class="officiant">The Word of the Lord.</div>
    <div class="people">Thanks be to God.</div>
    </p>
    
    <p class="instructions">A period of silence may follow. A suitable hymn may be sung.</p>
    
    <p>
    <div class="officiant">Into your hands, O Lord, I commend my spirit;</div>
    <div class="people">For you have redeemed me, O Lord, O God of truth.</div>
    <div class="officiant">Keep me, O Lord, as the apple of your eye;</div>
    <div class="people">Hide me under the shadow of your wings.</div>
    </p>
    
    <p>
    <div clas="officiant">Lord, have mercy upon us.</div>
    <div class="people">Christ, have mercy upon us.</div>
    <div clas="officiant">Lord, have mercy upon us.</div>
    </p>
    
    <div class="instructions">Officiant and People</div>
    
    <p>
    Our Father, who art in heaven,<br/>
    hallowed be thy Name,<br/>
    thy kingdom come,<br/>
    thy will be done,<br/>
    on earth as it is in heaven.<br/>
    Give us this day our daily bread.<br/>
    And forgive us our trespasses,<br/>
    as we forgive those who trespass against us.<br/>
    And lead us not into temptation,<br/>
    but deliver us from evil.<br/>
    For thine is the kingdom,<br/>
    and the power,<br/>
    and the glory for ever and ever.<br/>
    <i>Amen.</i>
    </p>
    
    <p>
    <div class="officiant">O Lord, hear our prayer;</div>
    <div class="people">And let our cry come to you.</div>
    <div class="officiant">Let us pray.</div>
    </p>
    
    <p><div class="instructions">The Officiant then says one or more of the following Collects. Other appropriate Collects may also be used.</div></p>
    
    <CollectComponent />
    
    <p class="instructions">One of the following prayers may be added</p>
    <p>Keep watch, dear Lord, with those who work, or watch, or weep this night, and give your angels charge over those who sleep. Tend the sick, Lord Christ; give rest to the weary, bless the dying, soothe the suffering, pity the afflicted, shield the joyous; and all for your love’s sake. <i>Amen.</i></p>
    <p>O God, your unfailing providence sustains the world we live in and the life we live: Watch over those, both night and day, who work while others sleep, and grant that we may never forget that our common life depends upon each other’s toil; through Jesus Christ our Lord.  <i>Amen.</i></p>
    
    <p class="instructions">
    Silence may be kept, and free intercessions and thanksgivings may be offered.
    </p>
    
    <p class="instructions">The Officiant and People say or sing the Song of Simeon (Luke 2:29-32) with this Antiphon</p>
    
    <p>
    Guide us waking, O Lord, and guard us sleeping; that awake we may watch with Christ, and asleep we may rest in peace.
    </p>
    
    <AlleluiaComponent forEaster={true} />
    
    <p>
    Lord, now let your servant depart in peace, *
    <div class="response">
    	according to your word.
    </div>
    For my eyes have seen your salvation, *
    <div class="response">
    	which you have prepared before the face of all people;
    </div>
    To be a light to lighten the Gentiles, *
    <div class="response">
    	and to be the glory of your people Israel.
    </div>
    </p>
    
    <p>
    Glory to the Father, and to the Son, and to the Holy Spirit; *
    <div class="response">
    	as it was in the beginning, is now, and ever shall be, world without end.
    </div>
    <i>Amen.</i>
    </p>
    
    <p>
    Guide us waking, O Lord, and guard us sleeping; that awake we may watch with Christ, and asleep we may rest in peace.
    </p>
    
    <AlleluiaComponent forEaster={true} />
    
    <p>
    <div class="officiant">Let us bless the Lord.</div>
    <div class="people">Thanks be to God.</div>
    </p>
    
    <p class="instructions">The Officiant concludes with the following</p>
    
    <p>
    The almighty and merciful Lord, Father, Son, and Holy Spirit, bless us and keep us, this night and evermore.  <i>Amen.</i>
    </p>
    
    </div>
    
    <p class="footnote">
      <a href='http://anglicanchurch.net/?/main/texts_for_common_prayer'>The Daily Office</a> as established by the <a href='http://anglicanchurch.net'>Anglican Church in North America (ACNA)</a>. Last revised 9/26/18.
    </p>
  </div>
)

export default ComplineComponent

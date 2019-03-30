import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`daily`, `office`, `prayer`, `christian`, `spirituality`]} />

    <h1>What is the daily office?</h1>

    <p>The Daily Office is an historic Christian practice: a structured way of reading the Bible and praying at set times during the day. Another way of describing it would be a <i>liturgical devotional</i>.</p>

    <p>There are a variety of Daily Office liturgies, according to different Christian traditions. For the past year, I've been increasingly interested in the <a href="https://en.wikipedia.org/wiki/Anglicanism">Anglican tradition</a> and particularly a reform movement called the <a href="http://anglicanchurch.net">Anglican Church in North America (ACNA)</a> that seeks to anchor the church in scripture.</p>

    <p>The ACNA has created a set of <a href="http://anglicanchurch.net/?/main/texts_for_common_prayer">Daily Office liturgies</a>. They are made up of several different pieces: a lectionary (a schedule of reading the Bible), the psalter (a schedule of reading the Psalms), and a variety of prayers and readings from the Book of Common Prayer. Some of these prayers vary based on the day of the week. Other pieces of the liturgy vary based on the church calendar (the liturgical season). In any case, when reading through the guidelines, it can seem overwhelming! There are many things to take into consideration. I built this web site to address these complexities. For each of the daily office liturgies, I've tried to make the liturgy as seamless as possible, so you can focus on the content.</p>
  
    <h1>How do you do it?</h1>

    <p>If you would like to create our own liturgy, the source for this project can be found on <a href="https://github.com/davidbettis/daily-office">Github</a>.</p>

    <h1>Copyright</h1>

    <h3>ACNA Liturgy</h3>

    <p>The liturgy for the daily office is from the <a href="http://anglicanchurch.net/?/main/texts_for_common_prayer">ACNA Texts for Common Prayer</a>. Although Texts for Common Prayer is copyrighted, many of the texts herein are in the public domain. Nothing in the copyright is designed to prohibit congregations from the free use of the texts in the form published.</p>

    <h3>Scripture</h3>

    <p>Scripture quotations from the Old Testament and the New Testament are from the ESV® Bible (The Holy Bible, English Standard Version®), copyright © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved. You may not copy or download more than 500 consecutive verses of the ESV Bible or more than one half of any book of the ESV Bible.</p>

    <p>Scripture quotations from the Apocrypha are from the New Revised Standard Version Bible, copyright © 1989 National Council of the Churches of Christ in the United States of America. Used by permission. All rights reserved worldwide.</p>

  </Layout>
)

export default AboutPage

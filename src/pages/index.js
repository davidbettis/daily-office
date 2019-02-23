import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`daily`, `office`, `prayer`, `christian`, `spirituality`]} />

    <p>The Daily Office is an historic Christian practice: a structured way of reading the Bible and praying at set times during the day. Another way of describing it would be a <i>liturgical devotional</i>.</p>

    <p>There are a variety of Daily Office liturgies, according to different Christian traditions. For the past year, I've been increasingly interested in the <a href="https://en.wikipedia.org/wiki/Anglicanism">Anglican tradition</a> and particularly a reform movement called the <a href="http://anglicanchurch.net">Anglican Church in North America (ACNA)</a> that seeks to anchor the church in scripture.</p>

    <p>The ACNA has created a set of <a href="http://anglicanchurch.net/?/main/texts_for_common_prayer">Daily Office liturgies</a>. They are made up of several different pieces: a lectionary (a schedule of reading the Bible), the psalter (a schedule of reading the Psalms), and a variety of prayers and readings from the Book of Common Prayer. Some of these prayers vary based on the day of the week. For example, there is a different "collect" (which is a short, targeted prayer) for different days of the week. Other pieces of the liturgy vary based on the church calendar: we read different things at different times of the year. In any case, when reading through the liturgy for the forst time, it can seem kind of overwhelming! With so many things to take into consideration, it can seem overwhelming. I built this web site to address these complexities. For each of the daily office liturgies, I've tried to make the liturgy as seamless as possible, so you can focus on the content.</p>

    <ul>
    <li><span role="img" aria-label="morning">🌅</span> <Link to="/morning/">Morning Prayer</Link></li>
    <li><span role="img" aria-label="evening">🌇</span> <Link to="/evening/">Evening Prayer</Link></li>
    <li><span role="img" aria-label="night">🌃</span> <Link to="/compline/">Compline</Link> (night prayer)</li>
    </ul>

    <p>If you would like to create our own liturgy, the source for this project can be found on <a href="https://github.com/davidbettis/daily-office">Github</a>.</p>
  </Layout>
)

export default IndexPage

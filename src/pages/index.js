import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`daily`, `office`, `prayer`]} />

    <p>For thousands of years, Christians have practiced the Daily Office as a way of devoting themselves to God. The essence of it is a structured way of praying and reading the Bible. Below are easily accessible liturgies as designated by the <a href="http://anglicanchurch.net/">Anglican Church in North America (ACNA)</a>.</p>

    <ul>
    <li><span role="img" aria-label="night">🌃</span> <Link to="/compline/">Compline</Link> (night prayer)</li>
    </ul>

    <p>Source for this project can be found on Github! https://github.com/davidbettis/daily-office</p>
  </Layout>
)

export default IndexPage

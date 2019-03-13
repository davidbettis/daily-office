import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import TimelyOffice from '../components/timely-office'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`daily`, `office`, `prayer`, `christian`, `spirituality`]} />
    <TimelyOffice />
  </Layout>
)

export default IndexPage

import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import TimelyOffice from '../components/offices/timely-office'

const IndexPage = () => (
  <Layout>
    <SEO title="🙏" keywords={[`daily`, `office`, `prayer`, `christian`, `spirituality`]} />
    <TimelyOffice date={new Date()} />
  </Layout>
)

export default IndexPage

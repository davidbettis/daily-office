import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import EveningComponent from '../components/evening'

const Evening = () => (
  <Layout>
    <SEO title="Evening Prayer" keywords={[`daily`, `office`, `evening`, `prayer`, `christian`, `spirituality`, `acna`, `anglican`]} />
    <EveningComponent /> 
  </Layout>
)

export default Evening;

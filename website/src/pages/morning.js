import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import MorningComponent from '../components/morning'

const Morning = () => (
  <Layout>
    <SEO title="Morning Prayer" keywords={[`daily`, `office`, `morning`, `prayer`, `christian`, `spirituality`, `acna`, `anglican`]} />
    <MorningComponent /> 
  </Layout>
)

export default Morning

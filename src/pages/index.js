import React from 'react'
import Link from 'next/link'

import TimelyOffice from '../components/offices/timely-office'

const DefaultPage = () => (
  <TimelyOffice date={new Date()} />
)

export default DefaultPage

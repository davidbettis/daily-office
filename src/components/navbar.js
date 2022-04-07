import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <div
    style={{
      background: '#efefef',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link href="/" style={{ color: 'black', textDecoration: 'none' }}>
          Daily Office
        </Link>
      </h1>
      <div className="navigation">
        <ul>
          <li><Link href="/morning">Morning</Link></li>
          <li><Link href="/evening">Evening</Link></li>
          <li><Link href="/compline">Night</Link></li>
          <li><Link href="/about">What&#39;s this all about?</Link></li>
        </ul>
      </div>
    </div>
  </div>
)

export default Navbar

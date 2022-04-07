// components/layout.js

import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

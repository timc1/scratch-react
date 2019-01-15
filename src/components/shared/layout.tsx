import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <header>head</header>
    <main>{children}</main>
    <footer>foot</footer>
  </>
)

export default Layout

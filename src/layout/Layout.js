import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import MetaTags from './MetaTags'
import { initGA, logPageView } from '../utils/analytics'
import PartnersSection from '@/components/partners/partners-logos'

const Layout = ({ children }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  return (
    <>
      <MetaTags />
      <Header />
      <main id="content" role="main">
        {children}
      </main>
      <PartnersSection />
      <Footer />
    </>
  )
}

export default Layout

import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Layout from '@/layout/Layout'
import { initGA, logPageView } from '../utils/analytics'
import '../styles/scss/theme.scss'
import '@/styles/globals.css'
import '@/styles/HeroNew.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('/public/assets/vendor/bootstrap/dist/js/bootstrap.js')
  }, [])

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    })
  }, [])

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  return (
    <Layout className='p-x-9'>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

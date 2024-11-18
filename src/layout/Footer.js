/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'


const Footer = () => {
  const year = new Date().getFullYear()

    const router = useRouter()
  
    // Check if current route is the Donate page
    const isDonatePage = router.pathname === '/stwdonate/donate'
  
    // If it's the Donate page, don't render the footer
    if (isDonatePage) return null

  return (
    <>
      {/*========== FOOTER ==========*/}
      <footer className='bg-primary-dark border-top border-white-10'>
        <div className='container'>
          <div className='row content-space-1'>
            <div className='col-12 col-lg-3 mb-7 mb-lg-0'>
              <div className='mb-5'>
                <Link
                  className='navbar-brand'
                  href='/'
                  aria-label='Swahilipot Hub'
                >
                  <img
                    height={35}
                    width={200}
                    //className='navbar-brand-logo'
                    src='/logo/logo-white.png'
                    alt='Swahilipot Hub Foundation'
                  />
                </Link>
              </div>
            </div>

            <div className='col-6 col-sm mb-7 mb-sm-0'>
              <span className='text-cap text-primary-light'>
                About Swahilipot
              </span>

              <ul className='list-unstyled list-py-1 mb-0'>
                <li>
                  <Link className='link-sm link-light' href='/contact'>
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link className='link-sm link-light' href='/about'>
                    About us
                  </Link>
                </li>
                <li>
                  <Link className='link-sm link-light' href='/about/origin'>
                    Our Origin Story
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-6 col-sm mb-7 mb-sm-0'>
              <span className='text-cap text-primary-light'>Departments</span>

              <ul className='list-unstyled list-py-1 mb-0'>
                <li>
                  <Link
                    className='link-sm link-light'
                    href='/departments/communications'
                  >
                    Communication
                  </Link>
                </li>
                <li>
                  <Link
                    className='link-sm link-light'
                    href='/departments/creatives'
                  >
                    Creatives
                  </Link>
                </li>
                <li>
                  <Link
                    className='link-sm link-light'
                    href='/departments/technology'
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    className='link-sm link-light'
                    href='/departments/community'
                  >
                    Community Experience
                  </Link>
                </li>
                <li>
                  <Link
                    className='link-sm link-light'
                    href='/departments/engineering'
                  >
                    Engineering Team
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-6 col-sm mb-7 mb-sm-0'>
              <p className='text-white'>We are located here:</p>
              <div className="col">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7893833802746!2d39.67731977474537!3d-4.063306044967009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840131ba0153b67%3A0x75a36ee817c3f38b!2sSwahilipot%20Hub!5e0!3m2!1sen!2ske!4v1718785438427!5m2!1sen!2ske" width="365" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
          <div className='border-top border-white-10'></div>

          <div className='row align-items-md-end py-5'>
            <div className='col-md mb-3 mb-md-0'>
              <p className='text-white mb-0'>
                © Swahilipot Hub Foundation. {year}. Mombasa, Kenya.
              </p>
            </div>

            <div className='col-md d-md-flex justify-content-md-end'>
              <ul className='list-inline mb-0'>
                <li className='list-inline-item'>
                  <a
                    className='btn btn-icon btn-sm btn-soft-light rounded-circle'
                    href='https://www.facebook.com/Swahilipothub/'
                  >
                    <i className='bi-facebook'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    className='btn btn-icon btn-sm btn-soft-light rounded-circle'
                    href='https://twitter.com/swahilipothub'
                  >
                    <i className='bi-twitter-x'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    className='btn btn-icon btn-sm btn-soft-light rounded-circle'
                    href='https://www.linkedin.com/company/swahilipot-hub'
                  >
                    <i className='bi-linkedin'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

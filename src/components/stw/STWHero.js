/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const STWHero = () => {
  return (
    <div>
      <>
        {/* Hero */}
        <div className='position-relative'>
          <div className='container'>
            <div className='row justify-content-lg-between'>
              <div className='col-md-7 position-relative zi-1 content-space-1 content-space-md-3'>
                {/* Heading */}
                <div className='mb-5'>
                  <h1 className='display-4' style={{ color: '#8C275E' }}>
                    Swahili Tech
                    <br />
                    Women
                  </h1>
                </div>
                {/* End Heading */}
                <div className='w-lg-85'>
                  {/* Input Group */}
                  <div className='row gx-2'>
                    <div className='col-sm-auto'>
                      <div className='d-grid'>
                        <Link href='/stwdonate/membership'>
                          <button
                            className='btn btn-outline-primary btn-lg'
                            type='button'
                            id='emailAddOn'
                          >
                            Join Us
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className='col-sm-auto'>
                      <div className='d-grid'>
                        <Link href='/stwdonate/support-stw'>
                        <button
                          className='btn btn-outline-success btn-lg'
                          type='button'
                          id='emailAddOn'
                        >
                          Support Us
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <a
                    className='d-none d-md-inline-block position-md-absolute bottom-0 start-0'
                    href='#scrollToContent'
                  >
                    <span className='svg-icon svg-icon-lg text-primary'></span>
                  </a>
                  {/* End Icon */}
                </div>
              </div>
              {/* End Col */}
              <div className='col-md-5 banner-half-end'>
                {/* Images */}
                <div
                  className='d-none d-md-block bg-img-center h-100'
                  style={{
                    backgroundImage: 'url(/images/swahilitechwomen/micky.jpeg)',
                  }}
                />
                <div className='d-md-none w-75 mx-auto ms-sm-auto'>
                  <img
                    className='img-fluid'
                    src='/images/swahilitechwomen/micky.jpeg'
                    alt='Image Description'
                  />
                </div>
                {/* End Images */}
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
        </div>
        {/* End Hero */}
      </>
    </div>
  )
}

export default STWHero

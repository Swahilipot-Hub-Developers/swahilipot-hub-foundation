/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Activities = () => {
  return (
    <div>
      <>
        {/* Blog */}
        <div className='container content-space-1'>
          {/* Heading */}
          <div className='w-lg-65 text-center mx-lg-auto mb-7'>
            <h3>Our Activities</h3>
            <p className='fs-6'>Explore all Space guides and resources.</p>
          </div>
          {/* End Heading */}
          <div className='row mb-5 mb-sm-5'>
            <div className='col-sm-6 col-lg-4 mb-3 mb-lg-5'>
              {/* Card */}
              <Link
                className='card card-lg card-transition'
                href='/stwdonate/support-stw'
                style={{ minHeight: '22rem', backgroundColor: '#8C275E' }}
              >
                <div className='card-body'>
                  <div className='mb-3'>
                    <span className='badge bg-soft-light'>Donation</span>
                  </div>
                  <h4 className='card-title text-white mb-5'>Donate</h4>
                  <span className='card-link link-light'>
                    Be part of our Pad initiative and personal products
                  </span>
                  <div className='position-absolute bottom-0 start-0 end-0'>
                    <img
                      className='card-img'
                      src='../assets/svg/components/shape-4-soft-light.svg'
                      alt='Image Description'
                    />
                  </div>
                </div>
              </Link>
              {/* End Card */}
            </div>
            <div className='col-sm-6 col-lg-4 mb-3 mb-lg-5'>
              {/* Card */}
              <a
                className='card card-lg card-transition'
                href='#'
                style={{ minHeight: '22rem', backgroundColor: '#8C275E' }}
              >
                <div className='card-body'>
                  <div className='mb-3'>
                    <span className='badge bg-soft-light'>knowledge</span>
                  </div>
                  <h4 className='card-title text-white mb-5'>
                    Training Programs
                  </h4>
                  <span className='card-link link-light'>
                    We have assembled a diverse array of curriculums that
                    include digital skills, software development, and a wide
                    range of technical training tailored to meet the needs of
                    our beneficiaries.
                  </span>
                  <div className='position-absolute bottom-0 start-0 end-0'>
                    <img
                      className='card-img'
                      src='../assets/svg/components/shape-4-soft-light.svg'
                      alt='Image Description'
                    />
                  </div>
                </div>
              </a>
              {/* End Card */}
            </div>
            <div className='col-sm-6 col-lg-4 mb-3 mb-lg-5'>
              {/* Card */}
              <a
                className='card card-lg card-transition'
                href='#'
                style={{ minHeight: '22rem', backgroundColor: '#8C275E' }}
              >
                <div className='card-body'>
                  <div className='mb-3'>
                    <span className='badge bg-soft-light'>guidance</span>
                  </div>
                  <h4 className='card-title text-white mb-5'>
                    Mentorship and Guidance
                  </h4>
                  <span className='card-link link-light'>
                    The Swahili Tech Initiative's mentorship and guidance
                    programs pair individuals with seasoned tech professionals
                    to share knowledge, offer support, and growth.
                  </span>
                  <div className='position-absolute bottom-0 start-0 end-0'>
                    <img
                      className='card-img'
                      src='../assets/svg/components/shape-4-soft-light.svg'
                      alt='Image Description'
                    />
                  </div>
                </div>
              </a>
              {/* End Card */}
            </div>
            <div className='col-sm-6 col-lg-4 mb-3 mb-lg-5'>
              {/* Card */}
              <a
                className='card card-lg card-transition'
                href='#'
                style={{ minHeight: '22rem', backgroundColor: '#8C275E' }}
              >
                <div className='card-body'>
                  <div className='mb-3'>
                    <span className='badge bg-soft-light'>know people</span>
                  </div>
                  <h4 className='card-title text-white mb-5'>Networking</h4>
                  <span className='card-link link-light'>
                    We aim to establish a network of women dedicated to
                    fostering a vibrant and engaged community. Our goal is to
                    cultivate a sisterhood that supports and sustains the
                    collective spirit. Together, we'll ensure our community
                    thrives and remains connected.
                  </span>
                  <div className='position-absolute bottom-0 start-0 end-0'>
                    <img
                      className='card-img'
                      src='../assets/svg/components/shape-4-soft-light.svg'
                      alt='Image Description'
                    />
                  </div>
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Blog */}
      </>
    </div>
  )
}

export default Activities

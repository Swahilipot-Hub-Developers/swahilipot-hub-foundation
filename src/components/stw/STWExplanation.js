/* eslint-disable @next/next/no-img-element */
import React from 'react'

const STWExplanation = () => {
  return (
    <div className='container'>
      <div className='banner-end'>
        <div className='row align-items-md-center'>
          <div className='col-md-6 order-md-2'>
            <div className='p-5 p-md-7'>
              {/* Heading */}
              <div className='mb-7'>
                <span className='text-cap'>About Our Initiative</span>
                <h4>
                  Hakuna kikwazo kinachoweza kusimama mbele ya ndoto zetu
                  zinazounganishwa na teknolojia.
                </h4>
                <p>
                  Empowering women in technology is not just about giving them
                  tools, but also about nurturing a community where they can
                  thrive, innovate, and lead. Through our initiative, we aim to
                  bridge the gap, bringing the brilliance of Swahili tech women
                  to the forefront of innovation. Together, we are not just
                  coding; we are rewriting the narrative for generations to
                  come.
                </p>
              </div>
            </div>
          </div>
          {/* End Col */}
          <div className='col-md-6 content-space-md-1'>
            <div className='w-85 w-md-100 mx-auto me-md-auto'>
              <img
                className='img-fluid'
                src='/stw/image-1.png'
                alt='Image Description'
              />
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
    </div>
  )
}

export default STWExplanation

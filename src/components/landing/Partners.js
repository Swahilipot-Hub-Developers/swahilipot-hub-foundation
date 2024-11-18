/* eslint-disable @next/next/no-img-element */

const Partners = () => {
  return (
    <>
      {/* CTA */}
      <div className='container content-space-1'>
        <div className='row align-items-md-center'>
          <div className='col-md-5 col-lg-6 mb-5 mb-lg-0'>
            <div className='text-center'>
              <img
                className='img-fluid'
                src='../assets/svg/illustrations/oc-unlock.svg'
                alt='Image Description'
                style={{ maxWidth: '17rem' }}
              />
            </div>
          </div>
          {/* End Col */}
          <div className='col-md-7 col-lg-6'>
            <div className='mb-4'>
              <h4>We work with everyone who shares our vision</h4>
            </div>
            {/* <div className='row mb-4'>
              <div className='col py-3'>
                <img
                  className='avatar avatar-lg avatar-4x3'
                  src='../assets/svg/brands/capsule-primary.svg'
                  alt='Logo'
                />
              </div>
              <div className='col py-3'>
                <img
                  className='avatar avatar-lg avatar-4x3'
                  src='../assets/svg/brands/fitbit-primary.svg'
                  alt='Logo'
                />
              </div>
              <div className='col py-3'>
                <img
                  className='avatar avatar-lg avatar-4x3'
                  src='../assets/svg/brands/vidados-primary.svg'
                  alt='Logo'
                />
              </div>
            </div> */}
            {/* End Row */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End CTA */}
    </>
  )
}

export default Partners

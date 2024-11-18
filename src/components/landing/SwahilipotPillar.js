/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
const SwahilipotPillar = () => {
  return (
    <>
      {/* Swahilipot Pillars */}
      <div className='bg-soft-success p-2'>
        <div className='w-lg-65 text-center mt-4 mx-lg-auto mb-7'>
          <h3>Programs and Activities</h3>
        </div>
        <div className='position-relative'>
          <div className='container content-space-1 content-space-md-3'>
            <div className='row'>
              <div className='col-md-7'>
                <div className='row'>
                  <div className='col-sm-6 mb-3'>
                    <div className='pe-md-3'>
                      <h5>Technology and Innovation</h5>
                      <p>
                        Pwani Innovation Week: Showcasing coastal Kenya's
                        technology and innovation. Innovation challenges and
                        hackathons: Collaborative events solving problems with
                        technology. Technology academy: Training in networking,
                        software development, and digital literacy. Coding
                        contests: Showcasing coding skills.
                      </p>
                    </div>
                  </div>
                  {/* End Col */}
                  <div className='col-sm-6 mb-3'>
                    <div className='pe-md-3'>
                      <h5>Entrepreneurship</h5>
                      <p>
                        Pitching Thursday offers a platform for entrepreneurs to
                        present their ideas and receive expert feedback. Info
                        Sessions provide guidance and resources for aspiring
                        business owners. Advisory services, technical
                        assistance, and linkages offer support in finance and
                        market connections. Startup School provides
                        comprehensive training for successful startup ventures.
                      </p>
                    </div>
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <div className='row'>
                  <div className='col-sm-6 mb-3 mb-sm-0'>
                    <div className='pe-md-3'>
                      <h5>Creatives and Arts</h5>
                      <p>
                        Pwani Gat Talent offers local artists a platform to
                        showcase their skills. CASIK provides dedicated spaces
                        for creative expression. Friday Poetry is a regular
                        event for poets and spoken word artists to perform. Koo
                        Store serves as a creative hub and marketplace for
                        artists and designers to sell their unique creations.
                      </p>
                    </div>
                  </div>
                  {/* End Col */}
                  <div className='col-sm-6'>
                    <div className='pe-md-3'>
                      <h5>Heritage</h5>
                      <p>
                        MoHoA preserves and celebrates modern African cultural
                        heritage. Heritopolis promotes preservation and
                        documentation of heritage sites. Youth.Heritage.Africa
                        engages youth in heritage conservation. Ode to the
                        Ancestors is a cultural event honoring community
                        heritage.
                      </p>
                    </div>
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
          {/* Image */}
          <div
            className='d-none d-md-block col-md-5 position-absolute top-0 end-0 bg-img-center h-100'
            style={{
              backgroundImage:
                'url(https://res.cloudinary.com/swahilipothubdev/image/upload/v1685538638/website%20images/DSC_8923_kkn3au.jpg)',
            }}
          />
          <div className='d-md-none'>
            <img
              className='img-fluid'
              src='https://res.cloudinary.com/swahilipothubdev/image/upload/v1685538638/website%20images/DSC_8923_kkn3au.jpg'
              alt='Image Description'
            />
          </div>
          {/* End Image */}
        </div>
      </div>
      {/* End Features */}
    </>
  )
}

export default SwahilipotPillar

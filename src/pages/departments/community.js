/* eslint-disable @next/next/no-img-element */

const community = () => {
  return (
    <>
      <>
        <>
          {/* Hero */}
          <div className='bg-soft-warning overflow-hidden'>
            <div className='container content-space-1 content-space-t-md-2'>
              <div className='w-lg-75 mx-lg-auto'>
                {/* Heading */}
                <div className='text-center'>
                  <h1 className='display-4 text-primary'>
                    Community <span className='text-warning'>Department</span>
                  </h1>
                  <p className='lead'>Tujenge Pamoja, Tufanye Tofauti</p>
                </div>
                {/* End Heading */}
              </div>
            </div>
            <div className='container-fluid position-relative px-lg-7'>
              <div className='mb-5'>
                <img
                  className='img-fluid'
                  src='../assets/img/community.jpg'
                  alt='Image Description'
                />
              </div>
              {/* Background Shapes */}
              <div
                className='position-absolute zi-n1'
                style={{ top: '-6rem', left: '-6rem' }}
              >
                <img
                  src='../assets/svg/components/shape-1.svg'
                  alt='SVG'
                  width={500}
                  style={{ width: '12rem' }}
                />
              </div>
              <div
                className='position-absolute zi-n1'
                style={{ bottom: '-6rem', right: '-7rem' }}
              >
                <img
                  src='../assets/svg/components/shape-7.svg'
                  alt='SVG'
                  width={250}
                />
              </div>
              {/* End Background Shapes */}
            </div>
          </div>
          {/* End Hero */}
        </>

        <div className='container mt-6'>
          <div className='row align-items-md-center'>
            <div className='col-md-6 order-md-2 mb-5 mb-md-0'>
              <div className='ps-md-5'>
                {/* Heading */}
                <div className='mb-7'>
                  <h3>Platform for Expression</h3>
                </div>
                {/* End Heading */}
                <div className='d-grid gap-3'>
                  {/* Info Block */}
                  <div className='d-flex'>
                    <div className='flex-shrink-0'>
                      <span className='svg-icon svg-icon-sm text-primary'></span>
                    </div>
                    <div className='flex-grow-1'>
                      <p>
                        We believe in providing a platform for every individual
                        to express their thoughts, ideas, and opinions. We value
                        and respect the voices of all community members,
                        irrespective of their tribe, religion, political
                        affiliation, or social status. Our aim is to create a
                        safe space where everyone feels included and valued.
                      </p>
                    </div>
                  </div>
                  {/* End Info Block */}
                  {/* Info Block */}

                  {/* End Info Block */}
                </div>
              </div>
            </div>
            {/* End Col */}
            <div className='col-md-6'>
              <img
                className='img-fluid'
                src='../assets/img/img00.jpg'
                alt='Image Description'
              />
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Features */}
        {/* Features */}
        <div className='container content-space-1'>
          <div className='row align-items-md-center'>
            <div className='col-md-6 mb-5 mb-md-0'>
              <div className='pe-md-5'>
                {/* Heading */}
                <div className='mb-7'>
                  <h3>Love, Unity, and Coexistence</h3>
                </div>
                {/* End Heading */}
                <div className='d-grid gap-3'>
                  {/* Info Block */}
                  <div className='d-flex'>
                    <div className='flex-shrink-0'></div>
                  </div>

                  <div className='d-flex'>
                    <div className='flex-shrink-0'>
                      <span className='svg-icon svg-icon-sm text-primary'></span>
                    </div>
                    <div className='flex-grow-1 ms-4'></div>
                  </div>
                  {/* End Info Block */}
                  {/* Info Block */}
                  <div className='d-flex'>
                    <div className='flex-shrink-0'>
                      <span className='svg-icon svg-icon-sm text-primary'></span>
                    </div>
                    <div className='flex-grow-1'>
                      <p>
                        At the core of our community lies our commitment to
                        love, unity, and peaceful coexistence. We strongly
                        believe that by fostering togetherness and
                        understanding, we can build a stronger and more
                        harmonious society. We encourage meaningful partnerships
                        among our members, recognizing that collaboration often
                        leads to remarkable achievements.
                      </p>
                    </div>
                  </div>
                  {/* End Info Block */}
                </div>
              </div>
            </div>
            {/* End Col */}
            <div className='col-md-6'>
              <img
                className='img-fluid'
                src='../assets/img/img01.jpg'
                alt='Image Description'
              />
            </div>
          </div>
          {/* End Row */}
        </div>
        {/* End Features */}
        <div className='container mb-6 mb-5'>
          <div className='row align-items-md-center'>
            <div className='col-md-6 order-md-2 mb-5 mb-md-0'>
              <div className='ps-md-5'>
                {/* Heading */}
                <div className='mb-7'>
                  <h3>People-Powered Community</h3>
                </div>
                {/* End Heading */}
                <div className='d-grid gap-3'>
                  {/* Info Block */}
                  <div className='d-flex'>
                    <div className='flex-shrink-0'>
                      <span className='svg-icon svg-icon-sm text-primary'></span>
                    </div>
                    <div className='flex-grow-1'>
                      <p>
                        Swahilipot Hub is not just a physical building; it is
                        the people who make up our community. Each and every
                        member contributes to the vibrant tapestry of ideas,
                        skills, and experiences that make our hub unique.
                        Together, we can explore limitless possibilities,
                        support each other's growth, and make a positive impact
                        on our society. Join us in an environment that
                        celebrates diversity, encourages personal and
                        professional development, and fosters a sense of
                        belonging. Let's embark on a journey of exploration,
                        learning, and creativity. We are excited to see what we
                        can accomplish together at Swahilipot Hub!
                      </p>
                    </div>
                  </div>
                  {/* End Info Block */}
                  {/* Info Block */}

                  {/* End Info Block */}
                </div>
              </div>
            </div>
            {/* End Col */}
            <div className='col-md-6 mb-5'>
              <img
                className='img-fluid'
                src='../assets/img/img20.jpg'
                alt='Image Description'
              />
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </>
    </>
  )
}

export default community

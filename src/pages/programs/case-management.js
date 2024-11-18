/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <>
      {/* Hero */}
      <div className='position-relative'>
        <div className='container'>
          <div className='row justify-content-lg-between'>
            <div className='col-md-7 position-relative zi-1 content-space-1 content-space-md-3'>
              {/* Heading */}
              <div className='mb-5'>
                <h1 className='display-4 text-primary'>
                  Case Management
                  <br />
                  <span className='h4 text-danger'>Anyone, Anywhere</span>
                </h1>
              </div>
            </div>
            {/* End Col */}
            <div className='col-md-5 banner-half-end'>
              {/* Images */}
              <div
                className='d-none d-md-block bg-img-center h-100'
                style={{ backgroundImage: 'url(../assets/casemgt.JPG)' }}
              />
              <div className='d-md-none w-75 mx-auto ms-sm-auto'>
                <img
                  className='img-fluid'
                  src='../assets/casemgt.JPG'
                  width={460}
                  height={510}
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
  )
}

const Content = () => {
  return (
    <>
      {/* Content */}
      <div className='container content-space-1 content-space-md-2'>
        {/* Card */}
        <div className='card card-lg'>
          {/* Header */}
          <div className='card-header bg-primary-dark position-relative overflow-hidden'>
            <h1 className='card-title h2 text-white'>About Case Management</h1>
            {/* Background Shapes */}
            <div
              className='position-absolute'
              style={{ top: '-6rem', left: '-6rem' }}
            >
              <img
                src='../assets/svg/components/shape-1-soft-light.svg'
                alt='SVG'
                width={500}
                style={{ width: '12rem' }}
              />
            </div>
            <div
              className='position-absolute'
              style={{ bottom: '-6rem', right: '-7rem' }}
            >
              <img
                src='../assets/svg/components/shape-7-soft-light.svg'
                alt='SVG'
                width={250}
              />
            </div>
            {/* End Background Shapes */}
          </div>
          {/* End Header */}
          {/* Card Body */}
          <div className='card-body'>
            <div className='mb-7'>
              <p>
                At the Swahili Pot Hub Foundation (SPH), we are committed to
                making a positive impact on the lives of young individuals in
                Mombasa County and its six sub-counties. For the past seven
                years, we have been dedicated to helping youth overcome
                challenges and thrive. Through strategic partnerships with
                communities, government entities, CSOs, and local leaders, SPH
                has been a beacon of hope for young people from diverse
                backgrounds.
              </p>
            </div>
            <div className='mb-7'>
              <h4>The Case Management Project: A Path to Empowerment</h4>
              <p>
                The primary objective of the Case Management Project is to
                connect 60,000 youth in Mombasa County and its sub-counties to a
                wide range of opportunities and sustainable employment. We
                understand that each young person is unique, and to empower them
                effectively, we emphasize a personalized case management
                approach. This approach allows us to offer customized support
                and guidance, helping young individuals access and thrive in
                various educational, vocational, and entrepreneurial pathways.
              </p>
            </div>
          </div>

          {/* End Card Body */}
        </div>
        {/* End Card */}
      </div>
      {/* End Content */}
    </>
  )
}

const CTA = () => {
  return (
    <>
      {/* CTA */}
      <div className='bg-primary-dark overflow-hidden'>
        <div className='container position-relative content-space-1 content-space-md-3'>
          {/* Heading */}
          <div className='w-lg-65 text-center mx-lg-auto'>
            <div className='mb-7'>
              <h2 className='text-white'>
                Interested to Offer Mentorship?
                <br />
                Let’s get to work.
              </h2>
            </div>
          </div>
          {/* End Heading */}
          {/* Background Shapes */}
          <div
            className='position-absolute'
            style={{ top: '-6rem', left: '-6rem' }}
          >
            <img
              src='../assets/svg/components/shape-1-soft-light.svg'
              alt='SVG'
              width={500}
              style={{ width: '12rem' }}
            />
          </div>
          <div
            className='position-absolute'
            style={{ bottom: '-6rem', right: '-7rem' }}
          >
            <img
              src='../assets/svg/components/shape-7-soft-light.svg'
              alt='SVG'
              width={250}
            />
          </div>
          {/* End Background Shapes */}
        </div>

        <div className='container bg-white content-space-1 content-space-b-md-3'>
          <div className='row justify-content-md-between'>
            <iframe
              src='https://docs.google.com/forms/d/e/1FAIpQLScI3xfIizqU10hqXBDs3jmwfEZ-borY-emr1jGVk07qSNUcaA/viewform?embedded=true'
              width={640}
              height={959}
            >
              Form is Loading ...
            </iframe>
          </div>
        </div>
      </div>
      {/* End CTA */}
    </>
  )
}

const CaseManagement = () => {
  return (
    <div>
      <Header />
      <Content />
      <CTA />
    </div>
  )
}

export default CaseManagement

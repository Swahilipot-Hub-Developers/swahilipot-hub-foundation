/* eslint-disable @next/next/no-img-element */
import Logo from '@/components/shared/Logo'
const programName = 'Young Business Executives Fellowship'
const image1 = '/images/youngbusiness/image1.jpg'
const image2 = '/images/youngbusiness/image2.jpg'
const image3 = '/images/youngbusiness/image3.jpg'
const image4 = '/images/youngbusiness/image4.jpg'
const image5 = '/images/youngbusiness/image5.jpg'

// hero sections
const Hero = ({ name }) => {
  return (
    <div className='bg-soft-primary-light position-relative py-4 py-md-0'>
      <div className='container'>
        <div
          className='d-none d-md-block col-md-6 position-absolute top-0 end-0 bg-img-center h-100'
          style={{ backgroundImage: 'url(/images/youngbusiness/image1.jpg)' }}
        />
        <div className='d-md-none mb-5 mb-md-0'>
          <img className='img-fluid' src={image4} alt='Image Description' />
        </div>
        <div className='row align-items-md-center content-space-md-3'>
          <div className='col-md-6'>
            <div className='pe-lg-3'>
              <div className='mb-5'>
                <Logo width={100} height={50} />
              </div>
              <h1 className='h2 mb-3 mb-md-5 text-capitalize'>{name}</h1>
            </div>
          </div>
          {/* End Col */}
          <div className='col-md-4 align-self-md-end position-relative z-1'>
            <div
              className='d-none d-md-block transform-0'
              style={{
                marginBottom: '-12rem',
                marginLeft: '-3rem',
                marginRight: '10rem',
              }}
            >
              <img
                className='img-fluid'
                src='/images/youngbusiness/image4.jpg'
                height={600}
                width={600}
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

// call to actions
const CallToAction = () => {
  return (
    <div>
      <div className='bg-soft-success p-4 pb-sm-0 pe-sm-0 pt-sm-5 ps-sm-7'>
        <div className='position-relative overflow-hidden'>
          <div className='row justify-content-lg-between'>
            <div className='col-sm-6 py-5 pb-sm-10'>
              <div className='mb-5'>
                {/* <h3>We are design changers</h3> */}
                <p>
                  Welcome to the Young Business Executives Fellowship journey! A
                  transformative initiative developed through a partnership
                  between Tactive Consulting and Swahilipot Hub Foundation that
                  aims to bridge the gap between the vibrant Kenyan startup
                  ecosystem and the skilled youth workforce. A fellowship
                  seeking to empower you with the necessary skills, knowledge,
                  and networks to excel in a dynamic business landscape,
                  fostering a new generation of business leaders who can drive
                  economic growth and innovation. It is designed to equip
                  participants with a holistic understanding of business
                  operations and strategies through a dynamic curriculum,
                  engaging workshops, mentorship sessions, and practical
                  experiences.
                </p>
              </div>
              <a
                className='btn btn-outline-primary'
                href='https://docs.google.com/document/u/0/d/1xwJlAg-5Ob0ByteUjmEBp-otdrTtwtx6qq70ph68BSI/mobilebasic'
                target='_blank'
              >
                View The Program
              </a>
            </div>
            {/* End Col */}
            <div className='col-sm-6 col-lg-5 d-none d-sm-block'>
              {/* Devices */}
              <div className='devices position-absolute top-0 start-50'>
                {/* Browser Device */}
                <figure className='device-browser-frame rotated-3d-left'>
                  <div className='device-browser-frame'>
                    <img
                      className='device-browser-img'
                      src='../assets/img/800x500/img5.jpg'
                      alt='Image Description'
                    />
                  </div>
                </figure>
                {/* End Browser Device */}
              </div>
              {/* End Devices */}
              {/* Devices */}
              <div className='devices position-absolute top-0 start-50 mt-10 ms-5'>
                {/* Browser Device */}
                <figure className='device-browser-frame rotated-3d-left'>
                  <div className='device-browser-frame'>
                    <img
                      className='device-browser-img'
                      src='/images/youngbusiness/image5.jpg'
                      height={800}
                      width={500}
                      alt='Image Description'
                    />
                  </div>
                </figure>
                {/* End Browser Device */}
              </div>
              {/* End Devices */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
    </div>
  )
}

const YoungBusinessFellowhip = () => {
  return (
    <>
      <Hero name={programName} />
      <CallToAction />
    </>
  )
}

export default YoungBusinessFellowhip

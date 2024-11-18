import Image from 'next/image'

const SignupCTA = () => {
  return (
    <div className='container d-none d-sm-block content-space-1 content-space-md-2'>
      <div className='bg-soft-primary-light p-4 pb-md-0 pe-md-0 pt-md-5 ps-md-7'>
        <div className='position-relative overflow-hidden'>
          <div className='row justify-content-lg-between'>
            <div className='col-md-6 py-5 pb-md-10'>
              <div className='mb-5'>
                <h3>We are design changers</h3>
                <p>
                  Get a weekly dose of insightful people strategy content,
                  helpful resources, new job opportunities, and people-driven
                  events.
                </p>
              </div>
              <a className='btn btn-outline-primary' href='./page-login.html'>
                Sign up today
              </a>
            </div>
            {/* End Col */}
            <div className='col-md-6 col-lg-5'>
              {/* Devices */}
              <div className='devices position-absolute top-0 start-50'>
                {/* Browser Device */}
                <figure className='device-browser-frame rotated-3d-left'>
                  <div className='device-browser-frame'>
                    <Image
                      height={800}
                      width={500}
                      className='device-browser-img'
                      src='./assets/img/800x500/img5.jpg'
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
                    <Image
                      height={800}
                      width={500}
                      className='device-browser-img'
                      src='./assets/img/800x500/img6.jpg'
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

export default SignupCTA

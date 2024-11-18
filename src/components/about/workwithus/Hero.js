import Link from 'next/link'

const Hero = () => {
  return (
    <div className='bg-soft-primary-light'>
      <div className='container content-space-1'>
        <div className='w-lg-75 mx-lg-auto'>
          <div className='mb-5'>
            <Link href='/about' legacyBehavior>
              <a>
                <i className='bi-chevron-left small me-1' /> About Swahilipot
              </a>
            </Link>
          </div>
          <div className='row align-items-md-center'>
            <div className='col-md-6 mb-5 mb-md-0'>
              <h1 className='h3'>
                Life Skills Curriculum Development Consultant
              </h1>
              <ul className='list-inline list-separator'>
                <li className='list-inline-item'>Mombasa, Kenya</li>
                <li className='list-inline-item'>Case Management Project</li>
              </ul>
            </div>
            {/* End Col */}
            {/* <div className="col-md-6">
            <div className="d-md-flex justify-content-md-end">
              <a className="js-apply-tab btn btn-primary" href="javascript:;">
                Apply now
              </a>
            </div>
          </div> */}
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
    </div>
  )
}

export default Hero

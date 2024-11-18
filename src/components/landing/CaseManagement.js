/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
const CaseManagement = () => {
  return (
    <>
      {/* Features */}
      <div className='container'>
        <div className='banner-end'>
          <div className='row align-items-md-center'>
            <div className='col-md-6 order-md-2'>
              <div className='p-5 p-md-7'>
                {/* Heading */}
                <div className='mb-7'>
                  <span className='text-cap'>Swahilipot Hub</span>
                  <h3>Case Management Project</h3>
                  <p>
                    Our primary objective is to connect 60,000 youths in the
                    Kenyan Coast to a wide range of opportunities and
                    sustainable employment. We understand that each young person
                    is unique, and to empower them effectively, we emphasize a
                    personalized mentorship approach.
                  </p>
                </div>
                {/* End Heading */}
                <p>
                  Learn{' '}
                  <a
                    className='link'
                    href='https://www.platform.swahilipothub.org/mentorship/'
                    target='_blank'
                  >
                    more about the project here
                  </a>
                </p>
                <p>
                  You can Join in{' '}
                  <a
                    className='link'
                    href='https://www.platform.swahilipothub.org/accounts/register/casemanager'
                    target='_blank'
                  >
                    as a Mentor
                  </a>
                </p>
              </div>
            </div>
            {/* End Col */}
            <div className='col-md-6 content-space-md-1'>
              <div className='w-85 w-md-100 mx-auto me-md-auto'>
                <img
                  className='img-fluid'
                  src='/images/landing/00.jpg'
                  alt='Image Description'
                />
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
      {/* End Features */}
    </>
  )
}

export default CaseManagement

{
  /* <div>
      <div className='container bg-white content-space-1 content-space-b-md-3'>
        <div className='row justify-content-md-between'>
          <h1>Case Management</h1>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <h4 classNa>Path to Empowerment</h4>
            <p className='fst-italic'>
              The primary objective of the Case Management Project is to connect
              60,000 youth in Mombasa County and its sub-counties to a wide
              range of opportunities and sustainable employment. We understand
              that each young person is unique, and to empower them effectively,
              we emphasize a personalized case management approach. This
              approach allows us to offer customized support and guidance,
              helping young individuals access and thrive in various
              educational, vocational, and entrepreneurial pathways.
            </p>

            <Link href='/programs/case-management' legacyBehavior>
              <a className='btn btn-primary'>Join Us</a>
            </Link>
          </div>
        </div>
      </div>
    </div> */
}

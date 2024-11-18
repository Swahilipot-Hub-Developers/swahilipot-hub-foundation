/* eslint-disable @next/next/no-img-element */

const PageCTA = () => {
  return (
    <div className='container content-space-1 content-space-md-3'>
      <div className='text-center'>
        <img
          className='mb-5'
          src='./assets/svg/illustrations/oc-growing.svg'
          alt='Illustration'
          style={{ width: '15rem' }}
        />
      </div>
      {/* Heading */}
      <div className='w-lg-65 text-center mx-lg-auto mb-7'>
        <h3>Start your journey with Swahilipot</h3>
        <p className='fs-6'>
          Register with us to become a member of the Swahilipot community and
          get access to amazing opportunities.
        </p>
      </div>
      {/* End Heading */}
      <div className='text-center'>
        <a
          className='btn btn-primary'
          href='https://www.platform.swahilipothub.org/youth-registration/'
          target='_blank'
        >
          Join Now
        </a>
      </div>
    </div>
  )
}

export default PageCTA

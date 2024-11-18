const Hero = () => {
  return (
    <div className='shape-container bg-soft-warning'>
      <div className='position-relative zi-2'>
        <div className='container content-space-1 content-space-md-3'>
          {/* Heading */}
          <div className='w-lg-50 mb-5 mb-sm-10'>
            <h1 className='display-3 text-primary'>
              Join <span className='text-warning'>us</span>
            </h1>
            <p className='lead'>Join Our Community For Self Growth.</p>
          </div>
          {/* End Heading */}
        </div>
      </div>
      {/* Shape */}
      <div className='shape shape-bottom zi-1'>
        <svg
          width={3000}
          height={600}
          viewBox='0 0 3000 600'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 600H3000V0L0 600Z' fill='#fff' />
        </svg>
      </div>
      {/* End Shape */}
    </div>
  )
}

export default Hero

const Numbers = () => {
  return (
    <div className='bg-soft-warning'>
      <div className='container content-space-1 content-space-md-3'>
        {/* Heading */}
        <div className='w-lg-65 text-center mx-lg-auto mb-7'>
          <h3>Swahilipot Hub in Numbers</h3>
          <p className='fs-6'>Our Impacts in Numbers</p>
        </div>
        {/* End Heading */}
        <div className='w-lg-75 text-center mx-lg-auto'>
          <div className='row col-sm-divider'>
            <div className='col-sm-4'>
              {/* Info */}
              <div className='text-center p-3'>
                <h2 className='text-primary'>4000+</h2>
                <p className='mb-0'>Community Members</p>
              </div>
              {/* End Info */}
            </div>
            {/* End Col */}
            <div className='col-sm-4'>
              {/* Info */}
              <div className='text-center p-3'>
                <h2 className='text-primary'>25</h2>
                <p className='mb-0'>Programs and Activities</p>
              </div>
              {/* End Info */}
            </div>
            {/* End Col */}
            <div className='col-sm-4'>
              {/* Info */}
              <div className='text-center p-3'>
                <h2 className='text-primary'>65%</h2>
                <p className='mb-0'>of our members are Youth</p>
              </div>
              {/* End Info */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
    </div>
  )
}

export default Numbers

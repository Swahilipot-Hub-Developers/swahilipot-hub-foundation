const Stats = () => {
  return (
    <div className='container content-space-t-1'>
      <div className='text-center mb-7'>
        <h1 className='display-4 text-primary'>
          Progress of the team (in numbers)
        </h1>
        <p className='stats-text'>All metrics recorded are upto May 2024:</p>
      </div>
      <div className='w-lg-75 text-center mx-lg-auto'>
        <div className='row col-sm-divider'>
          <div className='col-sm-4'>
            {/* Info */}
            <div className='text-center p-3'>
              <h4 className='h1 text-primary'>5000+</h4>
              <p className='mb-0'>Traffic in terms of reach</p>
            </div>
            {/* End Info */}
          </div>
          {/* End Col */}
          <div className='col-sm-4'>
            {/* Info */}
            <div className='text-center p-3'>
              <h4 className='h1 text-primary'>9+</h4>
              <p className='mb-0'>Platforms in development</p>
            </div>
            {/* End Info */}
          </div>
          {/* End Col */}
          <div className='col-sm-4'>
            {/* Info */}
            <div className='text-center p-3'>
              <h4 className='h1 text-primary'>4</h4>
              <p className='mb-0'>platforms that are live</p>
            </div>
            {/* End Info */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
    </div>
  )
}

export default Stats
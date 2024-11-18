/* eslint-disable @next/next/no-img-element */
const PageHero = () => {
  return (
    <div className='bg-soft-warning'>
      <div className='container content-space-t-2 content-space-t-md-3 content-space-b-1'>
        {/* Heading */}
        <div className='w-lg-75 text-center mx-lg-auto mb-7'>
          <h1 className='display-3 text-primary'>
            Engineering <span className='text-warning'>Department</span>
          </h1>
          <p className='lead'>Mafundi wa Teknolojia,mabadiliko ya kesho</p>
        </div>

        <div className='text-center'>
          <img
            className='img-fluid'
            src='../images/workspace.png'
            alt='Image Description'
          />
        </div>
      </div>
    </div>
  )
}

export default PageHero
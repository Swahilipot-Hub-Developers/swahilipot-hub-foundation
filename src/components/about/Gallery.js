import Image from 'next/image'

const Gallery = () => {
  return (
    <div className='container-fluid'>
      <div className='row align-items-end gx-2 gx-lg-3 mb-2 mb-lg-3'>
        <div
          className='col-3 d-none d-md-block'
          style={{ marginBottom: '-5rem' }}
        >
          <Image
            className='img-fluid w-100'
            src='/images/aboutpage/1.jpeg'
            width={364}
            height={268}
            alt='Image Description'
          />
        </div>
        {/* End Col */}
        <div className='col-6 col-md-3'>
          <Image
            className='img-fluid w-100'
            src='/images/aboutpage/2.jpeg'
            width={265}
            height={290}
            alt='Image Description'
          />
        </div>
        {/* End Col */}
        <div className='col-6 col-md-3'>
          <Image
            className='img-fluid w-100'
            src='/images/aboutpage/3.jpeg'
            width={387}
            height={290}
            alt='Image Description'
          />
        </div>
        {/* End Col */}
        <div
          className='col-3 d-none d-md-block'
          style={{ marginBottom: '-5rem' }}
        >
          <Image
            className='img-fluid w-100'
            src='/images/aboutpage/4.jpeg'
            width={364}
            height={268}
            alt='Image Description'
          />
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
      <div className='row gx-2 gx-lg-3'>
        <div className='col-6 col-md-3 offset-md-3'>
          <Image
            className='img-fluid w-100'
            src='/images/aboutpage/5.jpeg'
            width={387}
            height={290}
            alt='Image Description'
          />
        </div>
        {/* End Col */}
        <div className='col-6 col-md-3'>
          <Image
            className='img-fluid w-100'
            src='/images/aboutpage/6.jpeg'
            width={265}
            height={290}
            alt='Image Description'
          />
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
    </div>
  )
}

export default Gallery

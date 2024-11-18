import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SpacesCard = () => {
  return (
    <>
      {/* <!-- Blog --> */}
      <div className='container content-space-1'>
        {/* <!-- Heading --> */}
        <div className='w-lg-65 text-center mx-lg-auto mb-7'>
          <h3>Swahilipot Spaces</h3>
          <p className='fs-6'>Explore all Space guides and resources.</p>
        </div>
        {/* <!-- End Heading --> */}

        <div className='row mb-5 mb-sm-5'>
          <div className='col-sm-6 col-lg-4 mb-3 mb-lg-5'>
            {/* <!-- Card --> */}
            <Link
              className='card card-lg card-transition bg-primary-dark'
              href='/spaces/Mekatilili'
              style={{ minHeight: '22rem' }}
            >
              <div className='card-body'>
                <div className='mb-3'>
                  <span className='badge bg-soft-light'>Mekatilili</span>
                </div>
                <h4 className='card-title text-white mb-5'>
                  Swahilipot HUB <br />
                  Mekatilili Space
                </h4>
                <span className='card-link link-light'>
                  Learn more <i className='bi-chevron-right small ms-1'></i>
                </span>
                <div className='position-absolute bottom-0 start-0 end-0'>
                  <Image
                    className='card-img'
                    src='../assets/svg/components/shape-4-soft-light.svg'
                    alt='Image Description'
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </Link>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className='col-sm-6 col-lg-4 mb-3 mb-lg-5'>
            {/* <!-- Card --> */}
            <Link
              className='card card-lg card-transition bg-primary-dark'
              href='/spaces/Mazurui'
              style={{ minHeight: '22rem' }}
            >
              <div className='card-body'>
                <div className='mb-3'>
                  <span className='badge bg-soft-light'>Ali Mazurui</span>
                </div>
                <h4 className='card-title text-white mb-5'>
                  Swahilipot HUB <br />
                  Ali Mazurui Space
                </h4>
                <span className='card-link link-light'>
                  Learn more <i className='bi-chevron-right small ms-1'></i>
                </span>
                <div className='position-absolute bottom-0 start-0 end-0'>
                  <Image
                    className='card-img'
                    src='../assets/svg/components/shape-5-soft-light.svg'
                    alt='Image Description'
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </Link>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className='col-sm-6 col-lg-4 mb-3 mb-lg-5'>
            {/* <!-- Card --> */}
            <Link
              className='card card-lg card-transition bg-primary-dark'
              href='/spaces/Amphitheater'
              style={{ minHeight: '22rem' }}
            >
              <div className='card-body'>
                <div className='mb-3'>
                  <span className='badge bg-soft-light'>Amphitheatre</span>
                </div>
                <h4 className='card-title text-white mb-5'>
                  Swahilipot HUB <br />
                  Amphitheatre Space
                </h4>
                <span className='card-link link-light'>
                  Learn more <i className='bi-chevron-right small ms-1'></i>
                </span>
                <div className='position-absolute bottom-0 start-0 end-0'>
                  <Image
                    className='card-img'
                    src='../assets/svg/components/shape-6-soft-light.svg'
                    alt='Image Description'
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </Link>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Col --> */}
          <div className='col-sm-6 col-lg-4 mb-3 mb-lg-5'>
            {/* <!-- Card --> */}
            <Link
              className='card card-lg card-transition bg-primary-dark'
              href='/spaces/MwanaKupona'
              style={{ minHeight: '22rem' }}
            >
              <div className='card-body'>
                <div className='mb-3'>
                  <span className='badge bg-soft-light'>Mwana Kupona</span>
                </div>
                <h4 className='card-title text-white mb-5'>
                  Swahilipot HUB <br />
                  Mwana Kupona Space
                </h4>
                <span className='card-link link-light'>
                  Learn more <i className='bi-chevron-right small ms-1'></i>
                </span>
                <div className='position-absolute bottom-0 start-0 end-0'>
                  <Image
                    className='card-img'
                    src='../assets/svg/components/shape-6-soft-light.svg'
                    alt='Image Description'
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </Link>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Col --> */}
          <div className='col-sm-6 col-lg-4 mb-3 mb-lg-5'>
            {/* <!-- Card --> */}
            <Link
              className='card card-lg card-transition bg-primary-dark'
              href='/spaces/Community'
              style={{ minHeight: '22rem' }}
            >
              <div className='card-body'>
                <div className='mb-3'>
                  <span className='badge bg-soft-light'>Community Space</span>
                </div>
                <h4 className='card-title text-white mb-5'>
                  Swahilipot HUB <br />
                  Community Space
                </h4>
                <span className='card-link link-light'>
                  Learn more <i className='bi-chevron-right small ms-1'></i>
                </span>
                <div className='position-absolute bottom-0 start-0 end-0'>
                  <Image
                    className='card-img'
                    src='../assets/svg/components/shape-6-soft-light.svg'
                    alt='Image Description'
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </Link>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Row --> */}

        {/* <!-- Info --> */}
        {/* <div className="text-center">
                    <p className="mb-0">Want to read more?</p>
                    <a className="link" href="../blog-classNameic.html">Explore all Space resources <i className="bi-chevron-right small ms-1"></i></a>
                </div> */}
        {/* <!-- End Info --> */}
      </div>
      {/* <!-- End Blog --> */}
    </>
  )
}

export default SpacesCard

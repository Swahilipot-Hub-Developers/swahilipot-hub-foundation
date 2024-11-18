import Image from 'next/image'
import Link from 'next/link'
import SubscriberForm from '../shared/SubscriberForm'

const Hero = () => {
  return (
    <div className='bg-primary-dark position-relative overflow-hidden'>
      <div className='container content-space-2'>
        <div className='row justify-content-center align-items-lg-center'>
          <div className='col-md-8 col-lg-6 mb-7 mb-lg-0'>
            <div className='pe-lg-3 mb-7'>
              <h1 className='display-3 text-white mb-3 mb-md-5'>
                Swahilipot <span class='text-warning'>Hub</span>
              </h1>
              <p className='lead text-white'>
                We engage and empower youths to enable them unleash their full
                potential.
              </p>
            </div>

            <div className='d-grid gap-3'>
              <div className='d-flex'>
                <div className='flex-grow-1 ms-4'>
                  <h5 className='text-primary'>
                    <Link className='text-warning' href='/about'>
                      About Us <i class='bi-chevron-right small ms-1 small'></i>
                    </Link>
                  </h5>
                  <p className='text-white'>Know more about Swahilipot Hub</p>
                </div>
              </div>

              <div className='d-flex'>
                <div className='flex-grow-1 ms-4'>
                  <h5 className='text-primary'>
                    <Link className='text-warning' href='/about/origin'>
                      Origin Story{' '}
                      <i class='bi-chevron-right small ms-1 small'></i>
                    </Link>
                  </h5>
                  <p className='text-white'>
                    Learn how Swahilipot Hub came to be.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-8 col-lg-6'>
            <div className='ps-lg-5'>
              <div className='card card-lg'>
                <div className='card-body'>
                  <div className='row align-items-sm-center mb-5'>
                    <div className='col-sm-auto order-sm-2 mb-3 mb-sm-0'>
                      <Image
                        src='/assets/svg/illustrations/oc-chatting.svg'
                        alt='Image Description'
                        width={200}
                        height={100}
                      />
                    </div>
                    <div className='col-sm'>
                      <h5 className='card-title'>Join Space</h5>
                      <p className='card-text'>
                        Swahilipot Hub's key mandate is to empower the community
                        through creative innovation.
                      </p>
                    </div>
                  </div>
                  <SubscriberForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative SVGs */}
      <div className='position-absolute top-0 end-0'>
        <Image
          src='/assets/svg/components/shape-3-soft-light.svg'
          alt='SVG'
          width={500}
          height={200}
        />
      </div>
      <div className='position-absolute bottom-0 end-0 me-10'>
        <Image
          src='/assets/svg/components/shape-1-soft-light.svg'
          alt='SVG'
          width={250}
          height={150}
        />
      </div>
      <div className='position-absolute bottom-0 start-0'>
        <Image
          src='/assets/svg/components/shape-2-soft-light.svg'
          alt='SVG'
          width={400}
          height={200}
        />
      </div>
    </div>
  )
}

export default Hero

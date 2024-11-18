/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const WorkWithUS = () => {
  return (
    <>
      {/* CTA */}
      <div className='bg-primary-dark overflow-hidden'>
        <div className='container position-relative content-space-1 content-space-md-3'>
          {/* Heading */}
          <div className='w-lg-65 text-center mx-lg-auto'>
            <div className='mb-7'>
              <h2 className='text-white'>
                Have something in mind?
                <br />
                Let’s get to work.
              </h2>
            </div>
            <Link href='/contact' legacyBehavior>
              <a className='btn btn-primary'>Speak to Us</a>
            </Link>
          </div>
         
          <div
            className='position-absolute'
            style={{ top: '-6rem', left: '-6rem' }}
          >
            <img
              src='../assets/svg/components/shape-1-soft-light.svg'
              alt='SVG'
              width={500}
              style={{ width: '12rem' }}
            />
          </div>
          <div
            className='position-absolute'
            style={{ bottom: '-6rem', right: '-7rem' }}
          >
            <img
              src='../assets/svg/components/shape-7-soft-light.svg'
              alt='SVG'
              width={250}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkWithUS

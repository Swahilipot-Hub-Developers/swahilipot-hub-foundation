/* eslint-disable @next/next/no-img-element */

const Testimonials = () => {
  return (
    <>
      <div className='container content-space-1 content-space-md-3'>
        <div className='text-center mb-5'>
          <img
            className='avatar avatar-xl avatar-4x3'
            src='./assets/svg/illustrations/oc-review.svg'
            alt='Illustration'
          />
        </div>
        {/* Blockquote */}
        <figure className='w-md-75 text-center mx-md-auto'>
          <blockquote className='blockquote'>
            “ I needed a place to meet fellow nerds and work together,
            Swahilipot had both the space and the people I needed to help me
            grow as a Software Developer ”
          </blockquote>
          <figcaption className='blockquote-footer text-center mb-7'>
            Chris Achinga
            <span className='blockquote-footer-source'>
              Tech Team | Swahilipot Hub
            </span>
          </figcaption>
          <img
            className='avatar avatar-xxl avatar-4x3'
            src='./logo/logo.png'
            alt='Logo'
          />
        </figure>
        {/* End Blockquote */}
      </div>
    </>
  )
}

export default Testimonials

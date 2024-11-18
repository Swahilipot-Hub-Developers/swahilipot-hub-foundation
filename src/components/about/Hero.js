import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="container content-space-1 content-space-md-2">
        <div className="row justify-content-sm-center">
          <div className="col-sm-10 col-md-8 col-lg-7">
            {/* Heading */}
            <div className="text-center mb-7">
              <h1 className="display-4 text-primary">
                Our mission is to help the Community <br />
                <span className="text-warning">Grow itself</span>
              </h1>
              <p className="text-muted">
                Swahilipot Hub Foundation is non-profit organization that
                meaningfully engages and empowers youth (18 to 35 years) to
                enable them to unleash their full potential. Based in the
                coastal city of Mombasa in Kenya, it is regulated by the NGO
                Coordination Board of Kenya.
              </p>
            </div>
          </div>
        </div>
        {/* End Row */}
        <div className="position-relative mb-5">
          {/* FancyBox */}
          <a
            href="https://www.youtube.com/watch?v=bscypssE8Ms"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            data-fslightbox="youtube-video"
          >
            <Image
              className="img-fluid"
              src="/images/aboutpage/7.jpeg"
              width={1920}
              height={1080}
              alt="Image Description"
            />
            <div className="position-absolute top-50 start-50 translate-middle">
              {/* Fancybox */}
              <div className="btn btn-white btn-lg">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <span className="text-primary">
                      <i className="bi-play-circle-fill" />
                    </span>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <span className="text-nowrap">Watch our story</span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <div
            className="position-absolute zi-n1"
            style={{ top: '-6rem', left: '-6rem' }}
          >
            <Image
              src="/assets/svg/components/shape-1.svg"
              alt="SVG"
              width={500}
              height={500}
              style={{ width: '12rem' }}
            />
          </div>
          <div
            className="position-absolute zi-n1"
            style={{ bottom: '-6rem', right: '-7rem' }}
          >
            <Image
              src="/assets/svg/components/shape-7.svg"
              alt="SVG"
              width={150}
              height={150}
            />
          </div>
          {/* End Background Shapes */}
        </div>
        <div className="text-center">
          <Link href="/about/origin" legacyBehavior>
            <a className="btn btn-outline-primary">
              Our History
              <i className="bi-chevron-right small ms-1" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero

import Image from 'next/image'
import React from 'react'

const AmphitheatreSpace = () => {
  return (
    <>
      <div className="bg-primary-dark">
        <div className="container content-space-1 content-space-md-2">
          <div className="row justify-content-lg-center position-relative zi-2">
            <div className="col-lg-8">
              <div className="mb-6">
                <h1 className="h2 text-white">Swahilipot Hub Amphitheater</h1>
                <p className="lead text-white">Where Art Meets the Heart</p>
              </div>

              <div className="mt-5">
                <Image
                  className="img-fluid"
                  src="/images/spaces/amp/Amp3.jpg"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape-container">
        <div className="shape shape-bottom zi-1">
          <svg
            width="3000"
            height="600"
            viewBox="0 0 3000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 600H3000V0L0 600Z" fill="#fff" />
          </svg>
        </div>
      </div>

      <div className="container content-space-b-1 content-space-b-md-3">
        <div className="row justify-content-lg-center">
          <div className="col-lg-8">
            <figure className="mb-3">
              <blockquote className="blockquote">
                Where Art and Entertainment Flourish
              </blockquote>
            </figure>

            <p>
              Step into the Community Hub Amphitheater, an enchanting space
              where art, culture, and entertainment come to life. This
              amphitheater is a testament to the creative spirit of our
              community and the celebration of the performing arts.
            </p>

            <div className="my-5">
              <Image
                className="img-fluid"
                src="/images/spaces/amp/Amp1.jpg"
                alt="Image Description"
              />
            </div>
            <h3>Benefits to the Community:</h3>
            <div className="mb-5">
              <h5>1: Cultural Enrichment:</h5>

              <p>
                Step into the Community Hub Amphitheater, an enchanting space
                where art, culture, and entertainment come to life. This
                amphitheater is a testament to the creative spirit of our
                community and the celebration of the performing arts.
              </p>
            </div>

            <div className="mb-5">
              <h5>2: Entertainment For All Ages:</h5>

              <p>
                {' '}
                From family-friendly events to cutting-edge performances, the
                amphitheater offers a diverse range of entertainment, ensuring
                that there's something for everyone in our community to enjoy.
              </p>
            </div>

            <div className="mb-5">
              <h5>3: Community Unity: </h5>

              <p>
                It's a space where the community can come together to celebrate
                the arts, fostering a sense of togetherness and shared
                experiences.
              </p>
            </div>
            <div className="mb-5">
              <h5>4:Inspiration Aspiration: </h5>

              <p>
                Young talents can use this space to showcase their potential,
                dream big, and be inspired by the creativity that surrounds them
                .
              </p>
            </div>

            <div className="mb-5">
              <h5>The Heart of Art and Entertainment</h5>

              <p>
                The Community Hub Amphitheater is more than just a performance
                venue; it's a reflection of our shared love for art and
                entertainment. It's where moments of wonder, joy, and
                inspiration are created, and it's a space that is open to all
                who appreciate the magic of live performances. Join us in
                celebrating the arts in a space where creativity knows no
                bounds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AmphitheatreSpace

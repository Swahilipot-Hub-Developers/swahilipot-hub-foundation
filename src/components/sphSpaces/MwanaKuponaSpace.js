import Image from 'next/image'
import React from 'react'

const MwanaKuponaSpace = () => {
  return (
    <>
      <div className="bg-primary-dark">
        <div className="container content-space-1 content-space-md-2">
          <div className="row justify-content-lg-center position-relative zi-2">
            <div className="col-lg-8">
              <div className="mb-6">
                <h2 className="h2 text-white">Jitume Lab </h2>
                <p className="lead text-white">Learning Centre</p>
              </div>

              <div className="mt-5">
                <Image
                  className="img-fluid"
                  src="/images/spaces/mwanakupona/jitume1.jpg"
                  height={400}
                  width={600}
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
              <p>
                <blockquote className="blockquote">Jitume </blockquote>Is a
                bundled program that takes care of the main challenges facing
                the citizens regarding taking advantage of digital
                opportunities. The challenges range from access to digital
                devices and internet connectivity, training, and knowledge as
                well as opportunities that can result in decent and dignified
                income. It encourages the youth to take it upon themselves
                Jitume to access digital devices and opportunities to learn,
                become certified on skills for the 4th Industrial Revolution
                (4IR) and to access digital job. After Swahilipot was equipped
                with 50 desktop computers by Jitume Labs, it opened up new
                possibilities, especially in skill-sharing, attracting many
                young individuals eager to learn despite their lack of skills.
              </p>
            </figure>

            <h3>Benefits to the Community:</h3>
            <div className="mb-5">
              <ul>
                <li>
                  Leveraged community expertise and partnerships with local
                  organizations to facilitate learning across various
                  backgrounds.{' '}
                </li>
                <li>
                  Offered interactive workshops, hands-on training, and
                  mentorship programs to help participants gain new skills and
                  explore their interests.{' '}
                </li>
                <li>
                  Enhanced practical knowledge and technical skills, promoting
                  collaboration, creativity, and innovation, and fostering a
                  vibrant learning ecosystem within the community.{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MwanaKuponaSpace

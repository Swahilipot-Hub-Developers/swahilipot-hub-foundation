import Image from 'next/image'
import React from 'react'

const CommunitySpace = () => {
  return (
    <>
      <div className="bg-primary-dark">
        <div className="container content-space-1 content-space-md-2">
          <div className="row justify-content-lg-center position-relative zi-2">
            <div className="col-lg-8">
              <ul className="list-inline list-separator list-separator-light mb-4">
                <li className="list-inline-item">
                  <a className="text-uppercase link-light small" href="#">
                    Process
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="text-uppercase link-light small" href="#">
                    Use case
                  </a>
                </li>
                <li className="list-inline-item">
                  <span className="text-uppercase text-light small">
                    5 min read
                  </span>
                </li>
              </ul>

              <div className="mb-6">
                <h1 className="h2 text-white">Community Space</h1>
                <p className="lead text-white">
                  Your Place, Your Space, Your Community.
                </p>
              </div>

              <div className="mt-5">
                {/*<img
                                className='img-fluid'
                                height={400}
                                width={400}
                                src='https://res.cloudinary.com/swahilipothubdev/image/upload/v1701851087/communityspace_bm70vl.jpg' 
                                alt="Image Description" 
                                /> */}

                <Image
                  src="https://res.cloudinary.com/swahilipothubdev/image/upload/v1702109230/DSC00572_tsykbc.jpg"
                  height={400}
                  width={600}
                  alt="Community Spaces"
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
                “ Your Place, Your Space, Your Community. “
              </blockquote>
            </figure>

            <p>
              Welcome to the heart of our community hub, the Community Space,
              where the essence of unity, collaboration, and togetherness
              thrives. This versatile area is a reflection of the values and
              spirit that bind our community together.
            </p>

            <h3>Benefits to the Community:</h3>

            <div className="my-5">
              <Image
                className="img-fluid"
                src="https://res.cloudinary.com/swahilipothubdev/image/upload/v1701851089/communityspace2_pahcox.jpg"
                alt="Image Description"
              />
              {/* {/* <Image className="img-fluid" src="../assets/img/900x600/img4.jpg" alt="Image Description" /> */}{' '}
              *
            </div>
            <h3>Benefits to the Community:</h3>
            <div className="mb-5">
              <h5>1: Versatility: </h5>

              <p>
                Whether you need a place for community meetings, workshops,
                exhibitions, or social gatherings, the Community Space is your
                canvas. It's a place where ideas come to life and connections
                are forged.
              </p>
            </div>

            <div className="mb-5">
              <h5>2: Community Engagement:</h5>

              <p>
                {' '}
                It is in this space that our community engages in discussions,
                shares information, and collaborates on projects that matter.
                It's where we shape the present and future of our neighborhood.
              </p>
            </div>

            <div className="my-5">
              {/* {/* <Image className="img-fluid" src="../assets/img/900x600/img5.jpg" alt="Image Description" /> */}
            </div>

            <div className="mb-5">
              <h5>3: Cultural Celebrations: </h5>

              <p>
                The Community Space is where we celebrate our diverse heritage.
                From cultural festivals to art exhibitions, it's a place where
                traditions are honored and creativity is showcased.
              </p>
            </div>
            <div className="mb-5">
              <h5>4: Support and Empowerment: </h5>

              <p>
                It's more than just a physical space; it's a symbol of support
                and empowerment. Here, we connect, inspire, and uplift one
                another, creating a strong sense of community belonging.
              </p>
            </div>

            <div className="mb-5">
              <h5>Where Community Thrives</h5>

              <p>
                The Community Space at SWAHILIPOT HUB is more than bricks and
                mortar; it's the embodiment of our shared values, aspirations,
                and identity. It's a space that is defined by the community, for
                the community, and we invite you to make it your own. Join us in
                building a stronger, more connected, and vibrant community
                together in this space we hold dear.
              </p>
            </div>

            <div className="row">
              <div className="col-sm-6 mb-5 mb-sm-0">
                <div className="d-flex align-items-center">
                  <h6 className="me-3 mb-0">Share:</h6>

                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a
                        className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                        href="#"
                      >
                        <i className="bi-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                        href="#"
                      >
                        <i className="bi-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                        href="#"
                      >
                        <i className="bi-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                        href="#"
                      >
                        <i className="bi-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex justify-content-sm-end">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a
                        className="btn btn-soft-secondary btn-icon btn-sm rounded-circle"
                        href="#"
                      >
                        <i className="bi-bookmark"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-soft-secondary btn-icon btn-sm rounded-circle"
                        href="#"
                      >
                        <i className="bi-flag"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommunitySpace

// import Image from "next/image"

import Image from 'next/image'

const MekatililiSpace = () => {
  return (
    <>
      <div className="bg-primary-dark">
        <div className="container content-space-1 content-space-md-2">
          <div className="row justify-content-lg-center position-relative zi-2">
            <div className="col-lg-8">
              <div className="mb-6">
                <h1 className="h2 text-white">Mekatilili Space</h1>
                <p className="lead text-white">
                  Discover the Spirit of Mekatilili.
                </p>
              </div>
              <div className="mt-5">
                <Image
                  className="img-fluid"
                  src="/images/spaces/mekatilili/Mekatilili2.jpg"
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
                Discover the Spirit of Mekatilili
              </blockquote>
            </figure>

            <p>
              The Mekatilili Community Space is a versatile and welcoming area
              designed to host a wide range of activities and events. With its
              open, airy design and ample natural light, it's the perfect
              setting for gatherings, workshops, and cultural celebrations. The
              space features modern amenities, comfortable seating, and is
              equipped with the latest audio-visual technology, making it ideal
              for seminars, lectures, and community meetings.
            </p>

            <div className="my-5">
              <Image
                className="img-fluid"
                src="/images/spaces/mekatilili/Mekatilili.jpg"
                alt="Image Description"
              />
            </div>
            <h3>Benefits to the Community:</h3>
            <div className="mb-5">
              <h5>1: Education and Empowerment:</h5>

              <p>
                Mekatilili Space is dedicated to promoting education and
                empowerment. It serves as a hub for workshops, seminars, and
                skill-building sessions, allowing our community to learn and
                grow.
              </p>
            </div>

            <div className="mb-5">
              <h5>2: Cultural Celebrations:</h5>

              <p>
                {' '}
                From traditional dance performances to storytelling sessions,
                Mekatilili Space is the place where our rich cultural heritage
                comes to life. It's the perfect stage for celebrating our
                history and traditions.
              </p>
            </div>

            <div className="mb-5">
              <h5>3: Community Meetings: </h5>

              <p>
                Whether you're planning a neighborhood association meeting or a
                local event, Mekatilili Space offers a welcoming environment to
                gather and discuss community matters.
              </p>
            </div>
            <div className="mb-5">
              <h5>4: Unity and Collaboration: </h5>

              <p>
                Mekatilili Space is where people come together to collaborate,
                share ideas, and work on initiatives that benefit our community.
                It's a space where partnerships are forged and dreams become
                reality.
              </p>
            </div>

            <div className="mb-5">
              <h5>Mekatilili wa Menza: A Legacy of Strength</h5>

              <p>
                Mekatilili wa Menza was a fearless Kenyan woman who fearlessly
                fought for the rights and freedom of her people during the
                colonial era. She serves as an inspiration to us all, and her
                legacy lives on in the Mekatilili Community Space. Join us in
                honoring her memory and building a stronger, more empowered
                community together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MekatililiSpace

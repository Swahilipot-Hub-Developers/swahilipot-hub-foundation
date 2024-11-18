import Image from 'next/image'
import React from 'react'

const MazuruiSpace = () => {
  return (
    <>
      <div className="bg-primary-dark">
        <div className="container content-space-1 content-space-md-2">
          <div className="row justify-content-lg-center position-relative zi-2">
            <div className="col-lg-8">
              <div className="mb-6">
                <h1 className="h2 text-white">Ali Mazrui Cultural Center</h1>
                <p className="lead text-white">
                  Celebrating Intellectual Excellence.
                </p>
              </div>

              <div className="mt-5">
                <Image
                  className="img-fluid"
                  src="/images/spaces/alimazurui/ali1.jpg"
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
                Celebrating Intellectual Excellence
              </blockquote>
            </figure>

            <p>
              The Ali Mazrui Cultural Center is a space where the legacy of one
              of Kenya's most distinguished scholars and intellectuals, Ali
              Mazrui, continues to shine. This center embodies his passion for
              knowledge, diversity, and the power of ideas.
            </p>
            <h3>Benefits to the Community:</h3>
            <div className="mb-5">
              <h5>1: Learning and Research:</h5>

              <p>
                The library at the Ali Mazrui Cultural Center is stocked with an
                extensive collection of books, journals, and digital resources.
                It's the perfect place for students, scholars, and lifelong
                learners to engage with knowledge.
              </p>
            </div>

            <div className="mb-5">
              <h5>2: Art and Culture:</h5>

              <p>
                {' '}
                The art gallery showcases a rich tapestry of Kenyan and African
                art, fostering a deeper appreciation for our cultural heritage.
                It also hosts exhibitions, workshops, and events that celebrate
                local and international artistry.
              </p>
            </div>
            <div className="mb-5">
              <h5>3: Community Dialogue: </h5>

              <p>
                This space is ideal for discussions, lectures, and seminars on
                diverse topics. It encourages open dialogue and intellectual
                exchange that can lead to community growth and understanding.
              </p>
            </div>
            <div className="mb-5">
              <h5>4: Youth Empowerment: </h5>

              <p>
                The Ali Mazrui Cultural Center offers mentorship programs,
                internships, and events specifically tailored to empower the
                youth, inspiring the next generation of leaders and thinkers.
              </p>
            </div>

            <div className="mb-5">
              <h5>Ali Mazrui: A Scholar's Legacy</h5>

              <p>
                Ali Mazrui was a scholar, philosopher, and public intellectual
                who made significant contributions to the fields of political
                science and African studies. His commitment to addressing
                complex issues through intellectual discourse continues to
                influence our community. The Ali Mazrui Cultural Center is a
                tribute to his enduring legacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MazuruiSpace

/* eslint-disable @next/next/no-img-element */
const technology = () => {
  return (
    <>
      {/* Hero */}
      <div className='bg-soft-warning'>
        <div className='container content-space-t-2 content-space-t-md-3 content-space-b-1'>
          {/* Heading */}
          <div className='w-lg-75 text-center mx-lg-auto mb-7'>
            <h1 className='display-3 text-primary'>
              Technology <span className='text-warning'>Department</span>
            </h1>
            <p className='lead'>
              Kuwezesha Ustadi wa Teknolojia, Kukuza Vipaji
            </p>
          </div>

          <div className='text-center'>
            <img
              className='img-fluid'
              src='../images/tech.svg'
              alt='Image Description'
            />
          </div>
        </div>
      </div>
      {/* Shape */}
      <div className='shape-container'>
        <div className='shape shape-bottom zi-1'>
          <svg
            width={3000}
            height={600}
            viewBox='0 0 3000 600'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 600H3000V0L0 600Z' fill='#fff' />
          </svg>
        </div>
      </div>
      {/* Description */}
      <div className='container content-space-b-1 content-space-b-md-3'>
        <div className='row justify-content-lg-center'>
          <div className='col-lg-8'>
            <figure className='mb-3'>
              <blockquote className='blockquote'>
                “ Empowering Young Individuals in Technology “
              </blockquote>
            </figure>
            <div className='my-5'>
              <img
                className='img-fluid'
                src='../images/comms-photo.jpg'
                alt='Image Description'
              />
            </div>
            <div>
              <h5>Data and Research</h5>
              <p>
                Our Data and Research programs focus on data collection and
                analysis. Through partnerships with organizations like Decodis
                and UN Habitat, we provide opportunities for young people to
                earn a stipend and participate in this program. Over 100 youths
                have gained valuable skills in data collection and analysis
                through this initiative.
              </p>
            </div>
            <div>
              <h5>Digital Literacy</h5>
              <p>
                We conduct programs aimed at enhancing digital skills among
                young people, enabling them to thrive in the digital space. In
                collaboration with industry leaders like Cisco, Huawei,
                21Skills, and the Red Cross Innovation Unit, we offer technical
                and soft skills training. To date, more than 150 youths have
                acquired valuable digital skills through this program.
              </p>
            </div>
            <div>
              <h5>Industrial Attachment</h5>
              <p>
                Our Industrial Attachment program offers a well-structured
                curriculum for attachés from various institutions to acquire
                industry-specific skills. Participants gain hands-on experience
                in fields such as web development, networking, and essential
                soft skills like working with young people and effective
                communication. We prioritize teaching 21st-century skills to
                equip participants for success.
              </p>
            </div>
            <div>
              <h5>Campus Ambassador</h5>
              <p>
                Through our Campus Ambassador program, we collaborate closely
                with six tertiary institutions. Our ambassadors share
                information about the opportunities and benefits that Swahilipot
                provides to young people. In return, we offer support to these
                ambassadors through workshops, meetups, online courses, and
                hackathons. This program nurtures young talents and fosters a
                vibrant tech community.
              </p>
            </div>
            <div>
              <h5>Pitching Thursday</h5>
              <p>
                Our enterprise program, known as Pitching Thursday, provides a
                platform for young individuals to pitch their ideas or ventures.
                Participants receive valuable feedback from judges and the
                audience on the spot. This program offers exposure and serves as
                a catalyst for growth and development. We have supported over 10
                ventures to date, aiding them in their entrepreneurial journeys.
              </p>
            </div>
            <div>
              <p>
                Through these initiatives, we aim to create a conducive
                environment for young individuals to explore and excel in the
                tech industry. Our diverse programs and opportunities nurture
                talent, encourage innovation, and empower the next generation of
                tech leaders.
              </p>
            </div>
            {/* End Row */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Description */}
    </>
  )
}

export default technology

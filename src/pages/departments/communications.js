/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

const communications = () => {
  return (
    <>
      <div className='bg-soft-warning'>
        <div className='container content-space-t-2 content-space-t-md-3 content-space-b-1'>
          {/* Heading */}
          <div className='w-lg-75 text-center mx-lg-auto mb-7'>
            <h1 className='display-3 text-primary'>
              Communications <span className='text-warning'>Department</span>
            </h1>
            <p className='lead'>Kujenga Mawasiliano, Kueneza Sauti</p>
          </div>

          <div className='text-center'>
            <img
              className='img-fluid'
              src='../images/comms.svg'
              alt='Image Description'
            />
          </div>
        </div>
      </div>
      {/* End Hero */}
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
      {/* End Shape */}
      {/* Description */}
      <div className='container content-space-b-1 content-space-b-md-3'>
        <div className='row justify-content-lg-center'>
          <div className='col-lg-8'>
            <figure className='mb-3'>
              <blockquote className='blockquote'>
                Creating an Inclusive Community
              </blockquote>
            </figure>
            <p>
              Welcome to the Community Department at Swahilipot Hub! We are
              thrilled to have you join our vibrant community. Here, we believe
              in minding other people's business in the best way possible - by
              enabling community members to develop themselves and create an
              environment where talents can thrive and expertise can be shared.
            </p>
            <p>
              Our primary goal is to provide a platform for every individual to
              express their thoughts, ideas, and opinions. We want to ensure
              that everyone's voice is heard and respected within our community.
              Regardless of your tribe, religion, political affiliation, or
              social status, we strive to create a safe space where everyone
              feels included and valued.
            </p>
            <p>
              At the heart of our community lies our commitment to love, unity,
              and peaceful coexistence. We believe that by fostering a sense of
              togetherness and understanding, we can create a stronger and more
              harmonious society. We encourage meaningful partnerships among our
              members, as collaboration often leads to incredible achievements.
            </p>

            <div className='mb-5'>
              <h5>Collaboration and Partnerships</h5>
              <p>
                Remember, Swahilipot Hub is not just a physical building; it is
                the people who make up our community. Each and every member
                contributes to the vibrant tapestry of ideas, skills, and
                experiences that make our hub unique. Together, we can explore
                endless possibilities, support one another's growth, and make a
                positive impact on our society.
              </p>
              <p>
                We emphasize the importance of collaboration and partnerships
                within our community. We encourage community members to engage
                in meaningful collaborations, recognizing the power of working
                together for achieving remarkable results. By understanding and
                appreciating each other's perspectives and expertise, we can
                unlock the full potential of our diverse community.
              </p>
            </div>
            <div className='mb-5'>
              <h5>Personal and Professional Development</h5>
              <p>
                At Swahilipot Hub, we prioritize the personal and professional
                development of our community members. We provide a platform for
                individuals to express their thoughts, ideas, and opinions.
                Through various programs, workshops, and resources, we aim to
                support the growth and development of our members.
              </p>
              <p>
                We celebrate diversity and promote exploration, learning, and
                creativity. Our community offers opportunities for personal and
                professional advancement, allowing individuals to thrive and
                reach their full potential. Together, in an environment that
                celebrates diversity, we can explore, learn, and create, making
                a positive impact on both ourselves and our society.
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

export default communications

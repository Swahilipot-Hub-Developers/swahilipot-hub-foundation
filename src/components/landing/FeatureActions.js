/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

const FeatureActions = () => {
  return (
    <>
      {/* Features */}
      <div className='container overflow-hidden content-space-1'>
        {/* Heading */}
        <div className='w-lg-65 text-center mx-lg-auto mb-7'>
          <h3>
            Swahilipot Hub
            <br />
            Strategic Objectives
          </h3>
          <p className='fs-6'>
            Swahilipot’s approach to meaningful youth engagement and empowerment
            is guided by 3 outcome goals/strategic objectives.
          </p>
        </div>
        {/* End Heading */}
        <div className='row justify-content-end align-items-md-center'>
          <div className='col-md-6 mb-7 mb-md-0'>
            {/* Mobile Device */}
            <figure className=' text-center mx-auto'>
              <img
                className='img-fluid'
                src='/images/aboutpage/7.jpeg'
                height={400}
                width={600}
                alt='Image Description'
              />

              {/* <div
                className='position-absolute top-50 translate-middle-y zi-n1'
                style={{ right: '-7rem' }}
              >
                <img
                  className='img-fluid'
                  src='../assets/svg/components/shape-8.svg'
                  alt='SVG'
                  style={{ width: '10rem' }}
                />
              </div> */}
            </figure>
            {/* End Mobile Device */}
          </div>
          {/* End Col */}
          <div className='col-md-6'>
            <div className='p-md-5 p-lg-7'>
              {/* Heading */}
              <div className='mb-7'>
                <h3>
                  Enhancing Youth Civic Participation and Community Impact
                </h3>
              </div>
              {/* End Heading */}
              {/* List Checked */}
              <ul className='list-checked list-checked-primary mb-0'>
                <li className='list-checked-item'>
                  Providing safe and conducive spaces for youth to engage in
                  civic activities and express their ideas.
                </li>
                <li className='list-checked-item'>
                  Offering holistic support systems, including mentorship
                  programs, to empower youth and enhance their skills for
                  community involvement
                </li>
                <li className='list-checked-item'>
                  Ensuring access to social services that address the needs of
                  young people and enable them to actively participate in social
                  change initiatives.
                </li>
              </ul>
              {/* End List Checked */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      
      {/* End Features */}
      {/* Features */}
      <div className='container overflow-hidden content-space-b-1'>
        <div className='row justify-content-end align-items-md-center'>
          <div className='col-md-6 order-md-2 mb-7 mb-md-0'>
            {/* Mobile Device */}
            <figure className=' text-center mx-auto'>
              <div className=''>
                <img
                  // className='device-mobile-img'
                  src='/images/spaces/mekatilili/Mekatilili.jpg'
                  height={400}
                  width={600}
                  alt='Image Description'
                />
              </div>
              {/* <div
                className='position-absolute top-50 translate-middle-y zi-n1'
                style={{ right: '-7rem' }}
              >
                <img
                  className='img-fluid'
                  src='../assets/svg/components/shape-1.svg'
                  alt='SVG'
                  style={{ width: '10rem' }}
                />
              </div> */}
            </figure>
            {/* End Mobile Device */}
          </div>
          {/* End Col */}
          <div className='col-md-6'>
            <div className='p-md-5 p-lg-7'>
              {/* Heading */}
              <div className='mb-7'>
                <h3>
                  Strengthening Partnerships and Collaborations for Youth
                  Empowerment
                </h3>
              </div>
              {/* End Heading */}
              {/* List Checked */}
              <ul className='list-checked list-checked-primary mb-0'>
                <li className='list-checked-item'>
                  Fostering partnerships between various stakeholders, such as
                  government institutions, NGOs, and community organizations, to
                  create a comprehensive support system for youth.
                </li>
                <li className='list-checked-item'>
                  Collaborating with different sectors to increase opportunities
                  for young people, such as education, employment, and
                  entrepreneurship.
                </li>
                <li className='list-checked-item'>
                  Catalyzing systemic change by bringing together diverse actors
                  to collectively address issues affecting youth and create
                  sustainable solutions.
                </li>
              </ul>
              {/* End List Checked */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Features */}
      {/* Features */}
      <div className='container overflow-hidden content-space-b-1'>
        <div className='row justify-content-end align-items-md-center'>
          <div className='col-md-6 mb-7 mb-md-0'>
            {/* Mobile Device */}
            <figure className='text-center mx-auto'>
              <div>
                <img
                  src='/images/aboutpage/5.jpeg'
                  height={400}
                  width={400}
                  alt='Image Description'
                />
              </div>
              <div
                className='position-absolute top-50 translate-middle-y zi-n1'
                style={{ left: '-7rem' }}
              >
                <img
                  className='img-fluid'
                  src='../assets/svg/components/shape-9.svg'
                  alt='SVG'
                  style={{ width: '7rem' }}
                />
              </div>
            </figure>
            {/* End Mobile Device */}
          </div>
          {/* End Col */}
          <div className='col-md-6'>
            <div className='p-md-5 p-lg-7'>
              {/* Heading */}
              <div className='mb-7'>
                <h3>
                  Promoting Positive Youth Development and Building Capacities
                </h3>
              </div>
              {/* End Heading */}
              <ul className='list-checked list-checked-primary mb-0'>
                <li className='list-checked-item'>
                  Implementing youth development programs that focus on
                  nurturing the skills, capacities, and agency of young
                  individuals.
                </li>
                <li className='list-checked-item'>
                  Offering opportunities for young people to develop their
                  talents, interests, and strengths through a range of
                  activities and initiatives.
                </li>
                <li className='list-checked-item'>
                  Equipping young people with assets, including knowledge,
                  networks, and resources, to enhance their personal growth,
                  leadership abilities, and long-term success.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureActions

import React from 'react'

const RoleDescription = () => {
  return (
    <div>
      <div
        className='tab-pane fade show active'
        id='one'
        role='tabpanel'
        aria-labelledby='one-tab'
      >
        <div className='mb-5'>
          <p>
            In the past seven years, the Swahilipot Hub Foundation (SPH) has
            been dedicated to supporting youth in overcoming challenges and
            thriving. Through strategic partnerships with communities,
            government entities, CSOs, and local leaders, the foundation
            leverages the strengths and diversity of individuals from all
            backgrounds to empower young people and enhance their quality of
            life. With a strong commitment to inclusivity, cooperation,
            self-reliance, and respect for diversity, the foundation allows
            young individuals to take charge of their journey, while making
            long-term investments, forging partnerships, and fostering a vibrant
            culture of youth engagement in all aspects of development.
          </p>
        </div>

        <div className='mb-5'>
          <p>
            Currently, the Swahilipot Hub Foundation is actively searching for a
            highly skilled and experienced individual to lead the designing of a
            Life Skills Development Curriculum and user guide for the Case
            Management program within a period of 31 days. This position will
            work closely with the project team and report directly to the
            Project Manager. The Life Skills Development Curriculum Consultant
            will be responsible for designing and refining a curriculum and User
            Guide that will empower youth participants in the Case Management
            Project to acquire essential life skills and achieve their
            educational, vocational, and entrepreneurial goals.
          </p>
        </div>

        <div className='d-grid text-center mt-7'>
          <a
            className='js-apply-tab btn btn-primary btn-lg'
            href='https://drive.google.com/file/d/1We7k1J1XLeD3kFaDYt58d7Wpz-uSv3vh/view'
            target='_blank'
          >
            Application Instructions
          </a>
        </div>
      </div>
    </div>
  )
}

export default RoleDescription

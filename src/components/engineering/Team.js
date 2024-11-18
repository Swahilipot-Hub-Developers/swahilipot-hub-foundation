import TeamCard from './TeamCard'

const Team = () => {
  const teamMembers = [
    {
      imgSrc: '../images/engineeringteam/chri-achinga.jpg',
      name: 'Chris Achinga',
      role: 'Dude',
      description:
        'Maker of Softwares, Breaker of Systems, and Father of Dragons.',
    },
    {
      imgSrc: '../images/engineeringteam/amianda.jpg',
      name: 'Jesse Amianda',
      role: 'Software Developer',
      description: 'Focused on frontend frameworks and user experience design.',
    },
    {
      imgSrc: '../images/engineeringteam/joy-ngugi.jpg',
      name: 'Joy Ngugi',
      role: 'Software Developer',
      description: 'Focused on frontend frameworks and user experience design.',
    },
    {
      imgSrc: '../images/engineeringteam/rose-ndinda.jpg',
      name: 'Rose Ndinda',
      role: 'Software Developer',
      description:
        'Passionate about cloud solutions and infrastructure security.',
    },
    {
      imgSrc: '../images/engineeringteam/mulky.jpg',
      name: 'Mulky Mohamed',
      role: 'Technical Support & Mentor',
      description: 'Volunteer and Technical Supporter',
    },
    {
      imgSrc: '../images/engineeringteam/chris-mwalimu.jpg',
      name: 'Chris Mwalimo',
      role: 'Software Engineer',
      description:
        'Specializes in AI technologies and machine learning models.',
    },
    {
      imgSrc: '../images/engineeringteam/bianca.jpg',
      name: 'Bianca Gatwiri',
      role: 'Tech Finance',
      description:
        'Oversees financial strategies and tech funding initiatives.',
    },
    {
      imgSrc: '../images/engineeringteam/micky.jpg',
      name: 'Micky Maria',
      role: 'Cybersecurity Engineer',
      description:
        'Dedicated to enhancing system security and data protection.',
    },
    {
      imgSrc: '../images/engineeringteam/aron.jpg',
      name: 'Aaron Wanje',
      role: 'Technical Support',
      description:
        'Ensures smooth operations and rapid troubleshooting, incharge of Digital Literacy classes.',
    },
  ]

  return (
    <div>
      <div className='text-center mb-7'>
        <h1 className='display-4 text-primary'>Meet the Team</h1>
      </div>
      <div className='container content-space-1'>
        <div className='row mb-sm-5'>
          {teamMembers.map(member => (
            <TeamCard
              key={member.name}
              imgSrc={member.imgSrc}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
        {/* <div className='text-center'>
          <p className='mb-0'>Want to join us?</p>
          <a className='link' href='../page-careers.html'>
            See all opening positions{' '}
            <i className='bi-chevron-right small ms-1' />
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default Team

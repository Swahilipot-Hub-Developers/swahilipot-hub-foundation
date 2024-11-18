/* eslint-disable @next/next/no-img-element */
const TeamCard = ({ imgSrc, name, role, description }) => {
  return (
    <div className='col-sm-6 col-lg-4 mb-7'>
      <div className='w-65 text-center mx-auto'>
        <img
          className='img-fluid rounded-circle mb-5'
          src={imgSrc}
          alt={`${name} Headshot`}
        />
        <h6 className='mb-1'>{name}</h6>
        <span className='d-block'>{role}</span>
        <div className='border-top mx-auto my-3' style={{ maxWidth: '5rem' }} />
        <p>{description}</p>
      </div>
    </div>
  )
}

export default TeamCard

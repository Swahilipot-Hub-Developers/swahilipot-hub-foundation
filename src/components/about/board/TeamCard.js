import Image from 'next/image'

const TeamCard = ({ name, department, imageURL }) => {
  return (
    <div className='col-sm-6 col-lg-4 mb-7'>
      {/* Team */}
      <div className='w-65 text-center mx-auto'>
        <Image
          className='img-fluid rounded-circle mb-5'
          src={imageURL}
          width={450}
          height={200}
          alt='A cool image of our member'
        />
        <h6 className='mb-1'>{name}</h6>
        <div className='border-top mx-auto my-3' style={{ maxWidth: '5rem' }} />
        <span className='d-block text-capitalize'>{department}</span>
      </div>
      {/* End Team */}
    </div>
  )
}

export default TeamCard

TeamCard.defaultProps = {
  name: 'Member Name',
  department: 'Department',
  imageURL: '/assets/img/350x350/img9.jpg',
}

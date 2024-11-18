import Image from 'next/image'

const TeamImg = ({ imgSrc, name, title }) => {
  return (
    <>
      <div>
        <Image
          src={imgSrc}
          height={100}
          width={100}
          alt='Member image'
          className='rounded-circle'
        />
        <h3 className='fw-bold'>{name}</h3>
        <p>{title}</p>
      </div>
    </>
  )
}

export default TeamImg

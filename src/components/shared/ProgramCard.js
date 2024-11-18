import Image from 'next/image'
import Link from 'next/link'

const ProgramCard = ({ department, title, link }) => {
  return (
    <div className='col-sm-6 col-lg-4 mb-3 mb-lg-5'>
      {/* Card */}
      <Link href={`/programs/${link}`} legacyBehavior>
        <a
          className='card card-lg card-transition bg-primary-dark'
          style={{ minHeight: '22rem' }}
        >
          <div className='card-body'>
            <div className='mb-3'>
              <span className='badge bg-soft-light'>{department}</span>
            </div>
            <h4 className='card-title text-white mb-5'>{title}</h4>
            <Link href={`/programs/${link}`}>
              <span className='card-link link-light'>
                More Information <i className='bi-chevron-right small ms-1' />
              </span>
            </Link>
            <div className='position-absolute bottom-0 start-0 end-0'>
              <Image
                className='card-img'
                src='/assets/svg/components/shape-4-soft-light.svg'
                width={100}
                height={100}
                alt='Image Description'
              />
            </div>
          </div>
        </a>
      </Link>
      {/* End Card */}
    </div>
  )
}

export default ProgramCard

ProgramCard.defaultProps = {
  department: 'Department',
  title: 'Title',
  link: '/goyn',
}

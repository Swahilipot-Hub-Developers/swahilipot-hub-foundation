import Link from 'next/link'
import Image from 'next/image'

const PageNotFound = () => {
  return (
    <div>
      <div className='container text-center'>
        <Image
          className='img-fluid mb-5'
          src='./assets/svg/illustrations/oc-error.svg'
          width={500}
          height={375}
          alt='Page Not Found'
          style={{ width: '30rem' }}
        />
        <p>The page you are looking for does not exist!</p>
        <Link href='/' legacyBehavior>
          <a className='btn btn-primary'>Go back home</a>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
// import { useRouter } from 'next/router'
//import Image from 'next/image'

const Logo = () => {

  
  return (
    <Link href='/' legacyBehavior>
      <a className='navbar-brand' aria-label='Space'>
        <img
          className='navbar-brand-logo'
          src='/logo/logo.png'
          alt='Swahilipot Hub Logo'
          width={300}
          height={30}
        />
      </a>
    </Link>
  )
}

export default Logo

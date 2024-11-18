import Image from 'next/image'

const Logo = ({ width, height }) => {
  return (
    <>
      <Image
        className='navbar-brand-logo'
        src='/images/logo.png'
        width={width}
        height={height}
        alt='SWahilipot Hub Logo'
      />
    </>
  )
}

export default Logo

Logo.defaultProps = {
  width: 100,
  height: 50,
}

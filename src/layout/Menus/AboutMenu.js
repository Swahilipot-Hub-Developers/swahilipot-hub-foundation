import { NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
import { useState } from 'react'

const AboutMenu = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <NavDropdown
      title='About Swahilipot'
      id='blogMegaMenu'
      className='nav-item'
      show={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href='/about' legacyBehavior>
        <NavDropdown.Item as='a'>About Us</NavDropdown.Item>
      </Link>
      <Link href='/contact' legacyBehavior>
        <NavDropdown.Item as='a'>Contact Us</NavDropdown.Item>
      </Link>
      <Link href='/about/origin' legacyBehavior>
        <NavDropdown.Item as='a'>Our Origin Story</NavDropdown.Item>
      </Link>
      {/* <Link href="/about/sponsors" legacyBehavior>
        <NavDropdown.Item as="a">Our Partners</NavDropdown.Item>
      </Link> */}
      {/* <Link href="/about/media" legacyBehavior>
        <NavDropdown.Item as="a">Media</NavDropdown.Item>
      </Link> */}
    </NavDropdown>
  )
}

export default AboutMenu

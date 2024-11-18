import { NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
import { useState } from 'react'

const ProgramMenu = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <NavDropdown
      title='Programs'
      id='landingsMegaMenu'
      className='nav-item'
      show={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href='/programs/case-management' legacyBehavior>
        <NavDropdown.Item as='a'>Case Management</NavDropdown.Item>
      </Link>
      <Link href='/programs/mombasa-tourism-innovation-lab' legacyBehavior>
        <NavDropdown.Item as='a'>
          Mombasa Tourism Innovation Lab
        </NavDropdown.Item>
      </Link>
      <Link href="programs/events" legacyBehavior>
        <NavDropdown.Item as='a'>Events</NavDropdown.Item>
      </Link>
      <Link href='/programs/campus_ambassador' legacyBehavior>
        <NavDropdown.Item as='a'>Campus Ambassador Program</NavDropdown.Item>
      </Link>
      <Link href='/programs/swahili-tech-women' legacyBehavior>
        <NavDropdown.Item as='a'>Swahili Tech Women</NavDropdown.Item>
      </Link>
    </NavDropdown>
  )
}

export default ProgramMenu

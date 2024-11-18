import { NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
import { useState } from 'react'

const DepartmentMenu = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <NavDropdown
      title='Departments'
      id='blogMegaMenu'
      className='nav-item'
      show={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href='/departments/communications' legacyBehavior>
        <NavDropdown.Item as='a'>Communications</NavDropdown.Item>
      </Link>
      <Link href='/departments/technology' legacyBehavior>
        <NavDropdown.Item as='a'>Technology</NavDropdown.Item>
      </Link>
      <Link href='/departments/engineering' legacyBehavior>
        <NavDropdown.Item as='a'>Engineering Team</NavDropdown.Item>
      </Link>
      <Link href='/departments/creatives' legacyBehavior>
        <NavDropdown.Item as='a'>Creatives</NavDropdown.Item>
      </Link>
      <Link href='/departments/community' legacyBehavior>
        <NavDropdown.Item as='a'>Community Experience</NavDropdown.Item>
      </Link>
    </NavDropdown>
  )
}

export default DepartmentMenu

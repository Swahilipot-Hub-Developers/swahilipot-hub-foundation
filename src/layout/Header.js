import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ProgramMenu from './Menus/ProgramMenu'
import DepartmentMenu from './Menus/DepartmentMenu'
import AboutMenu from './Menus/AboutMenu'
import Logo from './Menus/Logo'
import MenuCTA from './Menus/MenuCTA'
import DonateBtn from './Menus/DonateBtn'

//import BlogLink from './Menus/BlogLink'



const Header = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      setIsNavbarOpen(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }

  return (
    <Navbar expand='lg' bg='white' variant='light' expanded={isNavbarOpen}>
      <Container>
      <Logo />

        <Navbar.Toggle
          aria-controls='navbarNavDropdown'
          aria-expanded={isNavbarOpen}
          onClick={handleNavbarToggle}
        >
          <span className={`navbar-toggler-default`}>
            <i className='bi-list' />
          </span>
          <span className={`navbar-toggler-toggled`}>
            <i className='bi-x' />
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id='navbarNavDropdown' className='justify-content-end'>
          <Nav className='navbar-nav ml-auto'>
            {/* <BlogLink /> */}
            <ProgramMenu />
            <DepartmentMenu />
            <AboutMenu />
            <NavDropdown.Divider />
            <MenuCTA/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

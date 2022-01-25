import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AppNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">App Jeux-Video</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" as={Link} to="/">
                Accueil
              </Nav.Link>
              <Nav.Link href="#link" as={Link} to="/constructeurs">
                Constructeurs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

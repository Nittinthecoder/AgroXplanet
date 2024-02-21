import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-[10px]">
      <Container>
        <Navbar.Brand className='mr-[880px]' href="#home">AgroXPlanet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="nav-items flex justify-between">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">H</Nav.Link>
            {/* <Nav.Link href="#link">Products</Nav.Link> */}
            {/* <NavDropdown className='text-slate-700' title="Products" id="basic-nav-dropdown"> */}
              {/* <NavDropdown.Item href="#action/3.1">Paddy</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"> Separated link </NavDropdown.Item> */}
            {/* </NavDropdown> */}
            <Nav.Link href="#home"> Transport Services</Nav.Link>
            <div className="btn flex justify-between p-2 ">
                <Button className='absolute right-[170px]' as="a" variant="primary"> Sign-in </Button>
                <Button className='absolute right-[70px]' as="b" variant="primary"> Login-in </Button>
            </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
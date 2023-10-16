import { Container, Navbar, Nav } from "react-bootstrap";

const Navigationbar: React.FC<{}> = ({}) => {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">Car Physics Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inputs">
              Inputs
            </Nav.Link>
            <Nav.Link href="#track">
              Track
            </Nav.Link>
            <Nav.Link href="#charts">
              Charts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;

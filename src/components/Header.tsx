import { Button, Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="white" expand="md" className="border-bottom sticky-top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          🛍️ ShopKit
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-md-center gap-md-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button variant="dark" style={{ borderRadius: "25px" }}>
              Sign up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white py-5 mt-5">
      <Container className="text-center">
        <h5 className="fw-bold">🛍️ ShopKit</h5>
        <p className="mb-1">Email: hello@shopkit.com</p>
        <p className="text-secondary small mb-0">© 2026 ShopKit. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;

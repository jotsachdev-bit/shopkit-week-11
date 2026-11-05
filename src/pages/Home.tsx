import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ====== STEP: Yahan apna content change karo ======
const features = [
  { icon: "🚚", title: "Fast Delivery", text: "Order today, get it at your door within 2 days." },
  { icon: "💳", title: "Easy Payment", text: "Pay by card, wallet or cash on delivery." },
  { icon: "🔒", title: "Secure Shopping", text: "Your data is always safe with us." },
];

const products = [
  { icon: "🎧", name: "Headphones", price: "Rs. 4,500" },
  { icon: "⌚", name: "Smart Watch", price: "Rs. 7,999" },
  { icon: "🎒", name: "Backpack", price: "Rs. 3,200" },
  { icon: "👟", name: "Sneakers", price: "Rs. 5,800" },
];
// ==================================================

function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section id="home" className="py-5" style={{ backgroundColor: "#f7f7f8" }}>
        <Container className="text-center py-5" style={{ maxWidth: "750px" }}>
          <h1 className="fw-semibold" style={{ fontSize: "44px", color: "#202123" }}>
            Everything you need, in one place
          </h1>
          <p className="text-secondary fs-5 my-4">
            Discover great products at friendly prices. Simple, fast and secure.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button variant="dark" size="lg" style={{ borderRadius: "30px" }} href="#products">
              Shop Now
            </Button>
            <Button variant="outline-secondary" size="lg" style={{ borderRadius: "30px" }} href="#features">
              Learn More
            </Button>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section id="features" className="py-5">
        <Container>
          <h2 className="text-center fw-semibold mb-5">Why choose us</h2>
          <Row className="g-4">
            {features.map((f) => (
              <Col md={4} key={f.title}>
                <Card className="h-100 text-center border-0 shadow-sm p-3" style={{ borderRadius: "20px" }}>
                  <Card.Body>
                    <div style={{ fontSize: "42px" }}>{f.icon}</div>
                    <Card.Title className="mt-3">{f.title}</Card.Title>
                    <Card.Text className="text-secondary">{f.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Products */}
      <section id="products" className="py-5" style={{ backgroundColor: "#f7f7f8" }}>
        <Container>
          <h2 className="text-center fw-semibold mb-5">Popular products</h2>
          <Row className="g-4">
            {products.map((p) => (
              <Col xs={6} md={3} key={p.name}>
                <Card className="h-100 text-center border-0 shadow-sm" style={{ borderRadius: "20px" }}>
                  <Card.Body>
                    <div style={{ fontSize: "56px" }}>{p.icon}</div>
                    <Card.Title className="mt-3">{p.name}</Card.Title>
                    <Card.Text className="fw-bold">{p.price}</Card.Text>
                    <Button variant="dark" size="sm" style={{ borderRadius: "20px" }}>
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Home;

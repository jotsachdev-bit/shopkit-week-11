import { Button, Container } from "react-bootstrap";

function Cafe() {
  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "brown", fontSize: "36px" }}>
        Welcome to My Cafe ☕
      </h1>

      <p style={{ color: "gray", fontSize: "18px" }}>
        Enjoy fresh coffee and delicious food!
      </p>

      <h2 style={{ color: "brown", marginTop: "30px" }}>Our Menu</h2>

      <p style={{ fontSize: "18px" }}>Coffee - Rs. 400</p>
      <p style={{ fontSize: "18px" }}>Burger - Rs. 600</p>
      <p style={{ fontSize: "18px" }}>Pizza - Rs. 1000</p>

      <Button variant="dark">Order Now</Button>

      <footer
        style={{
          marginTop: "50px",
          backgroundColor: "#eeeeee",
          padding: "15px",
        }}
      >
        <p>© 2026 My Cafe</p>
      </footer>
    </Container>
  );
}

export default Cafe;

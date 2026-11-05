import { Button, Container } from "react-bootstrap";

function ChatGPTHome() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "240px",
          backgroundColor: "#f7f7f8",
          padding: "25px 15px",
        }}
      >
        <h3 style={{ fontWeight: "bold", marginBottom: "35px" }}>ChatGPT</h3>

        <p
          style={{
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "#e8e8e8",
          }}
        >
          ✏️ New chat
        </p>

        <p style={{ padding: "10px" }}>🔍 Search chats</p>
        <p style={{ padding: "10px" }}>📚 Library</p>

        <hr />

        <p style={{ color: "#888888", fontSize: "13px" }}>Your chats</p>

        <p style={{ fontSize: "14px" }}>React learning</p>
        <p style={{ fontSize: "14px" }}>Website design ideas</p>
        <p style={{ fontSize: "14px" }}>My cafe project</p>

        <div style={{ marginTop: "auto", paddingTop: "200px" }}>
          <hr />
          <p>👤 My Account</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, position: "relative" }}>
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "22px 30px",
            alignItems: "center",
          }}
        >
          <h5 style={{ fontWeight: "600" }}>ChatGPT</h5>

          <Button
            variant="dark"
            style={{ borderRadius: "25px", padding: "9px 20px" }}
          >
            Sign up
          </Button>
        </div>

        {/* Welcome Section */}
        <Container
          style={{
            maxWidth: "750px",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "600",
              color: "#202123",
              marginBottom: "35px",
            }}
          >
            What can I help with?
          </h1>

          {/* Message Box */}
          <div
            style={{
              border: "1px solid #dddddd",
              borderRadius: "28px",
              padding: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              textAlign: "left",
              backgroundColor: "#ffffff",
            }}
          >
            <textarea
              placeholder="Message ChatGPT..."
              style={{
                width: "100%",
                height: "65px",
                border: "none",
                outline: "none",
                resize: "none",
                fontSize: "16px",
              }}
            />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant="light" style={{ borderRadius: "50px" }}>
                + Add
              </Button>

              <Button variant="dark" style={{ borderRadius: "50%" }}>
                ↑
              </Button>
            </div>
          </div>

          {/* Suggestion Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "25px",
            }}
          >
            <Button
              variant="outline-secondary"
              style={{ borderRadius: "25px" }}
            >
              🎨 Create an image
            </Button>

            <Button
              variant="outline-secondary"
              style={{ borderRadius: "25px" }}
            >
              ✍️ Write something
            </Button>

            <Button
              variant="outline-secondary"
              style={{ borderRadius: "25px" }}
            >
              📖 Help me learn
            </Button>
          </div>
        </Container>

        {/* Footer */}
        <footer
          style={{
            position: "absolute",
            bottom: "15px",
            width: "100%",
            textAlign: "center",
            color: "#888888",
            fontSize: "12px",
          }}
        >
          ChatGPT can make mistakes. Check important information.
        </footer>
      </div>
    </div>
  );
}

export default ChatGPTHome;

import React from "react";
import { Navbar, Container, Card, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">

        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              My React Bootstrap App
            </Navbar.Brand>
          </Container>
        </Navbar>


        {/* Heading */}
        <Container className="mt-4">
          <h1 className="text-center">
            Welcome to React Bootstrap
          </h1>


          {/* 3 Cards */}
          <Row className="mt-4">

            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                    This is the first card.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>
                    This is the second card.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>
                    This is the third card.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>

      </div>
    </>
  );
}

export default App;
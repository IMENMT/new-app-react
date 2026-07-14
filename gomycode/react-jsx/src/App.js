import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";

import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

import "./App.css";

// Change your name here
const firstName = "Imen";

function App() {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Card
        className="shadow-lg border-0 rounded-4 product-card"
        style={{ width: "24rem" }}
      >
        <Image />

        <Card.Body className="text-center">
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="text-center mt-4">
        <h3>
          Hello, {firstName ? firstName : "there!"}
        </h3>

        {firstName && (
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="profile-img"
          />
        )}
      </div>
    </Container>
  );
}

export default App;



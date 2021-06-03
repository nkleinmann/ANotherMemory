import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useAuth0 } from "@auth0/auth0-react";

function Buttons() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="text-center">
      <Row className="justify-content-center mb-2">
        <Col sm={12} md={3}>
          <Button
            className="account"
            variant="outline-dark"
            onClick={() => loginWithRedirect()}
          >
            Create Account
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
      <Col sm={12} md={3}>
          <Button
            className="account "
            variant="outline-dark"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Buttons;

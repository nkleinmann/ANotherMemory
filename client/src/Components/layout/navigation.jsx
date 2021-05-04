import React from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#home">Grandma's Cards</Navbar.Brand>
        {/* <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>

                </Nav> */}
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Blank Name CHANGE</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;

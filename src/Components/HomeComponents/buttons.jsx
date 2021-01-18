import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Buttons() {
    return(
        <Container>
            <Button className="account" variant="light">Create Account</Button>
            <Button className="account" variant="light">Log In</Button>
        </Container>
    )
}

export default Buttons;
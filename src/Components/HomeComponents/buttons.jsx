import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react'

function Buttons() {
    const { loginWithRedirect } = useAuth0();
    
    return(
        <Container>
            <Button className="account" variant="light" onClick={() => loginWithRedirect()}>Create Account</Button>
            <Button className="account" variant="light" onClick={() => loginWithRedirect()}>Log In</Button>
        </Container>
    )
}

export default Buttons;
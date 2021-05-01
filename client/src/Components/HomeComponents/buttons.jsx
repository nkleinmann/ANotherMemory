import React from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react'

function Buttons() {
    const { loginWithRedirect } = useAuth0();
    
    return(
        <div className="text-center">
            <Button className="account" variant="outline-dark" onClick={() => loginWithRedirect()}>Create Account</Button>
            <Button className="account" variant="outline-dark" onClick={() => loginWithRedirect()}>Log In</Button>
        </div>
    )
}

export default Buttons;
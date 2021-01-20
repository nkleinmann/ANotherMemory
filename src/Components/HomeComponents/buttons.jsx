import React from 'react';
import Button from 'react-bootstrap/Button';

function Buttons() {
    return(
        <div className="text-center">
            <Button className="account" variant="outline-dark">Create Account</Button>
            <Button className="account" variant="outline-dark">Log In</Button>
        </div>
    )
}

export default Buttons;
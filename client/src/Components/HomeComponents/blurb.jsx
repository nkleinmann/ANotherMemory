import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Blurb() {
    return (
        <div>
            <Row className="justify-content-center mt-2">
                <Col sm={5} >
                    <p className="text-center">Need a card? Grandma's Cards includes a range of hand painted and unique designs.
                    Create an account and be able to view charming and heart warming desings for a special occasion.</p>
                </Col>
            </Row>
        </div>
    )
}

export default Blurb;
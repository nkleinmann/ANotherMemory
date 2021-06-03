import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Blurb() {
    return (
        <div>
            <Row className="homeBlurb justify-content-center mt-2 p-5">
                <Col sm={11} md={8} className="homeBlurbColor p-3">
                    <p className="text-center">Grandma's Cards includes a range of hand painted and unique designs.
                    Create an account and be able to view charming and heart warming desings for a special occasion.</p>
                </Col>
            </Row>
        </div>
    )
}

export default Blurb;
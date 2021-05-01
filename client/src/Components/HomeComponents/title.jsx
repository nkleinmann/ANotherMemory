import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Title() {
    return (
        <Row>
            {/* Idea: https://scotch.io/tutorials/drawing-creative-brushstrokes-with-javascript */}
            <Col>
                <h1 className="homeTitle text-center">Grandma's Cards</h1>
            </Col>
        </Row>
    )
}

export default Title;

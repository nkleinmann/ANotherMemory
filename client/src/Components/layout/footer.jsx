import React from 'react';
import Row from 'react-bootstrap/Row';

function Footer() {
    return(
        <Row className="footerRow">
            <footer className="footer">Grandma's Cards | &copy; {new Date().getFullYear()}</footer>
        </Row>
    )
}

export default Footer;
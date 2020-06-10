import React from "react";
import { Link } from "react-router-dom";
import FooterBS from "react-bootstrap/ModalFooter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return(
        <FooterBS className="footer container-fluid">
            <Row>
                <Col sm={12} md={12} className="text-center">
                    <div className="footer__right">
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"  
                            href="https://www.linkedin.com/in/joachim-s%C3%A6tre-a58876152/">

                                <FontAwesomeIcon className="footer__icon" icon={['fab', 'twitter']} />
                        </a>

                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"  
                            href="https://github.com/P1wP">
                                
                                <FontAwesomeIcon className="footer__icon" icon={['fab', 'instagram']} />
                                
                        </a>

                        <a 
                            target="_blank" 
                            rel="noopener noreferrer"  
                            href="https://github.com/P1wP">
                                
                                <FontAwesomeIcon className="footer__icon" icon={['fab', 'facebook']} />
                                
                        </a>

                    </div>
                    
                </Col>
              
            </Row>
            <p className="footer__madeBy">Holidaze &copy; {year}</p>
        </FooterBS>
    )
}

export default Footer;
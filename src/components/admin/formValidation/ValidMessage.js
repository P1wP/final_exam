import React from "react";
import Container from "react-bootstrap/Container";

function ValidMessage({children}) {
    return (
        <Container>
            
            <div className="formSuccess">
                <h1 className="formSuccess__headline"> Message Deleted</h1>
                <p className="formSuccess__msg"></p>
                
            </div>
        </Container>
    );
}

export default ValidMessage;
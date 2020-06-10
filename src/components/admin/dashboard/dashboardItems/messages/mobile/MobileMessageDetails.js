import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MessageDelete from "../MessageDelete";

function MobileMessageDetails({msg}){
    

    return(
        <Col sm={12} md={12} lg={12} className="messageContainer">
            <Row>
                <Col sm={12} className="messageContainer__info">
                    <div className="messageContainer__info--from">{msg.name}</div>
                    <div className="messageContainer__info--date">testTime</div>
                </Col>
                <Col sm={12} className="messageContainer__message">
                    <div className="messageContainer__message--details">
                    <h4>{msg.message}</h4>
                    
                    <div className="messageContainer__delete">
                        <MessageDelete msgId={msg.id}></MessageDelete>
                    </div>
                    </div>
                </Col>
            </Row>
        </Col>
       
    )
}

export default MobileMessageDetails;
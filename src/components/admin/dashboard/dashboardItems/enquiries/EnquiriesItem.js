import React, { useState, useEffect, useContext} from "react";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
import { AuthContext } from "../../../../../context/AuthContext";
import { BASE_URL, headers } from "../../../../../constants/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EnquiriesDetails from "./EnquiriesDetails";

function EnquiriesItem(){
    const [ messages, setMessages ] = useState([]);
    const [ clickedMsg, setClickedMsg ] = useState(null);
    const { toggleShow } = useContext(AuthContext);

    const FETCH_OPTIONS = {headers};
    const url = BASE_URL + "enquiries";
    useEffect(() => {
        // FETCH MSGs
        fetch(url, FETCH_OPTIONS)
            .then(response => response.json())
            .then(json => { 
                setMessages(json)
            })
            .catch(error => console.log(error)) // END FETCH;

        
    }, [url]);
    
    console.log(messages)

    // SHOW UNREAD
        //GET LENGTH OF MESSAGES
        //GET MESSAGES IN STORAGE
            // NUMBER UNREAD === LENGTH - STORAGE
        // CHECK IF MESSAGE ID IS IN STORAGE
            // IF STORAGE
                // FONT STYLE REGULAR
            // ELSE
                // FONTSYLE BOLD


    return(
        <Row>
            <Col sm={12}>
                <div className="enquiries__list">
                    <div className="enquiries__list--info">
                        <div className="enquiries__list--info--from">FROM</div>
                        <div className="enquiries__list--info--email">EMAIL</div>
                    </div>
                    {messages.map((message)=>(
                        <>
                        <div key={message.id} className="enquiries__list--item" onClick={() => toggleShow(message, false, true, false)}>
                            <div className="enquiries__list--item--name">
                                <p key={message.id}>{message.name}</p>
                            </div>
                            <div className="enquiries__list--item--email">
                                <p key={message.id}>{message.email}</p>
                            </div>
                        </div>  
                        {isMobile && <EnquiriesDetails message={message} />}
                        </>
                    ))}
                    </div>
            </Col>
        </Row>
        
    );
}

export default EnquiriesItem;
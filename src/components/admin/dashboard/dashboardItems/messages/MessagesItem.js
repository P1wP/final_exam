import React, { useContext, useState, useEffect} from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import { BASE_URL, headers } from "../../../../../constants/API";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MessagesDetails from "./MessagesDetails";

function MessagesItem(){
    const [ messages, setMessages ] = useState([]);
    const [ clickedMsg, setClickedMsg ] = useState(null);
    const { toggleShow } = useContext(AuthContext);

    const FETCH_OPTIONS = {headers};
    const url = BASE_URL + "contacts";
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
    function time(date){
        const old = new Date(date);
        return old.toDateString();  
    }

    return(
        <Row>
            <Col sm={12}>
                <div className="messages__list">
                    <div className="messages__list--info">
                        <div className="messages__list--info--from">FROM</div>
                        <div className="messages__list--info--email">DATE</div>
                    </div>
                    {messages.map((message)=>(
                        <>
                        <div className="messages__list--item" onClick={() => toggleShow(message, true, false, false)}>
                            <div className="messages__list--item--name">
                                <p key={message.id}>{message.name}</p>
                            </div>
                            <div className="messages__list--item--time">
                                <p key={message.id}>{time(message.createdAt)}</p>
                            </div>
                            
                        </div>  
                        {isMobile && <MessagesDetails message={message} />}
                        </>
                    ))}
                    </div>
            </Col>
      
        </Row>
        
    );
}

export default MessagesItem;
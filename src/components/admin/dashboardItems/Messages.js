import React, { useState, useEffect} from "react";

import { GetContact } from "../../../constants/MessageFunctions";
import { ContactURL, headers } from "../../../constants/API";


function Messages(){
    const [ messages, setMessages ] = useState([]);
    const FETCH_OPTIONS = {headers};
    
    useEffect(() => {
        // FETCH MSGs
        fetch(ContactURL, FETCH_OPTIONS)
            .then(response => response.json())
            .then(json => { 
                setMessages(json)
            })
            .catch(error => console.log(error)) // END FETCH;

        
    }, [ContactURL, FETCH_OPTIONS]);
    
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
        <div>
            Messages
            <p>new messages: </p>
            {messages.map((message)=>(
                <p key={message.id}>{message.name}</p>
            ))}
        </div>
    );
}

export default Messages;
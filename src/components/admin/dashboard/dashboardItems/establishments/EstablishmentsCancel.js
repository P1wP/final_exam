import React, { useContext } from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import Button from "react-bootstrap/Button";

function EstablishmentsCancel({classname}){
    const { create, setCreate, closeAll, toggleShow } = useContext(AuthContext);

    function cancel(){
        
        closeAll(false, false, true)
        toggleShow( null, false, false, true);
        if(create){
            setCreate(false);
        }

        
        
    }


    return(
        <Button className={classname} type="button" onClick={cancel}>CANCEL</Button>
    )
}

export default EstablishmentsCancel;
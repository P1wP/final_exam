import React, { createContext, useState } from "react";

const ShowAdminItem = createContext();

const ShowAdminItemProvider = ({ children }) =>{

    const [ msg, setMsg ] = useState(true);
    


    function toggleShow(){
        if(msg){
            setMsg(false);
        }
        return
    }

    return <ShowAdminItem.Provider value={{ msg,  toggleShow}}>{children}</ShowAdminItem.Provider>;
}

export { ShowAdminItem, ShowAdminItemProvider };
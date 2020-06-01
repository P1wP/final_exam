import React, { useState, useEffect }from "react";
import Geocode from "react-geocode";
import {GKEY} from "./API"


function minDigits(number) {
    if(number < 10){
        return( "0" + number);
    }
    // else
    return number;
}


function Location({hotel, address}){
    Geocode.setApiKey(GKEY);

    const [ location, setLocation ] = useState();
    useEffect(()=>{
    if(!address){
        const stringLat = minDigits(hotel.lat.toString());
        const stringLng = minDigits(hotel.lng.toString());
        
        Geocode.fromLatLng(stringLat, stringLng).then(
            response => {
                const address = response.results[0].formatted_address;
                console.log(address);
                setLocation(address);
            },
            error => {
                console.log(error);
            }
            
        )
        
    }
    else(
        Geocode.fromAddress(address).then(
            response => {
                const {lat, lng} = response.results[0].geometry.location;
                console.log(lat, lng);
                setLocation([lat, lng])
                
            },
            error=>{
                console.error();
                
            }
            
        )
    )
    }, []);
    
    console.log(location);
    return(

        <p><strong>Address:</strong> {location} </p>

    );
    
}

export default Location;
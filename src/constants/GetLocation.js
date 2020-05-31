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

// GET LOCATION
function GetLocation(string, lat, lng){
    Geocode.setApiKey(GKEY);

    // IF COORDINATES
    if(!string){
        Geocode.fromLatLng(lat, lng).then(
            response => {
                const address = response.results[0].formatted_address;
                console.log(address);
                return address
            },
            error => {
                console.log(error);
            }
            
        )
    }

    // IF STRING
    Geocode.fromAddress(string).then(
        response => {
            const {lat, lng} = response.results[0].geometry.location;
            console.log(lat, lng);
        },
        error=>{
            console.error();
            
        }
        
    )
}

function Location({hotel, address}){

    const [ location, setLocation ] = useState();
    useEffect(()=>{
    if(!address){
        const stringLat = minDigits(hotel.lat.toString());
        const stringLng = minDigits(hotel.lng.toString());
        console.log(stringLat, stringLng);
        setLocation(GetLocation(false, stringLat, stringLng));
        
    }
    else(
        console.log("address")
    )
    }, []);
    
    console.log(location);
    return(

        <p>Address: {location} </p>

    );
    
}

export default Location;
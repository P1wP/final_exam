import React, {useState, useEffect} from "react";
import { BASE_URL, FETCH_OPTIONS} from "../../../../constants/API";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";


import DetailsBanner from "./DetailsBanner";
import DetailsInfo from "./detailsInfo";
import Footer from "../../footer/Footer";


function Details(){

    const [ hotel, setHotel ] = useState([]);
    const [loading, setLoading] = useState(true);

     // GET URL
     const urlPath = window.location.pathname.split("/");
     // GET ID FROM URL
     const id = urlPath[urlPath.length-1];

    

    const hotelUrl = BASE_URL + "establishments/" + id;

    useEffect(()=>{
        // LOCAL?
        if(localStorage.getItem("hotels")){
            // GET HOTELS
            const hotelList = JSON.parse(localStorage.getItem("hotels"));
            
            // FILTER ID
            const matchingHotel = hotelList.filter(hotel => hotel.id === id);
            
            // Set Hotel
            setHotel(matchingHotel[0]);

            // stop spinner
            setLoading(false)
        }
        else{
        fetch(hotelUrl, FETCH_OPTIONS)
            .then(response => response.json())
            .then(json => { 
                setHotel(json)
                console.log(json)
            })
            .catch(error => console.log(error)) 
            .finally(() => setLoading(false));// END FETCH;
        }
        
    }, [hotelUrl]);

    if (loading) {
        
        return (
            <>
            <Spinner animation="border" className="spinner" />
            
            </>
        );
    }

    return(
        <>
        <DetailsBanner image={hotel.image} alt={hotel.name} />
        <Container>
            <DetailsInfo hotel={hotel}/>

        </Container>
        <Footer/>
        </>
    );
}

export default Details;
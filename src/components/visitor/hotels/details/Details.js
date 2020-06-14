import React, {useState, useEffect} from "react";
import { BASE_URL, headers} from "../../../../constants/API";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";


import DetailsBanner from "./DetailsBanner";
import DetailsInfo from "./detailsInfo";
import Footer from "../../footer/Footer";


function Details(){

    const [ hotel, setHotel ] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(()=>{
         // GET URL
        const urlPath = window.location.pathname.split("/");
        // GET ID FROM URL
        const id = urlPath[urlPath.length-1];

        // GO TO TOP OF PAGE
        window.scrollTo(0, 0)

        const url = BASE_URL + "establishments/" + id;
        const FETCH_OPTIONS = {headers};
        
        fetch(url, FETCH_OPTIONS)
            .then(response => response.json())
            .then(json => { 
                setHotel(json)
            })
            .catch(error => console.log(error)) 
            .finally(() => setLoading(false));// END FETCH;
        
        
    }, []);

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
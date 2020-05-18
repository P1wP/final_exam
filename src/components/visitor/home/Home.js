import React, { useState, useEffect} from "react";
import { BASE_URL, KEY, FETCH_OPTIONS} from "../../../constants/API";
import Spinner from "react-bootstrap/Spinner";
import Search from "../search/Search";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


function Home(){
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterdHotels, setFilterdHotels] = useState([]);

    const hotelUrl = BASE_URL + "establishments";

    useEffect(()=>{
        fetch(hotelUrl, FETCH_OPTIONS)
            .then(response => response.json())
            .then(json => { 
                setHotels(json)
                setFilterdHotels(json)
            })
            .catch(error => console.log(error)) 
            .finally(() => setLoading(false));// END FETCH;

        
    }, [hotelUrl, FETCH_OPTIONS]);


    const searchHotels = function(e){
        // VALUE FROM SEARCH INPUT
        const searchValue = e.target.value.toLowerCase();
        

        // CREATE NEW ARRAY FROM GAMES ARRAY
        const filteredArray = hotels.filter(function(newHotel){
            const lowerCaseName = newHotel.name.toLowerCase();

            //Check if the games name begins with search value
            if(lowerCaseName.includes(searchValue)){
                
                // If it does return true
                return true;
            }
            // ELSE
            return false;
        });
        setFilterdHotels(filteredArray);
        
    }

  

    if (loading) {
        
        return (
            <>
            <Spinner animation="border" className="spinner" />
            
            </>
        );
    }
  
    

    return(
        <>
        <h1>HOME</h1>
        <Search  HandleSearch={searchHotels} filterd={filterdHotels} all={hotels}/>
        <h2>Hotels </h2>
        {loading && <Spinner animation="border" className="spinner" />}
            {hotels.map((hotel)=>(
                <Row>
                    <Col lg={2}>
                        <div className="imageContainer">
                        <Image className="imageTest" src={hotel.image}></Image>
                        </div>
                    <Image className="imageTest" src={hotel.image}></Image>
                    </Col>
                    <Col lg={4}>
                        <p key={hotel.id}>{hotel.name}</p>
                    </Col>
                    
                
                </Row>
        ))}
        </>
    );
}

export default Home;
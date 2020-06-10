import React, { useState, useEffect} from "react";
import { BASE_URL, headers} from "../../../constants/API";
import Spinner from "react-bootstrap/Spinner";
import Search from "../search/Search";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import HotelDetails from "../hotels/HotelDetails";
import HomeBanner from "./HomeBanner";
import Footer from "../footer/Footer";



function Home(){
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterdHotels, setFilterdHotels] = useState([]);

    const hotelUrl = BASE_URL + "establishments";
    const FETCH_OPTIONS = {headers};
   

    useEffect(()=>{
        if(localStorage.getItem("hotels")){
            setHotels(JSON.parse(localStorage.getItem("hotels")));
            setFilterdHotels(JSON.parse(localStorage.getItem("hotels")));
            setLoading(false);
        }
        else{
        fetch(hotelUrl, FETCH_OPTIONS)
            .then(response => response.json())
            .then(json => { 
                setHotels(json)
                setFilterdHotels(json)
                localStorage.setItem("hotels", JSON.stringify(json));
                console.log(json)
            })
            .catch(error => console.log(error)) 
            .finally(() => setLoading(false));// END FETCH;

        }// END IF ELSE
    }, [hotelUrl]);
    

    const searchHotels = function(e){
        // VALUE FROM SEARCH INPUT
        let searchValue;
        
        if(e.length <= 0){
            searchValue = "someThing";
            //setFilterdHotels(hotels);
        }
        else{
            searchValue = e[0].toLowerCase();
            console.log(searchValue);
        }
        //const searchValue = e.target.value.toLowerCase();
        

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
        if(filteredArray.length === 0){
            setFilterdHotels(hotels);
        }
        
    }

  

    if (loading) {
        
        return (
            <>
            <Spinner animation="border" className="spinner" />
            
            </>
        );
    }
    
    function enableBtn(){
        console.log("HOVER");
    }


    return(
        <>
        <div>
        {loading && <Spinner animation="border" className="spinner" />}
        <HomeBanner image={hotels[2].image}
            search={<Search  HandleSearch={searchHotels} filterd={filterdHotels} all={hotels}/>}>
        </HomeBanner>
        </div>
        
        <Container id="homeContent">
        <Row>
        {loading && <Spinner animation="border" className="spinner" />}
            {filterdHotels.map((hotel)=>(
                <HotelDetails onHover={enableBtn} key={hotel.id} hotel={hotel}/>
                    
                           
        ))}

        </Row>
        </Container>
        <Footer />
        </>
    );
}

export default Home;
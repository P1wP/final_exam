import React , { useState }from "react";
import {GKEY} from "../../../../constants/API";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import {MapStyle}  from "../../../../constants/MapStyle";
// https://tomchentw.github.io/react-google-maps/

// ROMEVE LATER
// https://www.youtube.com/watch?v=Pf7g32CwX_s

// LOCATION 
// https://www.npmjs.com/package/react-geocode

function GMap({lat, lng, name}){
    const [ clickedMarker, setClickedmarker] = useState(null);
    // GET ALL HOTELS
    const allHotels = JSON.parse(localStorage.getItem("hotels"));

    return(
        <div className="map">
                <GoogleMap
                    defaultZoom={13}
                    defaultCenter={{lat: lat, lng: lng}}
                    defaultOptions ={{styles : MapStyle}}
                    
                >
                {allHotels.map((hotel) =>(
                    <Marker 
                        key={hotel.id} 
                        position={{lat: hotel.lat, lng: hotel.lng}}
                        label={hotel.name}
                        onClick={() =>{
                            setClickedmarker(hotel);
                        }} 
                        
                    
                    />
                ))}

                {clickedMarker && (
                    <InfoWindow
                        className="marker"
                        position={{lat: clickedMarker.lat, lng: clickedMarker.lng}}
                        onCloseClick={()=>{
                            setClickedmarker(null);
                        }}   
                      
                    >  
                      <>
                        <p className="marker__title">{clickedMarker.name}</p>
                        <div className="marker__img">
                            <img className="marker__img--img" src={clickedMarker.image} alt={clickedMarker.name}></img>
                        </div>
                        <Link className="marker__link" to={"/hotel/" + clickedMarker.id}>
                            <Button className="marker__link--btn">Details</Button>
                        </Link>
                      
                      </>
                    </InfoWindow>
                )}
                    
                </GoogleMap>
        </div>
    )
};

const MapWrapper = withScriptjs(withGoogleMap(GMap));

function Map({lng, lat, name}){
    return(
        <MapWrapper
            lat={lat}
            lng={lng}
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=' + GKEY}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}

        />
    )
}
export default Map;

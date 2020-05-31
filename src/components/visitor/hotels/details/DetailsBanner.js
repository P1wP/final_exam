import React from "react";

function DetailsBanner({image, alt}){

    const ImageStyle = {
        backgroundImage: 'url(' + image + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };

    return(

        <div id="detailsBanner" className="container-fluid" >
            <img id="detailsBanner__image" src={image} alt={alt} ></img>
        </div>

    )
}

export default DetailsBanner;
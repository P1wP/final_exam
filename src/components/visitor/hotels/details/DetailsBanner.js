import React from "react";

function DetailsBanner({image, alt}){

    const ImageStyle = {
        backgroundImage: 'url(' + image + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };

    return(

        <div id="detailsBanner" className="container-fluid" style={ImageStyle}>
            
        </div>

    )
}

export default DetailsBanner;
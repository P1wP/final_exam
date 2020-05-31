import React from "react";
import Container from "react-bootstrap/Container";
import BannerHome from "../../../images/bannerHome.jpg";


function HomeBanner({search, image}){
    return(
        <div id="homeBanner" className="container-fluid">
            <h1 id="homeBanner__title">Find B&B's, Guesthouses <br/> & <br/> Hotels in Bergen</h1>
            <img id="homeBanner__image" src={BannerHome} alt="Featured"></img>
            <Container>
                {search}
            </Container>
        </div>
    );

}

export default HomeBanner;
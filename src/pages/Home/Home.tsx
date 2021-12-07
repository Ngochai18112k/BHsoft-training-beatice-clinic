import React from "react";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import ServicesMain from "./ServicesMain";
import SliderMain from "./SliderMain";
import Teams from "./Teams";

const Home = () => {
    return (
        <div className="home">
            <SliderMain />
            <ServicesMain />
            <AboutUs />
            <Teams />
            <ContactUs />
        </div>
    );
};

export default Home;

import React from "react";
import { Grid } from "@mui/material";
import BgImage from "../../assets/images/background/bg-bubble.png";
import Image1 from "../../assets/images/aboutus/aboutus-1.png";
import CricleIcon from "../../assets/images/icons/circle.png";
import PlayIcon from "../../assets/images/icons/play.png";

const AboutUs = () => {
    return (
        <div className="aboutus">
            <img src={BgImage} alt="" className="aboutus-bg" />
            <div className="container">
                <Grid container>
                    <Grid item lg={6} sm={6}>
                        <div className="aboutus-left">
                            <div className="text">
                                <p className="heading">About Us</p>
                                <p className="title">
                                    We are the best beauty clinic
                                </p>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Elit, quam suscipit purus
                                    donec amet. Egestas volutpat facilisi eu
                                    libero. Nunc, ipsum ornare mauris sit quam
                                    quis enim. Varius tellus in suspendisse
                                    placerat. Id dui erat sed quam tellus in
                                    purus. Pellentesque congue fringilla cras
                                    tellus enim.
                                </p>
                            </div>
                            <div className="action">
                                <div className="button button--primary button-rounded">
                                    Learn More
                                </div>
                                <div className="watch">
                                    <div className="watch-icon">
                                        <img
                                            src={CricleIcon}
                                            alt=""
                                            className="circle"
                                        />
                                        <img
                                            src={PlayIcon}
                                            alt=""
                                            className="play"
                                        />
                                    </div>
                                    <p className="text">Watch Video</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={6}>
                        <div className="aboutus-right">
                            <img
                                src={Image1}
                                alt=""
                                className="aboutus-right-img"
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AboutUs;

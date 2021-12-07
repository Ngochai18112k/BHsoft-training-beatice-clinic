import { Grid } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.scss";
import SwiperCore, { Pagination } from "swiper";
import "swiper/modules/pagination/pagination.scss";
import BgImg from "../../assets/images/background/slider-background.png";
import SlideImg1 from "../../assets/images/slider/frame-1.png";

SwiperCore.use([Pagination]);

const SliderMain = () => {
    return (
        <div className="slidermain">
            <img className="slidermain--bg-img" src={BgImg} alt="" />
            <div className="container">
                <div className="slidermain-slider">
                    <Swiper pagination={{ dynamicBullets: true }}>
                        <SwiperSlide>
                            <Grid container>
                                <Grid
                                    item
                                    lg={6}
                                    sm={6}
                                    className="slider-left"
                                >
                                    <div className="slider-heading">
                                        Clinic & beauty consultant
                                    </div>
                                    <div className="slider-desc">
                                        It is a long established fact that a
                                        reader will be by the readable content
                                        of a page.
                                    </div>
                                    <div className="button button--rounded button--primary">
                                        More Details
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    sm={6}
                                    className="slider-right"
                                >
                                    <img
                                        src={SlideImg1}
                                        alt=""
                                        className="slider-img"
                                    />
                                </Grid>
                            </Grid>
                        </SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default SliderMain;

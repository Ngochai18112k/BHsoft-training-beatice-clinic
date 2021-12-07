import { Grid } from "@mui/material";
import React from "react";
import Image1 from "../../assets/images/services/animation1.png";
import Image2 from "../../assets/images/services/animation2.png";
import Image3 from "../../assets/images/services/animation3.png";

const ServicesMain = () => {
    return (
        <div className="servicesmain">
            <div className="container">
                <div className="servicesmain-top">
                    <p className="main">Main Services</p>
                    <p className="title">
                        Learn services to focus on your beauty
                    </p>
                    <p className="desc">
                        Porta rhoncus orci condimentum vitae lobortis eu
                        dignissim non massa. Non parturient amet, feugiat tellus
                        sagittis, scelerisque eget nulla turpis.
                    </p>
                </div>
                <div className="servicesmain-bottom">
                    <Grid container spacing={7}>
                        <Grid item lg={4} sm={12}>
                            <div className="service-item">
                                <img
                                    src={Image1}
                                    alt=""
                                    className="service-item-img"
                                />
                                <p className="service-item-title">
                                    Skin treatments
                                </p>
                                <p className="service-item-desc">
                                    Non parturient amet, feugiat tellus
                                    sagittis, scelerisque eget nulla turpis.
                                </p>
                            </div>
                        </Grid>
                        <Grid item lg={4} sm={12}>
                            <div className="service-item">
                                <img
                                    src={Image2}
                                    alt=""
                                    className="service-item-img"
                                />
                                <p className="service-item-title">
                                    Skin treatments
                                </p>
                                <p className="service-item-desc">
                                    Non parturient amet, feugiat tellus
                                    sagittis, scelerisque eget nulla turpis.
                                </p>
                            </div>
                        </Grid>
                        <Grid item lg={4} sm={12}>
                            <div className="service-item">
                                <img
                                    src={Image3}
                                    alt=""
                                    className="service-item-img"
                                />
                                <p className="service-item-title">
                                    Beauty product
                                </p>
                                <p className="service-item-desc">
                                    Non parturient amet, feugiat tellus
                                    sagittis, scelerisque eget nulla turpis.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default ServicesMain;

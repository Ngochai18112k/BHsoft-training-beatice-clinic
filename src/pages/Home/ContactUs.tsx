import { Grid } from "@mui/material";
import React from "react";
import BgImage from "../../assets/images/background/bg-bubble-2.png";
import Image1 from "../../assets/images/contactus/contact-img-1.png";

const ContactUs = () => {
    return (
        <div className="contactus">
            <img src={BgImage} alt="" className="contactus-bg" />
            <div className="container">
                <Grid container>
                    <Grid item lg={6} sm={12}>
                        <div className="contactus-left">
                            <img
                                src={Image1}
                                alt=""
                                className="contactus-img"
                            />
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={12}>
                        <div className="contactus-right">
                            <div className="contactus-text">
                                <p className="heading">Contact Us</p>
                                <p className="title">
                                    Send your inquiry to our expert team
                                </p>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet nulla turapis
                                    tellus.
                                </p>
                            </div>
                            <form className="contactus-form">
                                <Grid
                                    container
                                    spacing={5}
                                    style={{ marginBottom: "40px" }}
                                >
                                    <Grid item lg={6} sm={6} xs={12}>
                                        <input
                                            type="text"
                                            placeholder="First name"
                                            className="input"
                                        />
                                    </Grid>
                                    <Grid item lg={6} sm={6} xs={12}>
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            className="input"
                                        />
                                    </Grid>
                                    <Grid item lg={12} sm={12} xs={12}>
                                        <input
                                            type="email"
                                            placeholder="Email address"
                                            className="input"
                                        />
                                    </Grid>
                                    <Grid item lg={12} sm={12} xs={12}>
                                        <input
                                            type="text"
                                            placeholder="Subject message"
                                            className="input"
                                        />
                                    </Grid>
                                    <Grid item lg={12} sm={12} xs={12}>
                                        <textarea
                                            placeholder="Your inquiry here"
                                            className="textarea"
                                        />
                                    </Grid>
                                </Grid>
                                <div className="button button--primary button--rounded">
                                    Send Message
                                </div>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ContactUs;

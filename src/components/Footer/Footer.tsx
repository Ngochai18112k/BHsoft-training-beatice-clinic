import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BgFooterTop from "../../assets/images/background/footer-bg.png";
import BgFooterBottom from "../../assets/images/background/footer-bg-2.png";
import FooterLogo from "../../assets/images/footer-logo.png";
import FaceBookIcon from "../../assets/images/icons/facebook-sm.png";
import TwitterIcon from "../../assets/images/icons/twitter-sm.png";
import LinkedinIcon from "../../assets/images/icons/linkedin-sm.png";
import YoutubeIcon from "../../assets/images/icons/youtube-sm.png";
import InstagramIcon from "../../assets/images/icons/instagram-sm.png";

const Footer = () => {
    return (
        <div className="footer">
            <img src={BgFooterTop} alt="" className="footer-bg-top" />
            <img src={BgFooterBottom} alt="" className="footer-bg-bottom" />
            <div className="container">
                <div className="footer-top">
                    <Grid container spacing={2}>
                        <Grid item lg={6} sm={12}>
                            <div className="footer-top-left">
                                <img
                                    src={FooterLogo}
                                    alt=""
                                    className="footer-logo"
                                />
                                <p className="desc">
                                    <span>Beautice </span>is a Beauty Clinic
                                    WordPress Theme.
                                </p>
                                <p className="address">
                                    Baker Steet 101, NY, United States.
                                </p>
                                <div className="contact">
                                    <Link
                                        to="tel:+5215698966"
                                        className="phone"
                                    >
                                        +521 569 8966
                                    </Link>
                                    <Link
                                        to="mailto:mail@company.com"
                                        className="mail"
                                    >
                                        mail@company.com
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={6} sm={12}>
                            <div className="footer-top-right">
                                <Grid container>
                                    <Grid item lg={6} sm={6} xs={12}>
                                        <div className="footer-list">
                                            <p className="heading">Pages</p>
                                            <ul>
                                                <li>
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">About</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Services</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Gallery</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Team</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} sm={6} xs={12}>
                                        <div className="footer-list">
                                            <p className="heading">
                                                Informations
                                            </p>
                                            <ul>
                                                <li>
                                                    <Link to="/">
                                                        Terms & conditions
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">
                                                        Privacy policy
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Blog</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="footer-bottom">
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} xs={12}>
                            <div className="footer-bottom-left">
                                <ul className="footer-social">
                                    <li>
                                        <Link to="/">
                                            <img
                                                src={FaceBookIcon}
                                                alt=""
                                                className="footer-social-icon"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <img
                                                src={TwitterIcon}
                                                alt=""
                                                className="footer-social-icon"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <img
                                                src={LinkedinIcon}
                                                alt=""
                                                className="footer-social-icon"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <img
                                                src={YoutubeIcon}
                                                alt=""
                                                className="footer-social-icon"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <img
                                                src={InstagramIcon}
                                                alt=""
                                                className="footer-social-icon"
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <div className="footer-bottom-right">
                                <p>
                                    © AltDesain Studio 2021 - All right
                                    reserved.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Footer;

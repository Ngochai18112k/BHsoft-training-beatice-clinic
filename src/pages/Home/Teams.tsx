import { Grid } from "@mui/material";
import React from "react";
import Person1 from "../../assets/images/teams/person1.png";
import Person2 from "../../assets/images/teams/person2.png";
import Person3 from "../../assets/images/teams/person3.png";
import TwitterIcon from "../../assets/images/icons/twitter.png";
import FacebookIcon from "../../assets/images/icons/facebook.png";
import InstagramIcon from "../../assets/images/icons/instagram.png";
import { Link } from "react-router-dom";

const Teams = () => {
    return (
        <div className="teams">
            <div className="container">
                <div className="teams-top">
                    <p className="main">Professional Teams</p>
                    <p className="title">The Professional expert</p>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam.
                    </p>
                </div>
                <div className="teams-bottom">
                    <Grid container spacing={3}>
                        <Grid item lg={4} sm={12}>
                            <div className="teams-item">
                                <img
                                    src={Person1}
                                    alt=""
                                    className="teams-item-img"
                                />
                                <p className="teams-item-title">Surgeon</p>
                                <p className="teams-item-name">
                                    Briyan Nevalli
                                </p>
                                <p className="teams-item-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit
                                </p>
                                <div className="teams-item-social">
                                    <Link to="/" className="icon">
                                        <img
                                            src={TwitterIcon}
                                            alt=""
                                            className="icon"
                                        />
                                    </Link>
                                    <Link to="/" className="icon">
                                        <img
                                            src={FacebookIcon}
                                            alt=""
                                            className="icon"
                                        />
                                    </Link>
                                    <Link to="/" className="icon">
                                        <img
                                            src={InstagramIcon}
                                            alt=""
                                            className="icon"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={4} sm={12}>
                            <div className="teams-item">
                                <img
                                    src={Person2}
                                    alt=""
                                    className="teams-item-img"
                                />
                                <p className="teams-item-title">
                                    Dermatologist
                                </p>
                                <p className="teams-item-name">
                                    Bella sebastian
                                </p>
                                <p className="teams-item-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit
                                </p>
                                <div className="teams-item-social">
                                    <Link to="/" className="icon">
                                        <img
                                            src={TwitterIcon}
                                            alt=""
                                            className="icon"
                                        />
                                    </Link>
                                    <Link to="/" className="icon">
                                        <img
                                            src={FacebookIcon}
                                            alt=""
                                            className="icon"
                                        />
                                    </Link>
                                    <Link to="/" className="icon">
                                        <img
                                            src={InstagramIcon}
                                            alt=""
                                            className="icon"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={4} sm={12}>
                            <div className="teams-item">
                                <img
                                    src={Person3}
                                    alt=""
                                    className="teams-item-img"
                                />
                                <p className="teams-item-title">
                                    Stylist expert
                                </p>
                                <p className="teams-item-name">Lilly Adams</p>
                                <p className="teams-item-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit
                                </p>
                                <div className="teams-item-social">
                                    <Link to="/" className="icon">
                                        <img
                                            src={TwitterIcon}
                                            alt=""
                                            className="icon"
                                        />
                                    </Link>
                                    <Link to="/" className="icon">
                                        <img
                                            src={FacebookIcon}
                                            alt=""
                                            className="icon"
                                        />
                                    </Link>
                                    <Link to="/" className="icon">
                                        <img
                                            src={InstagramIcon}
                                            alt=""
                                            className="icon"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Teams;

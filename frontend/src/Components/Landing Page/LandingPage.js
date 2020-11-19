import React from "react";
import { Link } from "react-router-dom"

import "./LandingPage.css"


function LandingPage() {


    return (

        <div className="main-page">
            <div className="landing">
                <div className="home-wrap">
                    <div className="home-inner">

                    </div>
                </div>
            </div>

            <div className="caption text-center">
                
                
                <h1 className="display-4">Job Tracker? Yes please!</h1>
                <h4 className="lead">Discover the platform that helps you stay organized as you apply</h4>
               
                <Link to="/Signin" className="nav-link-signIn">
                    <div className="signInLink">
                        <span className="nav-option-line-one">Start Tracking</span>
                    </div>
                </Link>

            </div>

            <div id="whyCrypto" class="offset">
                <div className="jumbotron">
                    <div className="narrow">

                        <div className="col-12 text-center mb-5">
                            <h2 className="heading">Why Should you track your jobs</h2>
                        </div>

                        <div className="row text-center">
                            <div className="col-md-4">
                                <div className="whyCrypto">
                                    <i class="fab fa-bitcoin fa-4x mb-4" data-fa-transform></i>
                                    <h3>Historical Data</h3>
                                    <p>Use our API-driven chart feature to view your favorite cryptocurreny past data</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="whyCrypto">
                                    <i class="far fa-newspaper fa-4x mb-4" data-fa-transform></i>
                                    <h3>Real News - Now</h3>
                                    <p>Gain Access to all the latest news</p>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="whyCrypto">
                                    <i class="fas fa-table fa-4x mb-4" data-fa-transform></i>
                                    <h3>Cryto Ticker Table</h3>
                                    <p>Watch Top Crypto Currency Values</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>




            <div className="fixed-background" id="dark">

                <div clasName="fixed-background" id="dark">

                    <div className="row dark text-center">

                    </div>

                </div>

            </div>

            <div className="fixed-wrap">
                <div className="fixed"></div>

            </div>
        </div>
    );
}

export default LandingPage;
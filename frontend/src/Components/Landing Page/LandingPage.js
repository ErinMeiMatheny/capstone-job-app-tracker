import React from "react";
import { Link } from "react-router-dom"

import "./LandingPage.css"
import LandingRowOne from "./LandingRowOne"
import LandingRowTwo from "./LandingRowTwo"



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

            

<LandingRowOne />
<LandingRowTwo />
<LandingRowOne />
<LandingRowOne />
<LandingRowOne />
<LandingRowOne />
<LandingRowOne />
<LandingRowOne />
<LandingRowOne />
<LandingRowOne />
<LandingRowOne />
<LandingRowOne />





            
        </div>
    );
}

export default LandingPage;
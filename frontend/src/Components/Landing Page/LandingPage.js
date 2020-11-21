import React from "react";
import { Link } from "react-router-dom"

import "./LandingPage.css"
import LandingRowOne from "./LandingRowOne"
import LandingRowTwo from "./LandingRowTwo"
import Footer from "../Footer/Footer"

import {Container, Row, Col} from "react-bootstrap"



function LandingPage() {


    return (

        
        <div className="main-page">
            
                    <div className="backgroundImageOne" />
                     
                    <div className="backgroundImageTwo" />
                
                    <div className="backgroundImageThree" />

        
            <div className="caption text-center">
                
                
                <h1 className="leadText display-4">Job Tracker? Yes please!</h1>
                <h4 className="lead">Discover the platform that helps you stay organized as you apply</h4>
               
                {/* <Link to="/Signin" className="spanTrackingLink">
                    
                        <span className="spanTracking">Start Tracking</span>
                   
                </Link> */}

            </div>

        
<LandingRowOne />
<LandingRowOne />
<LandingRowOne />
<Footer />




            
        </div>
    );
}

export default LandingPage;
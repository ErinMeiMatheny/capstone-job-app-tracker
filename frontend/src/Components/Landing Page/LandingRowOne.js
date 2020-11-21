import React from 'react'
import "./LandingPage.css"
import { Jumbotron, Container, Card, Button, Form, Alert } from "react-bootstrap";




function LandingRowOne() {
    return (
        <div id="whyCrypto" class="offset">
        <div className="Jumbotron">
            <div className="narrow">

                <div className="col-12 text-center mb-5">
                    <h2 className="heading">Why Should you track your jobs</h2>
                </div>

                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="whyCrypto">
                            <i class="fab fa-bitcoin fa-4x mb-4" data-fa-transform></i>
                            <h3>Helps Keep you on track</h3>
                           
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="whyCrypto">
                            <i class="far fa-newspaper fa-4x mb-4" data-fa-transform></i>
                            <h3>Applying is fun</h3>
                         
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="whyCrypto">
                            <i class="fas fa-table fa-4x mb-4" data-fa-transform></i>
                            <h3>No Pain - No Gain</h3>
                          
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>
    )
}

export default LandingRowOne

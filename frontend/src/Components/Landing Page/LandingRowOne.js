import React from 'react'
import "./LandingPage.css"
import "./LandingRowOne.css"
import { Jumbotron, Container, Card, Button, Form, Alert, Row, Col } from "react-bootstrap";
import check from "../../assets/check.png"



function LandingRowOne() {
    return (
        <div >
      
        <Jumbotron expand="" className="Jumbotron" style={{backgroundColor: "#f1f3f5"}}>
         {/* <div className="narrow">

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

            </div> */}

           
        <img className="LandingRowOne_Image d-none d-lg-block" src={check} alt="trying to get it to load"/>
        
        <Container className="container">
        <h1 className="Display-4">WHY SHOULD YOU TRACK YOUR JOBS</h1>
           <Row  className="row">
           
                <Col sm="4" className="col">
               <h2 className="headertwo">
                   Reminders
               </h2>
               <p>
                   Stay on top of your game by seeing real-time when you last applied
               </p>
                </Col>
                <Col sm="4">
                <h2 className="headertwo">
                   Consistancy
               </h2>
               <p>
                   Keeping a visable metric will help you stay modivated in your job search
               </p>
                </Col>
                <Col sm="4">
                <h2 className="headertwo">
                   Modivation
               </h2>
               <p>
                   Keeping a visable metric will help you stay modivated in your job search
               </p>
                </Col>
            </Row> 
        </Container>



        </Jumbotron>


    </div>
    )
}

export default LandingRowOne

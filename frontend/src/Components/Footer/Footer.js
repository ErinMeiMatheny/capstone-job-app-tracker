import React from 'react'
import "./Footer.css"
import { Jumbotron, Container, Card, Button, Form, Alert, Row } from "react-bootstrap";
import table from "../../assets/table.png"



function Footer() {
    return (
        <div >
      
        <Jumbotron expand="" className="footer-main" style={{backgroundColor: "#696969"}}>
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

            
    
        
        <Container>
            <h1 className="Display-4">HELLO THIS IS JUST A TEXT </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat arcu vitae mauris volutpat, tristique porta libero venenatis. Pellentesque euismod tellus cursus elit sodales, at gravida quam vulputate. Proin cursus ante efficitur mi pretium, quis rhoncus nulla auctor. Sed blandit lacus ac diam rutrum, nec mollis erat venenatis. Fusce vestibulum, magna cursus ornare ullamcorper, dolor augue gravida lacus, quis sodales tortor tortor eu neque. Donec luctus, neque nec dignissim egestas, turpis magna efficitur erat, interdum maximus lacus ex vitae mi. Aenean sed augue justo. Phasellus nec bibendum diam. Aliquam erat volutpat. Ut nec risus vitae mauris tempor tempus eget vel tellus.</p>
        </Container>



        </Jumbotron>


    </div>
    )
}

export default Footer

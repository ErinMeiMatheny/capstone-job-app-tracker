//return complete order history for specific user
import React, { Component, useState } from "react";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
// import Col from "react-bootstrap/Col";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"
import { auth } from "../firebase";


export default function Applicationhistory() {
    const [jobs, setState] = useState([]);
    const { currentUser } = useAuth()

    let history = []
    auth.currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        let id = currentUser.uid
        fetch(`http://localhost:8000/job-apps/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${idToken}`
                }
            })
            .then(response => response.json())
            .then((jsonData) => {
                history.push(jsonData)
            })
            .catch(error => console.log(error))
            console.log(history)
    })

        // .catch((error) => {
        //     console.log("complete order history error");
        // });


    return (
        <div>
            hey man what's goin on
            {/* <Header />
        {this.state.order && (
          <Fade>
            <Container>
              <h2>Order history for user #{user_id}</h2>
              <Router>
                <Route exact path={`/order-history/user`}>
                  <Row>
                    {this.state.order.map((item, index) => (
                      <OrderHistoryCard
                        key={item.id}
                        id={item.order_number}
                        product_name={item.inventory.product_name}
                        quantity={item.quantity}
                        price={item.price}
                      />
                    ))}
                  </Row>
                </Route>

                {this.state.order.map((item, index) => (
                  <Route
                    exact
                    path={`/order-history/order=${item.order_number}`}
                  >
                    <Detailedhistory
                      key={item.id}
                      id={item.order_number}
                      product_name={item.inventory.product_name}
                      quantity={item.quantity}
                      price={item.price}
                    />
                  </Route>
                ))}
              </Router>
            </Container>
          </Fade>
        )} */}
        </div>
    );
}


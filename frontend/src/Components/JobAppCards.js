import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../Context/AuthContext"

export default function JobCards() {

    const { currentUser } = useAuth()


    return ["Light"].map((variant, idx) => (
      <Card
        bg={variant.toLowerCase()}
        key={idx}
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2"
      >
    <Card.Header>user {currentUser.uid} </Card.Header>

        <Card.Body>
          <Card.Title>hi there </Card.Title>
          <Card.Text>
            yeet 
            <br></br>
            meep
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  }
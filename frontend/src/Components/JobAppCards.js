import React, { Component, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../Context/AuthContext"
import axios from "axios"
import { auth } from "../firebase"

export default function JobCards() {

    const { currentUser } = useAuth()
    const [jobs, setJobs] = useState([])

    useEffect(() => {
      const fetchData = async() => {
       
        const idToken = await auth.currentUser.getIdToken(/* forceRefresh */ true) 
          

            const results = await axios('http://localhost:8000/job-apps',
            {
              
               
                headers: { 
                "Authorization": `Bearer ${idToken}` }
            })
            console.log(results.data[0])
            setJobs(results.data)
         
      

      }
fetchData()
    }, [])


    return ["Light"].map((variant, idx) => (
      <div>
      { jobs.map((job) => {
        return (
          <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2"
        >
      
  
          <Card.Body>
          <Card.Header>user {job.user_id} </Card.Header>
            <Card.Title>{job.job_title}</Card.Title>
            <Card.Text>
              {job.company_name}
              <br></br>
              {job.date_applied}
            </Card.Text>
          </Card.Body>
        </Card>
        )
      })
      
    }
    </div>
    ));
      
  }
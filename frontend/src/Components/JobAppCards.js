import React, { Component, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../Context/AuthContext"
import axios from "axios"
import { auth } from "../firebase"
import JobForm from './Home/JobForm';

export default function JobCards() {

  const { currentUser } = useAuth()
  const [jobs, setJobs] = useState([])



  useEffect(() => {
    const fetchData = async () => {

      const idToken = await auth.currentUser.getIdToken(/* forceRefresh */ true)

      const results = await axios('http://localhost:8000/job-apps',
        {

          headers: {
            "Authorization": `Bearer ${idToken}`
          }
        })
      //console.log(results.data)
      setJobs(results.data)
    }
    fetchData()
  }, [])


  const deleteJob = async (id) => {

    const idToken = await auth.currentUser.getIdToken(/* forceRefresh */ true)
    const deleteResults = await axios(`http://localhost:8000/job-apps/${id}`,
      {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${idToken}`
        }
      });

    const getResults = await axios('http://localhost:8000/job-apps',
      {
        headers: {
          "Authorization": `Bearer ${idToken}`
        }
      })
    //console.log(results.data)
    setJobs(getResults.data)
  }


  return ["Light"].map((variant, idx) => (
    <Row>
      { jobs.map((job) => {
        if (job.is_deleted !== true)

          return (
            <Col>
              <Card
                bg={variant.toLowerCase()}
                key={idx}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{ width: "16rem" }}
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
                  <Button onClick={() => { deleteJob(job.id) }}> Delete </Button>
                </Card.Body>
              </Card>
            </Col>
          )
      })

      }
    </Row>
  ));

}
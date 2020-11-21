import React, { useEffect, useState } from 'react'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Row, Col, Button, Form, Alert } from "react-bootstrap";


export default function Indeed() {

    const [jobs, setJobs] = useState([])
    const [error, setError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("")
        
        const searchJob = await axios.get(`https://cors-anywhere.herokuapp.com/http://jobs.github.com/positions.json?description=${e.target.search.value}&page=1`)
        console.log(searchJob)
        

       if(!searchJob.data[0]){
           setError("no results for search")
           console.log("no results for search")
       } else {
           setJobs(searchJob.data)
            setError("")
            console.log("no errors here!")
       }

    }
    function handleChange(event) {
    };

    function clearSearch(event) {
        setJobs([])
        console.log(jobs)
        setError("")
    }



    return (
        <div>
            <Form className="m-3" onSubmit={handleSubmit}>
                <Form.Group as={Row} >
                    <Form.Label column sm={2}>
                        Search
  </Form.Label>
                    <Col sm={10}>
                        <Form.Control onChange={handleChange} type="text" placeholder="Search Jobs" id="search" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" >Search</Button>
                        <Button variant="primary" onClick={clearSearch}>Clear Search</Button>
                    </Col>
                </Form.Group>
            </Form>

            {error && <Alert varient="danger">{error}</Alert>}


            {jobs.map((job) => {
                return (
                    <Card>
                        <Card.Header>{job.company}</Card.Header>
                        <Card.Body>
                            <Card.Title>{job.title}</Card.Title>
                            <Card.Text>
                                {job.location}
                            </Card.Text>
                            <a href={job.company_url}><Button variant="primary">Apply Online</Button> </a>
                        </Card.Body>
                    </Card>

                )
            }
            )}
        </div>


    )

}

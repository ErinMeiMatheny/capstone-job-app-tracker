import React, { useEffect, useState } from 'react'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export default function Indeed() {

    const [jobs, setJobs] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const searchJob = await axios.get(`https://cors-anywhere.herokuapp.com/http://jobs.github.com/positions.json?description=${e.target.search.value}&page=1`)

        if (searchJob) {
            setJobs(searchJob.data)
        } else {
            console.log("nope")
        }

    }
    function handleChange(event) {
    };

    function clearSearch(event){
        setJobs([])
        console.log(jobs)
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
                        <Button variant="primary" onClick = {clearSearch}>Clear Search</Button> 
                    </Col>
                </Form.Group>
            </Form>

            
 
            {jobs.map((job) => {
                return (
                    <Card>
                        <Card.Header>{job.company}</Card.Header>
                        <Card.Body>
                            <Card.Title>{job.title}</Card.Title>
                            <Card.Text>
                                {job.location}
                              </Card.Text>
                <a href = {job.company_url}><Button variant="primary">Apply Online</Button> </a>
                        </Card.Body>
                    </Card>

                )



            }
            )}
        </div>


    )

}

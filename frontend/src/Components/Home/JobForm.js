import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { auth } from "../../firebase";
import axios from "axios"
import { useAuth } from "../../Context/AuthContext"
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'



function JobForm() {
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
            console.log(results.data)
            setJobs(results.data)
        }
        fetchData()
    }, [])

    //function to toggle employer response
    const employerResponse = async (id) => {

        const idToken = await auth.currentUser.getIdToken(/* forceRefresh */ true)
        const eResponse = await axios(`http://localhost:8000/employer-response/${id}`,
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


    //Function to delete card from UI

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


    //function to add job to database and render to UI
    const handleSubmit = async (e) => {
        e.preventDefault();

        let postJob = {
            company_name: e.target.company.value,
            job_title: e.target.jobtitle.value,
            date_applied: e.target.date.value,
            city: e.target.city.value,
        }


        const idToken = await auth.currentUser.getIdToken(/* forceRefresh */ true)
        const addJobs = await axios('http://localhost:8000/job-apps',

            {
                data: JSON.stringify(postJob),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${idToken}`
                }
            })

        //setting state for submit

        const sendJob = await axios('http://localhost:8000/job-apps',
            {
                headers: {
                    "Authorization": `Bearer ${idToken}`
                }
            })
        setJobs(sendJob.data)
        console.log(sendJob.data)
    }



    function handleChange(event) {
    };

    return ["Light"].map((variant, idx) => (
        <Row className="container">
            <Row className="col-lg-8">
                {
                    jobs.sort((a, b) => a.id < b.id ? 1 : -1).map((job) => {
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
                                        <Card.Body >
                                            <Card.Header>Job Application #{job.id} </Card.Header>
                                            <Card.Title>{job.job_title}</Card.Title>
                                            <Card.Text>
                                                {job.company_name}
                                                <br></br>
                                                {job.date_applied}
                                            </Card.Text>
                                            <DropdownButton id="dropdown-item-button" title="Options">
                                                <Dropdown.Item as="button" onClick={() => { employerResponse(job.id) }} data-toggle="button" aria-pressed="false" autoComplete="off">Response?</Dropdown.Item>
                                                <Dropdown.Item as="button" onClick={() => { deleteJob(job.id) }}>Delete</Dropdown.Item>

                                            </DropdownButton>
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                    })

                }
            </Row>

            <Col className="col-lg-4">
                <Form className="m-3" onSubmit={handleSubmit}>
                    <Form.Group as={Row} >
                        <Form.Label column sm={2}>
                            Company Name
              </Form.Label>
                        <Col sm={10}>
                            <Form.Control onChange={handleChange} type="text" placeholder="Company Name" id="company" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm={2}>
                            Job Title
              </Form.Label>
                        <Col sm={10}>
                            <Form.Control onChange={handleChange} type="text" placeholder="Job Title" id="jobtitle" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Date Applied
              </Form.Label>
                        <Col sm={10}>
                            <Form.Control onChange={handleChange} type="date" placeholder="xxxx-xx-xx" id="date" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm={2}>
                            City
              </Form.Label>
                        <Col sm={10}>
                            <Form.Control onChange={handleChange} type="text" placeholder="City" id="city" required />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit" >Add Job</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    ))

}


export default JobForm;
import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';




function JobForm() {

    function handleSubmit(e) {
        e.preventDefault();

        let postJob = {

            company_name: e.target.company.value,
            job_title: e.target.jobtitle.value,
            date_applied: e.target.date.value,
            city: e.target.city.value,
            
        }
        console.log(postJob);

        fetch('http://localhost:8000/job-apps',
            {
                body: JSON.stringify(postJob),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            })

    }

    function handleChange(event) {
    };

    return (

        <Form className="m-3" onSubmit={handleSubmit}>
            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    Company Name
              </Form.Label>
                <Col sm={10}>
                    <Form.Control onChange={handleChange} type="text" placeholder="Company Name" id="company" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    Job Title
              </Form.Label>
                <Col sm={10}>
                    <Form.Control onChange={handleChange} type="text" placeholder="Job Title" id="jobtitle" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Date Applied
              </Form.Label>
                <Col sm={10}>
                    <Form.Control onChange={handleChange} type="date" placeholder="xxxx-xx-xx" id="date" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    City
              </Form.Label>
                <Col sm={10}>
                    <Form.Control onChange={handleChange} type="text" placeholder="City" id="city" />
                </Col>
            </Form.Group>
        

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" >Add Job</Button>
                </Col>
            </Form.Group>
        </Form>
    )

}


export default JobForm;
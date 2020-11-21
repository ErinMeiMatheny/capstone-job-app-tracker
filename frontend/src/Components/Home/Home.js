import React, { useState } from 'react'
import { Container, Card, Col, CardColumns, Row, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../Context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import JobForm from './JobForm';




export default function Home() {

    const [error, setError] = useState("")
    const { currentUser, signOut } = useAuth()
    const { history } = useHistory()

    async function handleLogout() {

        setError("")

        try {
            await signOut()
            history.push("/signin")
        } catch (error) {
            setError("Failed signout")
        }
    }



    return (

        <Container>

            <Card>
                <Card.Body>
                    <h3 className="text-center mb-4"> Welcome Back {currentUser.email}! </h3>
                    {error && <Alert varient="danger">{error}</Alert>}
                    <div className="w-110 text-center mt3">
                        <Button varient="link" onClick={handleLogout}>Log out</Button>
                    </div>
                </Card.Body>
            </Card>
            <br></br>
            <Row>
                <Col className="col-12">
                    <JobForm></JobForm>
                </Col>
            </Row>

        </Container>





    )
}



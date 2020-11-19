import React, { useState } from 'react'
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../Context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import JobForm from './JobForm';
import JobCards from '../JobAppCards'




export default function Home() {

    const [error, setError] = useState("")
    // const { currentUser, signOut } = useAuth()
    // const { history } = useHistory()    
    return (

        <>
        <Card>
            <Card.Body>
            <h3 className="text-center mb-4"> Your Profile </h3>
            {error && <Alert varient="danger">{error}</Alert>}
        
            
            </Card.Body>
        </Card>
        <br></br>
        <JobForm></JobForm>
        <JobCards></JobCards>
        </>

    )
}



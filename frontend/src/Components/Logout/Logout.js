import React, { useState } from 'react'
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../Context/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function Logout() {

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

        <>
        <div className="w-110 text-center mt3">
        <Button varient="link" onClick={handleLogout}>Log out</Button>
        </div>
        </>

    )
}



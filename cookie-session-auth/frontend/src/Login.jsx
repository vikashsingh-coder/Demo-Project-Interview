import React, { useState } from 'react'
import { fetchWithCred } from '../utils'

function Login({ onLogin }) {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const login = async () => {
        // e.preventDefault()
        const res = await fetchWithCred("/login", {
            method: 'POST', body: JSON.stringify({
                username,
                password
            })
        })

        console.log("response ", res)

        if (res.ok) {
            onLogin()
        } else {
            alert("login failed ")
        }

    }

    return (
        <>
            <h1>Login</h1>
            <input type='text' placeholder='enter username' value={username} onChange={e => setUsername(e.target.value)} />
            <input type='text' placeholder='enter password' value={password} onChange={e => setPassword(e.target.value)} />
            <button type='button' onClick={login} >Login</button>
        </>
    )
}

export default Login
import React, { useState } from 'react'
import { fetchWithCred } from '../utils'

function Login({ onLogin }) {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const login = async () => {
        const res = await fetchWithCred("/login", {
            method: 'POST', body: JSON.stringify({
                username,
                password
            })
        })

        if (res.ok) {
            onLogin()
        } else {
            alert("login failed ")
        }

    }

    return (
        <>
            <h1>Login</h1>
            <form>
                <input type='text' placeholder='enter username' value={username} onChange={e => setUsername(e.target.value)} />
                <input type='text' placeholder='enter password' value={password} onChange={e => setPassword(e.target.valueAsDate)} />
                <button onClick={login}>Login</button>
            </form>
        </>
    )
}

export default Login
import { useEffect, useState } from "react"
import { fetchWithCred } from "../utils"

function Dashboard() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetchWithCred("/me")
            .then(res => res.json)
            .then(setUser)
    }, [])

    const logout = async () => {
        await fetchWithCred("/logout", {
            method: "POST"
        })
        // onLogout()
    }


    return (
        <>
            <h1>Dashboard</h1>
            <pre> {JSON.stringify(user)}</pre>
            <button onClick={logout} >Logout</button>
        </>
    )
}

export default Dashboard
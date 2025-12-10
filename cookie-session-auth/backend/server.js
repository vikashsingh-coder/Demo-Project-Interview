const express = require("express")
const cors = require("cors")
const session = require("express-session")

const app = express()
const port = 4000;

app.use(express.json())
app.use(cors({
    origin: "http://localhost/5173",
    credentials: true
}))

app.use(session({
    name: "connect.sid",
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 // 1 hr
    }
}))

// login
app.post("/login", (req, res) => {
    const { username, password } = req.body

    if (username === 'admin' && password === 1234) {
        req.session.user = {
            username,
            role: 'ADMIN'
        }

        return res.status(200).json({ message: "user successfully login" })
    }

    return res.status(401).json({ message: "credentials don't match" })
})

// logout 
app.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid")
        return res.status(200).json({ message: "user logged out " })
    })
})

// auth check api
app.post("/me", (req, res) => {
    if (req.session.user) {
        return res.json(req.session.user)
    }
    res.status(401).json({ message: 'Unauthorized' })
})




app.listen(port, () => {
    console.log("sever is running at " + port)
})
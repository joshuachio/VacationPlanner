const express = require("express")
const app = express()
var cors = require('cors')

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// app.set("view engine", "ejs")

app.get("/", (req, res) => { 
    // res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })
    // res.render("index", {text: "cheese"})
    console.log(req.body); // <------ **Here's the issue, there's nothing here**
    res.send("Hello World")
})

app.get("/test", (req, res) => { 
    // res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })
    // res.render("index", {text: "cheese"})
    res.send(req.body)
})

app.post("/test", (req, res) => { 
    // res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })
    // res.render("index", {text: "cheese"})
    console.log(req.body); // <------ **Here's the issue, there's nothing here**
    res.send("post")
})

// const userRouter = require("./routes/users")
const flightRouter = require("./routes/flights")

// app.use("/users", userRouter)
app.use("/flights", flightRouter)


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(5000)
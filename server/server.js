const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

// const bcrypt = require('bcrypt')
// const saltRounds = 10
var cors = require('cors')
app.use(cors())


app.use(express.json());

// const db = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: "password",
//     database: "LoginSystem",
// });

// app.post("/register", (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     bcrypt.hash(password, saltRounds, (err, hash) => {
//         if (err) {
//             console.log(err)
//         }

//         db.query(
//             "INSERT INTO users (username, password) VALUES (?,?)",
//             [username, hash],
//             (err, result) => {
//                 console.log(err);
//             }
//         );
//     })
// });


/*app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.set("view engine", "ejs")

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
    res.render("index", {text: "cheese"})
})*/
    // res.render("index", {text: "cheese"})


// const userRouter = require("./routes/users")
const flightRouter = require("./routes/flights")

// app.use("/users", userRouter)
app.use("/flights", flightRouter)


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(5000)
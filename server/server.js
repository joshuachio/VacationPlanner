const express = require("express")
const app = express()

const bcrypt = require('bcrypt')
const saltRounds = 10



app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem",
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        }

        db.query(
            "INSERT INTO users (username, password) VALUES (?,?)",
            [username, hash],
            (err, result) => {
                console.log(err);
            }
        );
    })
});


/*app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")

app.get("/", logger, (req, res) =>{
    // res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })
    res.render("index", {text: "cheese"})
})*/

const userRouter = require("./routes/users")

app.use("/users", userRouter)


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(5000)
const express = require("express")
const app = express()


app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")

app.get("/", logger, (req, res) =>{
    // res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })
    res.render("index", {text: "cheese"})
})

const userRouter = require("./routes/users")

app.use("/users", userRouter)


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(5000)
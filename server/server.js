const express = require("express")
var cors = require('cors')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("hello");
})

const flightRouter = require("./routes/flights")
app.use("/flights", flightRouter)

const userRouter = require("./routes/user")
app.use("/user", userRouter)

app.listen(5000)
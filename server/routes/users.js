const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("user")
})

router.get("/new", (req, res) => {
    res.render("new")
})

router.post("/", (req, res) => {
    const isValid = true
    if (isValid) {
        users.push( { fullName: req.body.fullName } )
        const uid = (users.length - 1).toString()
        res.redirect('/users/' + uid)
    } else {
        res.render("new", { fullName: req.body.fullName })
    }
    req.body.fullName
})

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send(req.user.fullName)
        // res.send('user Get with id ' + req.params.userID)
    })
    .put((req, res) => {
        res.send('update user Get with id ' + req.params.userID)
    })
    .delete((req, res) => {
        res.send('delete user Get with id ' + req.params.userID)
    })

const users = [{ fullName: "Joshua" }, { fullName: "Emily" }]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})


module.exports = router
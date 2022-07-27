const express = require("express")
const router = express.Router()
var mysql = require('mysql');

// const bcrypt = require('bcrypt')
// const saltRounds = 10

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vacation'
});

router.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    db.query("INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
        console.log(err);
    }
   );
})

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

router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err })
            }

            if (result.length > 0) {
              res.send(result);
            } else {
              res.send({ message: "Wrong username/password combination!" });
            }
        }
    );
});

module.exports = router;
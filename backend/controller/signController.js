const bcrypt = require("bcrypt");
const users = require("../models/user");

exports.register = (req, res) => {
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const user = new users({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(password, salt),
        registerAt: new Date().toISOString(),
    })
    .save().then((result) => {
        // redirect to sign in page
        console.log(result.json());
        res.render("http://localhost:8080/login");
    })
    .catch((err) => {
        console.log(err);
        res.render("signup", { message: "Signup fail, try again" });
    });
};
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./router/router');
const port = 3000;
const app = express();

try {
    app.use(cors());

    app.use(bodyParser.urlencoded({ extends: false }));
    app.use(bodyParser.json());
    app.use(routes);

} catch (error) {
    console.log(error);
}

mongoose
    .connect(
        "mongodb+srv://Sampong:Samponglim3788@cluster0.y01cw.mongodb.net/users?retryWrites=true&w=majority",
    )
    .then(result => {
        app.listen(port);
        // console.log(respond.json());
        console.log("Database is connected");
    })
    .catch((err) => {
        console.log(err);
    });
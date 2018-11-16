"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongodb_1 = require("mongodb");
const db_1 = require("./config/db");
// const db             = require('./config/db.ts');
const bodyParser = require('body-parser');
// const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
// const bodyParser     = require('body-parser');
// const db             = require('./config/db');
//const app            = express();
const port = 8090;
class App {
    constructor() {
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.MongoConnect();
    }
    MongoConnect() {
        mongodb_1.MongoClient.connect(db_1.default.url, { uri_decode_auth: true }, (err, database) => {
            if (err)
                return console.log(err);
            require('./routes')(this.app, database);
            this.app.listen(port, () => {
                console.log('We are live on ' + port);
            });
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=server.js.map
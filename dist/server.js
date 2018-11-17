"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var index_1 = require("./config/index");
var routes_1 = require("./routes");
var bodyParser = require("body-parser");
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.MongoConnect();
    }
    App.prototype.MongoConnect = function () {
        var _this = this;
        mongodb_1.MongoClient.connect(index_1.process.db.url, { uri_decode_auth: true }, function (err, database) {
            if (err)
                return console.log(err);
            routes_1.routes(_this.app, database);
            _this.app.listen(index_1.process.env.PORT.dev, function () {
                console.log('We are live on ' + index_1.process.env.PORT.dev);
            });
        });
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=server.js.map
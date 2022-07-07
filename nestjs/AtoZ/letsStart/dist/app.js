"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/test', function (req, res) {
    res.send({
        name: "허준혁",
        age: 31,
        friends: []
    });
});
app.post('/test', function (req, res) {
    res.send({
        person: "Mike"
    });
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
//# sourceMappingURL=app.js.map
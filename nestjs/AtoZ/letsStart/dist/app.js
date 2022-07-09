"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var data = [1, 2, 3, 4];
app.get('/', function (req, res) {
    console.log(req);
    res.send({
        data: data
    });
});
app.listen(8000, function () {
    console.log('server is on...');
});
//# sourceMappingURL=app.js.map
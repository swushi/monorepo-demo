"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = require("dotenv");
dotenv_1.config({ path: "../../.env" });
var app = express_1.default();
app.get("/", function (req, res) {
    res.send("Hello World!");
});
var port = process.env.API_PORT || 8080;
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});

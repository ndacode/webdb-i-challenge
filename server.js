const express = require("express");
const db = require("./data/dbConfig.js");
const accRouter = require("./data/helpers/accountRouter.js");

const server = express();

server.use(express.json());
server.use("/", accRouter);
module.exports = server;

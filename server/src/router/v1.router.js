const express = require("express");
const { clientsRouter } = require("./clients/clients.router");

const v1Router = express.Router();

v1Router.use("/client", clientsRouter);

module.exports = v1Router;

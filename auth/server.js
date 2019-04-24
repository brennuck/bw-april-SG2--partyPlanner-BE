const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router.js");
const partyRouter = require("../parties/party-router.js");
const shoppingRouter = require("../shoppingList/shopping-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", authRouter);
server.use("/api", partyRouter);
server.use("/api", shoppingRouter);

module.exports = server;

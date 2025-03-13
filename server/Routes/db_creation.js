const express = require("express");
const router = express.Router();
const createTables = require("../Controller/Create-tables");

router.get("/create-tables", createTables);

module.exports = router;

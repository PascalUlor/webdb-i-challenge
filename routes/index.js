const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");
router.get("/", Controllers.getAllAccounts);

router.post("/", Controllers.createAccount);

module.exports = router;

const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");
router.get("/", Controllers.getAllAccounts);

router.post("/", Controllers.createAccount);

router.put("/:id", Controllers.updateAccount);

router.delete("/:id", Controllers.deleteAcct);

module.exports = router;

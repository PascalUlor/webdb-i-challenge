const express = require("express");
const validation = require("../middleware");

const router = express.Router();

const Controllers = require("../controllers");
router.get("/", Controllers.getAllAccounts);

router.get("/:id", validation.validateAccountId, Controllers.getAccountById);

router.post("/", Controllers.createAccount);

router.put("/:id", Controllers.updateAccount);

router.delete("/:id", Controllers.deleteAcct);

module.exports = router;

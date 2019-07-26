const accountModel = require("../data/models");

async function validateAccountId(req, res, next) {
  const id = Number(req.params.id) || Number(req.project.id);
  if (id !== undefined && id !== "" && Number(id)) {
    account = await accountModel.getById(id);
    if (account) {
      req.account = account;
      next();
    } else {
      res.status(400).json({
        status: 400,
        message: "invalid account id"
      });
    }
  } else {
    res.status(400).json({
      status: 400,
      message: "invalid id type. Must be a number"
    });
  }
}

module.exports = {
  validateAccountId
};

const accountModel = require("../data/models");

const getAllAccounts = async (req, res) => {
  try {
    const allAccount = await accountModel.getAll(req.query);
    if (allAccount) {
      return res.status(200).json({
        status: 200,
        data: allAccount
      });
    }
    return res.status(404).json({
      status: 404,
      message: "No actions available"
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: "This information could not be retrieved."
    });
  }
};

const getById = (req, res, statusCode) => {
  console.log(res);
  return res.status(200).json({
    status: statusCode,
    data: req.account
  });
};

const getAccountById = async (req, res) => {
  return getById(req, res, 200);
};

const createAccount = async (req, res) => {
  const { name, budget } = req.body;
  if (req.body.name && req.body.budget) {
    try {
      const newAcct = await accountModel.add({ name, budget });
      return res.status(201).json({
        status: 201,
        data: newAcct
      });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        error: "Server error."
      });
    }
  } else {
    res.status(400).json({
      status: 400,
      error: "Please fill in the name field"
    });
  }
};

const updateAccount = async (req, res) => {
  const id = req.params.id;
  if (Number(id)) {
    try {
      const { name, budget } = req.body;

      if (req.body.name && req.body.budget) {
        if (req.body.name !== "" && req.body.budget !== "") {
          const acctUpdate = await accountModel.update(id, {
            name,
            budget
          });
          return res.status(200).json({
            status: 200,
            data: acctUpdate
          });
        }
        return res.status(400).json({
          status: 400,
          errorMessage: "Please provide account detials."
        });
      }
    } catch (err) {
      return res.status(400).json({
        status: 500,
        error: "The account information could not be modified."
      });
    }
  }
};

const deleteAcct = async (req, res) => {
  const id = req.params.id;
  try {
    const removeAccount = await accountModel.remove(id);
    return res.status(200).json({
      status: 200,
      data: removeAccount
    });
  } catch (err) {
    return res.status(400).json({
      status: 500,
      error: "This account could not be removed"
    });
  }
};

module.exports = {
  getAllAccounts,
  createAccount,
  updateAccount,
  deleteAcct,
  getAccountById
};

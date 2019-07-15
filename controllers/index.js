const accountModel = require("../data/models");

const getAllAccounts = async (req, res) => {
  try {
    const allAccount = await accountModel.getAll();
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

module.exports = {
  getAllAccounts,
  createAccount
};

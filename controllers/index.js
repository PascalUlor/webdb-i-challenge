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

module.exports = {
  getAllAccounts
};

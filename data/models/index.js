const db = require("../dbConfig");

const getAll = () => {
  return db.select().from("accounts");
};
const accountModel = { getAll };
module.exports = accountModel;

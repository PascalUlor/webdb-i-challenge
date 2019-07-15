const db = require("../dbConfig");

const getAll = () => {
  return db.select().from("accounts");
};

const add = account => {
  db("accounts")
    .insert(account)
    .then(data => {
      return data;
    });
};
const accountModel = { getAll, add };
module.exports = accountModel;

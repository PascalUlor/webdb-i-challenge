const db = require("../dbConfig");

const getAll = () => {
  return db.select().from("accounts");
};

const getById = id => {
  return db("accounts")
    .where({ id })
    .first();
};

const add = account => {
  db("accounts")
    .insert(account)
    .then(data => {
      return data;
    });
};

const update = (id, account) => {
  db("accounts")
    .where("id", id)
    .update(account)
    .then(data => {
      return data;
    });
};

const remove = id => {
  return db("accounts")
    .where("id", id)
    .del();
};
const accountModel = { getAll, add, update, remove, getById };
module.exports = accountModel;

const db = require("../dbConfig.js");

module.exports = {
  find,
  insert,
  update,
  remove
};

function find() {
  return db("accounts");
}

function insert(account) {
  return db("accounts")
    .insert(account, "id")
    .then(ids => ({ id: ids[0] }));
}

function update(id, account) {
  return db("accounts")
    .where("id", Number(id))
    .update(account);
}

function remove(id) {
  return db("accounts")
    .where("id", Number(id))
    .del();
}

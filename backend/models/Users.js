const pool = require("../pg");
const bcrypt = require("bcrypt");

const getUsers = (request, response) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM users", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const getUserById = (request, response) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM users WHERE id = $1",
      [request.params.id],
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};

const createUser = (body) => {
  return new Promise((resolve, reject) => {
    const { name, email, password } = body;
    pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bcrypt.hashSync(password, 10)],
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};

const updateUser = (body) => {
  return new Promise((resolve, reject) => {
    const { name, email, password, params } = body;
    pool.query(
      "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4",
      [name, email, password, params.id],
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};

const deleteUser = (request, response) => {
  return new Promise((resolve, reject) => {
    pool.query("DELETE FROM users WHERE id = $1", 
    [request], (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

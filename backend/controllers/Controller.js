const path = require("path");
const User = require("../models/Users");

const index = (req, res) => {
  res.location("/api/");
  res.sendFile(path.join(__dirname, "../api", "data.json"));
};

const user = (req, res) => {
  User.getUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const create = (req, res) => {
  const { name, email, password } = req.body;
  !name || !email || !password
    ? res.status(400).json({ message: "Invalid request" })
    : User.createUser({ name, email, password })
        .then((user) => {
          res.status(201).json(user);
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
        });
};

const supp = (req, res) => {
  User.deleteUser(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}



module.exports = {
  index,
  user,
  create,
  supp,
};

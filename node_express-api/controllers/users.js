import Sequelize from "sequelize";
const sequelize = new Sequelize("postgres", "postgres", "Pbk@58120", {
  dialect: "postgres",
  host: "localhost",
});
let users = [];
const User = sequelize.define(
  "project",
  {
    userId: { type: Sequelize.INTEGER },
    id: { type: Sequelize.INTEGER, primaryKey: true },
    title: { type: Sequelize.TEXT },
  },
  {
    tablename: "project",
    timestamps: false,
  }
);
sequelize
  .sync()
  .then(() => console.log("table created"))
  .catch((error) => console.log(error));
export const createUser = (req, res) => {
  const user = User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.send(err));
  users.push({ user });
};
export const deleteUser = (req, res) => {
  const Id = req.params.Id;
  console.log(Id);
  User.destroy({
    where: {
      id: Id,
    },
  })
    .then(() => res.send("user deleted successfully"))
    .catch((err) => {
      res.status(400).send(err.message);
    });
};
export const getUsers = (req, res) => {
  User.findAll()
    .then((users1) => res.json(users1))
    .catch((err) => res.send(err));
};
export const updateUser = (req, res) => {
  const x = req.params.Id;
  console.log(x);
  User.findByPk(x)
    .then((user) => {
      if (!user) res.status(404).send({ message: "user not found" });
      user.update(req.body);
    })
    .then((user) => res.send("user updated successfully"))
    .catch((err) => res.status(400).send({ message: err.message }));
};
export const getUser = (req, res) => {
  const Id = req.params.Id;
  const item = users.find((item) => parseInt(item.id) === parseInt(Id));
  if (!item)
    return res.status(404).send("The item with the given ID was not found.");
  res.send(item);
};

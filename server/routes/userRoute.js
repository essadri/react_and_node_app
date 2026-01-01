const express = require("express");

const { createUser,getUsers,getUserById,updateUser,deleteUser } = require("../controller/userController");

const route = express.Router();

route.post("/user", createUser);
route.get("/users",getUsers);
route.get("/user/:id",getUserById);
route.put("/user/update/:id",updateUser);
route.delete("/user/delete/:id",deleteUser);

module.exports = route;
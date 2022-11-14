const UserServices = require("../services/users.services");

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUserWithCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserJoinCourses(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.postNewUser(newUser);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const result = await UserServices.updateUser(id, userData);
    res.status(200).json({ message: 'Usuario actualizado' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUserById,
  getUserWithCourses,
  createUser,
  putUser,
};
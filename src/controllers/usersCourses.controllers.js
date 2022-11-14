const UsersCorusesServices = require("../services/usersCourses.services");

const createCourseToUser = async (req, res) => {
  try {
    const newCurseToUser = req.body;
    const result = await UsersCorusesServices.postCurseToUser(newCurseToUser);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCourseToUser,
};
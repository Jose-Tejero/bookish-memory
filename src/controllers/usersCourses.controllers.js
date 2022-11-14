const UsersCoursesServices = require("../services/usersCourses.services");

const createCourseToUser = async (req, res) => {
  try {
    const newCourseToUser = req.body;
    const result = await UsersCoursesServices.postCourseToUser(newCourseToUser);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCourseToUser,
};
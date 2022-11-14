const CoursesServices = require("../services/courses.services");


const getAllCourses = async (req, res) => {
  try {
    const result = await CoursesServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getAllCoursesWithCategoriesAndVideos = async (req, res) => {
  try {
    const result = await CoursesServices.getAllJoinCategoriesJoinVideos();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCourses,
  getAllCoursesWithCategoriesAndVideos,
};
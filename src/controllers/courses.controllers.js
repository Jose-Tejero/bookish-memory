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

const postNewCourse = async (req, res) => {
  try {
    const newCourse = req.body;
    const result = await CoursesServices.add(newCourse);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const putCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const courseData = req.body;
    const result = await CoursesServices.update(id, courseData);
    res.status(200).json({ message: 'Curso actualizado' });
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCourses,
  getAllCoursesWithCategoriesAndVideos,
  postNewCourse,
  putCourse,
};
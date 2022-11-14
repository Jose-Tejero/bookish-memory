const { Router } = require('express');
const { getAllCourses, getAllCoursesWithCategoriesAndVideos } = require('../controllers/courses.controllers');

const router = Router();

router.get('/courses', getAllCourses);

router.get('/courses-show-all', getAllCoursesWithCategoriesAndVideos);

module.exports = router;
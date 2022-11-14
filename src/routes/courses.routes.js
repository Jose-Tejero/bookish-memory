const { Router } = require('express');
const { getAllCourses, getAllCoursesWithCategoriesAndVideos, postNewCourse } = require('../controllers/courses.controllers');

const router = Router();

router.get('/courses', getAllCourses);

router.get('/courses-show-all', getAllCoursesWithCategoriesAndVideos);

router.post('/courses', postNewCourse)

module.exports = router;
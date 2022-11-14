const { Router } = require('express');
const { getAllCourses, getAllCoursesWithCategoriesAndVideos, postNewCourse, putCourse } = require('../controllers/courses.controllers');

const router = Router();

router.get('/courses', getAllCourses);

router.get('/courses-show-all', getAllCoursesWithCategoriesAndVideos);

router.post('/courses', postNewCourse);

router.put('/courses/:id', putCourse);

module.exports = router;
const { Router } = require('express');
const { createCourseToUser, getAllCourses } = require('../controllers/usersCourses.controllers');

const router = Router();

router.post('/add-course-to-user', createCourseToUser);

router.get('/courses', getAllCourses);

module.exports = router;
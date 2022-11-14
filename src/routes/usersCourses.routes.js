const { Router } = require('express');
const { createCourseToUser } = require('../controllers/usersCourses.controllers');

const router = Router();

router.post('/add-course-to-user', createCourseToUser);

module.exports = router;
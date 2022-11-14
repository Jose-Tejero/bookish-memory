const { Router } = require('express');
const { getAllCourses } = require('../controllers/courses.controllers');

const router = Router();

router.get('/courses', getAllCourses);

module.exports = router;
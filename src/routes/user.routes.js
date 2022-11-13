const { Router } = require('express');
const { getUserById, getUserWithCourses, createUser } = require('../controllers/users.controllers');

const router = Router();

router.get('/users/:id', getUserById);

router.get('/user-courses/:id', getUserWithCourses);

router.post('/users', createUser);

module.exports = router;
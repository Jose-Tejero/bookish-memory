const { Router } = require('express');
const { getUserById, getUserWithCourses, createUser, putUser } = require('../controllers/users.controllers');

const router = Router();

router.get('/users/:id', getUserById);

router.get('/user-courses/:id', getUserWithCourses);

router.post('/users', createUser);

router.put('/users/:id', putUser);

module.exports = router;
const { Router } = require('express');
const { postNewCategory, deleteCategory } = require('../controllers/categories.controllers');

const router = Router();

router.post('/categories', postNewCategory);

router.delete('/categories/:id', deleteCategory);

module.exports = router;
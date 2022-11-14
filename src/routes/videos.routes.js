const { Router } = require('express');
const { postNewVideo } = require('../controllers/videos.controllers');

const router = Router();

router.post('/videos', postNewVideo);

module.exports = router;
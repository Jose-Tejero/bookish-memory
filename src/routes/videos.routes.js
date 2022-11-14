const { Router } = require('express');
const { postNewVideo, deleteVideo } = require('../controllers/videos.controllers');

const router = Router();

router.post('/videos', postNewVideo);

router.delete('/videos/:id', deleteVideo);

module.exports = router;
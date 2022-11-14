const VideosServices = require("../services/videos.services");

const postNewVideo = async (req, res) => {
  try {
    const newVideo = req.body;
    const result = await VideosServices.addVideo(newVideo);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postNewVideo,
};
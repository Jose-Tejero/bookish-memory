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

const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await VideosServices.destroyVideo(id);
    res.status(200).json({ message: 'Video eliminado' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postNewVideo,
  deleteVideo,
};
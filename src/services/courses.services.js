const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const CoursesCategories = require("../models/coursesCategories.models");
const Videos = require("../models/videos.models");

class CoursesServices {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getAllJoinCategoriesJoinVideos() {
    try {
      const result = await Courses.findAll({
        attributes: ['title'],
        include: [{
          model: CoursesCategories,
          as: 'categories',
          attributes: ['category_id'],
          include: {
            model: Categories,
            as: 'category',
            attributes: ['name'],
          },
        }, {
          model: Videos,
          as: 'video',
          attributes: ['title', 'url'],
        }],
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async add(newCourse) {
    try {
      const result = await Courses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = CoursesServices;
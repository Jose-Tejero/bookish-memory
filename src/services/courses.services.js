const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const CoursesCategories = require("../models/coursesCategories.models");

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
        include: {
          model: CoursesCategories,
          as: 'categories',
          include: {
            model: Categories,
            as: 'category',
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = CoursesServices;
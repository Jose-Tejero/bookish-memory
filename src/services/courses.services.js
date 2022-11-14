const Courses = require("../models/courses.models");

class CoursesServices {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = CoursesServices;
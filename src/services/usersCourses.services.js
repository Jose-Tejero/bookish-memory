const UsersCourses = require("../models/usersCourses.models");

class UsersCorusesServices {
  static async postCourseToUser(newCourseToUser) {
    try {
      const result = await UsersCourses.create(newCourseToUser);
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getAll() {
    try {
      const result = await UsersCourses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = UsersCorusesServices;
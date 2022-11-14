const UsersCourses = require("../models/usersCourses.models");

class UsersCorusesServices {
  static async postCurseToUser(newCurseToUser) {
    try {
      const result = await UsersCourses.create(newCurseToUser);
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = UsersCorusesServices;
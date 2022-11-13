const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const UsersCourses = require("../models/usersCourses.models");

class UserServices {
  static async getById(id) {
    try {
      const result = await Users.findByPk(id, { attributes: ['firstName', 'lastName', 'email'] });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getUserJoinCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ['firstName', 'lastName', 'email'],
        include: {
          model: UsersCourses,
          as: 'course',
          attributes: ['user_id'],
          include: {
            model: Courses,
            as: 'course',
            attributes: ['title'],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async postNewUser(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = UserServices;
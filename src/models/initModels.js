const Users = require('./users.models');
const Courses = require('./courses.models');
const Categories = require('./categories.models');
const Videos = require('./videos.models');
const CoursesCategories = require('./coursesCategories.models');
const UsersCourses = require('./usersCourses.models');

const initModels = () => {

  Users.hasMany(UsersCourses, { as: 'course', foreignKey: 'user_id' });
  UsersCourses.belongsTo(Users, { as: 'user', foreignKey: 'user_id' });

  Courses.hasMany(UsersCourses, { as: 'user', foreignKey: 'course_id' });
  UsersCourses.belongsTo(Courses, { as: 'course', foreignKey: 'course_id' });

  Courses.hasMany(CoursesCategories, { as: 'course', foreignKey: 'course_id' });
  CoursesCategories.belongsTo(Courses, { as: 'category', foreignKey: 'course_id' });

  Categories.hasMany(CoursesCategories, { as: 'category', foreignKey: 'category_id' });
  CoursesCategories.belongsTo(Categories, { as: 'course', foreignKey: 'category_id' });

  Courses.hasMany(Videos, { as: 'video', foreignKey: 'course_id' });
  Videos.belongsTo(Courses, { as: 'course', foreignKey: 'course_id' });

  Users;
  Courses;
  Categories;
  Videos;

};

module.exports = initModels;
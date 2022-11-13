const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.models');
const Courses = require('./courses.models');

const UsersCourses = db.define('users_courses', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      id: 'id',
    },
    field: 'user_id',
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Courses,
      id: 'id',
    },
    field: 'course_id',
  },
  progress: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  review: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = UsersCourses;
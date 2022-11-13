const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Courses = require('./courses.models');
const Categories = require('./categories.models');

const CoursesCategories = db.define('courses_categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
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
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categories,
      id: 'id',
    },
    field: 'category_id',
  },
}, {
  timestamps: false,
});

module.exports = CoursesCategories;
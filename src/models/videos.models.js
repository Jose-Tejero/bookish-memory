const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Courses = require('../models/courses.models');

const Videos = db.define('videos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Courses,
      key: 'id',
    },
    field: 'course_id',
  },
}, {
  timestamps: false,
});

module.exports = Videos;
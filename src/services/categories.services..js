const Categories = require("../models/categories.models");

class CategoriesServices {
  static async addCategory(newCategory) {
    try {
      const result = await Categories.create(newCategory);
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async destroyCategory(id) {
    try {
      const result = await Categories.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  };
};

module.exports = CategoriesServices;
const CategoriesServices = require("../services/categories.services.");

const postNewCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    const result = await CategoriesServices.addCategory(newCategory);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CategoriesServices.destroyCategory(id);
    res.status(200).json({ message: 'Categoría eliminada' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postNewCategory,
  deleteCategory,
};
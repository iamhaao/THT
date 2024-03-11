import Category from "../models/category.model.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    console.log(err);
    res.status(400).json({ message: error.message });
  }
};
export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const newCategory = new Category({ name: name });
    await newCategory.save();
    res.json(newCategory);
  } catch (error) {
    console.log(err);
    res.status(400).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      category.name = req.body.name || category.name;
      const updatedCategory = await category.save();
      res.status(200).json(updatedCategory);
    } else {
      res.status(400);
      throw new Error("Category not found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      await category.deleteOne();
      res.status(200).json({ message: "Categories removed" });
    } else {
      res.status(400);
      throw new Error("Category not found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

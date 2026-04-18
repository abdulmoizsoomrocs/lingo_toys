import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  console.log("API HIT", req.query.filter);

  try {
    const { filter } = req.query;
    const query = {};

    if (filter && filter !== 'all') {
      // Use category-only filtering for exact matches
      // while still allowing case-insensitive category values.
query.category = filter.toLowerCase();    }

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
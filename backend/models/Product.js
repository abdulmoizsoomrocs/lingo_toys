import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,

  details: {
    heading: String,
    paragraph: String,
  },

  specs: {
    features: String,
    ageGroup: String,
    color: String,
  },

  features: [
    {
      title: String,
      description: String,
    },
  ],

  insideBox: [String],

  policies: {
    shipping: String,
    warranty: String,
  },

  review: {
    name: String,
    verified: Boolean,
    rating: Number,
    comment: String,
  },

  images: {
    main: String,
    gallery: [String],
  },
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
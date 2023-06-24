import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    director: {
      type: {},
    },
    actors: {
      type: {},
    },
    country: {
      type: String,
    },
    duration: {
      type: String,
    },
    release: {
      type: String,
    },
    link1title: {
      type: String,
    },
    link1: {
      type: String,
    },
    link2title: {
      type: String,
    },
    link2: {
      type: String,
    },
    link3title: {
      type: String,
    },
    link3: {
      type: String,
    },
    link4title: {
      type: String,
    },
    link4: {
      type: String,
    },
    watchlink1: {
      type: String,
    },
    watchlink2: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);

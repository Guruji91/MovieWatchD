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
    linktitleone: {
      type: {},
    },
    link1: {
      type: String,
    },
    linktitletwo: {
      type: {},
    },
    link2: {
      type: String,
    },
    linktitlethree: {
      type: {},
    },
    link3: {
      type: String,
    },
    linktitlefour: {
      type: {},
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
    watchlink3: {
      type: String,
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);

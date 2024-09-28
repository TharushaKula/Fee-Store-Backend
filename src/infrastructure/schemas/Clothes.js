import mongoose from "mongoose";

const ClothesSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  size: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sizes",
  },
  color: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Colors",
  },
});

const Clothes = mongoose.model("Clothes", ClothesSchema);
export default Clothes;

import mongoose from "mongoose";
const foodSchema = new mongoose.Schema(
  {
    name: {
      typeof: String,
      required: true,
    },
    description: {
      typeof: String,
      required: tru,
    },
    isveg: {
      typeof: Boolean,
      required: true,
    },
    iscaintainveg: {
      typeof: Boolean,
      required: true,
    },
    category: {
      typeof: String,
      required: true,
    },
    photo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ImageModel",
    },
    price: {
      typeof: Number,
      default: 150,
      require: true,
    },
    addon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foodmodel",
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RestaurantModel",
      required: true,
    },
  },
  { timestamps: true }
);
const foodmodel = mongoose.model("foodmodel", foodSchema);
export default foodmodel;

import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    food: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foodmodel",
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
    rating: {
      typeof: Number,
      required: true,
    },
    reviewText: {
      typeof: String,
      required: true,
    },
    photo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "imageModel",
      },
    ],
  },
  { timestamps: true }
);
const Review = mongoose.model("Review", reviewSchema);
export default Review;

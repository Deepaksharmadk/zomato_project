import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema(
  {
    name: {
      typeof: String,
      required: true,
    },
    city: {
      typeof: String,
      required: true,
    },
    address: {
      typeof: String,
      required: true,
    },
    maplocation: {
      typeof: String,
      required: true,
    },
    cuisine: [String],
    restaurantTIming: {
      typeof: String,
    },
    contactNumber: {
      typeof: String,
    },
    website: {
      typeof: Number,
    },
    populardishes: {
      typeof: String,
    },
    averageCost: {
      typeof: Number,
    },
    amenties: {
      typeof: String,
    },
    menuimage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ImageModel",
    },
    menu: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
      },
    ],
    photo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ImageModel",
    },
  },
  { timestamps: true }
);
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;

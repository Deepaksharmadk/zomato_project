import mongoose from "mongoose";
const menuSchema = new mongoose.Schema(
  {
    menu: [
      {
        name: {
          typeof: String,
          required: true,
        },
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "foodmodel",
        },
      },
    ],
    recomanded: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodmodel",
        unique: true,
      },
    ],
  },
  { timestamps: true }
);
const Menu = mongoose.model("Menu", menuSchema);
export default Menu;

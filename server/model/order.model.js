import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
    orderdetails: [
      {
        food: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "foodmodel",
        },
        quantity: {
          typeof: Number,
          required: true,
        },
        paymode: {
          typeof: String,
          required: true,
        },
        status: {
          typeof: String,
          default: "placed",
        },
        paymentdetails: {
          itemTotal: {
            typeof: Number,
            required: true,
          },
          promo: {
            typeof: Number,
            required: true,
          },
          tax: {
            typeof: Number,
            required: true,
          },
        },
      },
    ],
    orderrating: {
      typeof: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Ordermodel = mongoose.model("Ordermodel", orderSchema);
export default Ordermodel;

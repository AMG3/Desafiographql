import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
  ],
});

export const CarritosModel = mongoose.model("carritos", Schema);

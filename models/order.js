const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderSchema = Schema
const order = mongoose.model(
  "Order",
  new mongoose.Schema(
    {
      client: {
          type: Schema.Types.ObjectId,
          ref: "Client",
        // required: true,
      },
      store: {
        type: Schema.Types.ObjectId,
        ref: "store",
      // required: true,
      }
     
    },
    { timestamps: true }
  )
);
module.exports = order;

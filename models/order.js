const mongoose = require("mongoose");
const { Schema } = mongoose;
const gradesSchema = Schema
const order = mongoose.model(
  "Order",
  new mongoose.Schema(
    {
      client: {
          type: Schema.Types.ObjectId,
          ref: "client",
        required: true,
      },
      store: {
        type:  Schema.Types.ObjectId,
        ref: "store",
      required: true,
      },
      timestemp: {
        required: true,
        type: String,
      },
    },
    { timestamps: true }
  )
);
module.exports = order;

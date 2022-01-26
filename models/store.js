const mongoose = require("mongoose");
const { Schema } = mongoose;
const gradesSchema = Schema
const store = mongoose.model(
  "Store",
  new mongoose.Schema(
    {
      name: {
        required: true,
        type: String,
      },
      adress: {
        required: true,
        type: String,
      },
      phone: {
        required: true,
        type: String,
      },
      order_ref:{
        type:  Schema.Types.ObjectId,
        ref: "order",
      }
    }  )
);
module.exports = store;

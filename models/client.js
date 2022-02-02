 const mongoose = require("mongoose");
 const { Schema } = mongoose;
const clientSchema = Schema
const client = mongoose.model(

  "Client",
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
      isvip: {
        required: true,
        type: String
      },
      phone:{
        required: true,
        type: String
      },
      order_ref:{
      type: Schema.Types.ObjectId,
      ref: "order",
        }    }  )
);
module.exports = client;

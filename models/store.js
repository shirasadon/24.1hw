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
      }
    }  )
);
module.exports = store;

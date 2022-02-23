import { Schema } from "mongoose";

export const sample = new Schema({
  email: {
    type: String,
    allownull: false,
  },
  password: {
    type: String,
    allownull: false,
  },
  name: {
    type: String,
    allownull: false,
  }
});

import mongoose from "mongoose";
import { Schema } from "mongoose";

const tutRequests = new Schema({
  technology: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 10,
  },
  title: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 190,
  },
  desc: {
    type: String,
    required: true,
    minlength: 30,
    maxlength: 2000,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const tutRequestModel = mongoose.model("tutorial-requests", tutRequests);

export default tutRequestModel;

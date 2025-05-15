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

export const createTutorialRequest = async (data) => {
  try {
    const result = await tutRequestModel.create(data);
    console.log("Result of createTutorialRequest Method: ", result);
    return result;
  } catch (error) {
    throw error;
  }
};

export const getAllRequestData = async () => {
  try {
    const requestData = await tutRequestModel.find({});
    return requestData;
  } catch (error) {
    throw error;
  }
};

export const updateDataById = async (id, data) => {
  try {
    return await tutRequestModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteRequestById = async (id) => {
  try {
    return await tutRequestModel.deleteOne({ _id: id });
  } catch (error) {
    throw error;
  }
};

const mongoose = require("mongoose");

const callSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  AadharNo: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  noOfAnimal: {
    type: String,
  },
  Address: {
    type: String,
  },
  specie: {
    type: String,
  },
  problem: {
    type: String,
  },
  levelOfProblem: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("CallStatu", callSchema);

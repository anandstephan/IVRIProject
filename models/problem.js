const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const problemSchema = new mongoose.Schema({
  problem: {
    type: String,
    required: true,
  },
  problemDetails: [{ type: ObjectId, ref: "ProblemDetail" }],
});

module.exports = mongoose.model("Problem", problemSchema);

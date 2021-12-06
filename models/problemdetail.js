const mongoose = require("mongoose");

const problemDetailSchema = new mongoose.Schema({
  problemDetail: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ProblemDetail", problemDetailSchema);

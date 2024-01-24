const mongoose = require("mongoose");

const advertisementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  video: {
    type: String,
  },
  priority: {
    type: Number,
  },
  banner: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Advertisement = mongoose.model("Advertisement", advertisementSchema);
module.exports = Advertisement;

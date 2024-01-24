const mongoose = require("mongoose");

const premiumPackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});

const PremiumPackage = mongoose.model("PremiumPackage", premiumPackageSchema);
module.exports = PremiumPackage;

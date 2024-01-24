const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: "Invalid Email address" });
      }
    },
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
  },
  bod: {
    type: Date,
    default: Date.now,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
    default: "",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  premiumPackageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PremiumPackage",
  },
  favoriteMovies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
  ],
  watchHistory: [
    {
      movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
      },
      watchedOn: Date,
    },
  ],
  billingHistory: [
    {
      packageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PremiumPackage",
      },
      purchasedOn: Date,
    },
  ],
  notifications: [
    {
      message: String,
      receivedOn: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;

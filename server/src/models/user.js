const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true, // thêm validation check có ký tự hoa
    minlength: 6,
  },
  bod: {
    type: Date,
    default: Date.now,
  },
  phone: {
    type: String,
    required: true, // thiếu validate
  },
  address: {
    type: String,
    required: true,
  },
  premium: {
    isPremium: {
      type: Boolean,
      default: false,
    },
    exp: {
      type: Date,
      default: undefined,
    },
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
});

const User = mongoose.model("User", userSchema);
module.exports = User;

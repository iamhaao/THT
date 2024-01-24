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
    required: true, // thêm validation check có ký tự hoa
    minlength: 7,
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
  billingHistory: [
    {
      content: String,
      subContent: String,
      fluctuations: {
        // lúc kiểm tra lịch sử sẽ biết nó cộng tiền hay trừ tiền (1: + tiền do nạp tiền , 2: - tiền do mua premiumaccount hoặc làm gì đó)
        Number,
        required,
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
      seen: {
        Boolean,
        default: false,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;

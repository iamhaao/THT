import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userName: { type: String },
    userImage: { type: String },
    rating: { type: Number },
    comment: { type: String },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const moviesSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    titleImage: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    video: {
      type: String,
    },
    rate: {
      type: Number,
      required: true,
      default: 0,
    },
    numberOfReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
    casts: [
      {
        name: { type: String },
        image: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Movies", moviesSchema);

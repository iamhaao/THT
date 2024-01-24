const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  subImg: {
    type: String,
  },
  trailer: {
    type: String,
  },
  description: {
    type: String,
  },
  releaseDate: {
    type: Date,
  },
  nation: {
    type: String,
  },
  copyright: {
    type: String,
  },
  policies: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  view: {
    type: Number,
    default: 0,
  },
  productorMovie: {
    type: String,
  },
  director: {
    type: String,
  },
  categoryIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  actorIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Actor",
    },
  ],
  episodes: [
    {
      episodeNumber: Number,
      video: String,
      title: String,
      sumary: String,
      duration: Number,
      releaseDate: Date,
    },
  ],
  feedbacks: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      comment: String,
      rating: Number,
      date: Date,
    },
  ],
  advertisementId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Advertisement",
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;

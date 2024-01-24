const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    //thêm required
    type: String,
  },
  subImg: {
    //thêm required

    type: String,
  },
  trailer: {
    //thêm required

    type: String,
  },
  description: {
    //thêm required

    type: String,
  },
  releaseDate: {
    //thêm required
    type: Date,
  },
  nation: {
    //thêm required
    type: String,
  },
  copyright: {
    //thêm required
    type: String,
  },
  policies: {
    //thêm required

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
    //thêm required
    type: String,
  },
  director: {
    //thêm required

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
    // nên bỏ ra 1 Schema con và thêm validation cho từng field
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
    // nên bỏ ra 1 Schema con và thêm validation cho từng field
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

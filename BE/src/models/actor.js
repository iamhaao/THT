const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: String,
  gener: Boolean,
  dob: Date,
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
  ],
});

const Actor = mongoose.model("Actor", actorSchema);
module.exports = Actor;

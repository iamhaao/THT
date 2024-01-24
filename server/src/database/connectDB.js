// connect mongodb
const mongoose = require("mongoose");
const db =
  "mongodb+srv://tinld19:LyDucTin19102002@posts.wzbbcwm.mongodb.net/posts?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
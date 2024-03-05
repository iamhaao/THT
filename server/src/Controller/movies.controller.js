import Movie from "../models/movie.model.js";

const createMovie = async (req, res, next) => {
    try {
        const {
            name,
            des,
            image,
            titleImage,
            rate,
            numberOfReviews,
            category,
            time,
            language,
            year,
            casts,
            video,
        } = req.body;
        console.log(req.body)
        const movie = new Movie({
        name,
        des,
        image,
        titleImage,
        rate,
        numberOfReviews,
        category,
        time,
        language,
        year,
        casts,
        video,
        // userId: req.user._id,
      });
  
      if (movie) {
        const createdMovie = await movie.save();
        res.status(201).json(createdMovie);
      } else {
        res.status(400);
        throw new Error("Invalid movie data");
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  export {createMovie}
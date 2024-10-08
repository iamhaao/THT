import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IfMovieLiked, LikeMovie } from "../context/Functionaltes";
import { FaCrown } from "react-icons/fa6";

function Movie({ movie }) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const isLiked = (movie) => {
    return IfMovieLiked(movie);
  };
  console.log(isLiked(movie));

  return (
    <>
      <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden ">
        <Link to={`/movie/${movie._id}`} className="w-full ">
          <img
            src={movie?.image ? `${movie.image}` : ""}
            alt={movie.name}
            className="w-full h-64 object-cover"
          />
        </Link>
        <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-2 ">
          <div className="flex gap-2 items-center">
            <h3 className="font-semibold  truncate ">{movie.name}</h3>
            {movie.isPremium && <FaCrown className="text-yellow-600 w-4 h-4" />}
          </div>
          <button
            onClick={() => LikeMovie(movie, dispatch, currentUser)}
            className={`h-9 w-9 text-sm flex-colo transitions
        ${isLiked(movie) ? "bg-subMain" : "bg-transparent"}
        hover:bg-subMain border-2 border-subMain rounded-md  text-white`}
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
}

export default Movie;

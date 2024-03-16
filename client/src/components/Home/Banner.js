import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import FlexMovieItems from "../FlexMovieItems";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Loader from "../../shared/Notification/Loader";
import { RiMovie2Line } from "react-icons/ri";
import { IfMovieLiked } from "../../context/Functionaltes";
import { useDispatch, useSelector } from "react-redux";
import { updateUserSuccess } from "../../redux/userSlice/user.slice";
import { useMutation } from "react-query";
import { addFavorite } from "../../api/movie";
import Toast from "../../shared/Toast";
const Swipper = ({ sameClass, movies }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const isLiked = (movie) => {
    return IfMovieLiked(movie);
  };
  const { mutate } = useMutation(addFavorite, {
    onSuccess: (data) => {
      Toast({ message: "Added to favorites successfully!", type: "SUCCESS" });
    },
    onError: (error) => {
      Toast({ message: error.message, type: "ERROR" });
    },
  });

  const likeMovie = (movie) => {
    dispatch(updateUserSuccess(movie));
    mutate(movie);
  };
  return (
    <Swiper
      direction="vertical"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      speed={1000}
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className={sameClass}
    >
      {movies.slice(0, 6).map((movie, index) => (
        <SwiperSlide
          key={index}
          className="relative w-full rounded overflow-hidden "
        >
          <img
            src={movie?.image ? movie?.image : ""}
            alt={movie.name}
            className="w-full h-full object-cover "
          />
          <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0  flex flex-col justify-center  lg:gap-8 md:gap-5 gap-4 ">
            <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold ">
              {movie.name}
            </h1>
            <div className="flex gap-5 items-center text-dryGray">
              <FlexMovieItems movie={movie} />
            </div>
            <div className="flex gap-5 items-center">
              <Link
                to={`/movie/${movie._id}`}
                className="bg-subMain hover:text-main transitions  text-white px-8 py-3 rounded font-medium sm:text-sm text-xs "
              >
                Watch
              </Link>
              <button
                onClick={() => likeMovie(movie._id)}
                className={`bg-white ${
                  isLiked(movie) ? "text-subMain" : "text-white"
                } hover:text-subMain transitions  px-4 py-3 rounded text-sm bg-opacity-30`}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
function Banner({ movies, isLoading }) {
  const sameClass = "w-full flex-colo xl:h-96 bg-dry lg:h-64 h-48";
  return (
    <div className="relative w-full">
      {isLoading ? (
        <div className={sameClass}>
          <Loader />
        </div>
      ) : movies?.length > 0 ? (
        <Swipper sameClass={sameClass} movies={movies} />
      ) : (
        <div className={sameClass}>
          <div className="flex-colo w-24 h-24 p-5 mb-4 rounded-full bg-dry text-subMain text-4xl">
            <RiMovie2Line />
          </div>
          <p className="text-border text-sm ">
            It seem's like we dont have any movies
          </p>
        </div>
      )}
    </div>
  );
}

export default Banner;

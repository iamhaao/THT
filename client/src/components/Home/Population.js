import React from "react";
import Titles from "../Titles";
import { BsCollectionFill } from "react-icons/bs";
import Movie from "../Movie";
import Loader from "../../shared/Notification/Loader";
import { Empty } from "../../shared/Notification/Empty";

function Population({ movies, isLoading }) {
  return (
    <div className="my-16">
      <Titles title="Popular Movies" Icon={BsCollectionFill} />
      {isLoading ? (
        <Loader />
      ) : movies?.length > 0 ? (
        <div className="grid sm:mt-12 mt-6 xl:gird-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {movies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <Empty message="It seem like we dont have any movies" />
        </div>
      )}
    </div>
  );
}

export default Population;

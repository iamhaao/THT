import React from "react";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import Banner from "../components/Home/Banner";
import Population from "../components/Home/Population";
import Promos from "../components/Home/Promos";
import TopRated from "../components/Home/TopRated";

function Home() {
  const { movies } = useSelector((state) => state.movie);
  return (
    <Layout>
      <div className="-mt-10">
        <Banner movies={movies.movies} />
        <Population movies={movies.movies} isLoading={false} />
        <Promos />
        <TopRated movies={movies.movies} isLoading={false} />
      </div>
    </Layout>
  );
}

export default Home;

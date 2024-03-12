import React from "react";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import Banner from "../components/Home/Banner";
import Population from "../components/Home/Population";

function Home() {
  const { movies } = useSelector((state) => state.movie);
  console.log(movies);
  return (
    <Layout>
      <div>
        <Banner movies={movies.movies} />
        <Population movies={movies.movies} isLoading={false} />
      </div>
    </Layout>
  );
}

export default Home;

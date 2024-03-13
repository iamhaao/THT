import React from "react";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import Banner from "../components/Home/Banner";
import Population from "../components/Home/Population";
import Promos from "../components/Home/Promos";
import TopRated from "../components/Home/TopRated";

function Home() {
  const { movies } = useSelector((state) => state.movie);
  const moviesData = movies ? movies : [];

  return (
    <Layout>
      <div className="-mt-10">
        <Banner movies={moviesData} />
        <Population movies={moviesData} isLoading={false} />
        <Promos />
        <TopRated movies={moviesData} isLoading={false} />
      </div>
    </Layout>
  );
}

export default Home;

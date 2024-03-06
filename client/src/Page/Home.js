import React from "react";
import Layout from "../Layout/Layout";
import { useAppContext } from "../context/AppContext";

function Home() {
  const { userInfo } = useAppContext();
  console.log(userInfo);
  return (
    <Layout>
      <div>
        <h2>HomePage</h2>
      </div>
    </Layout>
  );
}

export default Home;

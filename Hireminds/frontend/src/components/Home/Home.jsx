import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import DashboardHero from "./DashboardHero";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";
import LandingPage from "../Landing/LandingPage";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    return <LandingPage />;
  }
  return (
    <>
      <section className="homePage page">
        <DashboardHero />
        <PopularCategories />
        <PopularCompanies />
      </section>
    </>
  );
};

export default Home;

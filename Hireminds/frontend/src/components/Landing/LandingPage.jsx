import React from "react";
import LandingHero from "./LandingHero";
import AboutSection from "./AboutSection";
import PopularCategories from "../Home/PopularCategories";
import PopularCompanies from "../Home/PopularCompanies";
import HowItWorks from "../Home/HowItWorks";

const LandingPage = () => {
    return (
        <section className="landingPage page">
            <LandingHero />
            <AboutSection />
            <HowItWorks />
            <PopularCategories />
            <PopularCompanies />
        </section>
    );
};

export default LandingPage;

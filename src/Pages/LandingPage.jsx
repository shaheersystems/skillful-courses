import React from "react";
import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import SimpleCarousel from "../components/SimpleCarousel";
import CourseCard from "../components/CourseCard";
import Head from "../components/Head";
import CategoryTag from "../components/CategoryTag";
function LandingPage() {
  return (
    <div>
      <Banner />
      <HeroSection />
      <SimpleCarousel />
      <br />
      <Head text="Courses Recommended for you" />
      <div className="px-10 flex flex-wrap justify-center gap-4 lg:justify-between">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <Head text="Topics Recommended for you" />
      <div className="flex max-h-fit px-10  flex-wrap items-center justify-center lg:justify-between gap-2">
        <CategoryTag category="ReactJs" />
        <CategoryTag category="VueJs" />
        <CategoryTag category="React Native" />
        <CategoryTag category="MongoDB" />
        <CategoryTag category="JavaScript" />
        <CategoryTag category="NodeJs" />
        <CategoryTag category="Redux Framework" />
        <CategoryTag category=".NET framework" />
        <CategoryTag category="Flutter" />
        <CategoryTag category="Kotlin" />
      </div>
      <br />
    </div>
  );
}
export default LandingPage;

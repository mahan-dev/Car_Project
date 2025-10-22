import React from "react";
import Categories from "@/app/components/modules/Categories";
import CarBanner from "@/modules/CarBanner";
import CarGallery from "@/modules/CarGallery";

const HomePage = () => {
  return (
    <section>
        <Categories />
        <CarBanner />
        <CarGallery />
    </section>
  );
};

export default HomePage;

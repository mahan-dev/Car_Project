import React from "react";
import Categories from "@/app/components/modules/Categories";
import CarBanner from "@/modules/CarBanner";

const HomePage = () => {
  return (
    <section>
      <div>
        <Categories />
        <CarBanner />
      </div>
    </section>
  );
};

export default HomePage;

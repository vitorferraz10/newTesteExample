import React from "react";

import AboutJussi from "./aboutJussi/AboutJussi";
import AboutVtex from "./aboutVtex";
import Banner from "./banner/index";
import Newsletter from "./newsletter";
import RowUnderBanner from "./rowUnderBanner";
import SliderProduct from "./sliderProduct";

const Home = () => {
   return (
      <>
         <Banner />
         <RowUnderBanner />
         <SliderProduct />
         <AboutJussi />
         <AboutVtex />
         <Newsletter />
      </>
   );
};

export default Home;

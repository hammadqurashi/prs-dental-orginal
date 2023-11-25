import React from "react";
import AestheticsBanner from "./CustomGrillz/AestheticsBanner";
import AestheticsServices from "./CustomGrillz/AestheticsServices";
import QualityProducts from "./CustomGrillz/QualityProducts";
import OurValues from "./CustomGrillz/OurValues";
import AestheticsTestimonial from "./CustomGrillz/AestheticsTestimonial";
import Contact from "./CustomGrillz/Contact";


const FacialAesthetics = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] text-white">
        <AestheticsBanner />
        <AestheticsServices />
        <AestheticsTestimonial />
        <OurValues />
        <QualityProducts />
        <Contact />
      </div>
    </>
  );
};

export default FacialAesthetics;

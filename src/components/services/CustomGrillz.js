import React from "react";
import AestheticsBanner from "./CustomGrillz/AestheticsBanner";
import AestheticsServices from "./CustomGrillz/AestheticsServices";
import QualityProducts from "./CustomGrillz/QualityProducts";
import OurValues from "./CustomGrillz/OurValues";
import PriceList from "./CustomGrillz/PriceList";
import AestheticsTestimonial from "./CustomGrillz/AestheticsTestimonial";
import Contact from "./CustomGrillz/Contact";
import KeepingSafe from "./CustomGrillz/KeepingSafe";
import ThingsToKnow from "./CustomGrillz/ThingsToKnow";
import TreatmentFaq from "./CustomGrillz/TreatmentFaq";

const FacialAesthetics = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] text-white">
        <AestheticsBanner />
        <AestheticsServices />
        <AestheticsTestimonial />
        <OurValues />
        <QualityProducts />
        <PriceList />
        <AestheticsTestimonial />
        <ThingsToKnow />
        <KeepingSafe />
        <TreatmentFaq />
        <Contact />
      </div>
    </>
  );
};

export default FacialAesthetics;

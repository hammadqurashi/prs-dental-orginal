import React from "react";
import ClearAlignersBaner from "./ClearAlignersBaner";
import ClrarContent from "./ClrarContent";
import Faq from "./Faq";
import ContactInfo from "./ContactInfo";

const ClearAligners = () => {
  return (
    <>
      <ClearAlignersBaner />
      <ClrarContent />
      <Faq />
      <section className="container mx-auto px-10 py-12">
        <div className="tab1 py-6">
          <h1 className="text-3xl	py-4 blue">Conclusion</h1>
          <p>
            Clear Aligners offer an excellent alternative to traditional braces,
            providing a discreet, convenient, and effective way to achieve a
            beautiful smile. With technological advancements in the field of
            orthodontics, clear aligners are set to become the future of
            invisible teeth straightening.
          </p>
        </div>
      </section>
      <ContactInfo />
    </>
  );
};

export default ClearAligners;

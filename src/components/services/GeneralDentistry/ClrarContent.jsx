import React from "react";
import video1 from "../../../../static/videos/1.mp4";
import video2 from "../../../../static/videos/2.mp4";
import video3 from "../../../../static/videos/3.mp4";
import video4 from "../../../../static/videos/4.mp4";

const ClearAlignersBaner = () => {
  return (
    <section className="container mx-auto px-10 py-12">
      <div className="tab1 py-16">
        <h1 className="blue text-3xl t-style-2	py-6">
          What is General Dentistry?
        </h1>
        <p className="p-style">
          General Dentistry encompasses a wide array of treatments and
          procedures aimed at diagnosing, treating, and preventing dental
          issues. It serves as the first line of defense against oral health
          problems and is crucial for individuals of all ages.
        </p>
      </div>
      <div className="tab1 pb-14">
        <h1 className="blue text-3xl  t-style-2	pb-8">
          Services Offered in General Dentistry
        </h1>
        <div className="flexe pb-10">
          <div className="nove">
            <h2 className="blue text-2xl	pt-2.5 ">Regular Check-ups</h2>
            <p>
              Routine dental check-ups are essential for maintaining good oral
              health. These appointments typically include a dental cleaning,
              X-rays, and an examination by the dentist.
            </p>
          </div>
          <div className="nove">
            <h2 className="blue text-2xl	pt-2.5 "> Dental Fillings</h2>

            <p>
              Dental fillings are used to restore teeth damaged by decay back to
              their normal function and shape.
            </p>
          </div>
          <div className="nove">
            <h2 className="blue text-2xl	pt-2.5 "> Tooth Extractions</h2>

            <p>
              Sometimes a tooth may need to be removed due to decay, disease, or
              crowding. General dentists can perform simple extractions.
            </p>
          </div>
        </div>

        <div className="flexe">
          <div className="nove">
            <h2 className="blue text-2xl	pt-2.5 ">Preventative Care</h2>

            <p>
              General dentistry aims to prevent oral health problems before they
              become severe. This includes advice on proper brushing techniques,
              flossing, and diet.
            </p>
          </div>
          <div className="nove">
            <h2 className="blue text-2xl	pt-2.5 ">Gum Disease Treatment</h2>

            <p>
              Treatment for gum diseases like gingivitis and periodontitis is
              another crucial aspect of general dentistry.
            </p>
          </div>
          <div className="nove">
            <h2 className="blue text-2xl	pt-2.5 ">Dental Crowns and Bridges</h2>

            <p>
              These are used to restore and replace damaged or missing teeth,
              improving the function and appearance of your smile.
            </p>
          </div>
        </div>
      </div>

      <div className="tab1">
        <h1 className="blue text-3xl t-style-2	pb-6">
          Why General Dentistry is Important?
        </h1>

        <p className="p-style-2">
          1. Early Diagnosis: Regular dental visits help in early detection of
          oral health problems like cavities and gum disease.
        </p>
        <p className="p-style-2">
          2. Prevention: General dentistry focuses on preventative care, which
          can save you from more extensive and expensive treatments down the
          line.
        </p>
        <p className="p-style-2">
          3. Education: Dentists not only treat but also educate patients on the
          best practices for oral care.
        </p>
        <p className="p-style-2">
          4. Family Care: General dentistry caters to the dental needs of the
          entire family, from children to seniors.
        </p>
      </div>
      <div className="tab1 pt-16">
        <h1 className="blue text-3xl t-style-2	pb-6">Cost and Insurance</h1>
        <p className="p-style-2">
          The cost of general dentistry services varies depending on the
          treatment and location. Many dental insurance plans cover the cost of
          preventative care treatments like regular check-ups and cleanings.
        </p>
      </div>
      <div className="tab1 pt-16">
        <h1 className="blue text-3xl t-style-2	pb-6">
          How to Choose a General Dentist
        </h1>
        <p className="p-style-2">
          1. Qualifications: Make sure the dentist is board-certified and has
          good reviews.{" "}
        </p>
        <p className="p-style-2">
          2. Location: A conveniently located clinic will make regular visits
          easier.{" "}
        </p>
        <p className="p-style-2">
          3. Services Offered: Ensure that the dental office offers the range of
          services you and your family may need.
        </p>
        <p className="p-style-2">
          4. Insurance: Check if the dental practice accepts your insurance.
        </p>
      </div>
      <div className="tab1 pt-16">
        <h1 className="blue text-3xl t-style-2	pb-6">Eductional Videos</h1>
        <div className="grid grid-cols-2 gap-4">
          <video src={video1} controls className="w-full"></video>
          <video src={video2} controls className="w-full"></video>
          <video src={video3} controls className="w-full"></video>
          <video src={video4} controls className="w-full"></video>
        </div>
      </div>
    </section>
  );
};

export default ClearAlignersBaner;

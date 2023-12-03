import React from "react";
import aboutVideo from "../../../static/videos/about.mp4";

const WhyChooseUs = () => {
  return (
    <>
      <section className=" container mx-auto px-10 mb-40">
        <div className="w-full my-14">
          <video src={aboutVideo} className="w-full"></video>
        </div>
        <div className="lg:grid-cols-[35%_65%] grid-cols-[100%] contaier-grid gap-11 grid dpdc ">
          <div className="left">
            <div className="image">
              <img
                className="image lg:w-80 w-full"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1697918420/WhatsApp_Image_2023-10-22_at_01.49.06_80aa571f_oaukua.jpg"
                alt=""
              />
              <hr />
              <p className="text-center	pt-10 text-lg">
                The Late Dr Pav Bhogal
                <br /> 03/07/1992 to 16/08/2023 <br />
                <b>Age 31</b>
              </p>
            </div>
            <div className="cardlist">
              <img
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1697922260/icons8-inverted-commas-48_rxeuf2.png"
                alt=""
              />
              <h5>
                Honoring a Visionary, <br />
                Building a Legacy
              </h5>
            </div>
            <div className="box-cin">
              <h4>Our Mission:</h4>
              <p>
                - To provide exceptional dental care using the latest technology
                and research.
              </p>
              <p>- To promote oral health education and awareness.</p>
              <p>
                -To create a welcoming and compassionate environment for our
                patients.
              </p>
              <p>
                - To expand access to dental services for underserved
                communities.
              </p>
              <p>-To conduct research and contribute</p>
            </div>
          </div>

          <div className="right">
            <div class="intro">
              <div className="introduction">
                <h4>Introduction</h4>
                <p className="text-lg py-2.5 text-justify lg:pr-24 pr-0 pb-16">
                  In memory of the late Pavan Bhogal, a visionary entrepreneur
                  whose life was tragically cut short, we present a remarkable
                  opportunity to invest in a project that not only fulfills his
                  dreams but also serves as a lasting tribute to his vision. The
                  Pavan Bhogal Memorial Dental Clinic aspires to become the
                  largest and most innovative dental healthcare
                </p>
              </div>
              <div className="dilog lg:grid-cols-[50%_50%] grid-cols-[100%] contaier-grid gap-11 grid py-2.5">
                <div className="dilog-1">
                  <h4>Pavan Bhogal: A Visionary Healer</h4>
                  <p>
                    Pavan Bhogal, a passionate advocate for dental healthcare,
                    had a vision to revolutionize the field of dentistry. His
                    dreams were grounded in a deep commitment to improving oral
                    health and overall well-being for people worldwide. His
                    journey began with a strong educational foundation in
                    dentistry, and his aspirations were further fueled by a
                    compassionate heart, an innovative spirit, and an unwavering
                    determination to make a difference.
                    <br /> <br /> <br />
                    Pavan's life was a testament to his commitment to his
                    community and his dedication to providing accessible, high-
                    quality dental care. He dreamed of opening a dental clinic
                    that would not only excel in providing cutting-edge dental
                    treatments but would also prioritize patient comfort and
                    experience.
                  </p>
                  <br />
                  <br /> <br />
                  <h4>The Vision Lives On</h4>
                  <p>
                    Tragically, Pavan's life was cut short before he could
                    realize his dream. However, we believe that his vision
                    should not remain unfulfilled. The Pavan Bhogal Memorial
                    Dental Clinic aims to carry forward his legacy.
                  </p>
                </div>
                <div className="dilog-1">
                  <h4>Pavan Bhogal's Commitment to Healthcare Innovation</h4>
                  <p>
                    In addition to his dedication to dental healthcare, Pavan
                    Bhogal's legacy also includes his contributions to enhancing
                    healthcare infrastructure. As a co-founder of Mars Purifier,
                    he supplied Warwickshire County Council with cutting-edge
                    air purifiers, ensuring that communities had access to clean
                    and fresh air, especially during the challenging times of
                    the COVID- 19 pandemic.
                    <br /> <br /> <br />
                    His commitment to healthcare innovation also encompassed
                    supporting NHS dental practices, NHS spirometry facilities,
                    and NHS abortion clinics. He understood the importance of
                    accessible and high-quality healthcare services for all, and
                    his contributions to these critical healthcare sectors
                    exemplify his dedication to improving people's lives through
                    innovation and compassion.
                    <br /> <br /> <br />
                    The Pavan Bhogal Memorial Dental Clinic is an embodiment of
                    his holistic approach to healthcare, striving to provide not
                    only advanced dental services but also contributing to the
                    broader healthcare ecosystem, just as Pavan had envisioned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;

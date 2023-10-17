import React from "react";
import "../styles/global.css"
import Layout from "../components/global/Layout";
import PageHeader from "../components/global/PageHeader";
import DynamicSeo from "../components/global/DynamicSeo";

const Vacancies = () => {
  return (
    <Layout>
      <PageHeader pageTitle="Vacancies" />
      <div className="mainteb">
        <div className="card-v">
          <div className="card-11">
            <h2>Apprentice Nurse</h2>
            <p>
              apprentice nurse works under the supervision of registered nurses
              and other healthcare professionals to provide basic patient care
              and support services. This role is designed to provide hands-on
              experience and training for individuals pursuing a career in
              nursing.
            </p>
            <a href="/contact">Apply Now</a>
          </div>
          <div className="card-11">
            <h2>Registered Nurse</h2>
            <p>
              Registered Nurse (RN) is a highly skilled healthcare professional
              responsible for providing and coordinating patient care in various
              healthcare settings. Registered Nurses assess patient health
              needs, develop and implement nursing care plans, and maintain
              medical records. They work closely with other healthcare
              professionals to ensure the well-being and recovery of patients.
            </p>
            <a href="/contact">Apply Now</a>
          </div>
          <div className="card-11">
            <h2>Apprentice Nurse</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              repellendus? Iusto debitis voluptatum velit impedit fuga,
              inventore cum nesciunt officiis unde tempora quasi, assumenda
              provident praesentium esse natus vero commodi.
            </p>
            <a href="/contact">Apply Now</a>
          </div>
          <div className="card-11">
            <h2>Apprentice Nurse</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              repellendus? Iusto debitis voluptatum velit impedit fuga,
              inventore cum nesciunt officiis unde tempora quasi, assumenda
              provident praesentium esse natus vero commodi.
            </p>
            <a href="/contact">Apply Now</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Vacancies;

export const Head = () => (
  <DynamicSeo
    title="Our Dental Vacancies | Stay Informed with Parish Dental Updates"
    description="Stay informed about the latest dental Vacancies."
  />
);

import React from "react";
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

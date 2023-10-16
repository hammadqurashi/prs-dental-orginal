import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const TeamCard = ({ image, name, position, gdc, gmc }) => {
  return (
    <div>
      <div className="rounded overflow-hidden">
        <GatsbyImage image={image} alt={name} />
      </div>
      <div className="my-5 text-center ">
        <h4 className="text-primary font-medium text-2xl mb-3">{name}</h4>
        <p className="text-secondary tracking-[0.2em] uppercase text-xs font-medium mb-1">
          {position}
        </p>

        {gdc && gdc !== "" && (
          <p className="text-sm text-gray-600">GDC: {gdc}</p>
        )}
        {gmc && gmc !== "" && (
          <p className="text-sm text-gray-600">GMC: {gmc}</p>
        )}
      </div>
    </div>
  );
};

export default TeamCard;

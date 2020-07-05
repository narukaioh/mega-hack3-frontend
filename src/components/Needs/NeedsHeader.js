import React from "react";
import "./needs.scss";

export const NeedsHeader = ({ content }) => {
  const { image, name, description } = content;
  return (
    <div className="needs-item-header">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

import React from "react";
import "./address.scss";

export const Address = ({ content: { address } }) => {
  const { street, number, cep, neighborhood, city, state } = address
  return (
    <div className="address-container">
      <p>{street}, {number}</p>
      <p>CEP: {cep} | {neighborhood}</p>
      <p>{city} - {state}</p>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
const API_URL = "http://localhost:3005/api/products";

export const ProductDetails = ({ details }) => {
  return (
    <div className="details-parent">
      <div className="details-container">
        <div className="images">
          <a href="/">back to products</a>
          <img src={`${API_URL}/${details.img_path}`} alt="" />
        </div>
        <div className="discription">
          <h2> {details.title} </h2>
          <p>{details.category} </p>
          <p>{details.price} </p>
          <p> {details?.details?.description} </p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

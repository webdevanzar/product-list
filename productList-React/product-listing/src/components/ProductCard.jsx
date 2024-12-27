import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import axios from "axios";
const API_URL = "http://localhost:3005/api/products";

export const ProductCard = ({ fetchDetails }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios(API_URL);
      setProducts(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="parent">
      {products.map((data) => {
        return (
          <div
            className="product-container"
            key={data.id}
            onClick={() => fetchDetails(data.id)}
          >
            <div className="image">
              <img src={`${API_URL}/${data.img_path}`} alt="image" />
            </div>
            <div className="dicription">
              <h2> {data.title} </h2>
              <p>{data.category}</p>
              <p>{data.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

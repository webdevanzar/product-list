import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:3005/api/products";
import { ProductCard } from "./components/ProductCard";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  const [details, setDetails] = useState([]);

  const navigate = useNavigate();

  const fetchDetails = async (id) => {
    try {
      const response = await axios(API_URL, {
        params: {
          id: id,
        },
      });
      setDetails(response.data);
      navigate("/details");
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <header>
        <h1>Our Products</h1>
      </header>

      <section className="product-section">
        <Routes>
          <Route
            path="/"
            element={<ProductCard fetchDetails={fetchDetails} />}
          />
          <Route
            path="/details"
            element={<ProductDetails details={details} />}
          />
        </Routes>
      </section>
    </>
  );
}

export default App;

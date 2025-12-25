import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const GroceryPage = () => {
  const [products, setProducts] = useState([]);

  async function getData() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log("failed to fetch products", error);
    }
  }
  async function handleDelete(id) {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      setProducts(products.filter((item) => item.id !== id));
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2 className="products">Products</h2>
      {products.map((item) => (
        <div
          key={item.id}
          style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
        >
          <h3>Name:{item.title}</h3>
          <h3>Price:{item.price}</h3>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100px", height: "100px" }}
          />
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default GroceryPage;

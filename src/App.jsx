import React, { useState } from "react";
import ProductList from "./ProductList.jsx";
import AboutUs from "./AboutUs.jsx";
import "./index.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button onClick={() => setShowProductList(true)}>Get Started</button>
          </div>
          <AboutUs />
        </div>
      ) : (
        <ProductList onHomeClick={() => setShowProductList(false)} />
      )}
    </div>
  );
}

export default App;

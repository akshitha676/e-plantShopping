import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartSlice.jsx";
import CartItem from "./CartItem.jsx";

function ProductList({ onHomeClick }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const [added, setAdded] = useState({});

  const totalCount = cart.reduce((a, c) => a + c.quantity, 0);

  const plantsArray = [
    {
      category: "Indoor Plants",
      plants: [
        { name: "Peace Lily", cost: 300, image: "/images/peace.jpg" },
        { name: "Snake Plant", cost: 250, image: "/images/snake.jpg" },
      ],
    },
    {
      category: "Succulents",
      plants: [
        { name: "Aloe Vera", cost: 200, image: "/images/aloe.jpg" },
        { name: "Jade Plant", cost: 220, image: "/images/jade.jpg" },
      ],
    },
    {
      category: "Flowering Plants",
      plants: [
        { name: "Rose", cost: 350, image: "/images/rose.jpg" },
        { name: "Orchid", cost: 450, image: "/images/orchid.jpg" },
      ],
    },
  ];

  const addToCart = plant => {
    dispatch(addItem(plant));
    setAdded(prev => ({ ...prev, [plant.name]: true }));
  };

  if (showCart) return <CartItem back={() => setShowCart(false)} />;

  return (
    <div>
      <header>
        <button onClick={() => setShowCart(true)}>Cart ({totalCount})</button>
        <button onClick={onHomeClick}>Home</button>
      </header>

      {plantsArray.map(cat => (
        <div key={cat.category}>
          <h2>{cat.category}</h2>
          <div style={{ display: "flex", gap: "20px" }}>
            {cat.plants.map(p => (
              <div key={p.name}>
                <img src={p.image} width="100" alt={p.name} />
                <h4>{p.name}</h4>
                <p>₹{p.cost}</p>
                <button disabled={added[p.name]} onClick={() => addToCart(p)}>
                  {added[p.name] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

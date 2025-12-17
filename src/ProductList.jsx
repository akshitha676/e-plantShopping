import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items); // Access global cart
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const plantsArray = [ /* your plants array */ ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <div className="navbar">
        <div onClick={() => setShowCart(true)}>
          Cart ({totalQuantity})
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map(category => (
            <div key={category.category}>
              <h2>{category.category}</h2>
              <div className="plants-container">
                {category.plants.map(plant => (
                  <div key={plant.name} className="plant-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p>{plant.cost}</p>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;

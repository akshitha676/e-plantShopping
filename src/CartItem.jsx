import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () =>
    cart.reduce((total, item) => total + parseFloat(item.cost.substring(1)) * item.quantity, 0).toFixed(2);

  const handleIncrement = item => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));

  const handleDecrement = item => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem({ name: item.name }));
    }
  };

  const handleRemove = item => dispatch(removeItem({ name: item.name }));

  const calculateTotalCost = item => (parseFloat(item.cost.substring(1)) * item.quantity).toFixed(2);

  const handleCheckoutShopping = e => alert('Functionality to be added for future reference');

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map(item => (
        <div className="cart-item" key={item.name}>
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <div>{item.name}</div>
            <div>{item.cost}</div>
            <div>
              <button onClick={() => handleDecrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)}>+</button>
            </div>
            <div>Subtotal: ${calculateTotalCost(item)}</div>
            <button onClick={() => handleRemove(item)}>Remove</button>
          </div>
        </div>
      ))}
      <div>
        <button onClick={onContinueShopping}>Continue Shopping</button>
        <button onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;

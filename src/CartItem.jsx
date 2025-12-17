import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove } from "./CartSlice.jsx";

function CartItem({ back }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () =>
    cart.reduce((total, item) => total + item.cost * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.name}>
            <img src={item.image} width="80" alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.cost}</p>
            <div>
              <button onClick={() => dispatch(decrease(item.name))}>-</button>
              {item.quantity}
              <button onClick={() => dispatch(increase(item.name))}>+</button>
            </div>
            <p>Subtotal: ₹{item.cost * item.quantity}</p>
            <button onClick={() => dispatch(remove(item.name))}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ₹{calculateTotalAmount()}</h3>
      <button onClick={back}>Continue Shopping</button>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
    </div>
  );
}

export default CartItem;

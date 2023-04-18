import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p>Order Summary:</p>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - {item.quantity} x ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <div className="checkout-total">
            <p>
              Total: <span>${calculateTotalPrice().toFixed(2)}</span>
            </p>
          </div>
          <p>Enter your payment details and shipping address to complete the order.</p>
          {/* Add payment and shipping form */}
        </>
      )}
    </div>
  );
};

export default Checkout;

import React from "react";
import "./Cart.css";

const CartItem = ({ item, onRemoveFromCart, onAddtoCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-info product-actions">
        <h3>{item.title}</h3>
        <p>
          Price: <span>${item?.price.toFixed(2)}</span>
        </p>
        <p>
          Quantity: <span>{item.quantity}</span>
        </p>
        <button onClick={() => onRemoveFromCart(item)}>-</button>
         <span>{item.quantity}</span>
              <button onClick={() => onAddtoCart(item)}>+</button>
      </div>
    </div>
  );
};

export default CartItem;

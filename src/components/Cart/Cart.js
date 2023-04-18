import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart,addToCart } from "../../redux/actions/cartActions";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemoveFromCart={handleRemoveFromCart}
            onAddtoCart={handleAddToCart}
          />
        ))
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <p>
            Total: <span>${calculateTotalPrice().toFixed(2)}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;

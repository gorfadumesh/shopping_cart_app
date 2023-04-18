import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import './ProductList.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const getProductQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h4>{product.title}</h4>
        <p>${product.price}</p>
        <div className="product-actions">
          {getProductQuantity(product.id) > 0 ? (
            <>
              <button onClick={() => handleRemoveFromCart(product)}>-</button>
              <span>{getProductQuantity(product.id)}</span>
              <button onClick={() => handleAddToCart(product)}>+</button>
            </>
          ) : (
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

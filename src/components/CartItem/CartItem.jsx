import React, { useContext } from 'react';
import { GlobalCartContext } from '../../App';
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { changeQty, removeItem } = useContext(GlobalCartContext);
  const calculatedPrice = item.price - (item.price * (item.discount / 100));

  return (
    <div className="basket-row-item animate-fade-up">
      <img src={item.image} alt={item.name} className="basket-item-thumbnail" />
      <div className="basket-item-info">
        <h4>{item.name}</h4>
        <span className="basket-item-unit-cost">${calculatedPrice.toFixed(2)}</span>
      </div>
      <div className="basket-item-qty-controls">
        <button className="qty-control-btn" onClick={() => changeQty(item.id, -1)}><FiMinus /></button>
        <span className="qty-value-display">{item.quantity}</span>
        <button className="qty-control-btn" onClick={() => changeQty(item.id, 1)}><FiPlus /></button>
      </div>
      <div className="basket-item-subtotal-panel">
        <span>${(calculatedPrice * item.quantity).toFixed(2)}</span>
        <button className="basket-item-delete-btn" onClick={() => removeItem(item.id)}><FiTrash2 /></button>
      </div>
    </div>
  );
};

export default CartItem;
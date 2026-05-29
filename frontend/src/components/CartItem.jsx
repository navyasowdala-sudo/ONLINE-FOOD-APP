
import React from "react";

function CartItem({ item, removeFromCart, increaseQty, decreaseQty }) {
  return (
    <div className="cart-item">
      {/* Food Image */}
      <img
        src={item.image}
        alt={item.name}
        className="cart-image"
      />

      {/* Food Details */}
      <div className="cart-details">
        <h3>{item.name}</h3>

        <p>Price: ₹{item.price}</p>

        <div className="quantity-box">
          <button onClick={() => decreaseQty(item.id)}>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => increaseQty(item.id)}>
            +
          </button>
        </div>

        <h4>
          Total: ₹{item.price * item.quantity}
        </h4>

        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
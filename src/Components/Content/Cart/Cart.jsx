import React from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartItems are=", cartItems);

  return (
    <div className="container mt-5">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{item.title}</h5>
                <p>
                  Price: ${item.price} | Quantity: {item.quantity}
                </p>
              </div>
              <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./cartSlice";
import { toast, ToastContainer } from "react-toastify";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartItems are=", cartItems);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); // Dispatch remove action
    toast.warn("Succesfully removed from cart!");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <>
      <div className="container mt-5" style={{ minHeight: "450px" }}>
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>The cart is empty.</p>
        ) : (
          <>
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
                  <div>
                    <span className="me-3">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <h3>
                Grand Total: <span>${totalPrice.toFixed(2)}</span>
              </h3>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

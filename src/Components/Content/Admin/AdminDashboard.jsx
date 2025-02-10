import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { Product } from "./../ProductCategory/Product";

export const AdminDashboard = () => {
  // const count = useSelector((state) => state.counter.value);
  const [isActive, setisActive] = useState(null);
  return (
    <div style={{ minHeight: "450px" }}>
      <Link
        to="category"
        style={{ color: "black", textDecoration: "none" }}
        onClick={() => setisActive("category")}
      >
        <button
          type="button"
          class={
            isActive === "category"
              ? "text-center m-1 mb-4 btn btn-primary"
              : "text-center m-1 mb-4 btn btn-light"
          }
        >
          Categories
        </button>
      </Link>
      <Link
        to="products"
        style={{ color: "black", textDecoration: "none" }}
        onClick={() => setisActive("products")}
      >
        <button
          type="button"
          class={
            isActive === "products"
              ? "text-center m-1 mb-4 btn btn-primary"
              : "text-center m-1 mb-4 btn btn-light"
          }
        >
          Products
        </button>
      </Link>

      <Outlet />
    </div>
  );
};

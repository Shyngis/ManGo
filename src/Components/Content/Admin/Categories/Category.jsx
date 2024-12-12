import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Category = () => {
  const [isActive, setisActive] = useState(null);
  return (
    <div style={{ minHeight: "450px" }}>
      <Link
        to="maincategory"
        style={{ color: "black", textDecoration: "none" }}
        onClick={() => setisActive("mainCategory")}
      >
        <button
          type="button"
          class={
            isActive === "mainCategory"
              ? "text-center m-1 mb-4 btn btn-primary"
              : "text-center m-1 mb-4 btn btn-light"
          }
        >
          Main Category
        </button>
      </Link>
      <Link
        to="subcategory"
        style={{ color: "black", textDecoration: "none" }}
        onClick={() => setisActive("subCategory")}
      >
        <button
          type="button"
          class={
            isActive === "subCategory"
              ? "text-center m-1 mb-4 btn btn-primary"
              : "text-center m-1 mb-4 btn btn-light"
          }
        >
          Sub category
        </button>
      </Link>

      <Outlet />
    </div>
  );
};

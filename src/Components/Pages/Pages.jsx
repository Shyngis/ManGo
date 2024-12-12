import React from "react";
import { Header } from "./../Header/Header";
import { Primary } from "../Content/Primary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FirstCategory } from "../Content/ProductCategory/FirstCategory";
import { Product } from "../Content/ProductCategory/Product";
import { ProductDetails } from "../Content/ProductCategory/ProductDetails";
import { ProtectedRoute } from "../Header/Auth/ProtectedRoute";
import { AdminDashboard } from "../Content/Admin/AdminDashboard";
import { Search } from "../Header/Search";
import { Cart } from "../Content/Cart/Cart";
import { Footer } from "../Footer/Footer";
import Popup from "./Popup";
import { Category } from "../Content/Admin/Categories/Category";
import { Products } from "../Content/Admin/Product/Products";
import { mainCategory } from "../Content/Admin/Categories/mainCategory";
import { subCategory } from "../Content/Admin/Categories/subCategory";

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Popup />
        <Routes>
          <Route path="/" Component={Primary} />
          <Route path="search" Component={Search} />
          <Route path="cart" Component={Cart} />
          <Route path="mango/:id" Component={FirstCategory} />
          <Route path="mango/:id/product/:brand" Component={Product}></Route>
          <Route
            path="mango/:id/product/:brand/productdetails/:productId"
            Component={ProductDetails}
          />
          <Route path="search/:productId" Component={ProductDetails} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          >
            <Route path="category" Component={Category}>
              <Route path="maincategory" Component={mainCategory} />
              <Route path="subcategory" Component={subCategory} />
            </Route>
            <Route path="products" Component={Products} />
          </Route>
          ;
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

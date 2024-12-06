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

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Primary} />
          <Route path="search" Component={Search} />
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
          />
          ;
        </Routes>
      </Router>
    </>
  );
};

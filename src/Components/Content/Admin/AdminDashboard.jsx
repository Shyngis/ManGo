import React from "react";
import { useSelector } from "react-redux";

export const AdminDashboard = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div style={{ minHeight: "450px" }}>
      <h2>Admin Dashboard</h2>
      <p>Welcome to the secure admin dashboard!</p>
    </div>
  );
};

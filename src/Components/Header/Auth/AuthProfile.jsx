import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "./authSlice";

export const AuthProfile = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    // localStorage.removeItem("isAuthenticated");
    // setIsAuthenticat(false);
    dispatch(logout());
  };
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fa-solid fa-user"></i>
        <span style={{ marginLeft: "0.7vw" }}>Admin</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li>
          <a class="dropdown-item" href="#">
            <i class="fa-solid fa-gear"></i>
            <span style={{ marginLeft: "0.7vw" }}>Settings</span>
          </a>
        </li>
        <li onClick={handleLogout}>
          <a class="dropdown-item">
            <i class="fa-solid fa-right-from-bracket"></i>
            <span style={{ marginLeft: "0.7vw" }}>Log out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

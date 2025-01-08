import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./authSlice";
import { useTranslation } from "react-i18next";

export const AuthProfile = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const handleLogout = () => {
    // localStorage.removeItem("isAuthenticated");
    // setIsAuthenticat(false);
    dispatch(logout());
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fa-solid fa-user"></i>
        <span style={{ marginLeft: "0.7vw" }}>
          {isAuthenticated === "admin" ? t("ADMIN") : t("USER")}
        </span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li>
          <a class="dropdown-item" href="#">
            <i class="fa-solid fa-gear"></i>
            <span style={{ marginLeft: "0.7vw" }}>{t("SETTINGS")}</span>
          </a>
        </li>
        <li onClick={handleLogout}>
          <a class="dropdown-item">
            <i class="fa-solid fa-right-from-bracket"></i>
            <span style={{ marginLeft: "0.7vw" }}>{t("LOGOUT")}</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

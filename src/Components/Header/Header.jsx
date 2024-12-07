import React from "react";
import "./Header.css";
import { Login } from "./Auth/Login";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthProfile } from "./Auth/AuthProfile";
import { useTranslation } from "react-i18next";
import { Counter } from "./../../Counter/Counter";

export const Header = () => {
  const [query, setQuery] = useState("");
  console.log("query zapros is=", query);
  const navigate = useNavigate();

  const checkStatus = localStorage.getItem("isAuthenticated");
  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search", { state: { query } });
  };

  const [isAuthenticated, setIsAuthenticated] = useState(checkStatus);

  const ChangeTheme = () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    // setisMode(isDarkMode ? "dark" : "light");
    setisMode(localStorage.getItem("theme"));
  };

  const [isMode, setisMode] = useState(localStorage.getItem("theme"));
  console.log("ismode is=", isMode);

  window.onload = () => {
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const languages = [
    { name: "english", code: "eng" },
    { name: "русский", code: "ru" },
    { name: "қазақша", code: "kaz" },
  ];

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to={`/`}>
            ManGo
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  {t("HOME")}
                </a>
              </li>

              <li>
                <form class="d-flex" onSubmit={handleSearch}>
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder={t("SEARCH")}
                    aria-label="Search"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button class="btn btn-outline-success" type="submit">
                    {t("SEARCH")}
                  </button>
                </form>
              </li>
            </ul>
            <Link to="cart" style={{ color: "black", textDecoration: "none" }}>
              <div style={{ marginRight: "2vw", fontSize: "18px" }}>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </Link>
            <div>
              <select
                class="form-select"
                style={{ width: "auto" }}
                aria-label="Default select example"
                value={i18n.language} // Bind to the current language
                onChange={(e) => changeLanguage(e.target.value)} // Handle language change
              >
                {languages.map((lang) => (
                  <option value={lang.code}>{lang.name}</option>
                ))}
              </select>
            </div>

            <Counter />

            <div
              onClick={ChangeTheme}
              style={{ marginRight: "2vw", marginLeft: "2vw" }}
            >
              <i
                style={{ color: "black", cursor: "pointer", fontSize: "20px" }}
                class={
                  isMode === "light" ? "fa-solid fa-moon" : "fa-regular fa-sun"
                }
              ></i>
            </div>
            {isAuthenticated ? (
              <AuthProfile setIsAuthenticat={setIsAuthenticated} />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

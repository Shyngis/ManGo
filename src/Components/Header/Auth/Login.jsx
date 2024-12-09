import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./authSlice";

export const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const closeModalButtonRef = useRef(null); // Ref for the close button
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple credential check
    if (user === "admin" && password === "admin123") {
      setError("");
      // Save login state in local storage or context for real apps
      // localStorage.setItem("isAuthenticated", true); // Mock authentication
      // Trigger the close button click
      // setIsAuthent(true);
      dispatch(login());
      closeModalButtonRef.current.click();

      // navigate("/admin/dashboard");
      // navigate(0);
    } else {
      setError("Invalid email or password");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="loginEmail" class="form-label">
          {t("EMAIL_ADDRESS")}
        </label>
        <input
          type="text"
          class="form-control"
          id="loginEmail"
          placeholder={t("ENTER_EMAIL")}
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="loginPassword" class="form-label">
          {t("PASSWORD")}
        </label>
        <div className="d-flex">
          <input
            type={showPassword ? "text" : "password"}
            class="form-control"
            id="loginPassword"
            placeholder={t("ENTER_PASSWORD")}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
          >
            <i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
          </button>
        </div>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="rememberMe" />
        <label class="form-check-label" for="rememberMe">
          {t("REMEMBER")}
        </label>
        {error && <p className="text-danger">{error}</p>}
      </div>
      <button type="submit" class="btn btn-primary w-100">
        {t("LOGIN")}
      </button>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        ref={closeModalButtonRef} // Attach the ref here
        style={{ display: "none" }} // Hide this button, it's only used programmatically
      ></button>
    </form>
  );
};

export const RegisterForm = () => {
  return (
    <div
      class="show active"
      id="register"
      role="tabpanel"
      aria-labelledby="register-tab"
    >
      <h3 class="text-center mb-4">Register</h3>
      <form>
        <div class="mb-3">
          <label for="registerName" class="form-label">
            Full Name
          </label>
          <input
            type="text"
            class="form-control"
            id="registerName"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="registerEmail" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="registerEmail"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="registerPassword" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="registerPassword"
            placeholder="Create a password"
            required
          />
        </div>
        <div class="mb-3">
          <label for="registerConfirmPassword" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            id="registerConfirmPassword"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export const Login = () => {
  const [login, setLogin] = useState(true);
  // var myModal = document.getElementById("exampleModal");
  // var myInput = document.getElementById("exampleInput");
  const { t, i18n } = useTranslation();
  return (
    <div className="login">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {t("LOGIN")}
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                class="tab-pane fade show active"
                id="login"
                role="tabpanel"
                aria-labelledby="login-tab"
              >
                <button
                  class={
                    login === true
                      ? "text-center m-1 mb-4 btn btn-primary"
                      : "text-center m-1 mb-4 btn btn-secondary"
                  }
                  onClick={() => setLogin(true)}
                >
                  {t("LOGIN_SYSTEM")}
                </button>
                <button
                  class={
                    login === false
                      ? "text-center m-1 mb-4 btn btn-primary"
                      : "text-center m-1 mb-4 btn btn-secondary"
                  }
                  onClick={() => setLogin(false)}
                >
                  {t("SIGN_UP")}
                </button>
                {login && <LoginForm />}
                {!login && <RegisterForm />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

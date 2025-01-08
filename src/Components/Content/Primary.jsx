import React from "react";
import { mango } from "../../data";
import "./Primary.css";
import { Link, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

export const Primary = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // <Link to={`/mango/${item.id}`}></Link>;
  return (
    <>
      <div
        id="carouselExampleInterval"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="7000">
            <img
              src="https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg"
              style={{ height: "20vw", objectFit: "contain" }}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="7000">
            <img
              src="https://kaspi.kz/img/Phone.png"
              style={{ height: "20vw", objectFit: "contain" }}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="7000">
            <img
              src="https://www.apple.com/v/watch/bk/images/meta/watch-gps-lte__f3xmp4zpdka6_og.png"
              style={{ height: "20vw", objectFit: "contain" }}
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <h2>
          {t("WELCOME")}
          <span style={{ color: "blue" }}>
            <Typewriter
              words={["ManGo", t("BIGGEST_SHOP"), t("DREAM_PRICES")]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={3000}
            />
          </span>
        </h2>
      </div>
      <div className="row mt-4">
        {mango.map((item) => (
          <div
            class="card col-3 col-xl-2 m-2"
            onClick={() => navigate(`mango/${item.id}`, { state: item.id })}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "220px" }}
            >
              <img src={item.image} class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="card-text b-text">{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

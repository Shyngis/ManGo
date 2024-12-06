import React from "react";
import { mango } from "../../data";
import "./Primary.css";
import { Link, useNavigate } from "react-router-dom";

export const Primary = () => {
  const navigate = useNavigate();

  // <Link to={`/mango/${item.id}`}></Link>;
  return (
    <>
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

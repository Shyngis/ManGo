import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Search = () => {
  const location = useLocation();
  const query = location.state.query;
  const navigate = useNavigate();

  const [Searchinfo, setSearchinfo] = useState([]);
  console.log("queryinf is=", query);
  useEffect(() => {
    console.log("wuery comes=", location.state.query);

    fetch("https://dummyjson.com/products/search?q=" + query)
      .then((res) => res.json())
      .then((data) => {
        setSearchinfo(data.products);
        console.log("inf iner=", data);
      });
  }, [query]);

  return (
    <div className="container py-4">
      <div className="row">
        {Searchinfo.map((product) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={product.id}
            onClick={() => navigate(`${product.id}`)}
          >
            <div className="card h-100">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p
                  className="card-text"
                  style={{ height: "60px", overflow: "hidden" }}
                ></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Primary.css";
import { Loading } from "../../Services/Loading";

export const Product = () => {
  const location = useLocation();
  const item = location.state;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("data=", data);

  useEffect(() => {
    // Fetch data from API when component mounts
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((response) => response.json()) // Convert response to JSON
      .then((jsonData) => {
        setData(jsonData.products); // Set data into state
        setLoading(false); // Mark loading as complete
        console.log("jsondata=", jsonData.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading on error
      });
  }, []);
  return (
    <div className="row mt-4">
      {loading ? (
        <Loading />
      ) : (
        data
          .filter((ice) => ice.brand === item)
          .map((item) => (
            <div
              class="card col-3 col-xl-2 m-2"
              onClick={() => navigate(`productdetails/${item.id}`)}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "220px" }}
              >
                <img
                  src={item.images[0]}
                  class="card-img-top"
                  style={{
                    maxHeight: "200px",
                    maxWidth: "120px",
                    objectFit: "contain",
                  }}
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-text b-text">{item.title}</h5>
              </div>
            </div>
          ))
      )}
    </div>
  );
};

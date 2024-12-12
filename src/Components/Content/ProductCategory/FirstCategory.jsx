import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { smartphoneBrands } from "../../../data";
import "/src/Components/Content/Primary.css";
import { Loading } from "../../Services/Loading";
export const FirstCategory = () => {
  const location = useLocation();
  const item = location.state;
  const navigate = useNavigate();
  const filteredBrands = smartphoneBrands.filter((th) => th.productId === item);
  const [showLoading, setShowLoading] = useState(true);
  const [showNoData, setShowNoData] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
      setShowNoData(true);
    }, 3000);
  }, []);

  // const params = useParams();
  // <div>FirstCategory's id:{params.id}</div>;
  // <div>FirstCategory's id:{item}</div>;
  //  {
  //    mangoFirstCategory
  //      .filter((ite) => ite.productId === item)
  //      .map((disp) => <p>{disp.title}</p>);
  //  }
  // console.log(mangoFirstCategory.filter((ite) => ite.productId === item));

  return (
    <>
      <div className="row mt-4" style={{ minHeight: "450px" }}>
        {showLoading && filteredBrands.length === 0 && <Loading />}
        {showNoData && filteredBrands.length === 0 && <p>No data</p>}
        {filteredBrands.length > 0 &&
          filteredBrands.map((item) => (
            <div
              class="card col-3 col-xl-2 m-2"
              onClick={() =>
                navigate(`product/${item.brand}`, { state: item.brand })
              }
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "220px" }}
              >
                <img
                  src={item.image}
                  style={{
                    maxHeight: "200px",
                    maxWidth: "120px",
                    objectFit: "contain",
                  }}
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-text b-text">{item.brand}</h5>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

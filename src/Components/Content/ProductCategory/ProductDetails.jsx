import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { Loading } from "../../Services/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Cart/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ProductDetails = () => {
  // const location = useLocation();
  // console.log(location.state);
  const params = +useParams().productId;
  const navigate = useNavigate();

  console.log("id is=", params);
  console.log("typeof id is=", typeof params);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(data.map((it) => it.title));
  console.log("data are=", data);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Check if the product is already in the cart
  const isInCart = cartItems.some((item) => item.id === params);

  const handleToggleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(params));
      toast.warn("Removed from cart!");
    } else {
      dispatch(addToCart(data));
      toast.success("Added to cart!");
    }
  };

  useEffect(() => {
    // Fetch data from API when component mounts
    fetch(`https://dummyjson.com/products/${params}`)
      .then((response) => response.json()) // Convert response to JSON
      .then((jsonData) => {
        setData(jsonData); // Set data into state
        setLoading(false); // Mark loading as complete
        console.log("jsondata.products=", jsonData.products);
        console.log("jsondata=", jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading on error
      });
  }, []);

  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div class="container mt-5">
        {loading ? (
          <Loading />
        ) : (
          data && (
            <>
              <div class="row">
                <div class="col-md-6">
                  <div
                    id="productImagesCarousel"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src={data.images[0]}
                          class="d-block w-100"
                          alt="iPhone 5s Image 1"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={data.images[1]}
                          class="d-block w-100"
                          alt="iPhone 5s Image 2"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={data.images[2]}
                          class="d-block w-100"
                          alt="iPhone 5s Image 3"
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#productImagesCarousel"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#productImagesCarousel"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div class="col-md-6">
                  <h1 class="display-6">{data.title}</h1>
                  <h4 class="text-success">
                    {data.price}
                    <span class="text-muted">
                      <del>
                        $
                        {(
                          (data.price * 100) /
                          (100 - data.discountPercentage)
                        ).toFixed(2)}
                      </del>
                    </span>{" "}
                    <span class="badge bg-success">
                      {data.discountPercentage} OFF
                    </span>
                  </h4>
                  <p class="text-muted">
                    Category: {data.category} | Brand: {data.brand}
                  </p>
                  <p>
                    <strong>Availability:</strong> {data.availabilityStatus}
                  </p>
                  <p>
                    <strong>Rating:</strong> {data.rating}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.description}
                  </p>

                  <h5>Product Details:</h5>
                  <ul>
                    <li>
                      <strong>SKU:</strong> {data.sku}
                    </li>
                    <li>
                      <strong>Stock:</strong> {data.stock}
                    </li>
                    <li>
                      <strong>Minimum Order Quantity:</strong>
                      {data.minimumOrderQuantity}
                    </li>
                    <li>
                      <strong>Dimensions:</strong> Width:{" "}
                      {data.dimensions.width}, Height: {data.dimensions.height},
                      Depth: {data.dimensions.depth}
                    </li>
                    <li>
                      <strong>Weight:</strong> {data.weight}
                    </li>
                    <li>
                      <strong>Warranty:</strong> {data.warrantyInformation}
                    </li>
                    <li>
                      <strong>Return Policy:</strong> {data.returnPolicy}
                    </li>
                    <li>
                      <strong>Shipping Information:</strong>{" "}
                      {data.shippingInformation}
                    </li>
                  </ul>

                  <button
                    className={`btn ${isInCart ? "btn-danger" : "btn-primary"}`}
                    onClick={handleToggleCart}
                  >
                    {isInCart ? "Remove from Cart" : "Add to Cart"}
                  </button>
                  <button class="btn btn-outline-secondary">
                    Add to Wishlist
                  </button>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-12">
                  <h5>Product Metadata:</h5>
                  <p>
                    <strong>Barcode:</strong> {data.meta.barcode}
                  </p>
                  <p>
                    <strong>QR Code:</strong>{" "}
                    <a href={data.meta.qrCode} target="_blank">
                      View QR Code
                    </a>
                  </p>
                  <p>
                    <strong>Created At:</strong> {data.meta.createdAt}
                  </p>
                  <p>
                    <strong>Updated At:</strong> {data.meta.updatedAt}
                  </p>
                </div>
              </div>
            </>
          )
        )}
      </div>
      <ToastContainer />
    </>
  );
};

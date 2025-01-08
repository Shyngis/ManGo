import React, { useState, useEffect } from "react";

const Popup = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.getItem("isAuthenticated") === "admin") {
        setShowModal(false);
      } else {
        setShowModal(true);
      } // Show the modal after 1 minute (60000 ms)
    }, 3000); // 60000 ms = 1 minute

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // console.log(typeof localStorage.getItem("isAuthenticated"));

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div>
      {/* Bootstrap Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`} // Control modal visibility
        style={{
          display: showModal ? "block" : "none",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }} // Ensure modal is shown when `showModal` is true
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!showModal}
        onClick={handleCloseModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-center w-100"
                id="exampleModalLabel"
              >
                Жаңа жылдық науқандар!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <img src="https://ecco.kz/img/684_8917_400x254.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

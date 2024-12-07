import React, { useState, useEffect } from "react";

const Popup = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true); // Show the modal after 1 minute (60000 ms)
    }, 30000); // 60000 ms = 1 minute

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div>
      {/* Bootstrap Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`} // Control modal visibility
        style={{ display: showModal ? "block" : "none" }} // Ensure modal is shown when `showModal` is true
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Welcome to our Website!
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
              <p>This popuPopupears 1 minute after you open the website.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

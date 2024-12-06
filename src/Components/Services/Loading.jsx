import React from "react";
import { DNA } from "react-loader-spinner";
export const Loading = () => {
  return (
    <div
    // className="d-flex justify-content-center align-items-center"
    // style={{ height: "100vh" }}
    >
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

import React from "react";

const FullScreenSpinner = ({ isLoading = false }) => (
  <>{isLoading && <div className="loading" />}</>
);

export default FullScreenSpinner;

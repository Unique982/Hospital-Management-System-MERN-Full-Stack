import React from "react";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    window.location.href = "http://localhost:5173/login";
    return null;
  }
  return children;
};

export default ProtectedRoute;

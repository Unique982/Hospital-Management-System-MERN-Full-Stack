import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import { Provider } from "react-redux";
import store from "store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="admin/*" element={<AdminLayout />} />

        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Provider>
  );
};

export default App;

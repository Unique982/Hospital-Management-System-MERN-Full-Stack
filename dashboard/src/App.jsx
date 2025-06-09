import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import Setting from "views/admin/setting";
import Blog from "views/admin/blog";
import AddBlog from "views/admin/blog";

const App = () => {
  return (
    <Routes>
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;

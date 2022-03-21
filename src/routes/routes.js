import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
);

export default AppRoutes;

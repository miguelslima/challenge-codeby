import React from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles/global";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

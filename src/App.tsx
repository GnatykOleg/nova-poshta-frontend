import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PagesRoutes from "./PagesRoutes/PagesRoutes";

const App: React.FC = () => {
  return (
    <>
      <PagesRoutes />
      <ToastContainer />
    </>
  );
};

export default App;

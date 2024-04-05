import React from "react";
import Navbar from "../widgets/navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "../widgets/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <MainRoutes />

      <Footer />
    </div>
  );
};

export default App;

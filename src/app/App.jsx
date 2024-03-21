import React from "react";
import Navbar from "../widgets/navbar/Navbar";
import MainRoute from "./routes/MainRoute";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoute />
    </div>
  );
};

export default App;

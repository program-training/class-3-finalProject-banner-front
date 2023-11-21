import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  return (
    <>
      <CssBaseline >
          <Header />
          <MainContainer />
          <Footer />
      </CssBaseline>
    </>
  );
}

export default App;

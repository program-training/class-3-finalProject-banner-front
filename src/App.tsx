import "./App.css";
import HelloWorld from "./components/TestHelloWorld/TestHelloWorld";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AddNewRecommendedBanner from "./components/AddNewRecommendedBanner/AddNewRecommendedBanner";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/addNewRec" element={<AddNewRecommendedBanner />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/HelloWorld" element={<HelloWorld />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

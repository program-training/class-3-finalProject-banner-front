import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AddNewRecommendedBanner from "./components/RecomendedBanners/AddNewRecommendedBanner/AddNewRecommendedBanner";
import GetRecBannersInfo from "./components/RecomendedBanners/GetRecBannersInfo/GetRecBannersInfo";
import HomeRecommended from "./components/RecomendedBanners/HomeRecommended/HomeRecommended";
import HomeBanners from "./components/Banners/HomeBanners/HomeBanners";
import RenderFromEdit from "./components/Banners/HookFormEdit/RenderFormEdit";
import AddNewBanner from "./components/Banners/AddNewBanner/AddNewBanner";
import GetBannerInfo from "./components/Banners/GetBannerInfo/GetBannerInfo";
import GetBannerIframe from "./components/GetBannerIframe/GetBannerIframe";
function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter basename="/banner">
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/homeRecommended" element={<HomeRecommended />} />
            <Route path="/homeBanners" element={<HomeBanners />} />
            <Route path="/addNewBanner" element={<AddNewBanner />} />
            <Route path="/getBannerInfo/:id" element={<GetBannerInfo />} />
            <Route path="/recBannerInfo/:id" element={<GetRecBannersInfo />} />
            <Route path="/addNewRec" element={<AddNewRecommendedBanner />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/editBanner/:id" element={<RenderFromEdit/>} />
            <Route path="/api/getBanner" element={<GetBannerIframe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

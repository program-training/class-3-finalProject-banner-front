import styles from "./Home.module.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RecommendedBox from "../RecomendedBanners/RecommendedBox/RecommendedBox";
import BannersBox from "../Banners/BannersBox/BannersBox";
import './Home.module.css'
export default function Home() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    console.log(user?.isConnected);
    !user?.isConnected && navigate("/login");
  }, [navigate, user?.isConnected]);

  return (
    <div className={styles.homeContainer}>
      <RecommendedBox />
      <BannersBox />
    </div>
  );
}

import styles from "./Home.module.css";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GetRecommendedBanners from "../GetRecommendedBanners/GetRecommendedBanners";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

export default function Home() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    console.log(user?.isConnected);
    !user?.isConnected && navigate("/login");
  }, [navigate, user?.isConnected]);

  return (
    <div className={styles.context}>
      <h1>Home</h1>
      <Link to={"/addNewRec"}>
        <IconButton
          aria-label="add to rec banners"
          size="large"
          color="primary"
        >
          <LibraryAddIcon fontSize="inherit" />
        </IconButton>
      </Link>
      <GetRecommendedBanners />
    </div>
  );
}

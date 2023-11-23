import styles from "./Home.module.css";
import SignIn from "../Login/SignIn";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import HelloWorld from "../TestHelloWorld/TestHelloWorld";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import 

export default function Home() {
  
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    console.log(user?.isConnected);
    !(user?.isConnected) && navigate('/login')
  }, [navigate, user?.isConnected])
  
  return (
    <div className={styles.context}>
      <h1>Home</h1>
      <HelloWorld/>
      <GetAllBanners />
    </div>
  );
}

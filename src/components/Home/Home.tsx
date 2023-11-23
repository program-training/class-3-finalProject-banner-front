import styles from "./Home.module.css";
<<<<<<< HEAD
import SignIn from "../Login/SignIn";
import Popup from "../Popup/Popup";
import GetAllBanners from "../Banner/GetAllBanners/GetAllBanners";
=======
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import HelloWorld from "../TestHelloWorld/TestHelloWorld";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GetAllBanners from "../Banner/GetAllBanners";
>>>>>>> 487169212043091b329f1578ab5d905d3f4b2e36

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
<<<<<<< HEAD
      <Popup>
        <SignIn />
      </Popup>
=======
      <HelloWorld/>
>>>>>>> 487169212043091b329f1578ab5d905d3f4b2e36
      <GetAllBanners />
    </div>
  );
}

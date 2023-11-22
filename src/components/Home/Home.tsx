import styles from "./Home.module.css";
import SignIn from "../Login/SignIn";
import Popup from "../Popup/Popup";

export default function Home() {
  return (
    <div className={styles.context}>
      <h1>Home</h1>
      <Popup>
        <SignIn/>
      </Popup>
    </div>
  );
}

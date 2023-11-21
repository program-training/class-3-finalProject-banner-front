import { Outlet } from "react-router-dom";
import styles from "./MainContainer.module.css";

export default function MainContainer() {
  return (
    <div className={styles.mainContainer}>
      <Outlet />
    </div>
  );
}

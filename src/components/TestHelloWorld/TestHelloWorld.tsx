// import styles from "./TestHelloWorld.module.css";
import axios from "axios";
import { useState } from "react";
export default function HelloWorld() {
  const [getFromData, setGetFromData] = useState(null);

  const handelClick = async () => {
    try {
      
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/hello`);
      setGetFromData(response.data);
    } catch (error) {
      console.error("error to fetch data", error);
    }
  };
  return (
    <div>
      <button onClick={handelClick}>
        Click to show!
        <p>----- Response -----</p>
        <p>{getFromData}</p>
      </button>
    </div>
  );
}

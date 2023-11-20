import axios from "axios";
import { useState } from "react";

const AddNewRecommendedBanner = () => {
  const [newBannerData, setNewBannerData] = useState({
    _id: "",
    image: {
      url: "",
      alt: "",
    },
    text: "",
    createdAt: new Date(),
    author: "",
  });
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = async () => {
    try {
      setIsClicked(true);
      const res = await axios.post(
        "http://localhost:8181/api/banners",
        newBannerData
      );
      if (res.status < 300 && res.status >= 200) {
        const createdBanner = res.data;
        setNewBannerData(createdBanner);
      } else {
        console.log("error fetching data", res.status);
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <div>
      {!isClicked && <button onClick={handleClick}>Add New Banner</button>}
    </div>
  );
};

export default AddNewRecommendedBanner;

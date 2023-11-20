import { useState, useEffect } from "react";
import axios from "axios";

interface RecommendedBannersProps {
  id: string;
  image: string;
  text: string;
  alt: string;
}

const RecommendedBanners = () => {
  const [recommendedBanners, setRecommendedBanners] = useState<
    RecommendedBannersProps[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8181/api/recommendedBanners"
        );
        if (res.status < 300 && res.status >= 200) {
          const data = res.data;
          setRecommendedBanners(data);
        } else {
          console.log("error fetching data", res.status);
        }
      } catch (err) {
        console.error(err);
        throw err;
      }
    };
    fetchData();
  }, []);

  const handleClick = async (bannerId: string) => {
    try {
      await axios.delete(
        `http://localhost:8181/api/recommendedBanners/${bannerId}`
      );
      setRecommendedBanners((prevBanners) =>
        prevBanners.filter((banner) => banner.id !== bannerId)
      );
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <div>
      {recommendedBanners.map((banner) => (
        <div key={banner.id}>
          <img src={banner.image} alt={banner.alt} />
          <p>{banner.text}</p>
          <button onClick={() => handleClick(banner.id)}>Delete Banner</button>
        </div>
      ))}
    </div>
  );
};

export default RecommendedBanners;

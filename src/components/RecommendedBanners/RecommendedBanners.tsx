import axios from "axios";
import { useFetch } from "../../utils/useFetch";
const RecommendedBanners = () => {
  const { recommendedBanners, setRecommendedBanners } = useFetch(
    "/api/recommendedBanners"
  );

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
          <p>{banner.name}</p>
          <p>{banner.description}</p>
          <p>{banner.category}</p>
          <img src={banner.image.url} alt={banner.image.alt} />
          <button onClick={() => handleClick(banner.id)}>Delete Banner</button>
        </div>
      ))}
    </div>
  );
};

export default RecommendedBanners;

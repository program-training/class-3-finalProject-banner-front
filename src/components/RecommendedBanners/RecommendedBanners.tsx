import axios from "axios";
import { useFetch } from "../../utils/useFetch";
import { Link } from "react-router-dom";

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
        prevBanners.filter((banner) => banner.recProductId !== bannerId)
      );
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <div>
      {recommendedBanners.map((banner) => (
        <div key={banner.recProductId}>
          <Link to={""} state={banner}>
            <p>{banner.name}</p>
            <p>{banner.description}</p>
            <p>{banner.category}</p>
            <img src={banner.image.url} alt={banner.image.alt} />
            <p>{banner.createdAt.toLocaleString()}</p>
            <p>{banner.author}</p>
            <button onClick={() => handleClick(banner.recProductId)}>
              Delete Banner
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecommendedBanners;

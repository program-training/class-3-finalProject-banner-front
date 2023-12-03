import GetRecommendedBanners from "../GetRecommendedBanners/GetRecommendedBanners";
import AddButton from "../AddButton/AddButton";
import "./HomeRecommended.css";
export default function HomeRecommended() {
  return (
    <div className="homePageRecommended">
      <div className="addButton">
        <AddButton />
      </div>
      <div className="cardsRec">
        <GetRecommendedBanners />
      </div>
    </div>
  );
}

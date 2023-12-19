import GetRecommendedBanners from "../GetRecommendedBanners/GetRecommendedBanners";
import AddButton from "../AddButton/AddButton";
import "./HomeRecommended.css";
// import Father from "../GraphTriger/father";
import Test from "../../GraphTriger/ChartDelete";
export default function HomeRecommended() {
  return (
    <div className="homePageRecommended">
      <div className="addButton">
        <AddButton />
      </div>
      <div className="cardsRec">
        <GetRecommendedBanners />
      </div>
      {/* <div className="charts">
        < Test/>
      </div> */}
    </div>
  );
}

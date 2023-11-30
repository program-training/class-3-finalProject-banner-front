import GetAllBanners from "../GetAllBanners/GetAllBanners";
import PlusIcon from "../PlusIcon/PlusIcon";
import "./HomeBanners.css";

export default function HomeBanners() {
  return (
    <div className="homePageBanners">
      <div className="PlusIcon">
        <PlusIcon />
      </div>
      <div className="cardsBanner">
        <GetAllBanners />
      </div>
    </div>
  );
}

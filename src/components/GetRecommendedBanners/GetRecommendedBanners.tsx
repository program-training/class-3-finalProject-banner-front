import axios from "axios";
import {  useFetchRecBanners } from "../../utils/useFetchRecBanners";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const GetRecommendedBanners = () => {

  const { recommendedBanners, setRecommendedBanners } = useFetchRecBanners(
    "/recommended/recProducts"

  );

  const handleClick = async (bannerId: string) => {
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/recommended/recProducts/${bannerId}`
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
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={banner.image.url}
                title={banner.image.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {banner.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {banner.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {banner.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {banner.createdAt.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {banner.author}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => handleClick(banner.recProductId)}
                >
                  Delete Banner
                </Button>
              </CardActions>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GetRecommendedBanners;

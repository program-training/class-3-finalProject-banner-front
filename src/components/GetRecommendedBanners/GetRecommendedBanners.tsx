import './GetRecommendedBanners.css';
import axios from "axios";
import {  useFetchRecBanners } from "../../utils/useFetchRecBanners";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';

const GetRecommendedBanners = () => {

  const { recommendedBanners, setRecommendedBanners } = useFetchRecBanners(
    "/api/recommended/recProducts"
  );

  const handleClick = async (bannerId: string) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this banner?"
    );

    if (shouldDelete) {
      try {
        await axios.delete(
          `${
            import.meta.env.VITE_BASE_URL_API_RENDER
          }/api/recommended/recProduct/${bannerId}`
        );
        setRecommendedBanners((prevBanners) =>
          prevBanners.filter((banner) => banner._id !== bannerId)
        );
        toast.success('Banner deleted successfully!');
      } catch (err) {
        toast.error('Failed to delete the banner.');
        throw err;
      }
    }
  };

  const handleClickStop = (event: React.MouseEvent) => {
    event.preventDefault()
  }

  return (
    <div className="cardsRacContainer">
      {recommendedBanners.map((banner) => (
        <div key={banner._id}>
          <Link to={`/recBannerInfo/${banner._id}`} state={banner}>
          <Card sx={{ maxWidth: 345, margin: '15px', borderRadius: '20px', boxShadow: '0 0 10px gray' }}>
              <CardMedia
                sx={{ height: 150 }}
                image={banner.image.medium}
                title={banner.image.alt}
              />
              <CardContent >
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
              <CardActions sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                <IconButton  onClick={(event) => {
                    handleClick(banner._id);
                    handleClickStop(event);
                  }}
                  color= 'error' size='large'>
                <DeleteIcon />
                <ToastContainer />
                </IconButton>
              </CardActions>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GetRecommendedBanners;

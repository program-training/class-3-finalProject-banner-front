import './GetRecBannersInfo.css'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useFetchRecBanners } from "../../utils/useFetchRecBanners";
import { useParams, useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const GetRecBannersInfo = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { recBannerById } = useFetchRecBanners(
    `/api/recommended/recProductsById/${params.id}`
  );

  const { setRecommendedBanners } = useFetchRecBanners(
    "/api/recommended/recProducts"
  )
  
  const handleClick =async () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this banner?"
    );
    if (shouldDelete) {
      try {
        await axios.delete(
          `${
            import.meta.env.VITE_BASE_URL_API_RENDER
          }/api/recommended/recProduct/${params.id}`
        );
        setRecommendedBanners((prevBanners) =>
          prevBanners.filter((banner) => banner._id !== params.id)
        );
        toast.success('Banner deleted successfully!');
        setTimeout(() => navigate('/'), 6000);
      } catch (err) {
        toast.error('Failed to delete the banner.');
        throw err;
      }
    }
  }

  return (
    <div className="cardRecPage">
      <Card sx={{ width: 800, height: 400 , border: '2px solid black', display: 'flex', flexDirection: 'row', boxShadow: '0 0 10px gray'}}>
        <CardMedia
          sx={{ height: 400 , width: 400, backgroundColor: '#d4d6c3'}}
          image={recBannerById?.image.medium}
          title={recBannerById?.image.alt}
        />
        <CardContent sx={{display: 'flex' , flexDirection: 'column',justifyContent: 'center' , alignItems: 'center', width: 400}}>
          <Typography gutterBottom variant="h5" component="div">
            {recBannerById?.name}
            <hr />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recBannerById?.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recBannerById?._id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recBannerById?.salePrice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recBannerById?.quantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recBannerById?.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recBannerById?.discountPercentage}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recBannerById?.createdAt.toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recBannerById?.author}
          </Typography>
          <IconButton onClick={handleClick} color= 'error' size='large'>
              <Delete fontSize='inherit'/>
              <ToastContainer />
          </IconButton>
        </CardContent>
      
      </Card>
    </div>
  );
};

export default GetRecBannersInfo;

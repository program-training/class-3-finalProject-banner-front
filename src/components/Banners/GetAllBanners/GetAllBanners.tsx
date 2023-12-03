import { useFetchBanners } from "../../../utils/useFetchBanners";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from "react-router-dom";
import './GetAllBanners.css'
export default function GetAllBanners() {
  const navigate = useNavigate()

  const { allBanners, setAllBanners } = useFetchBanners(
    `/api/banners/allBanners`
  );

  const skeletonBoxes = Array.from({ length: 8 }, () => (
    <Box sx={{ width: 220, marginRight: 4, marginTop: 0, my: 4 }}>
      <Skeleton variant="rectangular" width={220} height={140} />
      <Skeleton animation="wave" width={120} height={60} />
      <Skeleton animation="wave" width={150} height={16} />
      <Skeleton animation="wave" width={150} height={16} />
      <Skeleton animation="wave" width={150} height={16} />
      <Skeleton animation="wave" width={150} height={16} />
      <Skeleton variant="rounded" width={220} height={55} />
    </Box>
  ));

  const handleDeleteClick = async (bannerId: string) => {
    try {

      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/api/banners/banner/${bannerId}`
      );
      setAllBanners((prevBanners) =>
        prevBanners.filter((banner) => banner._id !== bannerId)
      );
      toast.success("Banner deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Error deleting banner");
      throw err;
    }
  };

  const handleClickPrevent = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div className="bannerStyle">
      {allBanners.length > 0 ? (
      allBanners.map((banner) => (
        <Link key={banner._id} to={`/getBannerInfo/${banner._id}`} state={banner}>
          <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
            <Card sx={{ width: 345, margin: 5}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ height: 140 }}
                  image={banner.image.url}
                  alt={banner.image.alt}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="h1"
                  >
                    {banner.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                  >
                    {banner.createdAt && banner.createdAt.toString()}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="p"
                  >
                    {banner.author}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <IconButton
                    onClick={(event) => {
                      handleClickPrevent(event);
                      handleDeleteClick(banner._id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                <Button onClick={(event) => {handleClickPrevent(event),  navigate(`/editBanner/${banner._id}`)}}>Edit </Button>
                <ToastContainer />
              </CardActions>
            </Card>
          </Box>
        </Link>
      ))
      ) : (
        <Grid container wrap="wrap-reverse">
          {skeletonBoxes}
        </Grid>
      )}
    </div>
  );
}

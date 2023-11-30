import { useFetchBanner } from "../../utils/useFetchBanners";
import Box from "@mui/material/Box";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { Link } from "react-router-dom";

export default function GetAllBanners() {
  const { allBanners, setAllBanners } = useFetchBanner(
    `${import.meta.env.VITE_BASE_URL_API_RENDER}/api/banners`
  );

  const handelDeleteClick = async (bannerId: string) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL_API_RENDER}/api/banners/${bannerId}`
      );
      setAllBanners((prevBanners) =>
        prevBanners.filter((banner) => banner._id !== bannerId)
      );
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleEditClick = async (bannerId: string) => {
    console.log(bannerId);
  };

  return (
    <div>
      {allBanners.map((banner) => (
        <Link to={""} state={banner}>
          <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
            <Card sx={{ maxWidth: 345 }}>
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
                    component="p"
                  >
                    {banner.createdAt.toString()}
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
                <IconButton onClick={() => handelDeleteClick(banner._id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => handleEditClick(banner._id)}>
                  <EditIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        </Link>
      ))}
    </div>
  );
}

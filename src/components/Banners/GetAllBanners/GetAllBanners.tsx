import { useFetchBanners } from "../../../utils/useFetchBanners";
import Box from "@mui/material/Box";
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
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import DialogEdit from "../DialogEdit/DialogEdit";
import { toast, ToastContainer } from "react-toastify";

export default function GetAllBanners() {
  const [open, setOpen] = useState(false);
  const [selectedBannerId, setSelectedBannerId] = useState("");
  const { allBanners, setAllBanners } = useFetchBanners(
    `/api/banners/allBanners`
  );

  const skeletonBoxes = Array.from({ length: 8 }, (_, index) => (
    <Box key={index} sx={{ width: 220, marginRight: 4, marginTop: 0, my: 4 }}>
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

  const handleClickOpen = (bannerId: string) => {
    setOpen(true);
    setSelectedBannerId(bannerId);
  };

  const handleClickPrevent = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      {allBanners.length > 0 ? (
        allBanners.map((banner) => (
          <Link key={banner._id} to={`/getBannerInfo/${banner._id}`}>
            <Box
              sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}
            >
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
                  <Button
                    onClick={(event) => {
                      handleClickOpen(banner._id);
                      handleClickPrevent(event);
                    }}
                  >
                    Edit{" "}
                  </Button>
                  <DialogEdit
                    _id={banner._id}
                    url={banner.url}
                    image={{
                      url: banner.image.url,
                      alt: banner.image.alt,
                    }}
                    title={banner.title}
                    text={banner.text}
                    createdAt={banner.createdAt}
                    author={banner.author}
                    category={banner.category}
                    open={open}
                    setOpen={setOpen}
                  />
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

import { useFetchBanner } from "../../../utils/useFetchBanners";
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
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import DialogEdit from "../DialogEdit/DialogEdit";
export default function GetAllBanners() {

  const [open, setOpen] = useState(false);
  const [selectedBannerId, setSelectedBannerId] = useState("");
  console.log(selectedBannerId)

  const { allBanners, setAllBanners } = useFetchBanner(
    `/api/banners/allBanners`
  );

  const skeletonBoxes = Array.from({ length: 8 }, () => (
    <Box  sx={{ width: 220, marginRight:4,marginTop: 0, my:4 }}>
      <Skeleton variant="rectangular" width={220} height={140} />
      <Skeleton animation="wave"  width={120} height={60}/>
      <Skeleton animation="wave"  width={150} height={16}/>
      <Skeleton animation="wave"  width={150} height={16}/>
      <Skeleton animation="wave"  width={150} height={16}/>
      <Skeleton animation="wave"  width={150} height={16}/>
      <Skeleton variant="rounded" width={220} height={55} />
    </Box>
  ));

  
  const handelDeleteClick = async (bannerId: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL_API_RENDER}/api/banners/${bannerId}`);
      setAllBanners((prevBanners) =>
        prevBanners.filter((banner) => banner._id !== bannerId)
      );
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleClickOpen = (bannerId: string) => {
    setOpen(true)
    setSelectedBannerId(bannerId)

  const handleClickPrevent = (event: React.MouseEvent) => {
    event.preventDefault();
  }
  
  return (
    <div>
      {allBanners.length > 0 ? (
      allBanners.map((banner) => (
        <Link to={`/getBannerInfo/${banner._id}`} state={banner}>
          <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ height: 140 }}
                  image={banner.image.medium}
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
                <Button onClick={(event) => {handleClickOpen(banner._id); handleClickPrevent(event)}}>Edit </Button>
                <DialogEdit 
                  _id={banner._id}
                  url={banner.url}
                  image={{
                    url: banner.image.medium,
                    alt: banner.image.alt
                  }}
                  title={banner.title}
                  text={banner.text}
                  createdAt={banner.createdAt}
                  author={banner.author}
                  category={banner.category}   
                  open={open}
                  setOpen={setOpen} 
                  />
              </CardActions>
            </Card>
          </Box>
        </Link>
      ))
      ) : (
        <Grid container wrap="wrap-reverse">
          {skeletonBoxes}
        </Grid>
      )
    }
    </div>
  );
}

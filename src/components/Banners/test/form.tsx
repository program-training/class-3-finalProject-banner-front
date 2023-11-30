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
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import { BannersInterFace } from "../../../utils/interfaces";

export default function GetAllBanners() {

  const [open, setOpenDialog] = useState(false);
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

  const [urlValue, setUrlValue] = useState('')
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
    setOpenDialog(true);
    setSelectedBannerId(bannerId);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };


  const handleClickPrevent = (event: React.MouseEvent) => {
    event.preventDefault();
  }


  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setUrlValue(event.target.value as string);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, bannerId: string) => {
    const data = new FormData(event.currentTarget);

    const editBanner: BannersInterFace = {
      _id: data.get('id')?.toString() || '',
      url: data.get('Url')?.toString() || '',
      category: data.get('category')?.toString() || '',
      image: {
        medium: data.get('image_url')?.toString() || '',
        alt: data.get('image_alt')?.toString() || '',
      },
      text: data.get('text')?.toString() || '',
      title: data.get('title')?.toString() || '',
      createdAt: new Date,
      author: data.get('author')?.toString() || '',
    };
    console.log(editBanner);
    try {
         await axios.put(
        `${import.meta.env.VITE_BASE_URL_API_RENDER}/api/banners/banner/${bannerId}`, editBanner)
        setAllBanners((arr) => {
          return arr.map(banner => banner._id === editBanner._id ? editBanner : banner);
        });
          console.log("secses")
    }
    catch(err) {
      handleClose();
      console.log("error")
      throw err;
      
    }

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
                <IconButton onClick={() => handelDeleteClick(banner._id)}>
                  <DeleteIcon />
                </IconButton>
                <Button  onClick={(event) => {handleClickOpen(banner._id); handleClickPrevent(event)}}>Edit </Button>
                
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
    <Dialog  open={open} onClose={handleClose}   aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description" onClick={(event:React.MouseEvent) => {handleClickPrevent(event)}}>
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
            <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
            </DialogContentText>
            <TextField
                    autoFocus
                    margin="dense"
                    id="id"
                    label="id"
                    type="text"
                    fullWidth
                    onChange={handleChange}
                />
       </DialogContent>
       <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary" onClick={(event) => {handleSubmit(event, selectedBannerId)}}>
              Submit
            </Button>
        </DialogActions>
    </Dialog>
    </div>
  );
}


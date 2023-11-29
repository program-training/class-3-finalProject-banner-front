import React, { useState } from "react";
import "./GetRecommendedBanners.css";
import axios from "axios";
import { useFetchRecBanners } from "../../../utils/useFetchRecBanners";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardActionArea, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const GetRecommendedBanners = () => {
  const { recommendedBanners, setRecommendedBanners } = useFetchRecBanners(
    "/api/recommended/recProducts"
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

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBannerId, setSelectedBannerId] = useState("");

  const handleClick = (bannerId: string) => {
    setOpenDialog(true);
    setSelectedBannerId(bannerId);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedBannerId("");
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_BASE_URL_API_RENDER
        }/api/recommended/recProduct/${selectedBannerId}`
      );
      setRecommendedBanners((prevBanners) =>
        prevBanners.filter((banner) => banner._id !== selectedBannerId)
      );
      toast.success("Banner deleted successfully!");
      handleDialogClose();
    } catch (err) {
      toast.error("Failed to delete the banner.");
      handleDialogClose();
      throw err;
    }
  };

  const handleClickStop = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div className="cardsRacContainer">
          {recommendedBanners.length > 0 ? (
            recommendedBanners.map((banner) => (
              <div key={banner._id}>
                <Link to={`/recBannerInfo/${banner._id}`} state={banner}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      margin: "15px",
                      borderRadius: "20px",
                      boxShadow: "0 0 10px gray",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        sx={{ height: 150 }}
                        image={banner.image.medium}
                        title={banner.image.alt}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {banner.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          description: {banner.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          category: {banner.category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          created by: {banner.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          at: {banner.createdAt.toLocaleString()}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconButton
                        onClick={(event) => {handleClick(banner._id); handleClickStop(event)}}
                        color="error"
                        size="large"
                      >
                        <DeleteIcon />
                      </IconButton>
                      <ToastContainer />
                    </CardActions>
                  </Card>
                </Link>
              </div>
            ))
          ) : (
            <Grid container wrap="wrap-reverse">
              {skeletonBoxes}
            </Grid>
      )}

      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Banner?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this banner?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleDialogClose} color="primary">
            Back
          </IconButton>
          <IconButton onClick={handleDelete} color="error">
            OK
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default GetRecommendedBanners;


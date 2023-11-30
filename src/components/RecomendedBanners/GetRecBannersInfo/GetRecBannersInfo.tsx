import { useState } from "react";
import "./GetRecBannersInfo.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useFetchRecBanners } from "../../../utils/useFetchRecBanners";
import { useParams, useNavigate } from "react-router-dom";
import Delete from "@mui/icons-material/Delete";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const GetRecBannersInfo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const { recBannerById } = useFetchRecBanners(
    `/api/recommended/recProductsById/${params.id}`
  );

  const { setRecommendedBanners } = useFetchRecBanners(
    "/api/recommended/recProducts"
  );

  const handleClick = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/recommended/recProduct/${params.id}`
      );
      setRecommendedBanners((prevBanners) =>
        prevBanners.filter((banner) => banner._id !== params.id)
      );
      toast.success("Banner deleted successfully!");
      setTimeout(() => navigate("/"), 6000);
    } catch (err) {
      toast.error("Failed to delete the banner.");
      throw err;
    }
  };

  return (
    <div className="cardRecPage">
      <Card
        sx={{
          width: 1100,
          height: 400,
          display: "flex",
          flexDirection: "row",
          boxShadow: "0 0 10px gray",
        }}
      >
        <CardMedia
          sx={{
            height: 400,
            width: 550,
            backgroundColor: "#d4d6c3",
          }}
          image={recBannerById?.image.medium}
          title={recBannerById?.image.alt}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 400,
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {recBannerById?.name}
            <hr />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            description: {recBannerById?.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            price: {recBannerById?.salePrice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            quantity: {recBannerById?.quantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            category: {recBannerById?.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            discountPercentage: {recBannerById?.discountPercentage}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            created by: {recBannerById?.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            at: {recBannerById?.createdAt.toLocaleString()}
          </Typography>
          <IconButton onClick={handleClick} color="error" size="large">
            <Delete fontSize="inherit" />
            <ToastContainer />
          </IconButton>
        </CardContent>
      </Card>

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

export default GetRecBannersInfo;

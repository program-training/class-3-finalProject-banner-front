import axios from "axios";
import { useFetchRecBanners } from "../../../utils/useFetchRecBanners";
import { ProductInterface } from "../../../utils/interfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, IconButton } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./AddNewRecommendedBanner.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const AddNewRecommendedBanner = () => {
  const { products } = useFetchRecBanners("/recommended/allProducts");

  const skeletonBoxes = Array.from({ length: 7 }, () => (
    <Box
      sx={{
        width: 180,
        padding: 0,
        marginRight: 0.5,
        marginLeft: 0.5,
        marginTop: 0,
        my: 0,
      }}
    >
      <Skeleton variant="rectangular" width={160} height={120} />
      <Skeleton animation="wave" width={120} height={70} />
      <Skeleton animation="wave" width={150} height={20} />
      <Skeleton animation="wave" width={150} height={20} />
      <Skeleton animation="wave" width={150} height={20} />
      <Skeleton animation="wave" width={150} height={20} />
      <Skeleton animation="wave" width={150} height={20} />
      <Skeleton animation="wave" width={150} height={20} />
      <Skeleton variant="rounded" width={180} height={55} />
    </Box>
  ));

  const handleProductClick = async (product: ProductInterface) => {
    try {
      const newBannerData = {
        _id: product._id,
        name: product.name,
        salePrice: product.salePrice,
        quantity: product.quantity,
        description: product.description,
        category: product.category,
        discountPercentage: product.discountPercentage,
        image: {
          large: product.image.large,
          medium: product.image.medium,
          small: product.image.small,
          alt: product.image.alt,
        },
        createdAt: new Date(),
        author: "ari",
      };
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/recommended/recProduct`,
        newBannerData
      );

      if (res.status < 300 && res.status >= 200) {
        const createdBanner = res.data;
        console.log("Banner created:", createdBanner);
        toast.success("Banner created successfully!");
      } else {
        console.log("Error creating banner", res.status);
        toast.error("Failed to create the rec banner.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="addNewBannerPage">
      {products.length > 0 ? (
        products.map((product) => (
          <Card
            key={product._id}
            sx={{
              maxWidth: 180,
              maxHeight: 450,
              margin: "15px",
              marginTop: "70px",
              borderRadius: "20px",
              boxShadow: "0 0 10px gray",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 140 }}
                image={product.image.medium}
                alt={product.image.alt}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ height: 60 }}
                >
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  price: ${product.salePrice}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  discountPercentage: {product.discountPercentage}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  quantity: {product.quantity}
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
              <IconButton>
                <AddCircleIcon
                  color="primary"
                  onClick={() => handleProductClick(product)}
                />
              </IconButton>
              <ToastContainer />
            </CardActions>
          </Card>
        ))
      ) : (
        <Grid container wrap="wrap-reverse">
          {skeletonBoxes}
        </Grid>
      )}
    </div>
  );
};
export default AddNewRecommendedBanner;

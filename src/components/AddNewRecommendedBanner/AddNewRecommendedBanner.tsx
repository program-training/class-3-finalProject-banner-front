import axios from "axios";
import { useFetchRecBanners } from "../../utils/useFetchRecBanners";
import { ProductInterface } from "../../utils/interfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const AddNewRecommendedBanner = () => {
  const { products } = useFetchRecBanners("/api/recommended/allProducts");

  const handleProductClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductInterface
  ) => {
    if (event) {
      event.preventDefault();
    }
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
        `${
          import.meta.env.VITE_BASE_URL_API_RENDER
        }/api/recommended/recProduct`,
        newBannerData
      );

      if (res.status < 300 && res.status >= 200) {
        const createdBanner = res.data;
        console.log("Banner created:", createdBanner);
      } else {
        console.log("Error creating banner", res.status);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="addNewBannerPage">
      {products.map((product) => (
        <Card key={product._id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ height: 140 }}
              image={product.image.medium}
              alt={product.image.alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
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
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={(event) => handleProductClick(event, product)}
            >
              Add New Banner
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
export default AddNewRecommendedBanner;

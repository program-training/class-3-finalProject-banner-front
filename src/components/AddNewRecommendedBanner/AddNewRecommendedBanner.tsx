import axios from "axios";
import { useFetch } from "../../utils/useFetchRecBanners";
import { ProductInterface } from "../../utils/interfaces";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const AddNewRecommendedBanner = () => {
  const { products } = useFetch(`${import.meta.env.BASE_URL}/api/products`);

  const handleProductClick = async (product: ProductInterface) => {
    try {
      const newBannerData = {
        id: product.recProductId,
        name: product.name,
        salePrice: product.salePrice,
        quantity: product.quantity,
        description: product.description,
        category: product.category,
        discountPercentage: product.discountPercentage,
        image: {
          url: product.image.url,
          alt: product.image.alt,
        },
        createdAt: product.createdAt,
        author: product.author,
      };
      const res = await axios.post(`${import.meta.env.BASE_URL}/api/banners`, newBannerData);
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
        <Card key={product.recProductId} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ height: 140 }}
              image= {product.image.url}
              alt= {product.image.alt}
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
            <Button size="small" color="primary" onClick={ () => handleProductClick(product) } >
              ADD New Banner
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
export default AddNewRecommendedBanner;

import { ProductInterface } from "../../utils/interfaces";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const DisplayingRecBanners = (banner: ProductInterface) => {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={banner.image.url}
            title={banner.image.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {banner.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {banner.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {banner.recProductId}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {banner.salePrice}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {banner.quantity}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {banner.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {banner.discountPercentage}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {banner.createdAt.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {banner.author}
            </Typography>
          </CardContent>
        </Card>
    </div>
  );
};

export default DisplayingRecBanners;

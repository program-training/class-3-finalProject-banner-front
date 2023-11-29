import { BannersInterFace } from "../../../utils/interfaces";
import Box from "@mui/material/Box";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const GetBannerInfo = (banner: BannersInterFace) => {
  return (
    <div>
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
              <Typography variant="body2" color="text.secondary" component="h1">
                {banner._id}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="h1">
                {banner.category}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="p">
                {banner.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="h1">
                {banner.text}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="h1">
                {banner.createdAt.toString()}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="h1">
                {banner.author}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};

export default GetBannerInfo;

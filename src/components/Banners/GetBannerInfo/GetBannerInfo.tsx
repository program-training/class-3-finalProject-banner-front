import Box from "@mui/material/Box";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useFetchBanners } from "../../../utils/useFetchBanners";
import { useParams } from "react-router-dom";

const GetBannerInfo = () => {
  const params = useParams();
  const { bannerById } = useFetchBanners(
    `/api/banners/bannerById/${params.id}`
  );
  console.log(params.id);
  console.log("banner by id", bannerById);

  return (
    <div>
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ height: 140 }}
              image={bannerById?.image.url}
              alt={bannerById?.image.alt}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" component="h1">
                {bannerById?._id}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="h1">
                {bannerById?.category}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="p">
                {bannerById?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="h1">
                {bannerById?.text}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="h1">
                {bannerById?.createdAt?.toLocaleString() ?? "N/A"}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="h1">
                {bannerById?.author}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};

export default GetBannerInfo;

import Box from "@mui/material/Box";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useFetchBanners } from "../../../utils/useFetchBanners";
import { useParams } from "react-router-dom";
import "./GetBannerInfo.css";
import { useQuery } from "@apollo/client";

const GetBannerInfo = () => {
  const params = useParams();
  console.log(params.id)
  const { bannerById } = useFetchBanners(
    `/banners/bannerById/${params.id}`
  );

//   const { data, error, loading } = useQuery(GET_BANNER_BY_ID, {
//     variables: { id }, // Pass the ID as a variable
//   });

//   console.log(id)
  

//   if (loading) {
//     return (
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//         <CircularProgress />
//       </div>
//     );
//   }
//   if (error) return <p>Error: {error.message}</p>;

//   const bannerById = data.getBannerById
//   console.log("aaa",bannerById)


  return (
    <div className="infoBanner">
      <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
        <Card sx={{ width: 800, height: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ height: 250 }}
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

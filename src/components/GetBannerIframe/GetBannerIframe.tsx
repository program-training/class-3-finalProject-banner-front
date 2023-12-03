import Box from "@mui/material/Box";
import { Card, CardMedia } from "@mui/material";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BannersInterFace } from "../../utils/interfaces";

export default function GetBannerIframe() {
  const [searchParams] = useSearchParams();

  const categoryName = searchParams.get("categoryName");
  const location = searchParams.get("location");

  const width = location === "top" ? "120px" : "500px";
  const height = location === "top" ? "500px" : "120px";
  const paddingLeft = location === "top" ? null : "0%";
  const padding = location === "top" ? "2%" : "10%";

  console.log(categoryName);
  console.log(location);

  const [banner, setBanner] = useState<BannersInterFace[] | undefined>();

  function shuffleAndSlice<T>(array: T[]): T[] {
    const shuffledArray = array.slice();
    const quantityAsNumber = 1;

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray.slice(0, quantityAsNumber);
  }

  const categoryNames = [
    "accessories",
    "appliances",
    "automotive",
    "babies",
    "fashionmen",
    "fashionwomen",
    "gadgets",
    "groceries",
    "healthandbeauty",
    "homeandliving",
    "pets",
    "schoolsupplies",
    "sportsandlifestyle",
    "toysandcollectibles",
  ];
  const oneCategory = shuffleAndSlice(categoryNames);

  useEffect(() => {
    const fetchBanners = async () => {
      const category = categoryName
        ? `?categoryName=${categoryName}`
        : `?categoryName=${oneCategory}`;

      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_BASE_URL_API_RENDER
          }/api/banners/banners${category}`
        );
        if (res.status < 300 && res.status >= 200) {
          const data = res.data;
          setBanner(data);
        } else {
          console.log("error fetching banners", res.status);
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    fetchBanners();
  }, [categoryName, oneCategory]);

  return (
    <Box sx={{ padding: padding, paddingLeft: paddingLeft }}>
      {banner && (
        <Link to={`${banner[0].url}`} state={banner}>
          <Card>
            <CardMedia
              sx={{
                height: `${width || "300px"}`,
                width: `${height || "80px"}`,
                transform: "translateZ(0px)",
                flexGrow: 1,
              }}
              component="img"
              image={banner[0].image.url}
              alt={banner[0].image.alt}
            />
          </Card>
        </Link>
      )}
    </Box>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import { ProductInterface } from "./interfaces";
import { VITE_BASE_URL } from "../env/env";

export const useFetchRecBanners = (url: string) => {
  const [recommendedBanners, setRecommendedBanners] = useState<
    ProductInterface[]
  >([]);
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const [recBannerById, setRecBannerById] = useState<ProductInterface>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${VITE_BASE_URL}${url}`);
        if (res.status < 300 && res.status >= 200) {
          const data = res.data;
          setRecommendedBanners(data);
          setRecBannerById(data);
          setProducts(data);
        } else {
          console.log("error fetching data", res.status);
        }
      } catch (err) {
        console.error(err);
        throw err;
      }
    };
    fetchData();
  }, [url]);

  return {
    recommendedBanners,
    setRecommendedBanners,
    products,
    setProducts,
    recBannerById,
    setRecBannerById,
  };
};

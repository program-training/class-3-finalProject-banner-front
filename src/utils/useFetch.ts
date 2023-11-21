import { useEffect, useState } from "react";
import axios from "axios";
import { ProductInterface } from "./interfaces";
import { BASE_URL } from "./consts";

export const useFetch = (url: string) => {
  const [recommendedBanners, setRecommendedBanners] = useState<
    ProductInterface[]
  >([]);
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}${url}`);
        if (res.status < 300 && res.status >= 200) {
          const data = res.data;
          setRecommendedBanners(data);
        } else {
          console.log("error fetching data", res.status);
        }
      } catch (err) {
        console.error(err);
        throw err;
      }
    };
    fetchData();
  }, []);

  return { recommendedBanners, setRecommendedBanners, products, setProducts };
};

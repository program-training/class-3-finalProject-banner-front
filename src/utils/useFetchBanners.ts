import { useEffect, useState } from "react";
import axios from "axios";
import { BannersInterFace } from "./interfaces";

export const useFetchBanner = (url: string) => {
  const [allBanners, setAllBanners] = useState<BannersInterFace[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(`${import.meta.env.BASE_URL}${url}`);
        if (res.status < 300 && res.status >= 200) {
          const data = res.data;
          setAllBanners(data);
        } else {
          console.log("error fetching banners", res.status);
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    fetchBanners();
  }, []);

  return { allBanners, setAllBanners };
};

import { useEffect, useState } from "react";
import axios from "axios";
import { BannersInterFace, CategoryInterface } from "./interfaces";
import { VITE_BASE_URL } from "../env/env";

export const useFetchBanners = (url: string) => {
  const [allBanners, setAllBanners] = useState<BannersInterFace[]>([]);
  const [bannerById, setBannerById] = useState<BannersInterFace>();
  const [allCategories, setAllCategories] = useState<CategoryInterface[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(`${VITE_BASE_URL}${url}`);
        if (res.status < 300 && res.status >= 200) {
          const data = res.data;
          setAllBanners(data);
          setAllCategories(data);
          setBannerById(data);
        } else {
          console.log("error fetching banners", res.status);
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    fetchBanners();
  }, [url]);

  return {
    allBanners,
    setAllBanners,
    allCategories,
    setAllCategories,
    bannerById,
    setBannerById,
  };
};

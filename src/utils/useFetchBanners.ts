import { useEffect, useState } from "react";
import axios from "axios";
import { BannersInterFace, CategoryInterface } from "./interfaces";

export const useFetchBanners = (url: string) => {
  const [allBanners, setAllBanners] = useState<BannersInterFace[]>([]);
  const [bannerById, setBannerById] = useState<BannersInterFace>();
  const [allCategories, setAllCategories] = useState<CategoryInterface[]>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}${url}`);
        if (res.status < 300 && res.status >= 200) {
          const data = res.data;
          setAllBanners(data);
          setBannerById(data);
          setAllCategories(data);
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

  return {
    allBanners,
    setAllBanners,
    bannerById,
    setBannerById,
    allCategories,
    setAllCategories,
  };
};

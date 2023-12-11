import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_BANNERS,
  GET_BANNER_BY_ID,
  GET_ALL_CATEGORIES,
} from "../graphql/bannerQueries";
import { BannersInterFace, CategoryInterface } from "./interfaces";

export const useFetchBanners = (url: string) => {
  const {
    loading: bannersLoading,
    error: bannersError,
    data: bannersData,
  } = useQuery(GET_BANNERS, {
    variables: { url },
  });

  const {
    loading: bannerByIdLoading,
    error: bannerByIdError,
    data: bannerByIdData,
  } = useQuery(GET_BANNER_BY_ID, {
    variables: { url },
  });

  const {
    loading: allCategoriesLoading,
    error: allCategoriesError,
    data: allCategoriesData,
  } = useQuery(GET_ALL_CATEGORIES, {
    variables: { url },
  });

  const [allBanners, setAllBanners] = useState<BannersInterFace[]>([]);
  const [bannerById, setBannerById] = useState<BannersInterFace>();
  const [allCategories, setAllCategories] = useState<CategoryInterface[]>([]);

  useEffect(() => {
    if (!bannersLoading && !bannersError && bannersData) {
      const { banners } = bannersData;
      setAllBanners(banners);
      setAllCategories(banners);
      setBannerById(banners);
    }
  }, [bannersLoading, bannersError, bannersData]);

  return {
    allBanners,
    setAllBanners,
    allCategories,
    setAllCategories,
    bannerById,
    setBannerById,
    bannersLoading,
    bannersError,
    bannerByIdLoading,
    bannerByIdError,
    allCategoriesLoading,
    allCategoriesError,
  };
};

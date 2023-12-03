import HookFormEdit from "./hookForm";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetchBanners } from "../../../utils/useFetchBanners";

export default function RenderFromEdit() {
  const params = useParams();
  const { allBanners } = useFetchBanners(`/api/banners/allBanners`);

  const [defaultValues, setDefaultValues] = useState({
    _id: "",
    url: "",
    image: { url: "", alt: "" },
    title: "",
    text: "",
    createdAt: new Date(),
    author: "",
    category: "",
  });

  useEffect(() => {
    if (allBanners.length > 0) {
      const selectedBanner = allBanners.find((banner) => banner._id === params.id);
      console.log(selectedBanner)

      if (selectedBanner) {
        setDefaultValues({
          _id: selectedBanner._id,
          url: selectedBanner.url,
          image: { url: selectedBanner.image.url, alt: selectedBanner.image.alt },
          title: selectedBanner.title,
          text: selectedBanner.text,
          createdAt: selectedBanner.createdAt,
          author: selectedBanner.author,
          category: selectedBanner.category,
        });
      }
    }
  }, [allBanners, params.id]);

  return (
    <div>
      <HookFormEdit defaultValues={defaultValues} />
    </div>
  );
}

import HookFormEdit from "./hookForm";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetchBanner } from "../../../utils/useFetchBanners";

export default function RenderFromEdit() {
  const params = useParams();
  const { allBanners } = useFetchBanner(`/api/banners/allBanners`);

  const [defaultValues, setDefaultValues] = useState({
    _id: "",
    url: "",
    image: { medium: "", alt: "" },
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
          image: { medium: selectedBanner.image.medium, alt: selectedBanner.image.alt },
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

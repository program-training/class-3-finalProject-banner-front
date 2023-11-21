import { ProductInterface } from "../../utils/interfaces";

const DisplayingRecBanners = (banner: ProductInterface) => {
  return (
    <div>
      <p>{banner.recProductId}</p>
      <p>{banner.name}</p>
      <p>{banner.salePrice}</p>
      <p>{banner.quantity}</p>
      <p>{banner.description}</p>
      <p>{banner.category}</p>
      <p>{banner.discountPercentage}</p>
      <img src={banner.image.url} alt={banner.image.alt} />
      <p>{banner.createdAt.toLocaleString()}</p>
      <p>{banner.author}</p>
    </div>
  );
};

export default DisplayingRecBanners;

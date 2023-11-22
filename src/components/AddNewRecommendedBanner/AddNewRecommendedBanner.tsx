import axios from "axios";
import { useFetch } from "../../utils/useFetch";
import { ProductInterface } from "../../utils/interfaces";

const AddNewRecommendedBanner = () => {
  const { products } = useFetch(`${import.meta.env.BASE_URL}/products`);

  const handleProductClick = async (product: ProductInterface) => {
    try {
      const newBannerData = {
        id: product.recProductId,
        name: product.name,
        salePrice: product.salePrice,
        quantity: product.quantity,
        description: product.description,
        category: product.category,
        discountPercentage: product.discountPercentage,
        image: {
          url: product.image.url,
          alt: product.image.alt,
        },
        createdAt: product.createdAt,
        author: product.author,
      };
      const res = await axios.post(`${import.meta.env.BASE_URL}/banners`, newBannerData);
      if (res.status < 300 && res.status >= 200) {
        const createdBanner = res.data;
        console.log("Banner created:", createdBanner);
      } else {
        console.log("Error creating banner", res.status);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.recProductId}>
          <button onClick={() => handleProductClick(product)}>
            <p>{product.name}</p>
            <p>{product.salePrice}</p>
            <p>{product.quantity}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>{product.discountPercentage}</p>
            <img src={product.image.url} alt={product.image.alt} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddNewRecommendedBanner;

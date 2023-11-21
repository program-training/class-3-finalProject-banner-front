import axios from "axios";
import { useState } from "react";
import { useFetch } from "../../utils/useFetch";
import { BASE_URL } from "../../utils/consts";
import { ProductInterface } from "../../utils/interfaces";

const AddNewRecommendedBanner = () => {
  const { products } = useFetch(`${BASE_URL}/api/products`);
  const [isClicked, setIsClicked] = useState(false);

  const handleProductClick = async (product: ProductInterface) => {
    try {
      setIsClicked(true);
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
      const res = await axios.post(`${BASE_URL}/api/banners`, newBannerData);
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

  const handleAddBannerClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      {!isClicked && (
        <button onClick={handleAddBannerClick}>Add New Banner</button>
      )}

      {isClicked && (
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
      )}
    </div>
  );
};

export default AddNewRecommendedBanner;

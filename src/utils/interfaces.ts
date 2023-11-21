export interface RecommendedBannersProps {
  id: string;
  image: string;
  text: string;
  alt: string;
}

export interface ProductInterface {
  id: string;
  name: string;
  salePrice: number;
  quantity: number;
  description: string;
  category: string;
  discountPercentage: number;
  image: {
    url: string;
    alt: string;
  };
}

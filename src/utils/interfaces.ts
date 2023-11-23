export interface ProductInterface {
  recProductId: string;
  name: string;
  salePrice: number;
  quantity: number;
  description: string;
  category: string;
  discountPercentage: number;
  image: {
    large: string;
    medium: string;
    small: string;
    alt: string;
  };
  createdAt: Date;
  author: string;
}

export interface BannersInterFace {
  _id: string;
  image: {
    url: string;
    alt: string;
  };
  text: string;
  userName: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface ProductInterface {
  _id: string;
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
  url: string;
  category: string;
  image: {
    medium: string;
    alt: string;
  };
  title: string;
  text: string;
  createdAt: Date;
  author: string;
}

export interface CategoryInterface {
  _id: string;
  name: string;
  image: string;
}




// types.ts
export interface Product {
  id: string;
  name: string;
  price: string;
  images: image[]; // URLs of images
  rating: number;
  reviewsCount: number;
  colors: string;
  sizes: string;
  description: string;
}

export interface CartItem {
  id: string;
  quantity: number;
  color: string;
  size: string;
}

export interface CartState {
  items: CartItem[];
}
export interface image{
  id: string;
  image_url: string;
}

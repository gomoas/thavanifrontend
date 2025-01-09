import img1 from "@/images/Product/Product1.png";
import img2 from "@/images/Product/Product2.png";
import img3 from "@/images/Product/product3.png";
import img4 from "@/images/Product/product4.png";

export const productData = {
  product1: {
    id: "product1",
    name: "Organic Cotton Classic Dress",
    price: "$321",
    images: [img1, img2, img3, img4],
    rating: 4.8,
    reviewsCount: 574,
    colors: ["Color1", "Color2", "Color3", "Color4"],
    sizes: ["XS", "S", "M", "L", "XL", "2X", "3X"],
  },
  // Add more product objects if needed, for example:
  // product2: { ... },
};

"use client";
import img1 from "@/images/Home/img1.png";
import img2 from "@/images/other/image3.png";
import img3 from "@/images/Home/img3.png";
import img4 from "@/images/Home/img4.png";
import { useState } from "react";
import CollectionProduct from "../Collection/CollectionProduct";

export default function Home2({ props }: { props: string }) {
  const [activeCarousel, setActiveCarousel] = useState<
    "best seller" | "New Arrival"
  >("best seller");

  const handleTextClick = (carouselType: "best seller" | "New Arrival") => {
    setActiveCarousel(carouselType);
  };

  const collectionProducts = [
    {
      img: img1,
      badge: ["Trending", "New arrived"],
      text: "Organic Fleece Oversized Sweatshirt",
    },
    { img: img2, badge: ["Trending"], text: "Organic Fleece Relaxed Pocket" },
    { img: img4, badge: ["Trending"], text: "Organic Fleece Relaxed Pocket" },
    { img: img3, badge: ["Best seller"], text: "Organic Cotton Classic Tee" },
  ];

  const newArrivedProducts = [
    {
      img: img4,
      badge: ["Trending", "New arrived"],
      text: "Organic Fleece Oversized Sweatshirt",
    },
    { img: img3, badge: ["Trending"], text: "Organic Fleece Relaxed Pocket" },
    { img: img1, badge: ["Trending"], text: "Organic Fleece Relaxed Pocket" },
    { img: img2, badge: ["Best seller"], text: "Organic Cotton Classic Tee" },
  ];

  const bestSellerItems = (
    <>
      {collectionProducts.map((product, index) => (
        <CollectionProduct
          key={index}
          img={product.img}
          text={product.text}
        />
      ))}
    </>
  );

  const newArrivalItems = (
    <>
      {newArrivedProducts.map((product, index) => (
        <CollectionProduct
          key={index}
          img={product.img}
          text={product.text}
        />
      ))}
    </>
  );

  return (
    <div className="flex flex-col">
      <div className="flex pt-[50px] pb-[20px] text-center justify-center w-full text-4xl lg:text-[2vw] font-bold">
        <p>{props}</p>
      </div>

      <div className="flex pb-[20px] font-bold text-color1 w-full justify-center sm:text-[min(1.1vw,2vw)] text-[min(4vw,5vw)]">
        <div className="relative flex">
          {/* Continuous underline */}
          <div className="absolute bottom-0 w-full border-b-2 border-gray-300"></div>

          <div
            className={`cursor-pointer relative ${activeCarousel === "best seller" ? "border-b-[5px] border-color1" : ""
              }`}
            onClick={() => handleTextClick("best seller")}
          >
            <p className="px-2">Best Seller</p>
          </div>

          <div
            className={`ml-10 cursor-pointer relative ${activeCarousel === "New Arrival" ? "border-b-[5px] border-color1" : ""
              }`}
            onClick={() => handleTextClick("New Arrival")}
          >
            <p className="px-2">New Arrival</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 rounded-none gap-2 lg:gap-14 px-5 lg:px-20 xl:px-50">
        {activeCarousel === "best seller" ? bestSellerItems : newArrivalItems}
      </div>
    </div>
  );
}
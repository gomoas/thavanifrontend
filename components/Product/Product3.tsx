"use client"
// pages/Product3.js
import { useState } from "react";
import HowItsMadeCarousel from "@/components/Product/HowItMade/How";
import WhereItsMadeCarousel from "@/components/Product/WhereMade/Where";
const Product3: React.FC = () => {
    const [activeCarousel, setActiveCarousel] = useState<"how" | "where">("how");

    const handleTextClick = (carouselType: "how" | "where") => {
        setActiveCarousel(carouselType);
    };

    return (
        <div className="flex flex-col gap-10 py-[100px]">
            <div className="flex text-color1 text-4xl font-bold justify-center items-center px-4 md:px-[100px] lg:px-[300px] xl:px-[450px] text-center w-full">
                <h1>
                    Everything we make has an impact on the planet.
                </h1>
            </div>
            <div className="flex font-bold w-full justify-center md:justify-evenly px-4 md:px-[100px] lg:px-[300px] xl:px-[450px] text-lg">
                <div className="flex cursor-pointer" onClick={() => handleTextClick("how")}>
                    <p className={`relative ${activeCarousel === "how" ? "underline" : ""} pb-1`}>How its made</p>
                </div>
                <div className="flex ml-10 md:ml-0 cursor-pointer" onClick={() => handleTextClick("where")}>
                    <p className={`relative ${activeCarousel === "where" ? "underline" : ""} pb-1`}>Where its made</p>
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                {activeCarousel === "how" ? <HowItsMadeCarousel /> : <WhereItsMadeCarousel />}
            </div>
        </div>
    );
};

export default Product3;

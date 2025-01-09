"use client";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import img13 from "@/images/Blog/image11.png";
import img14 from "@/images/Blog/image12.png";
import img15 from "@/images/Blog/image13.png";
import img16 from "@/images/Blog/image14.png";
import Image from "next/image";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselItems = [
        {
            image: img14,
            text: "THVANI’s Circular Fashion Initiative",
        },
        {
            image: img15,
            text: "The Future of Fashion: Tech Meets Sustainability",
        },
        {
            image: img16,
            text: "Our Commitment to Ethical Sourcing",
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="flex flex-col lg:flex-row bg-color5 h-auto lg:h-[90vh] my-[50px] gap-5 lg:gap-10">
            <div className="flex w-full lg:w-1/2 justify-center items-center">
                <Image
                    src={img13}
                    alt="Organic Fabrics"
                    className="w-full h-auto object-cover lg:max-h-[90vh]"
                />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 py-5 lg:py-[50px] px-5 lg:px-10 gap-8 justify-between relative pb-16">
                <p className="text-2xl lg:text-3xl">Why We Choose Organic Fabrics</p>
                <p className="text-lg lg:text-xl leading-relaxed">
                    Organic fabrics are at the heart of what we do at THVANI. Discover the benefits of
                    choosing organic, not just for your wardrobe, but for the planet.
                </p>
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out gap-4"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / 3 + 16)}%)`,
                        }}
                    >
                        {carouselItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center w-[calc(33.33%-1rem)]"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.text}
                                    className="h-[30vh] lg:h-[40vh] w-full object-cover"
                                />
                                <p className="text-sm lg:text-base font-medium mt-3">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 flex gap-4 px-5 pb-5">
                    <button
                        className="text-xl lg:text-2xl  rounded-full p-2"
                        onClick={handlePrev}
                    >
                        <FaArrowLeftLong />
                    </button>
                    <button
                        className="text-xl lg:text-2xl  rounded-full p-2"
                        onClick={handleNext}
                    >
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;

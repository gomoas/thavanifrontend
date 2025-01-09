"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img11 from "@/images/Sustainable/sus11.png";
import img12 from "@/images/Sustainable/sus12.png";
import img13 from "@/images/Sustainable/sus13.png";

export function Material() {
    const items = [
        { image: img11, text: "Material 1" },
        { image: img12, text: "Material 2" },
        { image: img13, text: "Material 3" },
        { image: img12, text: "Material 4" },
        { image: img11, text: "Material 5" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    // Effect to update window width on client-side
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    const handlePrevious = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        if (currentIndex < items.length - 1) setCurrentIndex(currentIndex + 1); // Allow moving one step forward
    };

    return (
        <div className="flex flex-col p-5 md:p-10 lg:p-20 gap-10">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <p>Our Materials</p>
            </div>
            <div className="w-full relative overflow-hidden">
                {/* Carousel Container */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / (windowWidth <= 768 ? 1 : 3)}%)`,  // Adjust width dynamically based on screen size
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[50%] md:w-[33.3333%] lg:w-[33.3333%] flex-shrink-0 p-2"
                        >
                            <Card className="shadow-lg w-full h-full">
                                <CardContent className="flex flex-col items-center justify-center p-0 w-full h-full">
                                    {/* Adjusted Image Container */}
                                    <div className="relative w-full aspect-[4/3]">
                                        <Image
                                            src={item.image}
                                            alt={item.text}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-md"
                                        />
                                    </div>
                                    <p className="p-2 text-center text-lg sm:text-xl md:text-2xl font-bold">
                                        {item.text}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrevious}
                    className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-black text-2xl bg-white p-2 rounded-full hover:bg-gray-200 ${currentIndex === 0 ? "opacity-50 pointer-events-none" : ""
                        }`}
                >
                    <IoIosArrowBack />
                </button>
                <button
                    onClick={handleNext}
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-black text-2xl bg-white p-2 rounded-full hover:bg-gray-200 ${currentIndex === items.length - 1 ? "opacity-50 pointer-events-none" : ""
                        }`}
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
}

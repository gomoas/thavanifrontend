"use client";
import React, { useEffect, useState } from "react";
import img from "@/images/Home/img12.png";
import { Card } from "@/components/ui/card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

export function Home6() {
    const testimonials = Array.from({ length: 5 });
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 4000);


        return () => clearInterval(interval);
    }, [testimonials.length]);


    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    return (
        <div className="w-full p-5">
            <div className="relative lg:mb-8 mb-32 mx-auto">
                <div className="lg:w-[90%] mx-auto h-full overflow-hidden relative">
                    <div
                        className="h-full sm:mx-9 mx-10 flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${(currentIndex % testimonials.length) * 100}%)`,
                        }}
                    >
                        {testimonials.map((_, index) => (
                            <div key={index} className="h-full flex-shrink-0 w-full">
                                <div className="flex flex-col md:flex-row w-full p-5">
                                    <div className="flex flex-1 items-center justify-center p-5 md:p-10">
                                        <div className="flex flex-col gap-5 font-bold text-center md:text-left">
                                            <p className="lg:text-[1.1vw] text-sm font-light">What Our Customers Say</p>
                                            <div className="flex justify-center md:justify-start">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <p className="text-sm md:text-base underline font-medium leading-snug lg:text-[1vw]">
                                                I bought a top from Thvani, and I m so happy with it! The fabric is super soft, and I love that its eco-friendly. Plus, the print is so unique—its cool to know that no one else has the exact same one!
                                            </p>
                                            <p className="text-sm md:text-base">- Shameena Shaik, Bengaluru</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-1 items-center justify-center p-5">
                                        <Card>
                                            <Image
                                                src={img}
                                                alt={`Slide ${index + 1} Image`}
                                                className="object-cover w-full h-[50vh]"
                                            />
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <button
                        onClick={handlePrevious}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 text-black sm:text-5xl rounded-full z-10 cursor-pointer"
                        style={{ left: "20px" }}
                    >
                        <IoIosArrowBack />
                    </button>


                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 text-black sm:text-5xl rounded-full z-10 cursor-pointer"
                        style={{ right: "20px" }}
                    >
                        <IoIosArrowForward />
                    </button>


                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "bg-black scale-125" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

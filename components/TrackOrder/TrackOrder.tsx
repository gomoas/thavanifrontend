"use client";
import { TbBus } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import img1 from "@/images/TrackOrder/image1.png";
import img2 from "@/images/TrackOrder/image2.png";
import img3 from "@/images/TrackOrder/image3.png";
import { FaCcPaypal } from "react-icons/fa";

export default function TrackOrder() {

    // Set a fixed value for the current step
    const currentStep = 0; // Change this value to the step you want to display

    const circlePosition = ['5%', '36%', '66%', '97%'];

    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col py-6 md:py-[50px] gap-5 w-full px-4 md:px-[50px] lg:px-[100px]">
                    <p className="text-xs md:text-sm lg:text-base">Home / Orders / ID:202902902</p>
                    <div className="flex justify-between items-center">
                        <p className="text-lg md:text-2xl lg:text-3xl font-bold">Order ID: 3354654654526</p>
                        <p className="text-xs md:text-sm lg:text-base">Invoice</p>
                    </div>
                    <div className="flex flex-col md:flex-row text-xs md:text-sm lg:text-base">
                        <p className="pr-0 md:pr-5">Order date: Nov 16, 2024 |</p>
                        <p className="flex justify-center items-center pr-0 md:pr-2"><TbBus /></p>
                        <p>Estimated delivery: Nov 26, 2024</p>
                    </div>
                    <hr className="border-2 border-gray my-4" />
                    <div className="w-full mx-auto">
                        <div className="flex justify-between text-xs md:text-lg font-medium text-gray-600">
                            <p className={currentStep >= 0 ? "text-black" : ""}>Order Confirmed</p>
                            <p className={currentStep >= 1 ? "text-black" : ""}>Shipped</p>
                            <p className={currentStep >= 2 ? "text-black" : ""}>Out for Delivery</p>
                            <p className={currentStep >= 3 ? "text-black" : ""}>Delivered</p>
                        </div>

                        <div className="relative mt-4">
                            <hr className="border border-gray-300" />
                            <FaCircle
                                className="absolute top-1/2 -translate-y-1/2 text-black transition-all duration-500"
                                style={{ left: circlePosition[currentStep], transform: 'translate(-50%, -50%)' }}
                            />
                        </div>

                        <div className="flex justify-between mt-2 text-[10px] md:text-xs lg:text-sm text-gray-500">
                            <p>Wed, 11th Jan</p>
                            <p>Wed, 11th Jan</p>
                            <p>Wed, 11th Jan</p>
                            <p>Wed, 11th Jan</p>
                        </div>
                    </div>
                    <div className="flex flex-col py-6 md:py-[50px] gap-6 md:gap-10">
                        <div className="flex justify-between w-full">
                            <div className="flex gap-4 md:gap-10">
                                <Image src={img1} alt="" className="h-[12vh] w-[20vw] md:w-[10vw] rounded-lg" />
                                <div className="flex flex-col">
                                    <p className="text-md md:text-xl">Natural Women s Dress</p>
                                    <div className="flex gap-2 md:gap-5">
                                        <p className="text-gray-600">Space Gray</p>
                                        <p>|</p>
                                        <p>L</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col text-right">
                                <p className="text-md md:text-xl font-bold">$2599.00</p>
                                <p>Qty: 1</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex gap-4 md:gap-10">
                                <Image src={img2} alt="" className="h-[12vh] w-[20vw] md:w-[10vw] rounded-lg" />
                                <div className="flex flex-col">
                                    <p className="text-md md:text-xl">Natural Women s Dress</p>
                                    <div className="flex gap-2 md:gap-5">
                                        <p className="text-gray-600">Space Gray</p>
                                        <p>|</p>
                                        <p>L</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col text-right">
                                <p className="text-lg md:text-xl font-bold">$2599.00</p>
                                <p>Qty: 1</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="flex gap-4 md:gap-10">
                                <Image src={img3} alt="" className="h-[12vh] w-[20vw] md:w-[10vw] rounded-lg" />
                                <div className="flex flex-col">
                                    <p className="text-md md:text-xl">Natural Women s Dress</p>
                                    <div className="flex gap-2 md:gap-5">
                                        <p className="text-gray-600">Space Gray</p>
                                        <p>|</p>
                                        <p>L</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col text-right">
                                <p className="text-lg md:text-xl font-bold">$2599.00</p>
                                <p>Qty: 1</p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-2 border-gray my-4" />
                    <div className="flex justify-between flex-col md:flex-row gap-5">
                        <div className="flex flex-col gap-5">
                            <p className="text-lg md:text-xl font-bold">Payment</p>
                            <div className="flex justify-center items-center gap-3 md:gap-5">
                                <p>Visa **56 </p>
                                <FaCcPaypal />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 text-sm">
                            <p className="text-lg md:text-xl font-bold">Delivery</p>
                            <p>Address</p>
                            <p>847 Jewess Bridge Apt. 174, London, UK, 474-769-3919</p>
                        </div>
                    </div>
                    <hr className="border-2 border-gray my-4" />
                    <div className="flex justify-between flex-col md:flex-row gap-5">
                        <div className="flex flex-col gap-5">
                            <p className="text-lg md:text-xl font-bold">Need Help</p>
                            <div className="flex flex-col gap-5 text-sm">
                                <p>Order Issues</p>
                                <p>Delivery Info</p>
                                <p>Returns</p>
                            </div>
                        </div>
                        <div className="flex gap-8 w-full md:w-[80%] lg:w-[60%] mx-auto">
                            <div className="flex flex-col gap-5 w-1/2">
                                <p className="text-lg md:text-xl font-bold">Order Summary</p>
                                <p>Price</p>
                                <p>Discount</p>
                                <p>Delivery</p>
                                <p>Tax</p>
                                <p>Total</p>
                            </div>
                            <div className="flex flex-col gap-5 w-1/2 text-right">
                                <p>&nbsp;</p> {/* Placeholder to align with the "Order Summary" heading */}
                                <p>$5554</p>
                                <p>(20%) - $1109.40</p>
                                <p>$0.00</p>
                                <p>+$221.88</p>
                                <p className="font-bold">$7500.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

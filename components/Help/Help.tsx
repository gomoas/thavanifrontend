import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FiPackage } from "react-icons/fi";
import { TbSquares } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { IoChatboxOutline } from "react-icons/io5";
import Image from "next/image";
import img1 from "@/images/help/image1.png";
import img2 from "@/images/help/image2.png";
import img3 from "@/images/help/image3.png";
import img4 from "@/images/help/image4.png";
import img5 from "@/images/help/image5.png";
import img6 from "@/images/help/image6.png";
import Product2 from "../Product/Product2";

export default function HelpPage() {
    return (
        <div className="flex flex-col  min-h-screen">
            <div className="flex flex-col md:flex-row bg-color5 p-6 md:px-[100px] w-full justify-center items-center gap-6 md:gap-10">
                <div className="flex flex-col gap-2 w-full md:w-1/2 text-center md:text-left">
                    <p className="text-xl font-medium ">Thvani</p>
                    <p className="text-4xl font-extrabold ">Help Center</p>
                    <p className="text-lg ">We are here to help you</p>
                </div>
                <div className="h-12 flex w-full md:w-1/2 flex-row bg-white  shadow-md px-4 items-center">
                    <CiSearch className="text-2xl" />
                    <input
                        className="flex-grow pl-4 focus:outline-none text-black"
                        placeholder="Search here for exchange or size"
                    />
                </div>
            </div>
            <div className="flex flex-col px-6 md:px-[50px] lg:px-[100px] py-[30px] md:py-[50px]">
                <p className="text-2xl md:text-3xl font-bold py-[10px]">Quick Actions</p>
                <div className="flex flex-col md:flex-row py-[30px] md:py-[50px] w-full justify-center md:justify-evenly items-center gap-5">
                    <div className="flex w-full md:w-1/3 flex-col border-[1px] p-6 md:p-[50px] gap-2 border-black justify-center items-center min-h-[300px]">
                        <IoLocationOutline size={32} />
                        <p className="font-bold text-lg">Track a Package</p>
                        <p className="text-sm text-center">You ll be prompted to sign in first</p>
                    </div>
                    <div className="flex w-full md:w-1/3 flex-col border-[1px] p-6 md:p-[50px] gap-2 border-black justify-center items-center min-h-[300px]">
                        <FiPackage size={32} />
                        <p className="font-bold text-lg">Start an Exchange</p>
                        <p className="text-sm text-center">Have your order number ready</p>
                    </div>
                    <div className="flex w-full md:w-1/3 flex-col border-[1px] p-6 md:p-[50px] gap-2 border-black justify-center items-center min-h-[300px]">
                        <TbSquares size={32} />
                        <p className="font-bold text-lg">Bulk Order</p>
                        <p className="text-sm text-center">A great option for corporate events or gifting</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row pb-[30px] md:pb-[50px] w-full justify-center md:justify-evenly items-center gap-5">
                    <div className="flex w-full md:w-1/2 flex-col border-[1px] p-6 md:p-[50px] gap-2 border-black justify-center items-center min-h-[300px]">
                        <RiContactsLine size={32} />
                        <p className="font-bold text-lg">Contact Us</p>
                        <p className="text-sm text-center">Need help? We re a chat or email away!</p>
                    </div>
                    <div className="flex w-full md:w-1/2 flex-col border-[1px] p-6 md:p-[50px] gap-2 border-black justify-center items-center min-h-[300px]">
                        <IoChatboxOutline size={32} />
                        <p className="font-bold text-lg">Live Chat</p>
                        <p className="text-sm text-center">7am-5pm PT, 7 days a week</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-6 md:px-[50px] lg:px-[100px] py-[30px] md:py-[50px]">
                <p className="text-2xl md:text-3xl py-5 font-bold">How can we help you?</p>

                {/* Grid for All Devices */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="flex flex-col border-2 border-gray">
                        <Image
                            src={img1}
                            alt=""
                            className="w-full h-[200px] object-cover"
                        />
                        <p className="py-5 px-5 font-bold">Sizing & Product Info</p>
                    </div>
                    <div className="flex flex-col border-2 border-gray">
                        <Image
                            src={img2}
                            alt=""
                            className="w-full h-[200px] object-cover"
                        />
                        <p className="py-5 px-5 font-bold">Exchanges</p>
                    </div>
                    <div className="flex flex-col border-2 border-gray">
                        <Image
                            src={img3}
                            alt=""
                            className="w-full h-[200px] object-cover"
                        />
                        <p className="py-5 px-5 font-bold">Order and Shipping</p>
                    </div>
                    <div className="flex flex-col border-2 border-gray">
                        <Image
                            src={img4}
                            alt=""
                            className="w-full h-[200px] object-cover"
                        />
                        <p className="py-5 px-5 font-bold">Payments & Store Credit</p>
                    </div>
                    <div className="flex flex-col border-2 border-gray">
                        <Image
                            src={img5}
                            alt=""
                            className="w-full h-[200px] object-cover"
                        />
                        <p className="py-5 px-5 font-bold">Company FYIs</p>
                    </div>
                    <div className="flex flex-col border-2 border-gray">
                        <Image
                            src={img6}
                            alt=""
                            className="w-full h-[200px] object-cover"
                        />
                        <p className="py-5 px-5 font-bold">Retail</p>
                    </div>
                </div>
            </div>

            <div className="flex py-10">
                <Product2 />
            </div>
        </div>
    );
}

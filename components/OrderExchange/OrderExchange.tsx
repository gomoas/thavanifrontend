import img1 from "@/images/other/image1.png";
import Image from "next/image";

export default function OrderExchange() {
    return (
        <div className="flex flex-col px-5 sm:px-[50px] lg:px-[100px] py-[50px] gap-5">
            <div className="flex">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    Orders & Exchange
                </p>
            </div>
            <div className="flex justify-between border-2 p-2 sm:p-3 rounded-lg">
                <div className="flex bg-gray-300 p-2 sm:p-3 rounded-lg w-1/3 justify-center">
                    <p>On Shipping</p>
                </div>
                <div className="flex p-2 sm:p-3 rounded-lg w-1/3 justify-center">
                    <p>Arrived</p>
                </div>
                <div className="flex p-2 sm:p-3 rounded-lg w-1/3 justify-center">
                    <p>Canceled</p>
                </div>
            </div>
            <div className="flex flex-col border-2 p-3 rounded-lg gap-5">
                <div className="flex flex-col sm:flex-row border-2 p-3 rounded-lg w-full gap-5 sm:gap-10">
                    <Image
                        src={img1}
                        alt=""
                        className="w-full sm:w-[20vw] h-[20vh] sm:h-[30vh]  rounded-lg"
                    />
                    <div className="flex flex-col gap-2 sm:gap-5">
                        <p className="text-lg sm:text-2xl font-bold">
                            Women Ethnic wear - golden white / L
                        </p>
                        <div className="flex flex-col">
                            <p className="text-base sm:text-lg font-bold">Size:</p>
                            <p>L</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <p className="font-bold">Item Price:</p>
                        <p>$10.00</p>
                    </div>
                    <div>
                        <button className="bg-gray-300 p-2 sm:p-3 rounded-lg">
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { StaticImageData } from "next/image";

interface CollectionProductProps {
    img: string | StaticImageData;
    text: string;
}

const CollectionProduct: React.FC<CollectionProductProps> = ({ img, text ,price}) => {
    return (
        <div className="w-full h-full bg-white border border-gray-200 shadow rounded-md">
            <Link href="/product">
                <div className="relative w-full sm:h-[60vh] h-[40vh] overflow-hidden">
                    <Image
                        className="object-cover w-full h-full"
                        src={img?img:"https://thvanis3.s3.ap-south-1.amazonaws.com/products/48c4cbdd70500296b5f12c76f34676c0-z1renders.png"}
                        alt="Product Image"
                        layout="fill"
                    />
                </div>
            </Link>
            <div className="flex flex-col p-4 space-y-3">
                <div className="flex items-center text-sm md:text-base text-yellow-500">
                    <FaStar /><FaStar /><FaStar /><FaStar />
                    <span className="pl-2 text-gray-700">256</span>
                </div>
                <div>
                    <span className="text-xs md:text-sm lg:text-base text-gray-800 font-medium">{text}</span>
                </div>
                <div>
                    <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">${price}</p>
                </div>
                <div className="flex gap-2">
                    <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-color1 rounded-full"></div>
                    <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-color2 rounded-full"></div>
                    <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-color3 rounded-full"></div>
                    <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-color4 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default CollectionProduct;
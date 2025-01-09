import img1 from "@/images/Home/img14.png";
import img2 from "@/images/Home/img15.png";
import img3 from "@/images/Home/img16.png";
import img4 from "@/images/Home/img17.png";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Home4() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
                <Image src={img1} alt="img" className="object-cover w-full h-full" />
                <div className="absolute bottom-5 left-5 text-right gap-3">
                    <p className="text-white font-bold mb-4 text-lg sm:text-xl lg:text-[1.7vw]">NEW STOCK</p>
                    <Link href="/women">
                        <button className="min-w-0 bg-white rounded text-black text-sm lg:text-[1.3vw] px-3 py-[10px] font-medium flex items-center gap-2">
                            SHOP <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Other Images */}
            <div className="relative">
                <Image src={img2} alt="img" className="object-cover w-full h-full" />
                <div className="absolute bottom-5 left-5 text-right gap-3">
                    <p className="text-white font-bold mb-4 text-lg sm:text-xl lg:text-[1.7vw]">BACK IN STOCK</p>
                    <Link href="/women">
                        <button className="min-w-0 bg-white rounded lg:text-[1.3vw]  text-black text-sm px-3 py-[10px] font-medium flex items-center gap-2">
                            SHOP <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="relative">
                <Image src={img3} alt="img" className="object-cover w-full h-full" />
                <div className="absolute bottom-5 left-5 text-right gap-3">
                    <p className="text-white font-bold mb-4 text-lg sm:text-xl lg:text-[1.7vw]">BEST SELLERS</p>
                    <Link href="/women">
                        <button className="min-w-0 bg-white rounded lg:text-[1.3vw]  text-black text-sm px-3 py-[10px] font-medium flex items-center gap-2">
                            SHOP <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="relative">
                <Image src={img4} alt="img" className="object-cover w-full h-full" />
                <div className="absolute bottom-5 left-5 text-right gap-3">
                    <p className="text-white font-bold mb-4 text-lg sm:text-xl lg:text-[1.7vw]">ARCHIVE SALE</p>
                    <Link href="/women">
                        <button className="min-w-0 bg-white rounded lg:text-[1.3vw]  text-black text-sm px-3 py-[10px] font-medium flex items-center gap-2">
                            SHOP <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

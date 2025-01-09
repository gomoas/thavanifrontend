// components/WhereItsMadeCarousel.js
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import map1 from "@/images/Product/map1.png";
import map2 from "@/images/Product/map2.png";
import map3 from "@/images/Product/map3.png";
import Link from "next/link";

const mapProducts = [
    {
        title: "Vadodara - Ankleshwar Valiya",
        image: map1,
    },
    {
        title: "Vadodara - Ankleshwar Valiya",
        image: map2,
    },
    {
        title: "Vadodara - Ankleshwar Valiya",
        image: map3,
    },
];

const Where = () => {
    return (
        <Carousel opts={{ align: "start" }} className="relative w-[80vw] md:w-[70vw] lg:w-[70vw]">
            <CarouselContent>
                {mapProducts.map((map) => (
                    <CarouselItem key={map.title} className="relative w-full md:basis-1/2 lg:basis-1/3 overflow-hidden">
                        <div className="p-2">
                            <Card className="relative flex flex-col h-[400px] md:h-[400px] overflow-hidden bg-gray-100">
                                <div className="relative h-2/4 overflow-hidden">
                                    <Image
                                        src={map.image}
                                        alt={map.title}
                                        layout="fill"
                                        objectFit="cover" // Changed to 'cover' to ensure full image coverage
                                        className=""
                                    />
                                </div>
                                <div className="h-1/3 flex flex-col justify-center items-center p-4">
                                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center">
                                        {map.title}
                                    </h2>
                                    {/* Learn More Link */}
                                    <button className="mt-2 cursor-pointer hover:underline">
                                        <Link href="/product/where">Learn More</Link>
                                    </button>
                                </div>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default Where;

// components/HowItsMadeCarousel.js
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import img1 from "@/images/Product/plant1.png";
import img2 from "@/images/Product/plant2.png";
import img3 from "@/images/Product/plant3.png";
import img4 from "@/images/Product/plant4.png";
import img5 from "@/images/Product/plant5.png";
import Link from "next/link";

const howProducts = [
    {
        title: "Material Sourcing",
        image: img1,
    },
    {
        title: "Fabric Creation",
        image: img2,
    },
    {
        title: "Low-Impact Dyeing",
        image: img3,
    },
    {
        title: "Zero-Waste Design",
        image: img4,
    },
    {
        title: "Local Communities",
        image: img5,
    },
];

const How = () => {
    return (
        <Carousel opts={{ align: "start" }} className="relative w-[80vw] md:w-[70vw] lg:w-[70vw]">
            <CarouselContent>
                {howProducts.map((product) => (
                    <CarouselItem key={product.title} className="relative w-full md:basis-1/2 lg:basis-1/3 overflow-hidden">
                        <div className="p-2">
                            <Card className="relative flex flex-col justify-center items-center h-[300px] md:h-[400px] overflow-hidden bg-gray-100">
                                {/* Centered Text */}
                                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center z-10">
                                    {product.title}
                                </h2>

                                {/* Top Right Quarter Circle Image */}
                                <div className="absolute -top-[50px] -right-[50px] w-[150px] h-[150px] md:w-[200px] md:h-[200px] overflow-hidden rounded-full">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="absolute top-0 left-0 rounded-full"
                                    />
                                </div>

                                {/* Learn More Link */}
                                <button className="absolute bottom-4 left-4 cursor-pointer hover:underline">
                                    <Link href="product/how">Learn More </Link>
                                </button>
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

export default How;

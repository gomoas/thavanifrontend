"use client"
import Image from "next/image";
import { Product } from "@/types";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import CollectionProduct from "./CollectionProduct";
import Product2 from "../Product/Product2";
import { useEffect, useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { fetchProducts ,fetchProductByCategoryId } from "@/apiRequest/product";

export default function MenCollectionPage() {
const img1 = "https://thvanis3.s3.ap-south-1.amazonaws.com/products/48c4cbdd70500296b5f12c76f34676c0-z1renders.png";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductByCategoryId("men");
                console.log(data);
                setLiveProducts(data)
            } catch (err) {
                console.error(err);
            }
        };
        console.log("called");
        fetchData();
    }, []);

    const [liveProducts, setLiveProducts] = useState<Product[]>([]);

    const products = [
        { img: img1, text: "Men's Sale", href: "/product" },
        { img: img1, text: "Men's New Arrival", href: "/product" },
        { img: img1, text: "Men's Casual Wear", href: "/product" },
        { img: img1, text: "Men's Ethnic Wear", href: "/product" },
    ];

    const collectionProducts = [
        { img: img1, badge: ["Trending", "New arrived"], text: "Organic Cotton Casual Shirt" },
        { img: img1, badge: ["Best seller"], text: "Organic Cotton Relaxed Pants" },
        { img: img1, badge: ["Trending"], text: "Organic Cotton T-Shirt" },
    ];

    const accordionItems = [
        { value: "item-1", trigger: "Category", content: "Category content here." },
        { value: "item-2", trigger: "Size", content: "Size content here." },
        { value: "item-3", trigger: "Fit", content: "Fit content here." },
        { value: "item-4", trigger: "Color", content: "Color content here." },
        { value: "item-5", trigger: "New Arrivals", content: "New Arrivals content here." },
        { value: "item-6", trigger: "Materials", content: "Materials content here." },
    ];

    return (
        <div className="flex flex-col py-8 md:py-[50px]">
            <div className="flex flex-col gap-4 w-full">
                {/* Header Section */}
                <div className="px-4 md:px-[50px]">
                    <p>Home / Men&apos;s</p>
                    <p className="text-2xl md:text-3xl lg:text-[1.5vw] font-bold">
                        Men&apos;s Clothing
                    </p>
                    <p className="text-base mt-4 md:text-lg">
                        Thoughtfully Art and sustainably made Men&apos;s clothing. Welcome to everyday essentials.
                    </p>
                </div>

                {/* Products Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-[50px]">
                    {liveProducts.map((product, index) => (
                        <div key={index} className="flex flex-col gap-2 p-2 rounded-lg">
                            <div className="w-full rounded-xl overflow-hidden h-[40vh] sm:h-[35vh] lg:h-[45vh]">
                                <Image
                                    alt={product.description}
                                    src={product.images[0].image_url}
                                    className="rounded-xl w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <p className="font-bold text-lg lg:text-left lg:text-[1.3vw] text-center">
                                {product.description}
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <Link href={'/product'}>
                                    <button className="p-3 mt-3 px-6 bg-black text-white rounded-full text-sm lg:text-[1.1vw] hover:bg-gray-800 transition-colors duration-200">
                                        Shop
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Accordion and Product Grid */}
                <div className="flex flex-col md:flex-row py-8 px-4 md:px-[50px] gap-8">
                    {/* Accordion */}
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <Accordion type="single" collapsible className="w-full">
                            {accordionItems.map((item) => (
                                <AccordionItem key={item.value} value={item.value}>
                                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                                    <AccordionContent>{item.content}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Product Grid */}
                    <div className="flex flex-col w-full gap-10">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 lg:px-20 justify-items-center">
                        {liveProducts.map((product) => (
    <CollectionProduct
        key={product.id} 
        img={product.images?.[0].image_url }
        text={product.description}
        price={product.price}
    />
))}
                        </div>
                    
                    </div>
                </div>

                {/* Pagination */}
                <div className="px-4 md:px-[50px] py-8">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            {[1, 2, 3].map((page) => (
                                <PaginationItem key={page}>
                                    <PaginationLink href="#" isActive={page === 2}>
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>

                {/* Additional Product Section */}
                <div className="flex w-full px-4 md:px-0">
                    <Product2 />
                </div>
            </div>
        </div>
    );
}

"use client";
import Image from "next/image";
import bg1 from "@/images/Home/bg1.png";
import bg5 from "@/images/Home/bg5.png";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import emblaCarouselAutoplay from "embla-carousel-autoplay";

export default function Home() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const contentWidth = textElement.scrollWidth;

      // Create a smooth, infinite scrolling effect
      gsap.fromTo(
        textElement,
        { x: `100%` }, // Start from the right
        {
          x: `-${contentWidth / 2}px`, // Move to the left, half of the content width
          duration: 15, // Speed of scroll
          ease: "linear",
          repeat: -1, // Infinite repeat
        }
      );
    }
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex > 2 ? 0 : nextIndex; // Loop from 0 to 3
      });
    }, 6000); // 6 seconds interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Function to manually increment
  const incrementIndex = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex > 2 ? 0 : nextIndex; // Loop from 0 to 3
    });
  };

  // Function to manually decrement
  const decrementIndex = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? 2 : nextIndex; // Loop from 3 to 0
    });
  };

  

console.log(currentIndex);

  return (
    <div className="w-screen overflow-hidden">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          emblaCarouselAutoplay({
            delay: 6000,
          }),
        ]}
        className="w-full h-screen"
      >
        <CarouselContent className="w-screen h-screen">
          <CarouselItem className="h-screen">
            <div className="flex h-screen">
              <div className="flex flex-col md:flex-row w-full h-screen">
                <div className="hidden md:block w-1/2 h-full relative">
                  <Image
                    src={bg1}
                    alt="Background Image"
                    className="brightness-50 object-cover"
                    fill
                  />
                </div>
                <div className="w-full md:w-1/2 h-full relative">
                  <Image
                    src={bg5}
                    alt="Background Image"
                    className="brightness-50 object-cover"
                    fill
                  />
                  {/* Text Content Overlay */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10 text-white text-center p-4">
                    <h1
                      className="text-2xl sm:text-3xl md:text-4xl font-bold"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                    >
                      New Linen For Life
                    </h1>
                    <p
                      className="text-xs sm:text-sm md:text-lg mt-2 md:mt-4"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                    >
                      Beautiful, healthy, and durable
                    </p>
                    <p
                      className="text-xs sm:text-sm md:text-lg mt-1 md:mt-2"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                    >
                      Upgrade to Organic Futurism Aesthetics
                    </p>
                    <Link href="/women">
                      <button className="mt-4 md:w-[15vw] sm:mt-6 px-4 sm:px-4 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 rounded text-xs sm:text-sm md:text-base">
                        SHOP NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="h-screen">
            <div className="flex h-screen">
              <div className="flex flex-col md:flex-row w-full h-screen">
                <div className="hidden md:block w-1/2 h-full relative">
                  <Image
                    src={bg1}
                    alt="Background Image"
                    className="brightness-50 object-cover"
                    fill
                  />
                </div>
                <div className="w-full md:w-1/2 h-full relative">
                  <Image
                    src={bg5}
                    alt="Background Image"
                    className="brightness-50 object-cover"
                    fill
                  />
                  {/* Text Content Overlay */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10 text-white text-center p-4">
                    <h1
                      className="text-2xl sm:text-3xl md:text-4xl font-bold"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                    >
                      New Linen For Life
                    </h1>
                    <p
                      className="text-xs sm:text-sm md:text-lg mt-2 md:mt-4"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                    >
                      Beautiful, healthy, and durable
                    </p>
                    <p
                      className="text-xs sm:text-sm md:text-lg mt-1 md:mt-2"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                    >
                      Upgrade to Organic Futurism Aesthetics
                    </p>
                    <Link href="/women">
                      <button className="mt-4 md:w-[15vw] sm:mt-6 px-4 sm:px-4 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 rounded text-xs sm:text-sm md:text-base">
                        SHOP NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="h-screen">
            <div className="flex h-screen">
              <div className="flex flex-col md:flex-row w-full h-screen">
                <div className="hidden md:block w-1/2 h-full relative">
                  <Image
                    src={bg1}
                    alt="Background Image"
                    className="brightness-50 object-cover"
                    fill
                  />
                </div>
                <div className="w-full md:w-1/2 h-full relative">
                  <Image
                    src={bg5}
                    alt="Background Image"
                    className="brightness-50 object-cover"
                    fill
                  />
                  {/* Text Content Overlay */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10 text-white text-center p-4">
                    <h1
                      className="text-2xl sm:text-3xl md:text-4xl font-bold"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                    >
                      New Linen For Life
                    </h1>
                    <p
                      className="text-xs sm:text-sm md:text-lg mt-2 md:mt-4"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                    >
                      Beautiful, healthy, and durable
                    </p>
                    <p
                      className="text-xs sm:text-sm md:text-lg mt-1 md:mt-2"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                    >
                      Upgrade to Organic Futurism Aesthetics
                    </p>
                    <Link href="/women">
                      <button className="mt-4 md:w-[15vw] sm:mt-6 px-4 sm:px-4 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300 rounded text-xs sm:text-sm md:text-base">
                        SHOP NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="absolute p-1 flex -translate-x-1/2 text-[#232323] justify-center top-[80%] left-[50%]">
          <div className="relative flex justify-center">
            <div onClick={decrementIndex}>
              <CarouselPrevious className=" left-0 bg-[#DAD2C7] hover:bg-[#d5cdc3] border-none rounded-r-none rounded-l-full relative" />
            </div>
            <div className="bg-[#DAD2C7] flex items-center px-2 gap-2">
              {[1, 1, 1].map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${currentIndex === index
                      ? " bg-[#232323] scale-125"
                      : "bg-[#232323]/60"
                    }`}
                />
              ))}
            </div>
            <div onClick={incrementIndex}>
              <CarouselNext className="relative bg-[#DAD2C7] hover:bg-[#d5cdc3] rounded-r-full right-0 border-none rounded-l-none" />
            </div>
          </div>
        </div>
      </Carousel>
      <Marquee
        speed={100}
        className="flex h-[50px] w-full bg-color1 text-white items-center"
      >
        <p className="text-xl sm:text-sm inline-block px-[100px]">ZERO WASTE</p>
        <p className="text-xl sm:text-2xl inline-block px-[100px]">
          ORGANIC FUTURISM AESTHETICS
        </p>
        <p className="text-xl sm:text-sm inline-block px-[100px]">ZERO WASTE</p>
        <p className="text-xl sm:text-2xl inline-block px-[100px]">
          ORGANIC FUTURISM AESTHETICS
        </p>
        <p className="text-xl sm:text-sm inline-block px-[100px]">ZERO WASTE</p>
        <p className="text-xl sm:text-2xl inline-block px-[100px]">
          ORGANIC FUTURISM AESTHETICS
        </p>
      </Marquee>
    </div>
  );
}

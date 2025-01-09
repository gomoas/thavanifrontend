"use client"
import img1 from "@/images/About/about1.png";
import img3 from "@/images/About/about3.png";
import img4 from "@/images/About/about4.png";
import img5 from "@/images/About/about5.png";
import img6 from "@/images/About/about6.png";
import Image from "next/image";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
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

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[85vh]">
        <div className="flex justify-center w-full md:w-1/2 flex-col px-6 md:px-[50px] gap-5 py-10 md:py-[50px]">
          <p className="text-lg md:text-xl lg:text-[1.2vw]">
            WE&apos;RE THVANI
          </p>
          <h1 className="text-3xl sm:pr-[20vw] pr-0 md:text-5xl lg:text-[4vw] font-bold text-color1">
            Art Through Sustainable Fashion.
          </h1>
          <p className="text-sm md:text-xl">
            Where innovation meets nature, creating a fusion of style,
            sustainability, and modern craftsmanship. we are reimagining fashion
            through a lens of responsibility and creativity. Our journey is
            fueled by a passion for turning nature’s most unexpected resources
            into garments that transcend trends and redefine style.
          </p>
          <div className="self-start">
            <Link href="/women">
              <button className="inline-block border-2 p-3 border-color1 text-sm lg:text-[.9vw]">
                SEE OUR COLLECTIONS
              </button>
            </Link>
          </div>
        </div>
        <div className="flex w-full md:w-1/2">
          <Image
            src={img1}
            alt="About Image"
            className=" w-full object-contain"
          />
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex  justify-center items-center py-10 md:py-[50px] relative">
      <svg className="absolute top-[30%] left-0 w-screen" height="200" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 00,00 
       C 600,0 200,270 1600,120"
    stroke="#DAD2C7"
    fill="transparent"
    stroke-width="2"
  />
</svg>

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
          className="w-full bg-transparent max-w-lg shadow-none md:max-w-5xl border-none"
        >
          <CarouselContent className="border-0 bg-transparent shadow-none">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem className="bg-transparent" key={index}>
                <div className="p-2">
                  <Card className="h-full bg-transparent shadow-none border-none">
                    <CardContent className="flex flex-col shadow-none border-none gap-3 items-center justify-center px-4 mx-10 py-4">
                      <span className="text-lg py-5 md:text-xl lg:text-[1.3vw] font-bold text-center">
                        BELIEVE IN POSSIBLE
                      </span>
                      <span className="text-base py-5  md:text-lg lg:text-2xl font-medium text-center">
                        At THVANI, we don t just create clothing; we Art a
                        movement. Every stitch, every fabric, every design is a
                        testament to our unwavering commitment to sustainability
                        and innovation. By believing in us, you re not just
                        choosing a brand; you re embracing a vision for a
                        better, greener world.
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute p-1 flex -translate-x-1/2 text-[#232323] justify-center top-[95%] left-[50%]">
            <div className="relative flex justify-center">
              <div onClick={decrementIndex}>
                {" "}
                <CarouselPrevious className=" left-0 bg-[#DAD2C7] hover:bg-[#d5cdc3] border-none rounded-r-none rounded-l-full relative" />
              </div>
              <div className="bg-[#DAD2C7] flex items-center px-2 gap-2">
                {[1, 1, 1].map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentIndex === index
                        ? " bg-[#232323] scale-125"
                        : "bg-[#232323]/60"
                    }`}
                  />
                ))}
              </div>
              <div onClick={incrementIndex}>
                {" "}
                <CarouselNext className="relative bg-[#DAD2C7] hover:bg-[#d5cdc3] rounded-r-full right-0 border-none rounded-l-none" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      {/* Mission & Vision Section */}
      <div className="flex flex-col bg-color5 my-10 md:my-[50px]">
        {/* First Section: Mission & Vision */}
        <div className="flex flex-col-reverse md:flex-row h-auto md:h-[70vh] border-b border-gray-200 pb-6 md:pb-0">
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-10 text-center gap-4">
            <p className="text-2xl md:text-4xl font-bold text-gray-800">
              Our Mission & Vision
            </p>
            <p className="text-md md:text-lg text-gray-600 leading-relaxed">
              At THVANI, we dont just create clothing; we craft a movement.
              Every stitch, every fabric, every design is a testament to our
              unwavering commitment to sustainability and innovation. By
              believing in us, you’re not just choosing a brand; you’re
              embracing a vision for a better, greener world.
            </p>
          </div>
          <div className="flex w-full md:w-1/2">
            <Image
              src={img5}
              alt="Mission Image"
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second Section: Crafting the Future of Fashion */}
        <div className="flex flex-col md:flex-row h-auto md:h-[70vh] border-b border-gray-200 pb-6 md:pb-0">
          <div className="flex w-full md:w-1/2">
            <Image
              src={img3}
              alt="Crafting Image"
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-10 text-center gap-4">
            <p className="text-2xl md:text-4xl font-bold text-gray-800">
              Future of Fashion
            </p>
            <p className="text-md md:text-lg text-gray-600 leading-relaxed">
              Our process begins with selecting organic and regenerative
              materials like bamboo, banana, and orange fibers—fabrics that not
              only feel luxurious but also tread lightly on the planet. From
              fabric to finish, each step is driven by innovation. Each design
              is illustrated by hand, and zero-waste patterns ensure that every
              garment embodies our commitment to sustainability and style.
            </p>
          </div>
        </div>

        {/* Third Section: The Principles That Guide Us */}
        <div className="flex flex-col-reverse md:flex-row h-auto md:h-[70vh]">
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-10 text-center gap-4">
            <p className="text-2xl md:text-4xl font-bold text-gray-800">
              The Principles That Guide Us
            </p>
            <p className="text-md md:text-lg text-gray-600 leading-relaxed">
              Every piece we create begins with deep respect for the
              environment, from our dyeing methods using natural extracts to our
              zero-waste designs. While we appreciate the value of cutting-edge
              technology, we choose to honor traditional craftsmanship, ensuring
              that each garment is crafted with organic materials from start to
              finish—including our design process, where we use only organic
              papers and hand-drawn sketches. We are more than a brand; we are a
              movement dedicated to genuine sustainability.
            </p>
          </div>
          <div className="flex w-full md:w-1/2">
            <Image
              src={img4}
              alt="Principles Image"
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col p-6 md:p-[100px] gap-5 justify-center text-center items-center">
        <p className="text-lg md:text-3xl">
          &quot;Join us in making a difference. Trust in our journey, believe in
          our purpose, and together, lets inspire change. With Thvani, youre not
          just investing in fashion; You&apos;re investing in a legacy of
          sustainable beauty.&quot;
        </p>
        <Link href="/login">
          <button className="inline-block border-2 p-3 border-color1 text-md lg:text-[.8vw] mt-6 px-[100px]">
            JOIN US NOW
          </button>
        </Link>
      </div>

      {/* Process Section */}
      <div className="flex relative w-full h-[60vh]">
        <Image alt="Process Image" src={img6} className="w-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white gap-5 px-4">
          <p className="text-xl md:text-2xl">OUR PROCESS IS,</p>
          <p className="font-bold text-3xl md:text-4xl">100% TRACEABLE.</p>
          <p className="font-bold text-3xl md:text-4xl">KNOW YOUR SOURCE.</p>
          <Link href="/product/where">
            <button className="bg-white text-black inline-block border-2 p-3 border-color1 text-md md:px-10 px-6">
              TRACE MY PRODUCT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import gsap from 'gsap';
import storyImg from "@/images/Home/Home8/image.png";
import craftImg from "@/images/Home/Home8/image1.png";
import processImg from "@/images/Home/Home8/image2.png";
import sustainableImg from "@/images/Home/Home8/image3.png";
import studioImg from "@/images/Home/Home8/image4.png";

interface Option {
  id: string;
  label: string;
  img: StaticImageData;
  text: string;
  title: string;
}

const options: Option[] = [
  { id: "story", label: "story", title: "OUR AESTHETIC", img: storyImg, text: "Thvani embodies a slow way of life that is rooted in culture, craft and community. Each Thvani garment is a play of natural fabrics defining a life of breath-ability, light and airiness that it wants its wearers to be part of." },
  { id: "craft", label: "craft", title: "ARTISANAL", img: craftImg, text: "Our fabrics are custom made in small batches by artisanal communities of India who weave the story of Thvani. Each garment is carefully and slowly handcrafted in our studio in Delhi with thoughtful details before it completes its journey in your wardrobe, ready to be a part of your story." },
  { id: "process", label: "process", title: "SLOW MADE", img: processImg, text: "Our process is slow. From developing water colour motifs to hand block prints to designing weaves for fabrics all happens in-house in collaboration with groups of artisans located all across India. Unique markings and imperfections are a result of the hand made process and show the makers touch making each piece unique." },
  { id: "sustainable", label: "sustainable", title: "THE VISION", img: sustainableImg, text: "Our packaging is 100% biodegradable. We use compostable plant based polybags, seed tags made of post consumer cotton waste and reusable cloth bags. We also operate on a made-to-order model, eliminating typical inventory issues that lead to over production and wastage. " },
  { id: "studio", label: "studio", title: "COMMUNITY", img: studioImg, text: "At our spacious, well lit and happy studio we currently employ numerous skilled artisans and master makers who create our exquisite garments while maintaining a fair and healthy environment. " }
];

const Home8: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("story");
  const activeOption = options.find(option => option.id === selectedOption);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [selectedOption]);

  return (
    <div className="flex w-full flex-col items-center space-y-8 px-4 md:px-10 lg:px-[10vw]">
      {activeOption && (
        <div
          className="flex flex-col lg:flex-row justify-center items-center lg:justify-between w-full space-y-8 lg:space-y-0 relative"
          ref={contentRef}
        >
          <div className="w-full lg:w-1/3 relative">
            <Image
              src={activeOption.img}
              alt={activeOption.label}
              width={500}
              height={500}
              className="rounded-md w-full"
            />
            <div className="lg:hidden absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 text-center">
              <p className="text-2xl py-3 font-medium">{activeOption.title}</p>
              <p className="mt-4  text-sm leading-relaxed">{activeOption.text}</p>
            </div>
          </div>
          <div className="hidden lg:flex flex-col w-1/2 justify-center items-center text-center lg:text-left px-4">
            <p className="text-xl md:text-2xl lg:text-3xl py-3 font-medium">
              {activeOption.title}
            </p>
            <p className="mt-4 text-color1 sm:text-[min(1.25vw,4vw)] text-[min(3vw,4vw)]">
              {activeOption.text}
            </p>
          </div>
        </div>
      )}
      <div className="flex justify-center space-x-3 md:space-x-6 mt-6 md:mt-12">
        {options.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setSelectedOption(id)}
            className={`px-3 py-1 md:px-4 md:py-2 lg:text-[1.3vw] text-sm font-medium ${
              selectedOption === id
                ? 'text-black border-b-2 border-color1'
                : 'text-gray-400'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home8;
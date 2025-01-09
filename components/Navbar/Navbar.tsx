"use client"
import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Heart, X, AlignJustify } from 'lucide-react';
import logo from "../../images/logo.png";
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isBannerOpen, setIsBannerOpen] = useState(true);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    return (
        <div className="relative">
            {isBannerOpen && (
                <div className="relative bg-color1 text-white text-center py-2 text-[10px] md:text-base">
                    <p>Shop Sale up to 25% Off - FREE SHIPPING on orders Over 500</p>
                    <X
                        onClick={() => setIsBannerOpen(false)}
                        className="cursor-pointer absolute top-1 md:top-2 right-3"
                    />
                </div>
            )}

            <div className="flex justify-between items-center px-4 py-3 md:px-10 lg:py-4 bg-[#EEEEE9] shadow-md">
                <div className="text-2xl font-bold">
                    <Link href="/" className="inline-block">
                        <Image
                            src={logo}
                            width={140}
                            height={80}
                            className="object-cover h-8 w-20 lg:w-32 lg:h-12"
                            alt="logo"
                        />
                    </Link>
                </div>

                <ul className="hidden lg:flex lg:gap-8 text-lg">
                    <li><Link href="/women">WOMEN</Link></li>
                    <li><Link href="/men">MEN</Link></li>
                    <li><Link href="/kids">KIDS</Link></li>
                    <li><Link href="/women">ACCESSORIES</Link></li>
                    <li><Link href="/calculator">IMPACT</Link></li>
                </ul>

                <div className="flex gap-6 relative">
                    <IoIosSearch size={25} />
                    <Link href="/cart" className="relative">
                        <IoBagOutline size={25} />
                    </Link>
                    <Link href="/whislist" className="relative">
                        <Heart className="font-extralight" size={25} />
                    </Link>
                    <Link href="/login">
                        <CgProfile size={25} />
                    </Link>
                    <div className="lg:hidden"> {/* Show burger menu only on smaller screens */}
                        <button onClick={toggleSideNav}>
                            <AlignJustify size={25} />
                        </button>
                    </div>
                </div>
            </div>


            {/* Side Navigation Menu */}
            {isSideNavOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={toggleSideNav}
                >
                    <div
                        className="fixed top-0 right-0 sm:w-1/4 w-3/4 h-full bg-color1 text-white py-6 px-4 transform transition-transform duration-300 z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-end mb-6">
                            <button onClick={toggleSideNav} className="text-3xl">
                                &times;
                            </button>
                        </div>
                        <ul className="space-y-4 text-lg">
                            <li><a href="/women" className="block py-2 hover:bg-gray-700">WOMEN</a></li>
                            <li><a href="/men" className="block py-2 hover:bg-gray-700">MEN</a></li>
                            <li><a href="/kids" className="block py-2 hover:bg-gray-700">KIDS</a></li>
                            <li><a href="/women" className="block py-2 hover:bg-gray-700">ACCESSORIES</a></li>
                            <li><a href="/calculator" className="block py-2 hover:bg-gray-700">IMPACT</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
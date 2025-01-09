import Link from "next/link";

export default function Home7() {
    return (
        <div className="flex lg:h-[50vh] my-[50px] flex-col lg:flex-row lg:text-left text-center">
            <div className="flex w-[90%] mx-auto justify-center border-4 border-dotted p-4 lg:p-[2vw] border-color4 lg:w-2/3 lg:mx-[100px] flex-col gap-5">
                <span className="text-color4 text-[40px] lg:text-[4vw]">INSPIRED BY NATURE, CRAFTED WITH PURPOSE</span>
                <div className="text-color4 border-2 w-[50%] sm:w-[30%] lg:w-[10vw] p-2 text-center rounded-3xl border-color4 mx-auto lg:mx-0">
                    <Link href="/women">
                        <button className="text-lg lg:text-[1.4vw]">SHOP NOW</button>
                    </Link>
                </div>
            </div>
            <div className="flex w-full lg:mt-0 mt-10 mb-8 lg:w-1/3 justify-center lg:mx-[100px] flex-col gap-5">
                <span className="text-2xl lg:text-[2vw] leading-tight">Our Uniqueness: Fashion Rooted in Natures Wisdom</span>
                <span className="text-sm lg:text-[.9vw] leading-tight">We go beyond the typical eco-friendly approach by transforming these materials through state-of-the-art processes, balancing craftsmanship with modern technology.</span>
                <div className="text-color4 border-2 w-[50%] sm:w-[30%] lg:w-[10vw] p-2 text-center rounded-3xl border-color4 mx-auto lg:mx-0">
                    <Link href="/women">

                        <button className="text-lg lg:text-[1vw]">SHOP NOW</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

import Link from "next/link";

export default function Home3() {
    return (
        <div className="flex mt-20 pt-10 flex-col justify-between mb-[60px]">
            <div className="flex relative leading-loose flex-col w-full text-center bg-color5 pb-10">
                <div className="absolute -top-[12%] lg:-top-[16%] left-0">
                    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <path id="circlePath" d="M 100,50
                             a 50,50 0 1,1 0,100
                             a 50,50 0 1,1 0,-100" />
                        </defs>
                        <text className="font-bold text-xl ">
                            <textPath href="#circlePath" startOffset="5%" textLength="310">
                                &nbsp;   E A R T H &nbsp; C R A F T &nbsp; T H V A N I &nbsp;
                            </textPath>
                        </text>
                    </svg>
                </div>


                <div className="flex flex-col py-10 w-full text-center gap-5">
                    <p className="text-2xl md:text-4xl lg:text-[2.6vw] font-bold text-color1">What we do</p>
                    <p className="mx-5 text-color1 md:mx-40 lg:mx-[200px] xl:mx-[300px] sm:text-[min(1.25vw,4vw)] text-[min(3vw,4vw)]">
                        Sustainable fashion crafted to inspire individuality, spark creativity, and honor our planet
                    </p>
                </div>
                <div className="flex flex-wrap justify-around px-5 py-10">
                    <div className="flex pb-10 flex-col text-left w-full lg:w-[25vw] md:w-[300px] gap-10">
                        <h1 className="text-lg md:text-2xl lg:text-[1.3vw] font-bold">Our Mission :</h1>
                        <p className="text-sm md:text-base xl:text-[.9vw]">
                            Our mission is to create timeless clothing that celebrates individuality, supports artisans, and nurtures the earth through sustainable practices.
                        </p>
                        <Link href="/sustainable">
                            <span className="underline">Learn More</span>
                        </Link>
                    </div>
                    <div className="flex pb-10 flex-col text-left w-full lg:w-[25vw] md:w-[300px] gap-10">
                        <h1 className="text-lg md:text-2xl lg:text-[1.3vw]  font-bold">About Us :</h1>
                        <p className=" text-sm md:text-base xl:text-[.9vw]">
                            At Thvani, we craft timeless pieces through organic fabrics, botanical dyeing, and handwoven artistry, honoring both individuality and the earth.
                        </p>
                        <Link href="/about">
                            <span className="underline">Learn More</span>
                        </Link>
                    </div>
                    <div className="flex flex-col text-left lg:w-[25vw] w-full md:w-[300px] gap-10">
                        <h1 className="text-lg md:text-2xl lg:text-[1.3vw]  font-bold">Heritage Reimagined:</h1>
                        <p className="text-sm md:text-base xl:text-[.9vw]">
                            We blend age-old craftsmanship with modern innovation to create fashion that respects tradition while shaping the future.
                        </p>
                        <Link href="/product/how">
                            <span className="underline">Learn More</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center lg:px-[100px] sm:text-center  sm:px-[20px] lg:items-start lg:text-left">
                <p className="text-color1 mt-10 font-bold text-3xl lg:pr-[200px] lg:text-[3.2vw] lg:w-3/4 lg:text-left lg:pt-10 tracking-wide leading-relaxed">
                    Weaving Sustainable Craftsmanship into the Fabric of Fashion
                </p>
                <div className="flex justify-center lg:justify-start lg:w-1/4 mt-5">
                    <div className="border-2 border-color1 rounded-3xl p-2 py-1">
                        <Link href="/calculator">
                            <span className="text-lg lg:text-[1vw]">LEARN MORE</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

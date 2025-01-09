import Image from "next/image";
import img1 from "@/images/Product/how1.png";
import img2 from "@/images/Product/how2.png";

export default function How1() {
    return (
        <div className="flex flex-col">
            <div className="flex py-[100px] flex-col px-5 lg:px-[100px] gap-5">
                <h1 className="font-bold text-3xl lg:text-5xl">Material Sourcing At</h1>
                <h1 className="font-bold text-3xl lg:text-5xl">Thvani</h1>
                <p className="font-medium pr-5 lg:pr-[50vw]">
                    Ensuring minimal environmental impact and supporting local communities. Our transparent supply chain showcases the journey from raw materials to finished garments, highlighting our commitment to eco-friendly production.
                </p>
            </div>
            <div className="flex h-[60vh] w-full">
                <Image src={img1} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col px-5 lg:px-[20vw] py-[50px] lg:py-[100px] gap-3">
                <h1 className="text-xl lg:text-2xl font-bold">Why</h1>
                <p className="text-base lg:text-lg">
                    At Thvani ~ Craft Unique Essence, our approach to material sourcing is rooted in sustainability, ethical practices, and environmental stewardship. Each fabric we use is carefully selected to minimize the ecological footprint while supporting local communities and preserving traditional craftsmanship. We work directly with eco-conscious suppliers and small-scale farmers who share our values, ensuring every garment tells a story of responsibility and innovation.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row px-5 lg:px-[20vw] py-[50px] lg:py-[100px] gap-3 bg-gray-200">
                <div className="flex flex-col w-full lg:w-2/3">
                    <h1 className="text-2xl lg:text-4xl font-bold">Zero-Waste Philosophy and Transparency</h1>
                    <p>
                        Using recycled raw materials from discarded fishing nets utilizes existing waste, reduces the need for virgin plastic, and prevents harmful plastic pollution from entering the worlds oceans.
                    </p>
                </div>
                <div className="w-full lg:w-1/3 h-[30vw] md:h-[40vw] lg:h-auto">
                    <Image
                        src={img2}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div className="flex flex-col px-5 lg:px-[20vw] py-[50px] lg:py-[100px] gap-3">
                <h1 className="text-xl lg:text-2xl font-bold">Key Environmental Benefits of Our Sourcing Practices:</h1>
                <div className="text-base lg:text-lg">
                    <h2 className="inline font-extrabold">Carbon Emissions: </h2>
                    <p className="inline">
                        By choosing low-impact materials like bamboo and banana fiber, we significantly reduce the carbon emissions associated with traditional fabric production.
                    </p>
                </div>
                <div className="text-base lg:text-lg">
                    <h2 className="inline font-extrabold">Water Conservation: </h2>
                    <p className="inline">
                        Our materials require far less water than conventional crops like cotton. Bamboo, for example, uses 1/3 less water than cotton.
                    </p>
                </div>
                <div className="text-base lg:text-lg">
                    <h2 className="inline font-extrabold">Soil Health: </h2>
                    <p className="inline">
                        We prioritize organic materials that regenerate soil health, prevent deforestation, and preserve biodiversity.
                    </p>
                </div>
            </div>
        </div>
    );
}

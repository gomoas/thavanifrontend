import Image from "next/image";
import cal1 from "@/images/Product/cal1.png";
import cal2 from "@/images/Product/cal2.png";
import cal3 from "@/images/Product/cal3.png";
import { FaArrowDown } from "react-icons/fa6";

export default function Cal() {
    return (
        <div className="flex flex-col py-10 px-5 lg:flex-row">
            <div className="flex w-full text-center justify-center items-center gap-5 flex-col">
                <h1 className="text-3xl lg:text-4xl font-bold">Sustainable Footprint Calculator</h1>
                <h1 className="text-xl lg:text-2xl">Tracks the carbon and water footprint of our products.</h1>

                <p className="text-md w-full md:w-[50vw] lg:w-[30vw] text-left">
                    We calculate how the impact of producing Ref products compares with most clothes bought in the United States. We share RefScale results for each product we make on our website and publish the totals in our Sustainability Report.
                </p>
                <p className="text-md w-full md:w-[50vw] lg:w-[30vw] text-left">
                    Sustainability takes into consideration impacts from most processes in the products life cycle.
                </p>

                <h1 className="text-xl lg:text-2xl font-bold">Q1 & Q2 2024 Footprint</h1>

                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-col">
                        <Image src={cal1} alt="Carbon Footprint" />
                        <div className="flex flex-col gap-2 font-bold">
                            <p>Carbon dioxide (Metric tons)</p>
                            <p>Ref footprint: 18,761</p>
                            <p>Conventional footprint: 36,215</p>
                            <p>Savings: 17,454</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Image src={cal2} alt="Water Footprint" />
                        <div className="flex flex-col gap-2 font-bold">
                            <p>Water (M gallons)</p>
                            <p>Ref footprint: 3,767</p>
                            <p>Conventional footprint: 9,120</p>
                            <p>Savings: 5,354</p>
                        </div>
                    </div>
                </div>

                <div className="w-full overflow-hidden">
    <div className="flex justify-center">
        <Image src={cal3} alt="Footprint Analysis" className="w-full h-[60vh] md:h-[75vh] lg:h-[90vh] object-cover" />
    </div>
</div>




                <div className="flex flex-col pt-10">
                    <p className="text-2xl lg:text-3xl font-bold">Product Life Cycle</p>
                    <div className="flex flex-col lg:flex-row gap-10 pt-10">
                        <div className="flex flex-col gap-5 font-bold">
                            <p>INPUTS</p>
                            <p>Water</p>
                            <p>Energy</p>
                            <p>Raw Material</p>
                        </div>

                        <div className="flex flex-col font-bold w-full md:w-[50vw] lg:w-[30vw]">
                            <p>Fabric Manufacturing</p>
                            <hr className="h-[3px] my-8 bg-black border-0" />
                            <div className="flex justify-center items-center">
                                <FaArrowDown />
                            </div>
                            <p>Fabric Dyeing</p>
                            <hr className="h-[3px] my-8 bg-black border-0" />
                            <div className="flex justify-center items-center">
                                <FaArrowDown />
                            </div>
                            <p>Material Transit</p>
                            <hr className="h-[3px] my-8 bg-black border-0" />
                            <div className="flex justify-center items-center">
                                <FaArrowDown />
                            </div>
                            <p>Product Manufacturing</p>
                            <hr className="h-[3px] my-8 bg-black border-0" />
                            <div className="flex justify-center items-center">
                                <FaArrowDown />
                            </div>
                            <p>Commercial Garment Wash</p>
                            <hr className="h-[3px] my-8 bg-black border-0" />
                            <div className="flex justify-center items-center">
                                <FaArrowDown />
                            </div>
                            <p>Packaging</p>
                            <hr className="h-[3px] my-8 bg-black border-0" />
                            <div className="flex justify-center items-center">
                                <FaArrowDown />
                            </div>
                            <p>Shipment</p>
                            <hr className="h-[3px] my-8 bg-black border-0" />
                            <div className="flex justify-center items-center">
                                <FaArrowDown />
                            </div>
                            <p>Customer Garment Care</p>
                            <hr className="h-[3px] my-8 bg-black border-0" />
                            <div className="flex justify-center items-center">
                                <FaArrowDown />
                            </div>
                            <p>Garment End-of-Life</p>
                        </div>

                        <div className="flex flex-col gap-5 font-bold">
                            <p>OUTPUTS</p>
                            <p>CO2 Emissions</p>
                            <p>Water</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col pt-10 gap-10 md:px-20 lg:px-60">
                    <h1 className="text-lg lg:text-xl font-medium">What impacts do we measure?</h1>
                    <h1 className="text-lg font-medium text-left">CO2</h1>
                    <p className="text-md lg:text-lg font-medium text-left">
                        Production emits carbon dioxide and other greenhouse gases, which pollute our atmosphere and contribute to climate change. Cotton, leather, and other raw materials grown in industrial farms create huge energy footprints. Polyester, nylon, and other petroleum-based fabrics emit harmful volatile organic compounds and nitrous oxide - a greenhouse gas almost 300x more potent than CO2.
                    </p>
                    <h1 className="text-lg font-medium text-left">Water</h1>
                    <p className="text-md lg:text-lg font-medium text-left">
                        Manufacturing textiles is very water-intensive. Processes like cultivating crops, extracting and cleaning fibers, spinning yarn into textiles require water. When reporting water footprints in the production of our garments, we look at the potential for water deprivation by considering both water consumption and scarcity/region.
                    </p>
                </div>
            </div>
        </div>
    );
}

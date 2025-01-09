import img from "@/images/Product/where.png"
import Image from "next/image";

export default function Where1() {
    return (
        <div className="flex flex-col">
            <div className="flex py-[100px] flex-col px-5 lg:px-[100px] gap-5">
                <h1 className=" text-xl font-bold pr-5 lg:pr-[50vw]">Sewing Factory</h1>
                <h1 className="font-bold text-3xl lg:text-5xl">Vadodara -</h1>
                <h1 className="font-bold text-3xl lg:text-5xl">Ankleshwar Valiya</h1>
                <p className=" text-xl font-bold pr-5 lg:pr-[50vw]">
                    South Halishahar, Chittagong, Bangladesh
                </p>
            </div>

            <div className="flex h-[60vh] w-full">
                <Image src={img} alt="" className="object-cover w-full h-full" />
            </div>

            <div className="flex flex-col px-5 lg:px-[20vw] py-[50px] lg:py-[100px] gap-3">
                <h1 className="text-xl lg:text-3xl font-bold">Why we work with this supplier</h1>
                <p className="text-base lg:text-xl font-medium">
                    We engage in a range of due diligence activities to promote and sustain fair labor practices, safe working conditions and environmental responsibility in the finished-goods factories, farms, and mills.
                </p>
            </div>
        </div>
    )
}
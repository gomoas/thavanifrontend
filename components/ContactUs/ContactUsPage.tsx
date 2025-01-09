import img1 from "@/images/other/image1.png";
import Image from "next/image";

export default function ContactUsPage() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[80vh]">
                    <Image src={img1} alt="Contact Us" className="w-full h-full" />
                </div>
                <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-8 lg:px-[100px] py-6 sm:py-8 lg:py-[50px] gap-6 sm:gap-8">
                    <p className="text-2xl sm:text-3xl lg:text-5xl font-semibold">Contact Us</p>
                    <p className="text-base sm:text-lg lg:text-lg">
                        Our customer service team is available Monday to Friday from 9am to 6pm and Saturday from 9am to 4pm (IST - India).
                    </p>
                    <p className="text-base sm:text-lg lg:text-lg">
                        Have you already consulted our FAQ? The answer you are waiting for may be hiding there.
                    </p>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col px-8 py-3 w-full bg-color8">
                            <p className="text-base sm:text-lg lg:text-xl font-semibold">Send us an e-mail</p>
                            <p className="underline decoration-slate-500">Go to the contact form</p>
                        </div>
                        <div className="flex flex-col px-8 py-3 w-full bg-color8">
                            <p className="text-base sm:text-lg lg:text-xl font-semibold">Chat on WhatsApp</p>
                            <p className="underline decoration-slate-500">Start a WhatsApp conversation</p>
                        </div>
                        <div className="flex flex-col px-8 py-3 w-full bg-color8">
                            <p className="text-base sm:text-lg lg:text-xl font-semibold">Chat on Messenger</p>
                            <p className="underline decoration-slate-500">Start a Messenger conversation</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center py-[50px] sm:py-[80px] px-6 sm:px-8 lg:px-[100px]">
                <div className="flex flex-col items-center gap-4 text-center">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Reach Out Us</p>
                    <p className="text-base sm:text-lg lg:text-xl">
                        For further assistance with your order, please reach out via the form below.
                    </p>
                </div>
                <div className="flex flex-col py-[30px] sm:py-[50px] gap-5 w-full lg:w-[50%] justify-center">
                    <div className="flex flex-col">
                        <p className="text-base sm:text-lg flex items-center">
                            Name<span className="text-red-500 ml-1">*</span>
                        </p>
                        <input type="text" className="border-2 h-[5vh] sm:h-[7vh] rounded-lg px-3" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-base sm:text-lg flex items-center">
                            Email<span className="text-red-500 ml-1">*</span>
                        </p>
                        <input type="email" className="border-2 h-[5vh] sm:h-[7vh] rounded-lg px-3" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-base sm:text-lg flex items-center">
                            Select Reason<span className="text-red-500 ml-1">*</span>
                        </p>
                        <select className="border-2 h-[5vh] sm:h-[7vh] rounded-lg px-3">
                            <option value="">Choose a reason</option>
                            <option value="order-status">Order Status</option>
                            <option value="return-exchange">Return/Exchange</option>
                            <option value="payment-issue">Payment Issue</option>
                            <option value="general-inquiry">General Inquiry</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-base sm:text-lg flex items-center">
                            Message<span className="text-red-500 ml-1">*</span>
                        </p>
                        <textarea className="border-2 h-[15vh] sm:h-[30vh] rounded-lg px-3" />
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col rounded-3xl bg-color1 w-full sm:w-[20vw] text-center justify-center items-center">
                            <button className="text-white py-2">Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

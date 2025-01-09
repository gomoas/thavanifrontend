import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Product2() {
    return (
        <div className="flex h-full w-full flex-col bg-color5">
            <div className="flex text-4xl lg:text-[2xl] font-bold pt-4 text-color1 text-center justify-center">
                <h1>FAQs</h1>
            </div>
            <div className="flex justify-center px-4 md:px-16 lg:px-[200px] xl:px-[400px] py-10">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full border-2 border-color3 rounded-lg"
                >
                    <AccordionItem
                        value="item-1"
                        className="border-b border-gray-300"
                    >
                        <AccordionTrigger className="py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none">
                            How do I subscribe to a service on Thvani?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                            Every woman needs her crew and ours is one you can
                            definitely count on. Its got the perfect relaxed
                            fit and is made with 100% Organic Cotton Jersey that
                            is so super soft. The search for the perfect crew
                            neck tee is over.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-2"
                        className="border-b border-gray-300"
                    >
                        <AccordionTrigger className="py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none">
                            What is Thvani?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                            Where innovation meets nature, creating a fusion of style, sustainability, and modern craftsmanship. we are reimagining fashion through a lens of responsibility and creativity. 
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-3"
                        className="border-b border-gray-300"
                    >
                        <AccordionTrigger className="py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none">
                            Can I get the real fabric & Natural Products?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                            Yes, Thvani offers authentic fabrics and natural products sourced sustainably. Their materials include bamboo and banana fiber, ensuring minimal environmental impact while supporting local communities. Each product reflects eco-conscious practices and traditional craftsmanship.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-4"
                        className="border-b border-gray-300"
                    >
                        <AccordionTrigger className="py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none">
                            What payment methods are accepted?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                            Thvani accepts payments via credit/debit cards, online wallets like PayPal, and net banking. UPI and digital payment methods are also supported for convenience. Cash on Delivery COD is available for select regions/orders.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                        value="item-5"
                        className="border-b border-gray-300"
                    >
                        <AccordionTrigger className="py-3 px-4 text-lg md:text-xl lg:text-xl font-semibold focus:outline-none">
                            Is customer support available 24/7?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 text-base md:text-lg lg:text-lg text-gray-600">
                            Yes, Thvani provides 24/7 customer support to assist with inquiries, orders, and issues. You can reach out anytime via email, chat, or phone for prompt assistance.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

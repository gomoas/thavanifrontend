import React from 'react';
import Home2 from "@/components/Home/Home2";
import Product1 from "@/components/Product/Product1";
import Product2 from "@/components/Product/Product2";
import Product3 from "@/components/Product/Product3";

// interface PageProps {
//     params: {
//         productId: string;
//     };
// }

export default async function Page() {
    return (
        <>
            <Product1 />
            <Home2 props="" />
            <Product2 />
            <Product3 />
        </>
    );
}

import img1 from "@/images/Home/img1.png";
import img2 from "@/images/Home/img5.png";
import img3 from "@/images/Home/img3.png";
import Product1 from "@/components/Product/Product1";
import Product2 from "@/components/Product/Product2";
import Product3 from "@/components/Product/Product3";
import CollectionProduct from "@/components/Collection/CollectionProduct";

export default function Product() {
    const collectionProducts = [
        { img: img1,badge:["Trending"], text: "Organic Fleece Oversized Sweatshirt" },
        { img: img2,badge:["Trending","New arrived"], text: "Organic Fleece Relaxed Pocket" },
        { img: img3,badge:["Best seller"], text: "Organic Cotton Classic Tee" },
        { img: img3,badge:["Trending"], text: "Organic Cotton Classic Tee" },
    ];
    return (
        <>
            <Product1 />
            <div className="grid my-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 lg:px-20 justify-items-center">
                            {collectionProducts.map((product, index) => (
                                <CollectionProduct key={index} img={product.img}  text={product.text} />
                            ))}
                        </div>
            <Product2/>
            <Product3/>
        </>
    )
}
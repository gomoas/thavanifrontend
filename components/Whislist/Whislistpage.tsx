"use client";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { removeFromWishlist, clearWishlist } from "@/store/features/whislist/whislistSlice";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";

type WishlistItem = {
    id: string;
    name: string;
    price: string;
    image: string;
    color?: string;
    size?: string;
};

export default function WishlistPage() {
    const wishlist = useAppSelector((state) => state.wishlist.items as WishlistItem[]);
    const dispatch = useAppDispatch();

    const handleRemove = (id: string, size?: string, color?: string) => {
        dispatch(removeFromWishlist({ id, size, color }));
    };

    const handleClear = () => {
        dispatch(clearWishlist());
    };

    return (
        <div className="p-5 md:p-10 max-w-screen-xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Your Wishlist</h1>
            {wishlist.length > 0 ? (
                <div className="flex flex-col gap-6">
                    {wishlist.map((item) => (
                        <div
                            key={`${item.id}-${item.size}-${item.color}`}
                            className="flex flex-col md:flex-row items-center gap-6 md:gap-12 border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={120}
                                height={120}
                                className="rounded-lg object-cover"
                            />
                            <div className="flex flex-col md:flex-1">
                                <p className="text-lg md:text-xl font-semibold">{item.name}</p>
                                <p className="text-md text-gray-600">Price: {item.price}</p>
                                {item.color && (
                                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                                )}
                                {item.size && (
                                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                                )}
                            </div>
                            <button
                                className="border-2 h-[6vh] w-[6vh] flex items-center justify-center rounded-md"
                                onClick={() => handleRemove(item.id, item.size, item.color)}
                            >
                                <MdDeleteOutline size={24} className="text-black" />
                            </button>
                        </div>
                    ))}
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={handleClear}
                            className="bg-gray-700 text-white py-3 px-8 rounded-md hover:bg-gray-600 transition-colors duration-200"
                        >
                            Clear Wishlist
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-lg text-gray-500">Your wishlist is empty.</p>
            )}
        </div>
    );
}

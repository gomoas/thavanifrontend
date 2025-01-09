"use client";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { productData } from "@/dummyData";
import { updateQuantity, removeItem } from "@/store/features/cart/cartSlice"; // Import removeItem

export default function CartPage() {
    const items = useAppSelector((state: { cart: { items: { id: string; quantity: number; color: string; size: string }[] } }) => state.cart.items);
    const dispatch = useAppDispatch();

    const handleIncrease = (itemId: string, color: string, size: string) => {
        dispatch(updateQuantity({ id: itemId, quantity: 1, color, size }));
    };

    const handleDecrease = (itemId: string, color: string, size: string) => {
        dispatch(updateQuantity({ id: itemId, quantity: -1, color, size }));
    };

    const handleDelete = (itemId: string) => {
        dispatch(removeItem(itemId)); // Dispatch the removeItem action
    };

    const totalPrice = items.reduce((acc, item) => {
        const product = productData[item.id as keyof typeof productData];
        if (product) {
            return acc + parseFloat(product.price.slice(1)) * item.quantity;
        }
        return acc;
    }, 0);

    return (
        <div className="flex flex-col px-5 sm:px-[50px] lg:px-[150px] py-[50px] gap-10">
            <div className="flex">
                <p className="text-xl sm:text-2xl lg:text-3xl">Cart ({items.length})</p>
            </div>
            <hr className="border-2" />
            <div className="flex flex-col lg:flex-row w-full gap-10">
                {/* Product List Section */}
                <div className="flex flex-col w-full lg:w-3/4 gap-10">
                    {items.length === 0 ? (
                        <p className="text-xl text-center w-full">Your cart is empty!</p>
                    ) : (
                        items.map((item) => {
                            const product = productData[item.id as keyof typeof productData];
                            if (product) {
                                return (
                                    <div key={item.id} className="flex flex-col lg:flex-row w-full gap-10">
                                        {/* Product Image Section */}
                                        <div className="flex w-full lg:w-1/4">
                                            <Image
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="h-[30vh] w-full sm:h-[40vh] lg:h-[50vh] object-cover"
                                            />
                                        </div>
                                        {/* Product Details Section */}
                                        <div className="flex w-full lg:w-3/4 flex-col gap-5 sm:gap-10">
                                            <p className="text-lg sm:text-xl lg:text-xl font-bold">{product.name}</p>
                                            <div className="flex w-full">
                                                <div className="flex flex-col gap-5 sm:gap-10 w-1/2">
                                                    <div className="flex flex-col">
                                                        <p className="font-bold">Colour:</p>
                                                        <p>{item.color}</p>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="font-bold">Size:</p>
                                                        <p>{item.size}</p>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="font-bold">Item Price:</p>
                                                        <p>{product.price}</p>
                                                    </div>
                                                </div>
                                                {/* Quantity Section */}
                                                <div className="flex flex-col gap-3 sm:gap-5 justify-center items-center w-1/2">
                                                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold">QTY</p>
                                                    <div className="flex justify-center items-center gap-4 sm:gap-6">
                                                        <CiCirclePlus
                                                            size={28}
                                                            onClick={() => handleIncrease(item.id, item.color, item.size)}
                                                        />
                                                        <p className="text-lg sm:text-xl">{item.quantity}</p>
                                                        <CiCircleMinus
                                                            size={28}
                                                            onClick={() => handleDecrease(item.id, item.color, item.size)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Delete Button Section */}
                                        <div className="flex justify-center items-center">
                                            <button
                                                className="border-2 h-[6vh] w-[6vh] flex items-center justify-center rounded-md"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                <MdDeleteOutline size={24} className="text-black" />
                                            </button>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })
                    )}
                </div>
                {/* Subtotal and Checkout Section */}
                {items.length > 0 && (
                    <div className="flex flex-col h-[20vh] w-full lg:w-1/4 gap-3 sm:gap-5 rounded-lg bg-color3 p-3 ml-auto mt-6 lg:mt-0">
                        <div className="flex justify-between">
                            <p className="font-bold text-xl">Subtotal</p>
                            <p className="text-xl font-bold">{`$${totalPrice.toFixed(2)}`}</p>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button className="bg-color1 text-white font-bold p-2 rounded-md w-full">
                                <Link href="/checkout">Checkout</Link>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

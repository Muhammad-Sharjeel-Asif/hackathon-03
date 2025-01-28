"use client"

import Image from 'next/image';
import Rating from '../Components/ShoppingList/Rating';
import Pic01 from '@/app/Components/ShoppingList/ShoppingList01.jpg';
import Pic02 from '@/app/Components/ShoppingList/ShoppingList02.jpg';
import Pic03 from '@/app/Components/ShoppingList/ShoppingList03.jpg';
import Pic04 from '@/app/Components/ShoppingList/ShoppingList04.jpg';
import Pic05 from '@/app/Components/ShoppingList/ShoppingList05.jpg';
import Plus from '@/app/Components/ShoppingList/Plus.png';
import Minus from '@/app/Components/ShoppingList/Minus.png';
import BgPic from '../Public/BgPic';
import Header from "../Components/Header/Header"

import React, { useRef } from 'react';
import { useStateContext } from '../context/StateContext'
import { urlFor } from '@/sanity/lib/image';

const initialCartItems = [
    { name: "Burger", price: 10.99, quantity: 2, image: Pic01, rating: 3 },
    { name: "Fresh Lime", price: 3.49, quantity: 1, image: Pic02, rating: 3 },
    { name: "Pizza", price: 9.99, quantity: 4, image: Pic03, rating: 3 },
    { name: "Chocolate Muffin", price: 4.49, quantity: 1, image: Pic04, rating: 3 },
    { name: "Cheese Butter", price: 11.99, quantity: 3, image: Pic05, rating: 3 },
];

const ShoppingCart = () => {
    const cartRef = useRef<HTMLDivElement | null>(null);
    const { totalQuantities, cartItems } = useStateContext()
    return (
        <div ref={cartRef}>
            <Header />
            <div className="bg-white font-sans text-[#333333]">

                <BgPic PageHeading='Shopping Cart' PageName='Shopping cart' />

                <div className="py-12 px-6 md:px-16 lg:px-28 min-h-screen">

                    <div>
                        {cartItems.length >= 1 && cartItems.map((item) => (
                            <div key={item._id}>
                                <Image src={urlFor(item?.image).url()} alt={item.name} />
                                <div>{item.name}</div>
                            </div>
                        ))}
                    </div>


                    <table className="w-full border-collapse hidden">
                        <thead>
                            <tr className="text-left">
                                <th className="p-4 font-semibold">Product</th>
                                <th className="p-4 font-semibold">Price</th>
                                <th className="p-4 font-semibold pl-10">Quantity</th>
                                <th className="p-4 font-semibold">Total</th>
                                <th className="p-4 font-semibold">Remove</th>
                            </tr>
                        </thead>

                        <tbody className="text-[#333333]">
                            {initialCartItems.map((item, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-4 flex flex-col items-start">
                                        <div className="flex items-start">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded mr-4"
                                                width={93.14}
                                                height={97.13}
                                            />
                                            {/* Star Ratings */}
                                            <div className='flex flex-col'>
                                                <span>{item.name}</span>
                                                <span className="flex mt-2 h-[9px]">
                                                    {Array.from({ length: 5 }, (_, i) => (
                                                        <Rating key={i} filled={i < item.rating} width={20.03} height={20.03} />
                                                    ))}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">${item.price.toFixed(2)}</td>
                                    <td className="p-4">
                                        <div
                                            className='border rounded-[18px] px-2 py-1 text-center flex justify-evenly h-[32.04px] max-w-[110.17px]'
                                        >
                                            <button className='text-[#E0E0E0]'>
                                                <Image src={Minus} alt='Minus' />
                                            </button>
                                            <span className="w-16 text-center">
                                                {totalQuantities}
                                            </span>

                                            <button className='text-[#1F242E]'>
                                                <Image src={Plus} alt='Plus' />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                                    <td className="px-10 cursor-pointer hover:text-[#FF9F0D]">&times;</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
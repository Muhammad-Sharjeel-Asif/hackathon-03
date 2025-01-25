'use client';

import Link from "next/link";
import Image from "next/image";
import Search from '@/app/Public/MagnifyingGlass.png';
import User from '@/app/Public/User.png';
import Premium from '@/app/Public/Tote.png';
import Cart from "./ShoppingList/Cart";
import { useState } from "react";
import { useStateContext } from '../context/StateContext';
import SearchBar from "./Searchbar";

export default function Header() {
    const { showCart, setShowCart } = useStateContext();
    const [showSearch, setShowSearch] = useState(false); // Toggle search bar

    return (
        <header>
            <div className="h-[90px] flex-wrap flex items-center">
                <div className="flex h-8 flex-1 justify-around items-center w-[1320px] lg:min-w-[1320px]">
                    <div className="text-2xl h-8 font-bold">
                        Food<span className="text-[#FF9F0D]">tuck</span>
                    </div>

                    <nav className="hidden md:flex space-x-10 h-6">
                        <Link href={"/"} className="font">Home</Link>
                        <Link href={"/Menu"} className="font">Menu</Link>
                        <Link href={"/Blog"} className="font">Blog</Link>
                        <Link href={"/ShopList"} className="font">Pages</Link>
                        <Link href={"/About"} className="font">About</Link>
                        <Link href={"/ShopList"} className="font">Shop</Link>
                        <Link href={"/Contact"} className="font">Contact</Link>
                    </nav>

                    {/* Search Bar & Icons */}
                    <div className="relative flex items-center gap-x-3">
                        {showSearch ? (
                            <SearchBar setShowSearch={setShowSearch} showCloseIcon={true} />
                        ) : (
                            <>
                                <button onClick={() => setShowSearch(true)}>
                                    <Image src={Search} alt="Search" />
                                </button>
                                <Link href={'/SignUp'}>
                                    <Image src={User} alt="User" />
                                </Link>
                                <button onClick={() => setShowCart(true)}>
                                    <Image src={Premium} alt="Premium" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {showCart && <Cart />}
        </header>
    );
}

'use client';

import Link from "next/link";
import Image from "next/image";
import Search from '@/app/Public/MagnifyingGlass.png';
import User from '@/app/Public/User.png';
import Premium from '@/app/Public/Tote.png';
import Cart from "../ShoppingList/Cart";
import { useState } from "react";
import { useStateContext } from '../../context/StateContext';
import SearchBar from "./Searchbar";
import { Menu, X } from "lucide-react";
import Searchbar from "../HomeComponents/Searchbar";

export default function Header() {
    const { showCart, setShowCart } = useStateContext();
    const [showSearch, setShowSearch] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header>
            <div className="h-[90px] flex-wrap flex items-center">
                <div className="flex h-8 flex-1 justify-around items-center w-[1320px] lg:min-w-[1320px]">
                    <Link href={'/'} className="text-2xl h-8 font-bold">
                        Food<span className="text-[#FF9F0D]">tuck</span>
                    </Link>

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
                                <button className="hidden md:flex" onClick={() => setShowSearch(true)}>
                                    <Image src={Search} alt="Search" />
                                </button>
                                <Link href={'/SignUp'}>
                                    <Image src={User} alt="User" />
                                </Link>
                                <button onClick={() => setShowCart(true)}>
                                    <Image src={Premium} alt="Premium" />
                                </button>
                                <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-[#FF9F0D] md:hidden">
                                    {showMobileMenu ? <X size={25} /> : <Menu size={25} />}
                                </button>
                            </>
                        )}
                    </div>

                    {showMobileMenu && (
                        <nav className="md:hidden absolute top-[90px] left-0 w-full bg-[#0d0d0d] shadow-md p-4 space-y-4">
                            <Link href="/" className="block">Home</Link>
                            <Link href="/Menu" className="block">Menu</Link>
                            <Link href="/Blog" className="block">Blog</Link>
                            <Link href="/Pages" className="block">Pages</Link>
                            <Link href="/About" className="block">About</Link>
                            <Link href="/ShopList" className="block">Shop</Link>
                            <Link href="/Contact" className="block">Contact</Link>
                            <Searchbar />
                        </nav>
                    )}
                </div>
            </div>

            {showCart && <Cart />}
        </header>
    );
}

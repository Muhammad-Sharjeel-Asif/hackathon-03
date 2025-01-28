'use client'

import React, { useState } from "react";
import Image from "next/image";
import Pic01 from "./Home01.png";
import BgPic from "./HomeBg.jpg";
import SocialSidebar from "./SocialSideBar";
import Searchbar from './Searchbar'
import Link from "next/link";
import Premium from '@/app/Public/Tote.png'
import { useStateContext } from "@/app/context/StateContext";
import Cart from "../ShoppingList/Cart";
import { Menu, X } from "lucide-react";

const HeroSection = () => {
  const { showCart, setShowCart } = useStateContext()
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <section className="md:px-[135px] flex flex-col md:flex-row md:items-center py-0 relative lg:min-h-screen items-center justify-between overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={BgPic}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
            className="brightness-[.10]"
          />
        </div>

        <div className="absolute top-0 left-0 w-full z-20">
          <header className="h-[90px] flex-wrap flex items-center px-6 md:px-[135px]">

            {/* Desktop - Centered FoodTuck */}
            <div className="hidden md:flex w-full justify-center">
              <Link href={'/'} className="text-2xl font-bold">
                Food<span className="text-[#FF9F0D]">tuck</span>
              </Link>
            </div>

            <div className="hidden md:flex w-full justify-between gap-x-4 items-center mt-2">
              {/* Navigation */}
              <nav className="flex space-x-8">
                <div className="group relative inline-block">
                  <Link href={"/"} className="font">Home</Link>
                  <span className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-[7px] h-[7px] bg-[#FF9F0D] rounded-full"></span>
                </div>
                <Link href={"/Menu"} className="font">Menu</Link>
                <Link href={"/Blog"} className="font">Blog</Link>
                <Link href={"/Pages"} className="font">Pages</Link>
                <Link href={"/About"} className="font">About</Link>
                <Link href={"/ShopList"} className="font">Shop</Link>
                <Link href={"/Contact"} className="font">Contact</Link>
              </nav>

              {/* Search & Cart */}
              <div className="flex h-6 gap-x-4">
                <Searchbar />
                <button onClick={() => setShowCart(true)} className="w-6 h-6">
                  <Image src={Premium} alt="Premium" width={24} height={24} />
                </button>
                {showCart && <Cart />}
              </div>
            </div>

            {/* Mobile - Left-aligned FoodTuck & Hamburger Menu */}
            <div className="md:hidden flex w-full justify-between items-center">
              <div className="text-2xl font-bold">
                Food<span className="text-[#FF9F0D]">tuck</span>
              </div>
              <div className="flex items-center gap-x-3">
                <button onClick={() => setShowCart(true)} className="w-6 h-6">
                  <Image src={Premium} alt="Premium" width={24} height={24} />
                </button>

                <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-[#FF9F0D]">
                  {showMobileMenu ? <X size={25} /> : <Menu size={25} />}
                </button>
                {showCart && <Cart />}
              </div>
            </div>

            {/* Mobile Navigation (Hidden by Default) */}
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

          </header>
        </div>

        {/* Content */}
        <div className="relative z-10 mt-16 text-white flex justify-between items-center gap-10">
          <div>
            <SocialSidebar />
          </div>

          <div className="space-y-4 w-full">
            {/* Left Section */}
            <h2 className="text-[#FF9F0D] italic text-[32px] leading-10 mt-8">
              It’s Quick & Amusing!
            </h2>
            <h1 className="text-6xl lg:text-6xl font-bold leading-[68px]">
              <span className="text-yellow-500">Th</span>e Art of Speed Food
              Quality
            </h1>
            <p className="leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>
            <button className="bg-[#FF9F0D] px-6 text-[#E0DFDF] rounded-full w-[190px] h-[60px]">
              See Menu
            </button>
          </div>

          {/* Right Section */}
          <div className="relative mt-8 hidden md:block">
            {/* Main Dish Image */}
            <Image
              src={Pic01}
              alt="Food Dish"
              width={1020}
              height={1000}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
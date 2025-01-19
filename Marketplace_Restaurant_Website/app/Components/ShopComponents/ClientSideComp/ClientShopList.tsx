"use client";

import { useSearchParams } from "next/navigation";
import { Toaster } from "react-hot-toast";
import ProductList from "./ProductList";
import StateContext from "@/app/context/StateContext";
import Header from "../../Header";
import BgPic from "../../BgPic";
import Sidebar from "../Sidebar";
import Pagination from "../Pagination";
import { useState } from "react";

export default function ClientShopList({ productData }: { productData: any[] }) {
    const searchParams = useSearchParams();
    const currentPage = parseInt(searchParams.get("page") || "1", 10);

    const [sortOrder, setSortOrder] = useState("Newest");

    // Handle sorting based on user selection (Newest or Oldest)
    let sortedProducts = sortOrder === "Oldest" ? [...productData].reverse() : [...productData];

    // Handle product ordering based on page number (reverse when page is odd)
    const orderedProducts = currentPage % 2 === 1 ? [...sortedProducts].reverse() : sortedProducts;

    // Ensure at least 12 products are displayed by repeating products
    const minProductsNeeded = 12;
    let displayedProducts = [...orderedProducts];

    while (displayedProducts.length < minProductsNeeded) {
        displayedProducts = [...displayedProducts, ...orderedProducts];
    }

    displayedProducts = displayedProducts.slice(0, minProductsNeeded);

    return (
        <StateContext>
            <Toaster />
            <Header />
            <section className="bg-white font-sans text-[#333333]">
                <BgPic PageHeading="Our Shop" PageName="shop" />
                <div className="bg-white min-h-screen px-24 py-20 gap-x-8 text-[#333333]">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center space-x-4">
                                <label className="text-xl">Sort By :</label>
                                <select
                                    className="border border-[#E0E0E0] min-w-[236px] rounded-md px-3 py-1 text-[#BDBDBD] text-[18px]"
                                    defaultValue="Newest" value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                >
                                    <option>Newest</option>
                                    <option>Oldest</option>
                                </select>

                                <label className="text-xl">Show :</label>
                                <select className="border border-[#E0E0E0] min-w-[236px] rounded-md px-3 py-1 text-[#BDBDBD] text-[18px]">
                                    <option>Default</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <ProductList displayedProducts={displayedProducts} />
                            <Sidebar />
                        </div>
                    </div>

                    {/* Pagination Component */}
                    <h2 className="text-2xl font-bold text-center">
                        Page <span className="text-[#FF9F0D]">{currentPage}</span>
                    </h2>
                    <Pagination currentPage={currentPage} />
                </div>
            </section>
        </StateContext>
    );
}

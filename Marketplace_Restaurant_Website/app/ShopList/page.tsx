import Link from "next/link";
import BgPic from "../Components/BgPic";
import Image from "next/image";
import Pagination from "../Components/ShopComponents/Pagination";
import Header from "../Components/Header";
import { fetchProduct } from "@/sanity/utils";
import { urlFor } from "@/sanity/lib/image";
import StateContext from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import Sidebar from "../Components/ShopComponents/Sidebar";

export default async function ShopList({ searchParams }: { searchParams: { query?: string; page?: string } }) {
    const searchQuery = searchParams.query || "";
    const currentPage = parseInt(searchParams.page || "1", 10); // Get page number from URL

    // Fetch products from API
    const productData = await fetchProduct();

    // Reverse order on even pages
    const orderedProducts = currentPage % 2 === 0 ? [...productData].reverse() : productData;

    // Ensure we have enough products by repeating the list
    const minProductsNeeded = 12; // Adjust this to the number of items per page
    let displayedProducts = [...orderedProducts];

    // Keep adding products until we reach the required amount
    while (displayedProducts.length < minProductsNeeded + 3) {
        displayedProducts = [...displayedProducts, ...orderedProducts];
    }
    displayedProducts = displayedProducts.slice(0, minProductsNeeded); // Ensure only the required number is shown

    return (
        <StateContext>
            <Toaster />
            <Header />
            <section className="bg-white font-sans text-[#333333]">
                <BgPic PageHeading="Search Results" PageName="Search" />
                <div className="bg-white min-h-screen px-24 py-20 gap-x-8 text-[#333333]">
                    <div className="container mx-auto px-4 py-6">
                        <h2 className="text-2xl font-bold mb-4">
                            Showing products - Page <span className="text-orange-500">{currentPage}</span>
                        </h2>

                        <div className="flex gap-6">
                            <div className="w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-6">
                                {displayedProducts.map((product, index) => (
                                    <div key={index} className="overflow-hidden">
                                        <Link href={`/product/${product.slug}`} passHref>
                                            <Image
                                                src={urlFor(product.image).url()}
                                                alt={product.name}
                                                width={312}
                                                height={267}
                                                className="object-cover w-full h-48"
                                                priority
                                            />
                                        </Link>
                                        <div className="py-2">
                                            <h3 className={`text-lg ${product.originalPrice ? "font-bold" : "font-normal"}`}>
                                                {product.name}
                                            </h3>
                                            <p className="text-[#FF9F0D] flex justify-between">
                                                ${product.price.toFixed(2)}
                                                {product.originalPrice && (
                                                    <span className="text-[#828282] line-through">
                                                        ${product.originalPrice.toFixed(2)}
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Sidebar */}
                            <Sidebar />
                        </div>
                    </div>

                    {/* Pagination Component */}
                    <Pagination currentPage={currentPage} />
                </div>
            </section>
        </StateContext>
    );
}

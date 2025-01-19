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

export default async function ShopList({ searchParams }: { searchParams: { query?: string } }) {
    const searchQuery = searchParams.query || "";
    const productData = await fetchProduct();

    const filteredProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <StateContext>
            <Toaster />
            <Header />
            <section className="bg-white font-sans text-[#333333]">

                <BgPic PageHeading="Search Results" PageName="Search" />

                <div className="bg-white min-h-screen px-24 py-20 gap-x-8 text-[#333333]">
                    <div className="container mx-auto px-4 py-6">
                        <h2 className="text-2xl font-bold mb-4">
                            Showing results for: <span className="text-[#FF9F0D] ml-1">{searchQuery}</span>
                        </h2>

                        {filteredProducts.length === 0 ? (
                            <p className="text-gray-500">No products found.</p>
                        ) : (
                            <div className="flex gap-6">
                                <div className="w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredProducts.map((product, index) => (
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
                        )}
                    </div>
                    <Pagination currentPage={1} />
                </div>
            </section>
        </StateContext>
    );
}
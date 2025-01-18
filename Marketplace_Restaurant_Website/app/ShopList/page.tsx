import Link from 'next/link';
import BgPic from '../Components/BgPic';
import Image from "next/image";
import Pagination from '../Components/ShopComponents/Pagination';
import Header from "../Components/Header"
import { fetchProduct } from "@/sanity/utils";
// import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { urlFor } from '@/sanity/lib/image';
import StateContext from '../context/StateContext';
import { Toaster } from "react-hot-toast";
import Sidebar from '../Components/ShopComponents/Sidebar';

// interface productProp {
//     image: SanityImageSource;
//     name: string;
//     price: number;
//     discount: number;
//     slug: string;
// }

export default async function ShopList() {
    const productData = await fetchProduct();
    return (
        <StateContext>
            <Toaster />
            <Header />
            <section className="bg-white font-sans text-[#333333]">

                <BgPic PageHeading='Our Shop' PageName='Shop' />

                <div className="bg-white min-h-screen px-24 py-20 gap-x-8 text-[#333333]">
                    {/* Container */}
                    <div className="container mx-auto px-4 py-6">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center space-x-4">
                                <label className="text-xl">Sort By :</label>
                                <select className="border border-[#E0E0E0] min-w-[236px] rounded-md px-3 py-1 text-[#BDBDBD] text-[18px]">
                                    <option>Newest</option>
                                    <option>Oldest</option>
                                </select>

                                <label className="text-xl">Show :</label>
                                <select className="border border-[#E0E0E0] min-w-[236px] rounded-md px-3 py-1 text-[#BDBDBD] text-[18px]">
                                    <option>Default</option>
                                </select>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex gap-6">
                            {/* Products Grid */}
                            <div className="w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-6">
                                {Array.from({ length: Math.ceil(12 / productData.length) }) // Repeat products
                                    .flatMap(() => productData)
                                    .slice(0, 12) // Limit to 12 items
                                    .map((product, index) => (
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

                    <Pagination />

                </div>
            </section >
        </StateContext>
    );
}

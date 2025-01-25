import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    slug: string;
}

interface ProductListProps {
    displayedProducts: Product[];
}

const ProductList = ({ displayedProducts }: ProductListProps) => {
    return (
        <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6">
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
    );
};

export default ProductList;

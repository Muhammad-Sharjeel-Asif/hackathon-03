'use client'

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Left from "@/app/Components/ShopComponents/Left.png";
import Right from "@/app/Components/ShopComponents/Right.png";

const Pagination = ({ currentPage }: { currentPage: number }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const totalPages = 3;
    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;

        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());

        router.push(`?${params.toString()}`, { scroll: false }); // Update URL without reload
    };

    return (
        <div className="flex justify-center mt-4 gap-x-3">
            {/* Previous Button */}
            <button
                className="flex justify-center items-center w-[50px] h-[50px] border border-[#F2F2F2] disabled:opacity-50"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <Image src={Left} alt="Left" width={14} height={17} />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    className={`w-[50px] h-[50px] border border-[#F2F2F2] ${
                        currentPage === page ? "text-white bg-[#FF9F0D]" : "text-[#FF9F0D] hover:text-white hover:bg-[#FF9F0D]"
                    }`}
                    onClick={() => goToPage(page)}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                className="flex justify-center items-center w-[50px] h-[50px] border border-[#F2F2F2] disabled:opacity-50"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <Image src={Right} alt="Right" width={14} height={17} />
            </button>
        </div>
    );
};

export default Pagination;

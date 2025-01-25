"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Glass from "@/app/Public/MagnifyingGlass.png";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (query.trim()) {
            router.push(`/Searchpage?query=${encodeURIComponent(query)}`)
        }
    };

    return (
        <div className="flex justify-end items-center">
            <input
                type="text"
                placeholder="Search Product"
                className="bg-[#FF9F0D1A] h-[46px] w-[202px] placeholder:pl-6 outline-[#FF9F0D]"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>
                <Image src={Glass} alt='Glass' className='bg-[#FF9F0D] p-3 h-[46px] w-[46px]' />
            </button>
        </div>
    );
};

export default SearchBar;

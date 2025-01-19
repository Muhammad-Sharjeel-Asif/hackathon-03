"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Search from "@/app/Public/MagnifyingGlass.png";
// import { useStateContext } from "@/app/context/StateContext";
// import Cart from "../ShoppingList/Cart";
// import Premium from '@/app/Public/Tote.png'

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
        placeholder="Search..."
        className="bg-transparent px-4 h-[54px] rounded-l-full border-l border-t border-b border-[#FF9F0D] outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="px-4 py-2 h-[54px] rounded-r-full border border-[#FF9F0D] border-l-0" onClick={handleSearch}>
        <Image src={Search} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;

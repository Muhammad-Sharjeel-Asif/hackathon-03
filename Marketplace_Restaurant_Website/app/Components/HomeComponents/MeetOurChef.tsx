"use client";

import { urlFor } from "@/sanity/lib/image";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchChefs } from "@/sanity/utils";
import Link from "next/link";
import { ChefProp } from "../Chef_components/ChefSection";

const MeetOurChef = () => {
  const [chefData, setChefData] = useState<ChefProp[]>([]);

  // Fetch chefs on component mount
  useEffect(() => {
    const getChefs = async () => {
      const data = await fetchChefs();
      // Duplicate the data to create a seamless scrolling effect
      setChefData([...data, ...data]);
    };
    getChefs();
  }, []);

  return (
    <section className="mx-6 sm:mx-8 md:mx-12 lg:mx-28 text-white pb-12 px-4 sm:px-6 lg:px-6">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <p className="italic text-[#FF9F0D] text-[24px] sm:text-[28px] lg:text-[32px] mb-2">Chefs</p>
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-8">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h2>

        {/* Scrolling Chef Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 animate-scroll whitespace-nowrap"
            style={{ animation: `scroll 20s linear infinite` }}
          >
            {chefData.map((chef: ChefProp, index: number) => (
              <div
                key={index}
                className="relative overflow-hidden aspect-[4/5] rounded-md shadow-lg flex-shrink-0 w-[250px]"
              >
                {/* Chef Image */}
                <Image
                  src={urlFor(chef.image).url()}
                  alt={chef.name}
                  fill
                  className="w-full h-[391px] object-cover rounded-md"
                />

                {/* Overlay for Name and Role */}
                <div className="absolute bottom-0 left-0 w-[181px] h-[67px] bg-white text-[#333333] py-2 px-4 rounded-bl-md">
                  <h3 className="text-left text-lg font-bold leading-tight">
                    {chef.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See More Button */}
        <div className="mt-12">
          <Link
            href="/Chef"
            className="bg-transparent border border-[#FF9F0D] text-white py-4 px-10 rounded-full w-[155px] h-[50px]"
          >
            See More
          </Link>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default MeetOurChef;
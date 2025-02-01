'use client';

import Link from "next/link";

interface PagesDropdownProps {
  isMobile: boolean;
}

export const PagesDropdown: React.FC<PagesDropdownProps> = ({ isMobile }) => {
  return (
    <div className={`${isMobile ? 'mt-2 pl-4' : 'absolute top-full left-0 mt-1 bg-[#0D0D0D] shadow-lg rounded-md'} space-y-2 min-w-[200px] py-2`}>
      <Link href="/AboutUs" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#0D0D0D]">
        About Us
      </Link>
      <Link href="/FaqPage" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#0D0D0D]">
        FAQ
      </Link>
      <Link href="/Chef" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#0D0D0D]">
        Our Team
      </Link>
    </div>
  );
};
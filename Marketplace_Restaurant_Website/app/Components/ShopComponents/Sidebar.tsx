import React from 'react'
import Banner from './Banner';
import Slider from './Slider';
import LatestProduct from './LatestProduct';
import SideSearchBar from './SideSearchBar';

const Sidebar = () => {
    return (
        <div>
            {/* Categories */}
            <div className="border border-[#F2F2F2] px-9 py-5 mx-auto">
                <div className='flex'>
                    <SideSearchBar />
                </div>
                <h4 className="font-bold text-xl my-4">Category</h4>
                <ul className="space-y-1">
                    <li><input type="checkbox" /> <span>Sandwiches</span></li>
                    <li><input type="checkbox" /> <span>Burger</span></li>
                    <li><input type="checkbox" /> <span>Chicken Chup</span></li>
                    <li><input type="checkbox" /> <span>Drink</span></li>
                    <li><input type="checkbox" /> <span>Pizza</span></li>
                    <li><input type="checkbox" /> <span>Thi</span></li>
                    <li><input type="checkbox" /> <span>Non Veg</span></li>
                    <li><input type="checkbox" /> <span>Uncategorized</span></li>
                </ul>

                <Banner />

                <Slider />

                <LatestProduct />

                <h4 className="font-bold text-xl mb-3">Product Tags</h4>
                <div className="grid grid-cols-3 gap-x-3 gap-y-1 text-[#4F4F4F]">
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Services</span>
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Our Menu</span>
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Pizza</span>
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Cup cake</span>
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Burger</span>
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Cookies</span>
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Our Shop</span>
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 col-span-2 cursor-pointer">Tandoori Chicken</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
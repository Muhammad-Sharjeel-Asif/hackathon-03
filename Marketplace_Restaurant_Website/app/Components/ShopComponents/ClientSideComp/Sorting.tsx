import React from 'react'

const Sorting = () => {
    return (
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
    )
}

export default Sorting;
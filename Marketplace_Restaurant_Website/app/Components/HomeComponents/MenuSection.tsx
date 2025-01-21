import Image from "next/image";
import Pic01 from "./HomeMenu01.jpg";
import Pic02 from "./HomeMenu02.jpg";
import Pic03 from "../Menu_Component/Menu02.jpg";
import Pic04 from "./HomeMenu03.jpg";
import Pic05 from "./HomeMenu04.jpg";
import Pic06 from "./HomeAbout03.jpg";
import Pic07 from "./HomeMenu06.jpg";
import Pic08 from "./HomeFoodCategory02.jpg";
import Dish from "./HomeMenuDish.png";
import Leaf from "./HomeMenuLeaf.png";

export default function Menu() {
  const menuItems = [
    { title: "Lettuce Leaf", price: "12.5", image: Pic01 },
    { title: "Glow Cheese", price: "12.5", image: Pic02 },
    { title: "Fresh Breakfast", price: "14.5", image: Pic03 },
    { title: "Italian Pizza", price: "14.5", image: Pic04 },
    { title: "Mild Butter", price: "12.5", image: Pic05 },
    { title: "Slice Beef", price: "12.5", image: Pic06 },
    { title: "Fresh Bread", price: "12.5", image: Pic07 },
    { title: "Mushroom Pizza", price: "12.5", image: Pic08 },
  ];

  return (
    <div className="text-white min-h-screen mt-8 mb-20 px-4 sm:px-10 md:px-16 lg:px-24">
      {/* Title */}
      <div className="text-center py-10">
        <h3 className="italic text-[#FF9F0D] text-[24px] sm:text-[28px] lg:text-[32px] my-4">
          Classic & pick
        </h3>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span className="text-[#FF9F0D]">Fr</span>om Our Menu
        </h1>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-4 text-sm sm:text-lg lg:text-xl mb-8">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map(
          (category, index) => (
            <div
              key={index}
              className={`hover:text-[#FF9F0D] cursor-pointer hover:font-bold ${
                category === "Breakfast" ? "text-[#FF9F0D] font-bold" : ""
              }`}
            >
              {category}
            </div>
          )
        )}
      </div>

      {/* Menu Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10">
        {/* Food Image on Left */}
        <div className="relative hidden lg:block justify-center items-center mb-10 lg:mb-0">
          {/* Leaf Image (Base Image) */}
          <div className="relative">
            <Image
              src={Leaf}
              alt="Leaf Image"
              width={300} // Adjusted for responsiveness
              height={300}
              className="rounded-full object-cover"
            />

            {/* Dish Image (Overlay Image) */}
            <Image
              src={Dish}
              alt="Dish Image"
              width={150} // Adjusted for responsiveness
              height={150}
              className="rounded-full absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 w-full">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 sm:space-x-6 rounded-md"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-[70px] sm:w-[80px] h-[70px] sm:h-[80px] rounded-lg object-cover"
              />
              <div className="flex flex-col justify-between">
                <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                <p className="text-sm sm:text-base">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[#FF9F0D] text-base sm:text-lg font-bold">
                  {item.price}$
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

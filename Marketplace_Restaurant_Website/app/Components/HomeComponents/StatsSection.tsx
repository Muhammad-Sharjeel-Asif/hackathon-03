import StatsBg from "./Home02.jpg";
import Image from "next/image";
import Cap from "../Menu_Component/Cap.png";
import Burger from "../Menu_Component/Burger.png";
import Spoon from "../Menu_Component/Spoon.png";
import Pizza from "../Menu_Component/Pizza.png";

export default function StatsSection() {
  return (
    <section
      className="relative h-[400px] sm:h-[500px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${StatsBg.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <div className="container mx-auto px-6 sm:px-10 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Single Stat */}
          <div className="flex flex-col items-center text-center">
            <Image src={Cap} alt="Cap" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" />
            <p className="mt-4 text-sm sm:text-lg md:text-xl font-bold">
              Professional Chefs
            </p>
            <h3 className="text-xl sm:text-3xl md:text-5xl font-bold">420</h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image src={Burger} alt="Burger" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" />
            <p className="mt-4 text-sm sm:text-lg md:text-xl font-bold">Items Of Food</p>
            <h3 className="text-xl sm:text-3xl md:text-5xl font-bold">320</h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image src={Spoon} alt="Spoon" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" />
            <p className="mt-4 text-sm sm:text-lg md:text-xl font-bold">
              Years Of Experience
            </p>
            <h3 className="text-xl sm:text-3xl md:text-5xl font-bold">30+</h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image src={Pizza} alt="Pizza" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" />
            <p className="mt-4 text-sm sm:text-lg md:text-xl font-bold">Happy Customers</p>
            <h3 className="text-xl sm:text-3xl md:text-5xl font-bold">220</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

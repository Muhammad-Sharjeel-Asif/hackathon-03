import Image from "next/image";
import Header from "../Components/Header/Header";
import BgPic from "@/app/Public/BgPic";
import Pic01 from "../Components/HomeComponents/WhyUs01.jpg";
import Pic02 from "../Components/HomeComponents/WhyUs05.jpg";
import Pic03 from "../Components/HomeComponents/WhyUs03.jpg";
import Link from "next/link";
import WhyChooseUs from "../Components/HomeComponents/WhyChooseUs";
import Chef from '../Public/Chef11.jpg'
import Food from "../Components/AboutUs/AboutUsPic01.jpg";
import Clean from "../Components/AboutUs/AboutUsPic02.jpg";

export default function Aboutus() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <BgPic PageHeading='About Us' PageName='About' />

        {/* About Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={Pic01}
                  alt="Our kitchen team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="relative h-44 rounded-lg overflow-hidden">
                  <Image
                    src={Pic02}
                    alt="Fresh ingredients"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={Pic03}
                    alt="Happy customers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-[#FF9F0D] text-4xl font-semibold italic">About us</p>
              <h2 className="text-4xl font-bold text-[#333333]">
                Food is an important part of a balanced diet
              </h2>
              <p className="text-[#4F4F4F] text-lg leading-relaxed">
                At our food truck, we believe in creating memorable dining experiences through
                carefully crafted recipes and premium ingredients. Our passion for quality
                cuisine drives us to deliver exceptional flavors in every bite.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={'/Menu'} className="bg-[#FF9F0D] text-white px-8 py-3 rounded-full hover:bg-orange-500 transition">
                  Explore Menu
                </Link>
                <Link href={'https://youtu.be/cWJ9KYqWVqY?si=Lw6DUhdz13Buie0m'} target="blank" className="flex items-center gap-2 text-[#333333] px-8 py-3 rounded-full border border-gray-300 hover:border-[#FF9F0D] transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Video
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <div className="bg-black md:pt-20 pb-2">
          <WhyChooseUs />
        </div>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="flex justify-center mb-6">
                <Image
                  src={Chef}
                  alt="Expert chefs"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Expert Chefs</h3>
              <p className="text-[#4F4F4F]">
                Our culinary team brings years of experience and passion to every dish
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="flex justify-center mb-6">
                <Image
                  src={Food}
                  alt="Fresh ingredients"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Premium Ingredients</h3>
              <p className="text-[#4F4F4F]">
                We source only the freshest, highest quality ingredients for our recipes
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition">
              <div className="flex justify-center mb-6">
                <Image
                  src={Clean}
                  alt="Clean environment"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">Clean Environment</h3>
              <p className="text-[#4F4F4F]">
                Maintaining the highest standards of cleanliness and food safety
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
import Link from "next/link";
import Image from "next/image";
import Google from "@/app/Public/Google.png";
import Apple from "@/app/Public/Apple.png";
import User from "@/app/Public/User (2).png";
import Email from "@/app/Public/EnvelopeSimple (1).png";
import Lock from "@/app/Public/Lock.png";
import BgPic from "@/app/Public/BgPic";
import Header from "../Components/Header/Header"

export default function SignUpPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#FFFFFF]">

        {/* Hero Section */}
        <BgPic PageHeading='Sign Up page' PageName='sign up' />

        {/* Signup Form */}
        <section className="w-full px-4 sm:px-0 mx-auto mt-8 sm:mt-[120px] max-w-md">
          <div className="container mx-auto bg-white shadow-lg rounded-md p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Sign Up</h3>
            <form>
              {/* Name Input */}
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image
                    src={User}
                    alt="User Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-3 pl-12
                   focus:ring-2 focus:ring-yellow-300 placeholder-gray-700
                   focus:outline-none focus:border-yellow-400"
                  placeholder='Name'
                />
              </div>

              {/* Email Input */}
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image
                    src={Email}
                    alt="Email Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-3 pl-12
                   focus:ring-2 focus:ring-yellow-300 placeholder-gray-700
                   focus:outline-none focus:border-yellow-400"
                  placeholder="Email"
                />
              </div>

              {/* Password Input */}
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image
                    src={Lock}
                    alt="Lock Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <input
                  type="password"
                  className="w-full border rounded-lg px-4 py-3 pl-12
                   focus:ring-2 focus:ring-yellow-300 placeholder-gray-700
                   focus:outline-none focus:border-yellow-400"
                  placeholder="Password"
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 accent-orange-500 mr-2"
                />
                <label htmlFor="remember" className="text-gray-700">Remember me?</label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white 
                 font-semibold py-3 rounded-lg transition-colors"
              >
                Sign Up
              </button>

              {/* Forgot Password */}
              <p className="text-center mt-4">
                <Link href="/forgot-password" className="text-orange-500 hover:text-orange-600">
                  Forgot password?
                </Link>
              </p>
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <p className="text-center text-gray-600 mb-6">or</p>

              <button className="w-full bg-white border border-gray-300 text-gray-700 
                        rounded-lg py-3 px-4 mb-3 hover:bg-gray-50 transition-colors
                        flex items-center justify-center">
                <Image
                  src={Google}
                  alt="Google"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-3"
                />
                Sign up with Google
              </button>

              <button className="w-full bg-white border border-gray-300 text-gray-700 
                        rounded-lg py-3 px-4 hover:bg-gray-50 transition-colors
                        flex items-center justify-center">
                <Image
                  src={Apple}
                  alt="Apple"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-3"
                />
                Sign up with Apple
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
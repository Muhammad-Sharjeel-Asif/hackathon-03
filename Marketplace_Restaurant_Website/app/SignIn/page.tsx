import Link from "next/link";
import Image from "next/image";
import BgPic from "@/app/Public/BgPic";
import Google from "@/app/Public/Google.png";
import Apple from "@/app/Public/Apple.png";
import Email from "@/app/Public/EnvelopeSimple (1).png";
import Lock from "@/app/Public/Lock.png";
import Header from "../Components/Header/Header"

export default function SigninPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div>
          {/* Header Section */}
          <BgPic PageHeading='Sign In Page' PageName='sign in' />
        </div>

        {/* Signin Form Section */}
        <section className="w-full px-4 mx-auto mt-8 pb-8 md:my-12 md:pb-12">
          <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Sign In</h3>
            <form>
              {/* Email Input */}
              <div className="relative mt-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Image
                    src={Email}
                    alt="Email Icon"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </div>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-3 pl-10 focus:ring focus:ring-yellow-300 placeholder-gray-600"
                  placeholder="Email"
                />
              </div>

              {/* Password Input */}
              <div className="relative mt-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Image
                    src={Lock}
                    alt="Lock Icon"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </div>
                <input
                  type="password"
                  className="w-full border rounded-lg px-4 py-3 pl-10 focus:ring focus:ring-yellow-300 placeholder-gray-600"
                  placeholder="Password"
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center mt-4 mb-6">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#FF9F0D] border-gray-300 rounded focus:ring-[#FF9F0D]"
                />
                <span className="ml-2 text-gray-700">Remember me?</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FF9F0D] hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Sign In
              </button>

              {/* Forgot Password */}
              <p className="text-center mt-4">
                <Link href="/forgot-password" className="text-[#FF9F0D] hover:text-orange-500">
                  Forgot password?
                </Link>
              </p>
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <p className="text-center text-gray-500 mb-6">or</p>

              {/* Google Button */}
              <button className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-3 px-4 hover:bg-gray-50 transition-colors flex items-center justify-center">
                <Image
                  src={Google}
                  alt="Google"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2"
                />
                <span>Sign up with Google</span>
              </button>

              {/* Apple Button */}
              <button className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-3 px-4 hover:bg-gray-50 transition-colors flex items-center justify-center mt-4">
                <Image
                  src={Apple}
                  alt="Apple"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2"
                />
                <span>Sign up with Apple</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
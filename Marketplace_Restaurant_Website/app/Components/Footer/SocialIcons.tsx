import Image from "next/image";
import Link from "next/link";
import FbIcon from "./FbIcon.png";
import InstaIcon from "./Instagram.png";
import Twitter from "./Twit.png";
import Pin from "./PinInterest.png";
import Youtube from "./Youtube.png";

const SocialIcons = () => {
  return (
    <footer className="bg-[#4F4F4F] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Copyright Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4">
          <Link href={"/"} className="h-[36px] w-[36px] bg-white flex justify-center items-center rounded">
            <Image src={FbIcon} alt="Facebook" width={16} height={16} />
          </Link>

          <Link href={"/"} className="h-[36px] w-[36px] bg-white flex justify-center items-center rounded">
            <Image src={Twitter} alt="Twitter" width={16} height={16} />
          </Link>

          <Link href={"/"} className="h-[36px] w-[36px] bg-white flex justify-center items-center rounded">
            <Image src={InstaIcon} alt="Instagram" width={16} height={16} />
          </Link>

          <Link href={"/"} className="h-[36px] w-[36px] bg-white flex justify-center items-center rounded">
            <Image src={Youtube} alt="YouTube" width={16} height={16} />
          </Link>

          <Link href={"/"} className="h-[36px] w-[36px] bg-white flex justify-center items-center rounded">
            <Image src={Pin} alt="Pinterest" width={16} height={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default SocialIcons;

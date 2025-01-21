import { Clock } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <div className="w-full max-w-sm px-4 sm:px-0">
      <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">About Us.</h3>
      <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-6 sm:leading-7">
        Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
      </p>
      <div className="flex items-start gap-4">
        <div className="bg-[#FF9F0D] flex justify-center items-center p-3 rounded w-16 h-16 sm:w-[77.23px] sm:h-[70.79px]">
          <Clock className="text-white" />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-sm sm:text-base">Opening Hours</h4>
          <p className="text-xs sm:text-sm">Mon - Sat (8.00 - 6.00)</p>
          <p className="text-xs sm:text-sm">Sunday - Closed</p>
        </div>
      </div>
    </div>
  );
}

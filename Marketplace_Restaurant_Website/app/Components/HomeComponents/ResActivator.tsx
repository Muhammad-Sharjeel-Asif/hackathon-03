import ResActImg from "./ResActivator.jpg";
import Image from "next/image";
import Play from "./Play.png";

const ResActivator = () => {
  return (
    <section
      className="bg-cover bg-center h-[558px] flex items-center justify-end sm:justify-center"
      style={{
        backgroundImage: `url(${ResActImg.src})`,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="mx-4 sm:mx-12 md:mx-36 text-end sm:text-center">
        {/* Heading */}
        <h2 className="italic text-[#FF9F0D] text-[20px] sm:text-[28px] md:text-[32px] mb-2">
          Restaurant Active Process
        </h2>
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-[#FF9F0D]">We</span> Document Every Food
          <span>
            {" "}
            <br /> Bean Process until it is saved
          </span>
        </h3>

        {/* Description */}
        <p className="my-4 sm:my-6 text-sm sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque <br className="hidden sm:block" /> bibendum non dui
          volutpat fringilla bibendum. Urna, elit augue urna,
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 sm:gap-6">
          <button className="w-[160px] sm:w-[190px] h-[50px] sm:h-[60px] bg-transparent border border-[#FF9F0D] rounded-full font-bold text-sm sm:text-base">
            Read More
          </button>

          <button className="flex items-center font-bold gap-x-2 text-sm sm:text-base">
            <span className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] rounded-full bg-[#FF9F0D] flex items-center justify-center">
              <Image src={Play} alt="Play" />
            </span>
            Play Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResActivator;

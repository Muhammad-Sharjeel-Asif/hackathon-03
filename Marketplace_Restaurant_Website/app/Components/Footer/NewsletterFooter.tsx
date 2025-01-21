export default function NewsletterSection() {
  return (
    <div className="w-full max-w-[1169px] mx-auto text-center mb-12 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Heading and Description */}
        <div className="flex flex-col md:px-8 lg:px-0 max-w-full md:max-w-[60%]">
          <h2 className="text-3xl font-bold mb-4 w-full">
            <span className="text-[#FF9F0D]">Still</span> You Need Our Support?
          </h2>
          <p className="mb-6 text-sm md:text-base w-full">
            Don’t wait, make a smart and logical quote here. It’s pretty easy.
          </p>
        </div>

        {/* Form Section */}
        <form className="w-full md:w-auto flex flex-col md:flex-row items-center gap-4 md:gap-0">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-grow bg-[#FF9F0D] text-white placeholder-white placeholder-opacity-60 px-4 py-3 rounded-md md:rounded-l-md md:rounded-r-none focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-[#FF9F0D] px-6 py-3 rounded-md md:rounded-r-md md:rounded-l-none font-semibold hover:bg-[#FF9F0D] hover:text-white transition duration-300"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
}

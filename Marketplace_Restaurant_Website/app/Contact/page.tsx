import Header from "../Components/Header/Header";
import BgPic from "@/app/Public/BgPic";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <BgPic PageHeading='Contact Us' PageName='Contact' />

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto">
          <div className="">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-[#333333] w-full mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-[#4F4F4F] mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF9F0D] focus:ring-2 focus:ring-orange-200 transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-[#4F4F4F] mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF9F0D] focus:ring-2 focus:ring-orange-200 transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[#4F4F4F] mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF9F0D] focus:ring-2 focus:ring-orange-200 transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF9F0D] text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
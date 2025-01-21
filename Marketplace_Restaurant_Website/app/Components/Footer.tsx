import AboutUsSection from "./Footer/AboutFooter";
import HelpSection from "./Footer/HelpSection";
import NewsletterSection from "@/app/Components/Footer/NewsletterFooter";
import RecentPostsSection from "./Footer/RecPost";
import SocialIcons from "./Footer/SocialIcons";
import UsefulLinksSection from "./Footer/LinkSection";


export default function Footer() {
  return (
    <>
      <footer className="mt-6 lg:mx-20">
        <div className="container mx-auto px-4 py-16">
          <NewsletterSection />
          <div className="border-t border-[#FF9F0D] my-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 sm:mt-14">
            <AboutUsSection />
            <UsefulLinksSection />
            <HelpSection />
            <RecentPostsSection />
          </div>


        </div>
      </footer>
      <SocialIcons />
    </>
  )
}

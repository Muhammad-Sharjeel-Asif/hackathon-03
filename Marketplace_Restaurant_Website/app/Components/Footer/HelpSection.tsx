import Link from "next/link";

export default function HelpSection() {
  const links = [
    { name: 'FAQ', link: '/FaqPage' },
    { name: 'Term & Condition', link: '/FaqPage' },
    { name: 'Privacy', link: '/FaqPage' },
    { name: 'Contact', link: '/Contact' },
    { name: 'Support Policy', link: '/FaqPage' }
  ];
  return (
    <div className="w-full max-w-xs px-4 sm:px-0">
      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Help?</h3>
      <ul className="text-sm sm:text-base leading-6 flex flex-col gap-2 sm:gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.link} className="hover:text-[#FF9F0D] transition duration-300">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

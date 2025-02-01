import Link from "next/link";

export default function UsefulLinksSection() {
  const links = [{ name: 'About', link: '/AboutUs' },
  { name: 'News', link: '/Blog' },
  { name: 'Partners', link: '/Chef' },
  { name: 'Team', link: '/Chef' },
  { name: 'Menu', link: '/Menu' },
  { name: 'Contact', link: '/Contact' },
  ];
  return (
    <div className="w-full max-w-xs px-4 sm:px-0">
      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Useful Links</h3>
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

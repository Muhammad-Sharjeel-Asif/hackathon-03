export default function HelpSection() {
  const links = ['FAQ', 'Term & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'];
  return (
    <div className="w-full max-w-xs px-4 sm:px-0">
      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Help?</h3>
      <ul className="text-sm sm:text-base leading-6 flex flex-col gap-2 sm:gap-4">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-[#FF9F0D] transition duration-300">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

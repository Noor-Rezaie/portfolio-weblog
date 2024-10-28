import { content } from "../Content";
import { HiMenu } from "react-icons/hi";
import { createElement, useState } from "react";

function Navbar() {
  const { nav } = content;
  const [isOpen, setIsOpen] = useState(0);

  // THIS IS FOR TOGGLEING THE HUMBERGER MENU BUTTON
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  return (
    <div className="flex justify-center w-full bg-green-50">
      <button
        onClick={() => setIsVisibleMenu(!isVisibleMenu)}
        className="rounded-md duration-300 bg-green-500 cursor-pointer fixed top-10 left-10 z-[999] text-slate-200 p-1"
      >
        <HiMenu size={34} />
      </button>
      <nav
        className={`fixed flex items-center md:gap-5 gap-2 md:px-6 md:py-3 px-3 py-2 bg-green-100/20 rounded-xl backdrop-blur-lg shadow-sm z-[999] ${
          isVisibleMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, index) => (
          <a
            onClick={() => setIsOpen(index)}
            className={`hover:scale-110  duration-300 rounded-full sm:cursor-pointer text-3xl p-4 ${
              index === isOpen && "bg-green-200 text-slate-500"
            }`}
            key={index}
            href={item.link}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;

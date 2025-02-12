import { content } from "../Content";
import { HiMenu } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { createElement, useState } from "react";

function Navbar() {
  const { nav } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      {/* دکمه منو برای موبایل */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed z-50 p-3 text-white transition-all duration-300 bg-green-500 rounded-md shadow-2xl top-8 left-8"
      >
        {isMenuOpen ? <VscChromeClose size={30} /> : <HiMenu size={30} />}
      </button>

      {/* منوی ناوبری */}
      <nav
        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-100/80 backdrop-blur-md shadow-md rounded-full px-5 py-3 flex items-center gap-4 transition-all duration-500 ${
          isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {nav.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={() => setActiveIndex(index)}
            className={`text-2xl p-3 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-green-300 text-white"
                : "text-green-700"
            } hover:scale-110`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;

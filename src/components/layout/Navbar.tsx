import { Menu } from "lucide-react";
import { AnimatedLink } from "../ui/AnimatedLink";
import FoldText from "../ui/FoldText";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tighter">Bhaskar Matsagar.</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1 bg-[#171717]/80 backdrop-blur-md rounded-full px-6 py-2 border border-white/5">
        <ul className="flex items-center gap-6 text-sm">
          {navItems.map((item, idx) => (
            <li key={idx} className="flex items-center h-full">
              <a href={item.href} className="text-white/70 hover:text-white transition-colors inline-block relative py-1">
                <FoldText
                  text={item.name}
                  splitBy="char"
                  hinge="left"
                  trigger="hover"
                  duration={0.6}
                  stagger={0.045}
                  ease="back.out(1.2)"
                  perspective={925}
                  creaseShading={0.4}
                  fontSize={14}
                  fontWeight={500}
                  color="currentColor"
                />
              </a>
            </li>
          ))}
        </ul>
        
        <div className="w-px h-4 bg-white/10 mx-4"></div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white/70 hover:text-white transition-colors w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10"
        >
          •••
        </button>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-white/70 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </button>

      {/* Dropdown Menu (Simplified for this version) */}
      {isOpen && (
        <div className="absolute top-16 right-0 md:right-0 w-48 bg-[#171717] border border-white/10 rounded-2xl p-4 shadow-xl flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <AnimatedLink href="https://github.com/bhaskarmatsagar" className="text-sm text-white/70 hover:text-white">GitHub</AnimatedLink>
            <AnimatedLink href="https://www.linkedin.com/in/bhaskar-matsagar-46710432b/" className="text-sm text-white/70 hover:text-white">LinkedIn</AnimatedLink>
            <AnimatedLink href="https://www.instagram.com/your-profile" className="text-sm text-white/70 hover:text-white">Instagram</AnimatedLink>
          </div>
        </div>
      )}
    </nav>
  );
};

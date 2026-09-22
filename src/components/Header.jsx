import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import logo from "../assets/logoBranca.png";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../data/navLinks";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="w-full h-[50px] lg:h-[84px] bg-[#F5F5F5] flex items-center justify-between px-6 lg:px-[64px]">
      <img
        src={logo}
        alt="Lira Odontologia"
        className="w-[130px] lg:w-[170px] h-auto"
      />

      <nav className="hidden lg:flex lg:items-center lg:gap-[28px]">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-['IBM_Plex_Sans'] text-[15px] font-medium text-[#1E2D30] transition-colors hover:text-[#066165]"
          >
            {link.label}
          </a>
        ))}

        <a
          href="/#contato"
          className="rounded-[8px] bg-[#066165] px-[20px] py-[12px] font-['IBM_Plex_Sans'] text-[14px] font-semibold text-white"
        >
          Agende sua avaliação
        </a>
      </nav>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        className="w-[24px] h-[24px] bg-[#066165] rounded-[4px] flex items-center justify-center lg:hidden"
      >
        <Menu className="w-[14px] h-[14px] text-white" />
      </button>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

export default Header;

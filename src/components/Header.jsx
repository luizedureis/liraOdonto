import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import logo from "../assets/logoBranca.png";
import MobileMenu from "./MobileMenu";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="w-full h-[50px] bg-[#F5F5F5] flex items-center justify-between px-6">
      <img
        src={logo}
        alt="Lira Odontologia"
        className="w-[130px] h-auto"
      />

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        className="w-[24px] h-[24px] bg-[#066165] rounded-[4px] flex items-center justify-center"
      >
        <Menu className="w-[14px] h-[14px] text-white" />
      </button>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

export default Header;

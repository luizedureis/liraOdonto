import { Menu } from "lucide-react";
import logo from "../assets/logoBranca.png";

function Header() {
  return (
    <header className="w-full h-[50px] bg-[#F5F5F5] flex items-center justify-between px-6">
      <img
        src={logo}
        alt="Lira Odontologia"
        className="w-[130px] h-auto"
      />

      <button className="w-[24px] h-[24px] bg-[#066165] rounded-[4px] flex items-center justify-center">
        <Menu className="w-[14px] h-[14px] text-white" />
      </button>
    </header>
  );
}

export default Header;
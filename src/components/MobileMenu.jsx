import { X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/liraodontologobranca.png";

const links = [
  { label: "Início", href: "/#inicio" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Nossa História", href: "/#historia" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Tratamentos", href: "/#tratamentos" },
  { label: "Avaliações", href: "/#avaliacoes" },
  { label: "Contato", href: "/#contato" },
];

function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <nav
        className={`
          absolute right-0 top-0 flex h-full w-[80%] max-w-[320px] flex-col
          bg-[#054B4E] px-[24px] pb-[24px] pt-[20px]
          shadow-[-8px_0_24px_rgba(0,0,0,0.25)]
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between">
          <img src={logo} alt="Lira Odontologia" className="h-[38px] w-auto" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-[6px] border border-white/30 text-white"
          >
            <X className="h-[15px] w-[15px]" />
          </button>
        </div>

        <ul className="mt-[36px] flex flex-col gap-[24px]">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={onClose}
                className="font-['IBM_Plex_Serif'] text-[19px] text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;

import { Link } from "react-router-dom";
import { ArrowUp, Clock, MapPin, Phone } from "lucide-react";
import logo from "../assets/liraodontologobranca.png";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4V12H9v3h2v6h3v-6h2.2l.8-3H14v-1.5c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contato" className="bg-[#054B4E] px-4 pb-6 pt-10 text-white">
      <div className="flex flex-col items-center gap-[24px] text-center">
        <img src={logo} alt="Lira Odontologia" className="h-[70px] w-auto" />

        <div>
          <p className="font-['IBM_Plex_Sans'] text-[11px] font-semibold uppercase tracking-[0.08em] text-white/70">
            Acompanhe nas redes
          </p>

          <div className="mt-[10px] flex items-center justify-center gap-[10px]">
            <a
              href="https://www.instagram.com/liraodontologiajoaopessoa?igsh=M3dhYzE2MXE4eDVn&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10"
            >
              <InstagramIcon className="h-[16px] w-[16px] text-white" />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10"
            >
              <FacebookIcon className="h-[16px] w-[16px] text-white" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-['IBM_Plex_Serif'] text-[13px] font-semibold text-white">
            Atendimento
          </p>

          <div className="mt-[10px] flex flex-col items-center gap-[10px]">
            <a
              href="https://api.whatsapp.com/send?phone=558321812468"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-[6px]"
            >
              <Phone className="h-[13px] w-[13px] text-white/70" />
              <p className="font-['IBM_Plex_Sans'] text-[12px] text-white/80">
                (83) 2181-2468 (WhatsApp e ligação)
              </p>
            </a>

            <div className="flex items-start gap-[6px]">
              <Clock className="mt-[2px] h-[13px] w-[13px] shrink-0 text-white/70" />
              <div className="text-left font-['IBM_Plex_Sans'] text-[12px] leading-[17px] text-white/80">
                <p>Segunda-feira: 09h às 18h</p>
                <p>Terça a sexta-feira: 08h às 18h</p>
                <p>Sábado: apenas no 2º sábado do mês</p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/6rYs5nGPVHsDRiay7?g_st=iw"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-[6px] px-[24px]"
            >
              <MapPin className="mt-[2px] h-[13px] w-[13px] shrink-0 text-white/70" />
              <p className="font-['IBM_Plex_Sans'] text-[12px] leading-[16px] text-white/80">
                Rua Josefa Taveira, 1327, loja 102, Mangabeira, João Pessoa -
                PB, CEP: 58055-000
              </p>
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="mx-auto mt-[24px] flex items-center gap-[6px] font-['IBM_Plex_Sans'] text-[11px] font-semibold text-white/70"
      >
        <ArrowUp className="h-[13px] w-[13px]" />
        Ir para o topo
      </button>

      <div className="mt-[24px] h-px w-full bg-white/15" />

      <div className="mt-[16px] flex flex-col items-center gap-[4px] text-center">
        <p className="font-['IBM_Plex_Sans'] text-[10px] text-white/60">
          CNPJ: 59.390.859/0001-05
        </p>

        <p className="font-['IBM_Plex_Sans'] text-[10px] text-white/60">
          Responsável Técnica: Dra. Andreia Lira | CRO-PB 5735 | EPAO - 1280
        </p>
      </div>

      <div className="mt-[12px] flex flex-col items-center gap-[8px] text-center">
        <p className="font-['IBM_Plex_Sans'] text-[10px] text-white/60">
          © 2026 Lira Odontologia. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-[10px] font-['IBM_Plex_Sans'] text-[10px] text-white/60">
          <Link to="/politica-de-privacidade">Política de Privacidade</Link>
          <span>•</span>
          <a href="#">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

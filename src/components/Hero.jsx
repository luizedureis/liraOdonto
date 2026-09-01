import { CalendarDays } from "lucide-react";

import dentista from "../assets/dentista.png";
import whatsapp from "../assets/whatsapp.png";

function Hero() {
  return (
    <section className="relative w-full h-[400px] overflow-hidden bg-[#DCE8EA]">

      {/* Imagem da dentista */}
      <img
        src={dentista}
        alt="Dentista"
        className="
          absolute
          bottom-0
          right-0
          z-0
          h-full
          w-auto
          max-w-[62%]
          object-contain
          object-bottom
          sm:z-20
          sm:max-w-none
        "
      />

      {/* Conteúdo superior */}
      <div
        className="
          relative
          z-10
          w-[58%]
          pt-[50px]
          pl-[16px]
          sm:w-[48%]
        "
      >
        {/* Título */}
        <h1
          className="
            font-['IBM_Plex_Serif']
            text-[26px]
            font-normal
            leading-[29px]
            tracking-[0.05em]
            text-[#1E2D30]
          "
        >
          Seu sorriso
          <br />
          merece o
          <br />

          <span className="text-[#3E6D70]">
            melhor cuidado
          </span>
        </h1>

        {/* Linha */}
        <div className="mt-[8px] h-[1px] w-[100px] bg-white" />

        {/* Descrição */}
        <p
          className="
            mt-[10px]
            w-[90%]
            font-['IBM_Plex_Sans']
            text-[12px]
            font-normal
            leading-[13px]
            tracking-[0.04em]
            text-[#3E4E68]
          "
        >
          Tratamentos odontológicos humanizados, tecnologia avançada e
          especialistas qualificados para transformar sorrisos e vidas.
        </p>
      </div>


      {/* Botão preso na parte inferior */}
      <button
        className="
          absolute
          bottom-[70px]
          left-[16px]
          z-10
          flex
          items-center
          gap-2
          whitespace-nowrap
          rounded-[8px]
          bg-[#066165]
          px-[10px]
          py-[9px]
          font-['IBM_Plex_Sans']
          text-[13px]
          text-white
        "
      >
        <CalendarDays className="h-[70%] w-[70%]" />

        Agende sua avaliação
      </button>

      {/* Texto inferior preso no fundo */}
      <div
        className="
          absolute
          bottom-[20px]
          left-[16px]
          z-10
          flex
          items-center
          gap-1
          whitespace-nowrap
        "
      >
        <span className="text-[#066165]">♙</span>

        <p className="font-['IBM_Plex_Sans'] text-[10px] text-[#066165]">
          Mais de 500 sorrisos transformados
        </p>
      </div>

      {/* WhatsApp */}
      <a
  href="#"
  className="
    absolute
    bottom-[18px]
    right-[12px]
    z-30
    flex
    h-[54px]
    w-[54px]
    items-center
    justify-center
  "
>
  <img
    src={whatsapp}
    alt="WhatsApp"
    className="w-full h-full object-contain"
  />
</a>

    </section>
  );
}

export default Hero;
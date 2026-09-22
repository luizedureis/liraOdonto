import { CalendarDays, User } from "lucide-react";

import dentista from "../assets/dentista.png";
import whatsapp from "../assets/whatsapp.png";

function Hero() {
  return (
    <section id="inicio" className="relative z-0 w-full h-[400px] md:h-[480px] lg:h-[620px] overflow-hidden bg-[#DCE8EA]">

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
          md:pt-[64px]
          lg:w-[42%]
          lg:pl-[80px]
          lg:pt-[110px]
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
            md:text-[32px]
            md:leading-[36px]
            lg:text-[52px]
            lg:leading-[58px]
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
        <div className="mt-[8px] h-[1px] w-[100px] bg-white lg:mt-[18px] lg:w-[140px]" />

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
            md:text-[15px]
            md:leading-[20px]
            lg:mt-[22px]
            lg:w-[85%]
            lg:text-[19px]
            lg:leading-[27px]
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
          lg:left-[80px]
          lg:bottom-[120px]
          lg:gap-3
          lg:rounded-[10px]
          lg:px-[22px]
          lg:py-[16px]
          lg:text-[17px]
        "
      >
        <CalendarDays className="h-[70%] w-[70%] lg:h-[22px] lg:w-[22px]" />

        Agende sua avaliação
      </button>

      {/* Texto inferior preso no fundo */}
      <div
        className="
          absolute
          bottom-[45px]
          left-[16px]
          z-10
          flex
          items-center
          gap-1
          whitespace-nowrap
          lg:left-[80px]
          lg:bottom-[80px]
          lg:gap-2
        "
      >
        <User className="h-[12px] w-[12px] text-[#066165] lg:h-[18px] lg:w-[18px]" />

        <p className="font-['IBM_Plex_Sans'] text-[10px] text-[#066165] lg:text-[15px]">
          Mais de 500 sorrisos transformados
        </p>
      </div>

      {/* WhatsApp */}
      <a
  href="https://api.whatsapp.com/send?phone=558321812468"
  target="_blank"
  rel="noreferrer"
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
    lg:bottom-[32px]
    lg:right-[32px]
    lg:h-[72px]
    lg:w-[72px]
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

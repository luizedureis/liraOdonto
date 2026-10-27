import { CalendarDays, User } from "lucide-react";
import dentista from "../assets/andreia.png";

function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        z-0
        h-[400px]
        w-full
        overflow-hidden
        bg-[#DCE8EA]
        sm:h-[440px]
        md:h-[480px]
        lg:h-[620px]
      "
    >
      {/* Imagem da dentista */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={dentista}
          alt="Dentista"
          className="
            absolute
            bottom-0
            right-[-28%]
            h-full
            w-auto
            max-w-none
            object-contain
            object-right-bottom

            sm:right-[-15%]
            md:right-[-5%]
            lg:right-0
          "
        />

        {/* Gradiente para integrar a imagem ao fundo */}
        <div
  className="
    absolute
    inset-0
    z-10
    pointer-events-none

    /* Celular */
    bg-[linear-gradient(to_right,#DCE8EA_0%,#DCE8EA_20%,rgba(220,232,234,0.9)_38%,rgba(220,232,234,0.45)_55%,transparent_75%)]

    /* Desktop */
    md:bg-[linear-gradient(to_right,#DCE8EA_0%,#DCE8EA_38%,rgba(220,232,234,0.98)_44%,rgba(220,232,234,0.8)_50%,rgba(220,232,234,0.35)_60%,transparent_72%)]
  "
/>
      </div>

      {/* Conteúdo principal */}
      <div
        className="
          relative
          z-20
          w-[65%]
          pt-[50px]
          pl-[16px]
          sm:w-[55%]
          md:w-[48%]
          md:pt-[64px]
          lg:w-[42%]
          lg:pl-[80px]
          lg:pt-[110px]
        "
      >
        <h1
          className="
            font-['IBM_Plex_Serif']
            text-[25px]
            font-normal
            leading-[29px]
            tracking-[0.02em]
            text-[#1E2D30]
            sm:text-[28px]
            sm:leading-[32px]
            md:text-[32px]
            md:leading-[36px]
            lg:text-[52px]
            lg:leading-[58px]
            lg:tracking-[0.05em]
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

        {/* Linha decorativa */}
        <div className="mt-[8px] h-[1px] w-[100px] bg-white lg:mt-[18px] lg:w-[140px]" />

        {/* Descrição */}
        <p
          className="
            mt-[10px]
            w-[90%]
            font-['IBM_Plex_Sans']
            text-[11px]
            font-normal
            leading-[13px]
            tracking-[0.02em]
            text-[#3E4E68]
            sm:text-[12px]
            sm:leading-[15px]
            md:text-[15px]
            md:leading-[20px]
            lg:mt-[22px]
            lg:w-[85%]
            lg:text-[19px]
            lg:leading-[27px]
            lg:tracking-[0.04em]
          "
        >
          Tratamentos odontológicos humanizados, tecnologia avançada e
          especialistas qualificados para transformar sorrisos e vidas.
        </p>
      </div>

      {/* Botão de agendamento */}
      <a
        href="https://api.whatsapp.com/send?phone=558321812468"
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute
          bottom-[70px]
          left-[16px]
          z-20
          flex
          items-center
          gap-2
          whitespace-nowrap
          rounded-[8px]
          bg-[#066165]
          px-[10px]
          py-[9px]
          font-['IBM_Plex_Sans']
          text-[12px]
          text-white
          sm:text-[13px]
          lg:bottom-[120px]
          lg:left-[80px]
          lg:gap-3
          lg:rounded-[10px]
          lg:px-[22px]
          lg:py-[16px]
          lg:text-[17px]
        "
      >
        <CalendarDays className="h-[16px] w-[16px] shrink-0 lg:h-[22px] lg:w-[22px]" />
        Agende sua avaliação
      </a>

      {/* Indicador inferior */}
      <div
        className="
          absolute
          bottom-[45px]
          left-[16px]
          z-20
          flex
          items-center
          gap-1
          whitespace-nowrap
          lg:bottom-[80px]
          lg:left-[80px]
          lg:gap-2
        "
      >
        <User className="h-[12px] w-[12px] shrink-0 text-[#066165] lg:h-[18px] lg:w-[18px]" />

        <p className="font-['IBM_Plex_Sans'] text-[10px] text-[#066165] sm:text-[11px] lg:text-[15px]">
          Mais de 5000 sorrisos transformados
        </p>
      </div>
    </section>
  );
}

export default Hero;
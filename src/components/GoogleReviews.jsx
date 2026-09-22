import { BadgeCheck, ExternalLink, Star, User } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { useDragScroll } from "../hooks/useDragScroll";

const reviews = [
  {
    name: "Eliane Freitas",
    time: "3 semanas atrás",
    text: "Atendimento maravilhoso, profissionais dedicados, com muita ética e atenção, demonstrando segurança e comprometimento durante os atendimentos.",
  },
  {
    name: "Edmundo Souza Silva",
    time: "1 mês atrás",
    text: "Foi uma experiência muito boa, começando pelo atendimento inicial: as recepcionistas muito simpáticas e prestativas, além de eficientes.",
  },
  {
    name: "Marijane Mendes",
    time: "2 meses atrás",
    text: "Excelente experiência! Profissionais competentes e com total tranquilidade para atender pacientes que têm medos e traumas. Precisei fazer um canal e recebi total confiança, procedimento indolor, pós atencioso. Recomendo muito. Obrigada Dr. Mateus.",
  },
  {
    name: "Jheniffer A. M. de Sousa",
    time: "2 meses atrás",
    text: "Atendimento excelente, profissionais extremamente competentes e qualificados! Ambiente super agradável e aconchegante. Vim de São Paulo para me consultar com a Dra. Andreia, de extrema confiança.",
  },
  {
    name: "Catarina Costa",
    time: "4 meses atrás",
    text: "Venho prestar minha satisfação em relação ao atendimento dessa clínica: à recepção com a Glória e a Larissa, à doutora Andreia e ao doutor Mateus. O atendimento foi excelente, com muita honestidade nas orientações.",
  },
  {
    name: "Rejane Verlingue",
    time: "5 meses atrás",
    text: "Quero agradecer muito pela recepção que tive aqui na Lira Odontologia, pela Dra. Andreia, pela Dra. Myrla e equipe. Estou saindo satisfeita com o resultado dos implantes e do dente fixo.",
  },
  {
    name: "Gabriel Silva",
    time: "3 meses atrás",
    text: "Muito excelente o trabalho e atendimento, indico e falo mais: é a melhor de João Pessoa - PB. Vai lá, confere e garanta teu melhor sorriso!",
  },
  {
    name: "Anna Julia Silva",
    time: "5 meses atrás",
    text: "Uma clínica maravilhosa, desde o atendimento da recepção até os dentistas. Todos os profissionais extremamente competentes e cuidadosos. Fiz a remoção de dois sisos e tive uma experiência muito tranquila!",
  },
];

function Stars() {
  return (
    <div className="flex gap-[2px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-[13px] w-[13px] fill-[#F5A623] text-[#F5A623] lg:h-[16px] lg:w-[16px]" />
      ))}
    </div>
  );
}

function ReviewCard({ name, time, text }) {
  return (
    <div className="w-[78%] shrink-0 rounded-[8px] bg-white p-[14px] shadow-[0_2px_14px_rgba(0,0,0,0.10)] lg:w-[320px] lg:p-[24px]">
      <div className="flex items-center gap-[8px] lg:gap-[12px]">
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#DCE8EA] text-[#066165] lg:h-[44px] lg:w-[44px]">
          <User className="h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]" />
        </div>

        <div>
          <p className="font-['IBM_Plex_Sans'] text-[12px] font-semibold text-[#1E2D30] lg:text-[15px]">
            {name}
          </p>
          <p className="font-['IBM_Plex_Sans'] text-[9px] text-[#3E4E68] lg:text-[12px]">{time}</p>
        </div>
      </div>

      <div className="mt-[8px] lg:mt-[14px]">
        <Stars />
      </div>

      <p className="mt-[8px] font-['IBM_Plex_Sans'] text-[11px] leading-[15px] text-[#3E4E68] lg:mt-[12px] lg:text-[14px] lg:leading-[20px]">
        “{text}”
      </p>
    </div>
  );
}

function GoogleReviews() {
  const reveal = useReveal();
  const dragScroll = useDragScroll();

  return (
    <section
      id="avaliacoes"
      ref={reveal.ref}
      className={`relative z-10 -mt-[24px] rounded-t-[24px] bg-white px-4 pb-10 pt-8 shadow-[0_-5px_20px_0_rgba(0,0,0,0.25)] md:px-[48px] lg:px-[64px] lg:pb-[72px] lg:pt-[64px] ${reveal.className}`}
    >
      <p className="mx-auto flex w-fit items-center justify-center gap-[6px] rounded-full bg-[#DAF0E1] px-[8px] py-[3px] font-['IBM_Plex_Sans'] text-[11px] font-medium text-[#528F52] lg:px-[12px] lg:py-[5px] lg:text-[14px]">
        <span className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#528F52] lg:h-[20px] lg:w-[20px]">
          <BadgeCheck className="h-[10px] w-[10px] text-white lg:h-[13px] lg:w-[13px]" />
        </span>
        Avaliações verificadas no Google
      </p>

      <h2 className="mt-[6px] text-center font-['IBM_Plex_Serif'] text-[20px] font-semibold text-[#066165] lg:mt-[14px] lg:text-[36px]">
        Vidas transformadas
      </h2>

      <p className="mt-[6px] text-center font-['IBM_Plex_Sans'] text-[11px] leading-[15px] text-[#3E4E68] lg:text-[15px] lg:leading-[21px]">
        Pacientes reais compartilhando suas experiências na Lira Odontologia.
      </p>

      <div
        ref={dragScroll.ref}
        {...dragScroll.handlers}
        className="-mx-4 mt-[20px] flex cursor-grab gap-[12px] overflow-x-auto px-4 pb-[4px] select-none active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-auto lg:mt-[40px] lg:max-w-[1200px] lg:px-0"
      >
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>

      <div className="mt-[20px] rounded-[16px] bg-[#DCE8EA] p-[16px] text-center lg:mx-auto lg:mt-[40px] lg:max-w-[680px] lg:rounded-[20px] lg:p-[32px]">
        <p className="flex items-center justify-center gap-[6px] font-['IBM_Plex_Serif'] text-[18px] font-semibold text-[#066165] lg:text-[26px]">
          5.0
          <Star className="h-[16px] w-[16px] fill-[#066165] text-[#066165] lg:h-[22px] lg:w-[22px]" />
          no Google
        </p>

        <p className="mt-[4px] font-['IBM_Plex_Sans'] text-[11px] leading-[15px] text-[#3E4E68] lg:mt-[10px] lg:text-[15px] lg:leading-[21px]">
          Mais de 670 avaliações verificadas de pacientes que confiaram no
          nosso cuidado.
        </p>

        <a
          href="https://www.google.com/maps/place/Lira+Odontologia/@-7.1736841,-34.8426567,17z/data=!4m8!3m7!1s0x7acc3b07e1484d9:0xd936aee5eb136c69!8m2!3d-7.1736894!4d-34.8400818!9m1!1b1!16s%2Fg%2F11q35n5w3w"
          target="_blank"
          rel="noreferrer"
          className="mt-[14px] inline-flex items-center gap-[6px] rounded-[8px] bg-[#066165] px-[14px] py-[9px] font-['IBM_Plex_Sans'] text-[12px] font-semibold text-white lg:mt-[22px] lg:gap-[8px] lg:px-[22px] lg:py-[13px] lg:text-[15px]"
        >
          <ExternalLink className="h-[14px] w-[14px] lg:h-[18px] lg:w-[18px]" />
          Veja as avaliações
        </a>
      </div>
    </section>
  );
}

export default GoogleReviews;

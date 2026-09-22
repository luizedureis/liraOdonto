import { BadgeCheck, ExternalLink, Star, User } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const reviews = [
  {
    name: "Ana Silva Costa",
    time: "2 meses atrás",
    text: "Excelente resultado final, super recomendo. Toda a equipe é muito atenciosa e profissional.",
  },
  {
    name: "Marcelo",
    time: "4 meses atrás",
    text: "Ótimo atendimento. Desde a recepção até o resultado final, me senti acolhido e muito seguro com toda a equipe.",
  },
  {
    name: "Juliana Alves",
    time: "1 mês atrás",
    text: "Ótimo atendimento, recepção impecável e resultado surpreendente. Minha autoestima mudou completamente.",
  },
  {
    name: "Roberto Lima",
    time: "3 meses atrás",
    text: "Profissionais muito qualificados. Fiz implante e o processo todo foi tranquilo, sem dor.",
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
    <div className="w-[78%] shrink-0 snap-center rounded-[8px] bg-white p-[14px] shadow-[0_2px_14px_rgba(0,0,0,0.10)] lg:w-[320px] lg:p-[24px]">
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

      <div className="-mx-4 mt-[20px] flex snap-x snap-mandatory gap-[12px] overflow-x-auto px-4 pb-[4px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-auto lg:mt-[40px] lg:max-w-[1200px] lg:justify-center lg:px-0">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>

      <div className="mt-[20px] rounded-[16px] bg-[#DCE8EA] p-[16px] text-center lg:mx-auto lg:mt-[40px] lg:max-w-[680px] lg:rounded-[20px] lg:p-[32px]">
        <p className="flex items-center justify-center gap-[6px] font-['IBM_Plex_Serif'] text-[18px] font-semibold text-[#066165] lg:text-[26px]">
          4.9
          <Star className="h-[16px] w-[16px] fill-[#066165] text-[#066165] lg:h-[22px] lg:w-[22px]" />
          no Google
        </p>

        <p className="mt-[4px] font-['IBM_Plex_Sans'] text-[11px] leading-[15px] text-[#3E4E68] lg:mt-[10px] lg:text-[15px] lg:leading-[21px]">
          Mais de 540 avaliações verificadas de pacientes que confiaram no
          nosso cuidado.
        </p>

        <a
          href="#"
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

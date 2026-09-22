import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Image as ImageIcon } from "lucide-react";

import { useReveal } from "../hooks/useReveal";
import antes1 from "../assets/sorrisos/antes1.png";
import depois1 from "../assets/sorrisos/depois1.png";

const testimonials = [
  {
    beforeImg: antes1,
    afterImg: depois1,
    treatment: "Lente de contato dental",
    treatmentNote: "Meu sorriso, minha confiança e autoestima.",
    quote: "Me sinto muito mais confiante para sorrir hoje!",
    author: "Carlos M.",
  },
  {
    beforeImg: null,
    afterImg: null,
    treatment: "Clareamento dental",
    treatmentNote: "Um sorriso mais branco em poucas sessões.",
    quote: "Nunca imaginei que meu sorriso pudesse mudar tanto!",
    author: "Ana P.",
  },
  {
    beforeImg: null,
    afterImg: null,
    treatment: "Implante dentário",
    treatmentNote: "De volta a comer e sorrir sem preocupação.",
    quote: "Recuperei minha qualidade de vida.",
    author: "João S.",
  },
];

function PhotoBox({ src, label }) {
  if (src) {
    return (
      <div className="aspect-[2/1] w-full overflow-hidden rounded-[10px]">
        <img src={src} alt={label} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[2/1] w-full items-center justify-center overflow-hidden rounded-[10px] bg-[#DCE8EA]">
      <ImageIcon className="h-[22px] w-[22px] text-[#066165]/40" />
      <span className="absolute bottom-[4px] left-1/2 -translate-x-1/2 font-['IBM_Plex_Sans'] text-[9px] text-[#066165]/60">
        {label}
      </span>
    </div>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const reveal = useReveal();

  const goTo = (index) => {
    setCurrent((index + testimonials.length) % testimonials.length);
  };

  const active = testimonials[current];

  return (
    <section
      id="depoimentos"
      ref={reveal.ref}
      className={`bg-[#DCE8EA] px-4 pb-10 pt-8 md:px-[48px] lg:px-[64px] lg:pb-[72px] lg:pt-[64px] ${reveal.className}`}
    >
      <div className="mx-auto mb-[32px] h-px w-[100px] bg-gradient-to-r from-transparent via-[#066165]/40 to-transparent lg:mb-[48px]" />

      <p className="font-['IBM_Plex_Sans'] text-[13px] font-semibold text-[#066165] lg:text-center lg:text-[16px]">
        Sorrisos que inspiram
      </p>

      <h2
        className="
          mt-[8px]
          font-['IBM_Plex_Serif']
          text-[20px]
          font-normal
          leading-[26px]
          text-[#1E2D30]
          lg:text-center
          lg:text-[36px]
          lg:leading-[44px]
        "
      >
        Histórias reais,
        <br />
        <span className="text-[#127C82]">transformações reais.</span>
      </h2>

      <div className="mt-[18px] rounded-[20px] bg-white p-[14px] shadow-[0_2px_14px_rgba(0,0,0,0.10)] lg:mx-auto lg:mt-[40px] lg:max-w-[820px] lg:p-[32px]">
        <div className="grid grid-cols-2 gap-[10px] lg:gap-[20px]">
          <PhotoBox src={active.beforeImg} label="Antes" />
          <PhotoBox src={active.afterImg} label="Depois" />
        </div>

        <div className="mt-[14px] grid grid-cols-[1fr_auto] gap-[10px] lg:mt-[28px] lg:gap-[24px]">
          <div>
            <Quote className="h-[16px] w-[16px] text-[#066165] lg:h-[24px] lg:w-[24px]" />

            <p className="mt-[4px] font-['IBM_Plex_Sans'] text-[11px] font-semibold leading-[13px] text-[#066165] lg:mt-[10px] lg:text-[16px] lg:leading-[20px]">
              {active.treatment}
            </p>

            <p className="mt-[2px] font-['IBM_Plex_Sans'] text-[9px] leading-[12px] text-[#3E4E68] lg:mt-[4px] lg:text-[13px] lg:leading-[18px]">
              {active.treatmentNote}
            </p>
          </div>

          <div className="max-w-[140px] text-right lg:max-w-[280px]">
            <p className="font-['IBM_Plex_Serif'] text-[11px] italic leading-[14px] text-[#1E2D30] lg:text-[16px] lg:leading-[22px]">
              “{active.quote}”
            </p>

            <p className="mt-[4px] font-['IBM_Plex_Sans'] text-[9px] text-[#3E6D70] lg:mt-[8px] lg:text-[13px]">
              - {active.author}
            </p>
          </div>
        </div>

        <div className="mt-[14px] flex items-center justify-between lg:mt-[28px]">
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            aria-label="Depoimento anterior"
            className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-[#066165] text-[#066165] lg:h-[40px] lg:w-[40px]"
          >
            <ChevronLeft className="h-[14px] w-[14px] lg:h-[20px] lg:w-[20px]" />
          </button>

          <div className="flex items-center gap-[6px] lg:gap-[10px]">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`rounded-full transition-all ${
                  i === current
                    ? "h-[7px] w-[7px] bg-[#066165] lg:h-[10px] lg:w-[10px]"
                    : "h-[6px] w-[6px] bg-[#066165]/30 lg:h-[8px] lg:w-[8px]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(current + 1)}
            aria-label="Próximo depoimento"
            className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-[#066165] text-[#066165] lg:h-[40px] lg:w-[40px]"
          >
            <ChevronRight className="h-[14px] w-[14px] lg:h-[20px] lg:w-[20px]" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

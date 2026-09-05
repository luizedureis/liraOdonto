import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Image as ImageIcon } from "lucide-react";

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

  const goTo = (index) => {
    setCurrent((index + testimonials.length) % testimonials.length);
  };

  const active = testimonials[current];

  return (
    <section className="bg-[#DCE8EA] px-4 pb-10 pt-8">
      <p className="font-['IBM_Plex_Sans'] text-[13px] font-semibold text-[#066165]">
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
        "
      >
        Histórias reais,
        <br />
        <span className="text-[#127C82]">transformações reais.</span>
      </h2>

      <div className="mt-[18px] rounded-[20px] bg-white p-[14px] shadow-[0_2px_14px_rgba(0,0,0,0.10)]">
        <div className="grid grid-cols-2 gap-[10px]">
          <PhotoBox src={active.beforeImg} label="Antes" />
          <PhotoBox src={active.afterImg} label="Depois" />
        </div>

        <div className="mt-[14px] grid grid-cols-[1fr_auto] gap-[10px]">
          <div>
            <Quote className="h-[16px] w-[16px] text-[#066165]" />

            <p className="mt-[4px] font-['IBM_Plex_Sans'] text-[11px] font-semibold leading-[13px] text-[#066165]">
              {active.treatment}
            </p>

            <p className="mt-[2px] font-['IBM_Plex_Sans'] text-[9px] leading-[12px] text-[#3E4E68]">
              {active.treatmentNote}
            </p>
          </div>

          <div className="max-w-[140px] text-right">
            <p className="font-['IBM_Plex_Serif'] text-[11px] italic leading-[14px] text-[#1E2D30]">
              “{active.quote}”
            </p>

            <p className="mt-[4px] font-['IBM_Plex_Sans'] text-[9px] text-[#3E6D70]">
              - {active.author}
            </p>
          </div>
        </div>

        <div className="mt-[14px] flex items-center justify-between">
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            aria-label="Depoimento anterior"
            className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-[#066165] text-[#066165]"
          >
            <ChevronLeft className="h-[14px] w-[14px]" />
          </button>

          <div className="flex items-center gap-[6px]">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`rounded-full transition-all ${
                  i === current
                    ? "h-[7px] w-[7px] bg-[#066165]"
                    : "h-[6px] w-[6px] bg-[#066165]/30"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(current + 1)}
            aria-label="Próximo depoimento"
            className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-[#066165] text-[#066165]"
          >
            <ChevronRight className="h-[14px] w-[14px]" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

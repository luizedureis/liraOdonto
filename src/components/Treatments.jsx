import { Image as ImageIcon } from "lucide-react";

import { useReveal } from "../hooks/useReveal";
import proteseProtocolo from "../assets/proteseProtocolo.png";
import implanteUnitario from "../assets/implanteUnitario.png";
import lenteContato from "../assets/lenteContato.png";

const treatments = [
  {
    image: proteseProtocolo,
    title: "Prótese Protocolo",
    description:
      "Dentes fixos para quem perdeu vários dentes ou todos os dentes da arcada superior.",
  },
  {
    image: implanteUnitario,
    title: "Implante Dentário Unitário",
    description:
      "O implante é uma alternativa para substituir um dente perdido, sem necessariamente precisar envolver os dentes vizinhos.",
  },
  {
    image: lenteContato,
    title: "Lente de Contato Dental",
    description:
      "O implante é uma alternativa para substituir um dente perdido, sem necessariamente precisar envolver os dentes vizinhos.",
  },
];

function TreatmentCard({ image, title, description }) {
  const reveal = useReveal();

  return (
    <div
      ref={reveal.ref}
      className={`overflow-hidden rounded-[40px] bg-white shadow-[0_2px_14px_rgba(0,0,0,0.10)] ${reveal.className}`}
    >
      <div className="flex aspect-[3/2] w-full items-center justify-center bg-white">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-contain" />
        ) : (
          <ImageIcon className="h-[26px] w-[26px] text-[#066165]/30" />
        )}
      </div>

      <div className="px-[16px] pb-[16px] pt-[10px] text-center lg:px-[24px] lg:pb-[24px] lg:pt-[18px]">
        <h3 className="font-['IBM_Plex_Serif'] text-[20px] font-bold text-[#066165] lg:text-[22px]">
          {title}
        </h3>

        <p className="mt-[6px] font-['IBM_Plex_Sans'] text-[12px] leading-[15px] text-[#3E4E68] lg:mt-[10px] lg:text-[14px] lg:leading-[19px]">
          {description}
        </p>

        <a
          href="#"
          className="mt-[10px] flex items-center justify-end gap-[7px] font-['IBM_Plex_Sans'] text-[12px] font-semibold text-[#066165] lg:mt-[16px] lg:text-[14px]"
        >
          saiba mais
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

function Treatments() {
  return (
    <section id="tratamentos" className="bg-[#DCE8EA] px-4 pb-10 pt-8 md:px-[48px] lg:px-[64px] lg:pb-[72px] lg:pt-[64px]">
      <div className="mx-auto mb-[32px] h-px w-[100px] bg-gradient-to-r from-transparent via-[#066165]/40 to-transparent lg:mb-[48px]" />

      <div className="flex flex-col gap-[16px] lg:mx-auto lg:max-w-[1200px] lg:grid lg:grid-cols-3 lg:items-start lg:gap-[28px]">
        {treatments.map((t) => (
          <TreatmentCard key={t.title} {...t} />
        ))}
      </div>
    </section>
  );
}

export default Treatments;

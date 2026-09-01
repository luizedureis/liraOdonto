import atendimentoHumanizado from "../assets/atendimentoHumanizado.png";
import especialistaQualificado from "../assets/especialistaQualificado.png";
import tecAvancada from "../assets/tecAvancada.png";
import resultaTransfor from "../assets/resultaTransfor.png";

const items = [
  {
    icon: atendimentoHumanizado,
    title: "Atendimento Humanizado",
    description: "Você é único. Seu tratamento também.",
  },
  {
    icon: especialistaQualificado,
    title: "Especialistas Qualificados",
    description: "Equipe experiente e atualizada.",
  },
  {
    icon: tecAvancada,
    title: "Tecnologia Avançada",
    description: "Equipamentos modernos.",
  },
  {
    icon: resultaTransfor,
    title: "Resultados que Transformam",
    description: "Devolvemos sua autoestima.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative z-10 -mt-[24px] rounded-t-[24px] bg-white px-9 pb-10 pt-8 shadow-[0_-5px_20px_0_rgba(0,0,0,0.25)]">
      <p
        className="
          text-center
          font-['IBM_Plex_Sans']
          text-[10px]
          font-medium
          text-[#3E6D70]
        "
      >
        Por que escolher a Lira Odontologia?
      </p>

      <h2
        className="
          mt-[6px]
          text-center
          font-['IBM_Plex_Serif']
          text-[20px]
          font-normal
        "
      >
        <span className="text-[#066165]">Cuidado que</span>{" "}
        <span className="text-[#127C82]">faz a diferença</span>
      </h2>

      <div className="relative mt-[28px] grid grid-cols-2 gap-[22px]">
        {items.map(({ icon, title, description }) => (
          <div
            key={title}
            className="
              flex
              min-h-[210px]
              flex-col
              items-center
              rounded-[12px]
              bg-white
              px-[14px]
              py-[24px]
              text-center
              shadow-[0_0_10px_4px_rgba(0,0,0,0.10)]
            "
          >
            <img src={icon} alt="" className="h-[38px] w-[38px] object-contain" />

            <h3
              className="
                mt-[10px]
                font-['IBM_Plex_Sans']
                text-[13px]
                font-semibold
                leading-[16px]
                text-[#066165]
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-auto
                pt-[14px]
                font-['IBM_Plex_Sans']
                text-[11px]
                leading-[14px]
                text-[#3E4E68]
              "
            >
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;

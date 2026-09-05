import { useEffect, useState } from "react";

import faxada from "../assets/historia/faxada.png";
import interior from "../assets/historia/interior.png";
import interior2 from "../assets/historia/interior2.png";
import userIcon from "../assets/historia/user.png";
import calendarIcon from "../assets/historia/calendar.png";
import starIcon from "../assets/historia/star.png";

const slides = [faxada, interior, interior2];

const stats = [
  { icon: userIcon, value: "600+", label: "Sorrisos transformados" },
  { icon: calendarIcon, value: "10+", label: "Anos de experiência" },
  { icon: starIcon, value: "100%", label: "Comprometidos com você" },
];

function OurHistory() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative z-10 -mt-[24px] rounded-t-[24px] bg-[#DCE8EA] px-4 pb-10 pt-8 shadow-[0_-5px_20px_0_rgba(0,0,0,0.25)]">
      <p className="font-['IBM_Plex_Sans'] text-[13px] font-semibold text-[#066165]">
        Nossa História
      </p>

      <div className="mt-[4px] h-[2px] w-[36px] bg-[#066165]" />

      <h2
        className="
          mt-[10px]
          font-['IBM_Plex_Serif']
          text-[20px]
          font-normal
          leading-[26px]
          text-[#1E2D30]
        "
      >
        Feita de propósito, cuidado e{" "}
        <span className="text-[#127C82]">transformação.</span>
      </h2>

      <div className="mt-[16px] grid grid-cols-[1.1fr_1fr] items-stretch gap-[14px]">
        <div className="flex flex-col gap-[12px]">
          <p
            className="
              font-['IBM_Plex_Sans']
              text-[11px]
              leading-[15px]
              text-[#3E4E68]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam.
          </p>

          <p
            className="
              font-['IBM_Plex_Sans']
              text-[11px]
              leading-[15px]
              text-[#3E4E68]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam.
          </p>

          <p
            className="
              font-['IBM_Plex_Sans']
              text-[11px]
              leading-[15px]
              text-[#3E4E68]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam.
          </p>
        </div>

        <div className="relative -mr-4 h-full min-h-[280px] w-[calc(100%+16px)] overflow-hidden rounded-l-[12px]">
          {slides.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`
                absolute inset-0 h-full w-full object-cover
                transition-opacity duration-700
                ${i === current ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}

          <div className="absolute bottom-[8px] left-1/2 flex -translate-x-1/2 gap-[4px]">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-[5px] w-[5px] rounded-full ${
                  i === current ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="
          mt-[20px]
          flex
          items-center
          justify-between
          rounded-[16px]
          bg-white
          px-[8px]
          py-[16px]
          shadow-[0_2px_10px_rgba(0,0,0,0.08)]
        "
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`
              flex
              flex-1
              flex-col
              items-center
              text-center
              ${i !== stats.length - 1 ? "border-r border-[#DCE8EA]" : ""}
            `}
          >
            <img
              src={stat.icon}
              alt=""
              className="h-[36px] w-[36px] object-contain"
            />

            <p
              className="
                mt-[6px]
                font-['IBM_Plex_Serif']
                text-[15px]
                font-semibold
                text-[#066165]
              "
            >
              {stat.value}
            </p>

            <p
              className="
                mt-[2px]
                font-['IBM_Plex_Sans']
                text-[9px]
                leading-[11px]
                text-[#3E4E68]
              "
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurHistory;

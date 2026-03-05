import svgPaths from "../../imports/svg-59wapeqsll";
import imgRectangle5 from "@/assets/3ad0cbf86082bb5c0deed567f95b0ba4f3a3b0bb.png";

interface ChecklistItem {
  label: string;
}

const card1Checklist: ChecklistItem[] = [
  { label: "Technologický audit a roadmapa" },
  { label: "Nastavení měření a analytiky" },
  { label: "Příprava e-commerce platformy" },
  { label: "Integrace systémů" },
];

const card2Checklist: ChecklistItem[] = [
  { label: "PPC management všech kanálů" },
  { label: "Kontinuální A/B testování" },
  { label: "Kreativní produkce" },
  { label: "Reporty a optimalizace" },
];

const card3Checklist: ChecklistItem[] = [
    { label: "Aktivní až po prokázaní modelu" },
    { label: "Navázano na reálny zisk" },
    { label: "Maximální motivace týmu" },
    { label: "Dlouhodobé partnerství" },
];

export function PricingSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col gap-[80px] items-center w-full py-[80px]">
        {/* Header + Banner + Cards */}
        <div className="flex flex-col gap-[40px] items-center w-full">
          {/* Section Header */}
          <div className="flex flex-col gap-[28px] items-center text-center text-black max-w-[745px] px-6">
            <div className="flex flex-col gap-[32px] items-center uppercase w-full max-w-[533px]">
              <p className="font-['Sora'] font-semibold text-[11px] tracking-[2.2px] leading-[17px] w-full">
                Cenový model
              </p>
              <p className="font-['Sora'] font-extrabold text-[32px] lg:text-[52px] tracking-[-0.96px] lg:tracking-[-1.56px] leading-normal w-full">
                Share on Growth
              </p>
            </div>
            <p
              className="font-['Noto_Sans'] text-[17px] leading-[32px] w-full"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              Naše odměna je přímo navázána na váš úspěch. Čím více vyděláte
              vy, tím více vyděláme my.
            </p>
          </div>

          {/* Statement Banner */}
          <div className="bg-[#171717] relative flex flex-col gap-[10px] h-auto py-[40px] lg:py-0 lg:h-[202px] items-center justify-center shrink-0 w-full max-w-[1400px] mx-auto">
            <div
              aria-hidden="true"
              className="absolute border border-[#a038b6] border-solid inset-0 pointer-events-none"
            />
            <p className="font-['Sora'] font-bold text-[28px] lg:text-[37px] text-white text-center tracking-[-0.37px] leading-[42px] lg:leading-[65px] w-full px-6">
              Do zisku jdeme, až když jdete vy.
            </p>
            <p
              className="font-['Noto_Sans'] text-[17px] text-[rgba(255,255,255,0.62)] text-center leading-[32px] w-full px-6"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              Základní sazby pokrývají naše náklady. Naše marže roste s vaším
              úspěchem.
            </p>
          </div>

          {/* 3 Pricing Cards */}
          <div className="flex flex-col xl:flex-row items-stretch shrink-0 w-full max-w-[1400px] mx-auto px-6 xl:px-0">
            {/* Card 1: Setup Fee */}
            <div className="bg-white relative flex flex-col gap-[28px] h-auto lg:h-[487px] items-start justify-center pl-[39.5px] pr-[20px] py-[40px] lg:py-0 w-full lg:flex-1">
              <div
                aria-hidden="true"
                className="absolute border-[#c9c6c6] border-[0.4px] lg:border-r-0 border-solid inset-0 pointer-events-none"
              />
              {/* Number + Icon */}
              <div className="flex flex-col gap-[40px] h-[139px] items-start shrink-0 w-[225px]">
                <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start relative leading-[0]">
                  <p className="col-start-1 row-start-1 font-['Sora'] font-extrabold text-[52px] text-black tracking-[-1.56px] uppercase leading-normal opacity-[0.08]">
                    01
                  </p>
                  <div className="col-start-1 row-start-1 relative ml-[49.21%] mt-[45.37%] size-[36.126px]">
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 36.126 36.126"
                    >
                      <path
                        d={svgPaths.pb6f4a40}
                        fill="black"
                        stroke="white"
                        strokeWidth="0.09"
                      />
                      <path
                        d={svgPaths.pe11be80}
                        fill="black"
                        stroke="white"
                        strokeWidth="0.09"
                      />
                      <path
                        d={svgPaths.p9c186c0}
                        fill="black"
                        stroke="white"
                        strokeWidth="0.09"
                      />
                    </svg>
                  </div>
                </div>
                <p className="font-['Sora'] font-extrabold text-[26px] text-black tracking-[-0.78px] leading-normal">
                  Setup Fee
                </p>
              </div>
              {/* Details */}
              <div className="flex flex-col gap-[24px] items-start w-full">
                <p className="font-['Sora'] font-semibold text-[11px] text-black tracking-[2.2px] uppercase leading-[17px]">
                  Jednorázově
                </p>
                <p
                  className="font-['Noto_Sans'] text-[15px] text-black leading-[24px] w-[345px] max-w-full"
                  style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                >
                  Investice do vybudování infrastruktury, nastavení procesů a
                  přípravy systémů pro růst.
                </p>
                <ChecklistGroup items={card1Checklist} variant="light" />
              </div>
            </div>

            {/* Card 2: Management Fee */}
            <div className="bg-white relative flex flex-col gap-[28px] h-auto xl:h-[487px] items-start justify-center pl-[39.5px] pr-[20px] py-[40px] xl:py-0 w-full xl:flex-1">
              <div
                aria-hidden="true"
                className="absolute border-[#c9c6c6] border-[0.4px] xl:border-r-0 border-solid inset-0 pointer-events-none"
              />
              {/* Number + Icon */}
              <div className="flex flex-col gap-[40px] h-[139px] items-start shrink-0 w-[225px]">
                <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start relative leading-[0]">
                  <p className="col-start-1 row-start-1 font-['Sora'] font-extrabold text-[52px] text-black tracking-[-1.56px] uppercase leading-normal opacity-[0.08]">
                    02
                  </p>
                  <div className="col-start-1 row-start-1 relative h-[31.12px] ml-[35px] mt-[31px] w-[43.17px]">
                    <div className="absolute inset-[-0.64%_-0.46%_-0.93%_-0.64%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 43.6473 31.6087"
                      >
                        <path
                          d={svgPaths.pc372e80}
                          fill="black"
                          stroke="black"
                          strokeWidth="0.2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['Sora'] font-extrabold text-[26px] text-black tracking-[-0.78px] leading-normal">
                  Management Fee
                </p>
              </div>
              {/* Details */}
              <div className="flex flex-col gap-[24px] items-start w-full">
                <p className="font-['Sora'] font-semibold text-[11px] text-black tracking-[2.2px] uppercase leading-[17px]">
                  Z reklamních investic
                </p>
                <p
                  className="font-['Noto_Sans'] text-[15px] text-black leading-[24px] w-[345px] max-w-full"
                  style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                >
                  Průběžná správa kampaní a optimalizace výkonu. Platíte pouze z
                  investic do reklamy.
                </p>
                <ChecklistGroup items={card2Checklist} variant="light" />
              </div>
            </div>

            {/* Card 3: Success Fee (dark with glassmorphism) */}
            <div className="relative h-auto xl:h-[487px] w-full xl:flex-1">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                {/* Dark background with blur effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="-scale-y-100 rotate-180">
                    <div className="bg-[#404040] h-full w-full" />
                  </div>
                </div>
                <div className="absolute blur-[7.6px] inset-[0.82%_-47.32%_0.62%_-47.32%]">
                  <div className="absolute inset-0 pointer-events-none">
                    <img
                      alt=""
                      className="absolute max-w-none object-cover opacity-70 size-full"
                      src={(typeof imgRectangle5 === 'object' && imgRectangle5 !== null && 'src' in imgRectangle5) ? (imgRectangle5 as any).src : imgRectangle5}
                    />
                    <div className="absolute bg-[rgba(98,98,98,0.05)] inset-0" />
                  </div>
                </div>
                {/* Content overlay */}
                <div className="relative flex flex-col gap-[28px] h-full items-start justify-center pl-[39.5px] pr-[20px] py-[40px] xl:py-0 w-full">
                  <div
                    aria-hidden="true"
                    className="absolute border-[#c9c6c6] border-[0.4px] xl:border-r-0 border-solid inset-0 pointer-events-none"
                  />
                  {/* Number + Icon */}
                  <div className="flex flex-col gap-[40px] h-[139px] items-start shrink-0 w-[225px]">
                    <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start relative leading-[0]">
                      <p className="col-start-1 row-start-1 font-['Sora'] font-extrabold text-[52px] text-white tracking-[-1.56px] uppercase leading-normal opacity-[0.16]">
                        03
                      </p>
                      <div className="col-start-1 row-start-1 relative ml-[52px] mt-[26px] size-[36px]">
                        <svg
                          className="absolute block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 35.9999 35.9996"
                        >
                          <path d={svgPaths.p1fe84f00} fill="white" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Sora'] font-extrabold text-[26px] text-white tracking-[-0.78px] leading-normal">
                      Success Fee
                    </p>
                  </div>
                  {/* Details */}
                  <div className="flex flex-col gap-[24px] items-start w-full">
                    <p className="font-['Sora'] font-semibold text-[11px] text-white tracking-[2.2px] uppercase leading-[17px]">
                      Z vašeho zisku
                    </p>
                    <p
                      className="font-['Noto_Sans'] text-[15px] text-white leading-[24px] w-[345px] max-w-full"
                      style={{
                        fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                      }}
                    >
                      Podíl na vašem úspěchu. Vydělávame
                      až tehdy, když vyděláváte vy.
                    </p>
                    <ChecklistGroup items={card3Checklist} variant="dark" />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute border-[#c9c6c6] border-[0.4px] border-solid inset-0 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a href="#kontakt" className="bg-black flex h-[60px] items-center justify-center px-[51px] rounded-[62px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
          <p className="font-['Sora'] font-extrabold text-[14px] text-center text-white tracking-[-0.28px] uppercase leading-normal">
            ověřit kompatibilitu
          </p>
        </a>
      </div>
    </section>
  );
}

function ChecklistGroup({
  items,
  variant,
}: {
  items: ChecklistItem[];
  variant: "light" | "dark";
}) {
  return (
    <div className="flex flex-col items-start w-full">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex gap-[18px] items-center w-full"
        >
          <div
            className={`flex h-[32px] items-center py-[4.374px] shrink-0 ${variant === "dark" ? "opacity-80" : ""}`}
          >
            <div className="relative shrink-0 size-[16.316px]">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 16.3165 16.3167"
              >
                <rect
                  fill="#BFBFBF"
                  height="16.3165"
                  width="16.3165"
                  y="0.000185871"
                  opacity={variant === "dark" ? "0.7" : "1"}
                />
                <path
                  d={svgPaths.p14c5c640}
                  stroke="white"
                  strokeWidth="1.57901"
                />
              </svg>
            </div>
          </div>
          <p
            className={`font-['Noto_Sans'] font-bold text-[15px] leading-[24px] w-[345px] max-w-full ${variant === "dark" ? "text-white" : "text-black"}`}
            style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
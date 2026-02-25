import imgRectangle from "figma:asset/320b8c287414bc6a4263c44fb04247eb957ea265.png";
import imgRectangle5 from "figma:asset/3ad0cbf86082bb5c0deed567f95b0ba4f3a3b0bb.png";
import { imgRectangle7 } from "../../imports/svg-76oh5";

const leftCards = [
  {
    number: "01",
    title: "akvizice",
    subtitle: "Budování shody",
    description:
      "Nezačínáme smlouvou, ale hloubkovým porozuměním. Prověřujeme váš byznys model, marže a potenciál. Musíme si být jisti, že náš přístup dokáže vytvořit dostatečnou páku pro růst.",
    height: 294,
  },
  {
    number: "03",
    title: "Kampaně",
    subtitle: "Nákup trafficu",
    description:
      "Spouštíme výkonnostní marketing. Testujeme kanály\na ladíme efektivitu nákladů na akvizici tak, aby byl model dlouhodobě udržitelný a ziskový.",
    height: 270,
  },
];

const rightCards = [
  {
    number: "02",
    title: "Setup",
    subtitle: "Stavba systémů",
    description:
      "Vytvoříme neprůstřelný technologický základ. Nastavíme měření, automatizujeme vnitřní procesy \na připravíme platformu tak, aby zvládla nápor objednávek bez chyb.",
    height: 294,
    hasBackground: true,
  },
  {
    number: "04",
    title: "Strategic Growth",
    subtitle: "Přechod na Success Fee",
    description:
      "Jakmile systém prokáže svou funkčnost, měníme model. Přecházíme na podíl z úspěchu. Vaše prosperita je přímo spjata s naší odměnou.",
    height: 271,
    hasBackground: false,
  },
];

export function MethodologySection() {
  return (
    <section className="relative w-full bg-[#171717] overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-[80px] w-full py-[80px] min-h-[1604px]">
        {/* Section Header */}
        <div className="flex flex-col gap-[28px] items-center text-center text-white max-w-[730px] px-6">
          <div className="flex flex-col gap-[32px] items-center uppercase w-full max-w-[479px]">
            <p className="font-['Sora'] font-semibold text-[11px] tracking-[2.2px] leading-[17px] w-full">
              Metodika spolupráce
            </p>
            <p className="font-['Sora'] font-extrabold text-[52px] tracking-[-1.56px] leading-normal w-full">
              Cesta k úspěchu
            </p>
          </div>
          <p
            className="font-['Noto_Sans'] text-[17px] leading-[32px] opacity-65 w-full max-w-[665px]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            Minimalizujeme riziko na začátku, maximalizujeme společný zisk v
            dlouhodobém horizontu.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative w-full max-w-[1254px] mx-auto h-[1075px] hidden lg:block">
          {/* Background gradient decoration */}
          <div className="absolute h-[760px] left-[-1479px] opacity-43 top-[-50px] w-[1990px] pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute left-0 max-w-none size-full top-0"
                src={imgRectangle}
              />
            </div>
          </div>

          {/* Left column */}
          <div className="absolute left-[3px] top-0 flex flex-col gap-[240px] w-[520px]">
            {leftCards.map((card) => (
              <div
                key={card.number}
                className="relative rounded-[9px] w-full bg-[#171717]"
                style={{ height: `${card.height}px` }}
              >
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9px]"
                />
                {/* Number + Title group - right aligned */}
                <div className="absolute flex gap-[35px] items-center right-[42px] top-[40.5px] uppercase">
                  <p className="font-['Sora'] font-extrabold text-[83px] text-[#3b3b3b] text-center tracking-[-2.49px] leading-normal">
                    {card.number}
                  </p>
                  <div className="flex flex-col gap-[15px] text-right text-white w-[137px]">
                    <p className="font-['Sora'] font-extrabold text-[26px] tracking-[-0.78px] leading-normal">
                      {card.title}
                    </p>
                    <p className="font-['Sora'] font-semibold text-[11px] opacity-56 tracking-[2.2px] leading-[17px]">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                {/* Description - right aligned */}
                <p
                  className="absolute right-[42px] text-[15px] text-right text-white leading-[24px] top-[157.5px] w-[390px]"
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline line with dots */}
          <div className="absolute left-[632px] top-0 w-[13px] h-[965px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 12.7586 965"
            >
              <rect
                fill="white"
                height="965"
                opacity="0.18"
                rx="0.5"
                width="1"
                x="6"
              />
              <circle
                cx="6.37931"
                cy="67.3793"
                fill="white"
                r="5.87931"
                stroke="white"
              />
              <circle
                cx="6.37931"
                cy="333.379"
                fill="white"
                r="5.87931"
                stroke="white"
              />
              <circle
                cx="6.37931"
                cy="599.379"
                fill="white"
                r="5.87931"
                stroke="white"
              />
              <circle
                cx="6.37931"
                cy="865.379"
                fill="white"
                r="5.87931"
                stroke="white"
              />
            </svg>
          </div>

          {/* Right column - offset 270px from top */}
          <div className="absolute left-[729px] top-[270px] flex flex-col gap-[240px] w-[520px]">
            {/* Card 02 - with dark bg */}
            <div
              className="relative rounded-[9px] w-full bg-[#171717]"
              style={{ height: `${rightCards[0].height}px` }}
            >
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9px]"
              />
              <div className="absolute flex gap-[35px] items-center left-[42px] top-[40.5px] uppercase">
                <div className="flex flex-col gap-[15px] text-white w-[137px]">
                  <p className="font-['Sora'] font-extrabold text-[26px] tracking-[-0.78px] leading-normal">
                    {rightCards[0].title}
                  </p>
                  <p className="font-['Sora'] font-semibold text-[11px] opacity-56 tracking-[2.2px] leading-[17px]">
                    {rightCards[0].subtitle}
                  </p>
                </div>
                <p className="font-['Sora'] font-extrabold text-[83px] text-[#3b3b3b] text-center tracking-[-2.49px] leading-normal">
                  {rightCards[0].number}
                </p>
              </div>
              <p
                className="absolute left-[42px] text-[15px] text-white leading-[24px] top-[157.5px] w-[390px]"
                style={{
                  fontFamily: "'Noto Sans', sans-serif",
                  fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                }}
              >
                {rightCards[0].description}
              </p>
            </div>

            {/* Card 04 - with gradient background effect */}
            <div
              className="relative rounded-[9px] w-[520px]"
              style={{ height: `${rightCards[1].height}px` }}
            >
              {/* Background gradient decoration */}
              <div className="absolute inset-[-30.26%_-41.54%_-32.1%_-18.65%] flex items-center justify-center pointer-events-none">
                <div className="flex-none h-[440px] rotate-180 w-[833px]">
                  <div
                    className="blur-[7.6px] relative size-full"
                    style={{
                      maskImage: `url('${imgRectangle7}')`,
                      maskSize: "519px 271px",
                      maskPosition: "97px 82px",
                      maskRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute inset-0 pointer-events-none">
                      <img
                        alt=""
                        className="absolute max-w-none object-cover opacity-70 size-full"
                        src={imgRectangle5}
                      />
                      <div className="absolute bg-[rgba(98,98,98,0.05)] inset-0" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bg-transparent flex flex-col items-start justify-center left-0 pl-[42px] py-[40.5px] rounded-[9px] top-px w-[520px] h-full">
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9px]"
                />
                <div className="flex flex-col gap-[15px] text-white uppercase mb-auto mt-0">
                  <p className="font-['Sora'] font-extrabold text-[26px] tracking-[-0.78px] leading-normal">
                    {rightCards[1].title}
                  </p>
                  <p className="font-['Sora'] font-semibold text-[11px] opacity-56 tracking-[2.2px] leading-[17px]">
                    {rightCards[1].subtitle}
                  </p>
                </div>
                <p
                  className="text-[15px] text-white leading-[24px] w-[390px] mt-auto"
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                  }}
                >
                  {rightCards[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-8 w-full px-6 lg:hidden">
          {[leftCards[0], rightCards[0], leftCards[1], rightCards[1]].map(
            (card) => (
              <div
                key={card.number}
                className="relative rounded-[9px] w-full bg-[#171717] p-[42px]"
              >
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9px]"
                />
                <div className="flex gap-[24px] items-center uppercase mb-6">
                  <p className="font-['Sora'] font-extrabold text-[60px] text-[#3b3b3b] tracking-[-2.49px] leading-normal">
                    {card.number}
                  </p>
                  <div className="flex flex-col gap-[10px] text-white">
                    <p className="font-['Sora'] font-extrabold text-[22px] tracking-[-0.78px] leading-normal">
                      {card.title}
                    </p>
                    <p className="font-['Sora'] font-semibold text-[11px] opacity-56 tracking-[2.2px] leading-[17px]">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <p
                  className="text-[15px] text-white leading-[24px]"
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                  }}
                >
                  {card.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

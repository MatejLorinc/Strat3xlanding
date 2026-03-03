import svgPaths from "../../imports/svg-59wapeqsll";

interface ChartCardData {
  tag: string;
  title: string;
  growth: string;
  chartPaths: { green: string; gray: string };
}

const chartCards: ChartCardData[] = [
  {
    tag: "Funded Startup",
    title: "HealthTech",
    growth: "3.1X",
    chartPaths: {
      green: "pff39900",
      gray: "p11bcf7c0",
    },
  },
  {
    tag: "Offline → Online",
    title: "E-commerce",
    growth: "4.2X",
    chartPaths: {
      green: "",
      gray: "p293a7100",
    },
  },
  {
    tag: "Regulované odvětví",
    title: "Vaping & CBD",
    growth: "5.8X",
    chartPaths: {
      green: "p24e95b00",
      gray: "p26e7b680",
    },
  },
  {
    tag: "Funded Startup",
    title: "SaaS Startup",
    growth: "5.8X",
    chartPaths: {
      green: "p65da480",
      gray: "p34506d00",
    },
  },
];

const months = ["Úno.", "Bře.", "Dub.", "Kvě.", "Čvn.", "Čvc.", "Srp.", "Zář.", "Říj.", "Lis.", "Pro."];

// Desktop borders: 2×2 grid layout
// [0,0] all sides | [0,1] right+top
// [1,0] bottom+left+right | [1,1] bottom+right+top
const desktopBorderStyles: Record<number, string> = {
  0: "lg:border-[0.4px]",
  1: "lg:border-r-[0.4px] lg:border-t-[0.4px]",
  2: "lg:border-b-[0.4px] lg:border-l-[0.4px] lg:border-r-[0.4px]",
  3: "lg:border-b-[0.4px] lg:border-r-[0.4px] lg:border-t-[0.4px]",
};

// Mobile borders: single column stacking
// Card 0: all sides
// Card 1: all sides
// Card 2: bottom+left+right (shares top with card 1)
// Card 3: all sides
const mobileBorderStyles: Record<number, string> = {
  0: "border-[0.4px]",
  1: "border-[0.4px]",
  2: "border-b-[0.4px] border-l-[0.4px] border-r-[0.4px]",
  3: "border-[0.4px]",
};

export function DataResultsSection() {
  return (
    <section id="sluzby" className="relative w-full py-12 lg:py-20">
      {/* Decorative line */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-12 lg:mb-20">
        <div className="w-full h-[0.4px] flex justify-between">
          <div className="w-[30%] lg:w-[379px] h-[0.4px] bg-[#a9a9a9]" />
          <div className="w-[30%] lg:w-[379px] h-[0.4px] bg-[#a9a9a9]" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-[21px] lg:gap-[28px] items-center text-center mb-12 lg:mb-20">
          <div className="flex flex-col gap-[26px] lg:gap-[32px] items-center uppercase w-full max-w-[722px]">
            <p className="font-['Sora'] font-semibold text-[11px] text-black tracking-[2.2px] leading-[17px] w-full">
              Reálné výsledky
            </p>
            <p className="font-['Sora'] font-extrabold text-[32px] lg:text-[52px] text-black tracking-[-0.96px] lg:tracking-[-1.56px] leading-normal w-full">
              Data, která mluví za nás
            </p>
          </div>
          <p
            className="font-['Noto_Sans'] font-normal text-[17px] text-black leading-[32px] w-full max-w-[722px]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            Každý graf zobrazuje vývoj klienta před naším vstupem a po něm.
          </p>
        </div>

        {/* Chart Grid - 2x2 */}
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 w-full max-w-[1400px] mx-auto">
          {chartCards.map((card, index) => (
            <ChartCard key={index} data={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChartCard({ data, index }: { data: ChartCardData; index: number }) {
  return (
    <div className={`relative flex flex-col gap-[28px] lg:gap-[33px] h-[346px] lg:h-[396px] overflow-hidden items-start lg:items-center justify-start lg:justify-center px-[25px] lg:px-[55px] pt-[17px] lg:py-[38px] w-full lg:w-[700px] border-solid border-[#a9a9a9] ${mobileBorderStyles[index]} lg:border-0 ${desktopBorderStyles[index]}`}>
      {/* Header: Tag + Title + Growth */}
      <div className="flex justify-between items-end w-full">
        <div className="flex flex-col gap-[16px] lg:gap-[20px] items-start shrink-0">
          <div className="bg-[#eff2f8] flex h-[32px] items-center justify-center px-[12px]">
            <p className="font-['Sora'] font-semibold text-[11px] text-black tracking-[2.2px] uppercase leading-[17px] whitespace-nowrap">
              {data.tag}
            </p>
          </div>
          <p className="font-['Sora'] font-extrabold text-[26px] text-black tracking-[-0.78px] uppercase leading-normal">
            {data.title}
          </p>
        </div>
        <div className="flex flex-col gap-[10px] items-end text-right uppercase shrink-0">
          <p className="font-['Sora'] font-extrabold text-[32px] lg:text-[52px] text-black tracking-[-0.96px] lg:tracking-[-1.56px] leading-normal w-full">
            {data.growth}
          </p>
          <p className="font-['Sora'] font-semibold text-[11px] text-black tracking-[2.2px] leading-[19px] w-full">
            růst
          </p>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex flex-col gap-[14px] items-start w-full lg:max-w-[554px]">
        <div className="relative w-full lg:max-w-[554px] h-[80px] lg:h-[110px]">
          {/* Chart lines */}
          <div className="absolute inset-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={getChartViewBox(index)}>
              {data.chartPaths.gray && (
                <path
                  d={(svgPaths as Record<string, string>)[data.chartPaths.gray]}
                  stroke="#DFDFDF"
                  strokeLinejoin="round"
                  strokeMiterlimit="1.08239"
                  strokeWidth="4"
                />
              )}
              {data.chartPaths.green && (
                <path
                  d={(svgPaths as Record<string, string>)[data.chartPaths.green]}
                  stroke="#84D3C5"
                  strokeLinejoin="round"
                  strokeMiterlimit="1.08239"
                  strokeWidth="4"
                />
              )}
              {/* Simple rising green line for E-commerce card */}
              {index === 1 && (
                <path
                  d="M183.5 100.543L551 1.93167"
                  stroke="#84D3C5"
                  strokeLinejoin="round"
                  strokeMiterlimit="1.08239"
                  strokeWidth="4"
                />
              )}
            </svg>
          </div>

          {/* Dashed vertical line - "Vstup STRAT3X" */}
          <div className="absolute left-[24%] lg:left-[133px] top-0 flex flex-col items-center">
            <p
              className="font-['Noto_Sans'] font-medium text-[13px] text-black text-center leading-[32px] w-[99px]"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              Vstup STRAT3X
            </p>
            <div className="w-[2.5px] h-[110px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.492 109.876">
                <path d={svgPaths.p2dcff580} fill="black" stroke="white" strokeWidth="0.5" />
                <path d={svgPaths.p709b100} fill="black" stroke="white" strokeWidth="0.5" />
                <path d={svgPaths.p33d819c0} fill="black" stroke="white" strokeWidth="0.5" />
                <path d={svgPaths.p2d91ce80} fill="black" stroke="white" strokeWidth="0.5" />
                <path d={svgPaths.p3d5a4a00} fill="black" stroke="white" strokeWidth="0.5" />
                <path d={svgPaths.p180f5400} fill="black" stroke="white" strokeWidth="0.5" />
                <path d={svgPaths.p2e2b8e00} fill="black" stroke="white" strokeWidth="0.5" />
                <path d={svgPaths.p36f1cd00} fill="black" stroke="white" strokeWidth="0.5" />
                <path d={svgPaths.p1926be20} fill="black" stroke="white" strokeWidth="0.5" />
                <path d={svgPaths.p1c76ac00} fill="black" stroke="white" strokeWidth="0.5" />
                <path d={svgPaths.p3cc00500} fill="black" stroke="white" strokeWidth="0.5" />
                <path d={svgPaths.p31bb8972} fill="black" stroke="white" strokeWidth="0.5" />
                <path d={svgPaths.p48b700} fill="black" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Month labels */}
        <div className="flex flex-col gap-[12px] items-end w-full text-[13px] text-black leading-[32px]">
          <div
            className="flex items-center gap-[2px] lg:gap-0 lg:justify-between w-full font-['Noto_Sans'] font-medium"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            {months.map((m) => (
              <p key={m}>{m}</p>
            ))}
          </div>
          <p
            className="font-['Noto_Sans'] font-bold text-right w-full"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            12 měsíců spolupráce
          </p>
        </div>
      </div>
    </div>
  );
}

function getChartViewBox(index: number): string {
  switch (index) {
    case 0:
      return "0 0 554.839 91.676";
    case 1:
      return "0 0 551.518 102.543";
    case 2:
      return "0 0 543.599 141.079";
    case 3:
      return "0 0 544.886 129.104";
    default:
      return "0 0 554.839 91.676";
  }
}
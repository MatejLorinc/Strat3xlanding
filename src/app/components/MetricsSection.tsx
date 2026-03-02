import svgPaths from "../../imports/svg-59wapeqsll";
import imgRectangle4 from "figma:asset/1f7cbf18e91bd11d865e7e7dd625df2af6bb157d.png";

export function MetricsSection() {
  return (
    <section className="relative w-full py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-[18px] lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:gap-8 mb-8 lg:mb-12 text-black uppercase text-center lg:text-left">
          <p className="font-['Sora'] font-semibold text-[11px] tracking-[2.2px] leading-[17px]">
            Čísla, která nás definují
          </p>
          <h2 className="font-['Sora'] font-extrabold text-[32px] lg:text-[52px] tracking-[-0.96px] lg:tracking-[-1.56px] leading-[50px] lg:leading-normal">
            Scale, který přináší výsledky
          </h2>
        </div>

        {/* Metrics Cards */}
        <div className="flex flex-col items-center lg:items-stretch lg:flex-row lg:flex-nowrap gap-0">
          <MetricCard
            icon={<ChartIcon />}
            value="30+"
            subValue="+7 v procesu akvizice"
            label="aktivních klientů"
            borderRight
          />
          <MetricCard
            icon={<MoneyIcon />}
            value="120 mil"
            subValue="~10 mil/měsíc"
            label="investováno do reklamy ročně"
            borderRight
            borderLeft
          />
          <MetricCard
            icon={<GlobeIcon />}
            value="1.2 mld"
            subValue="~100 mil/měsíc"
            label="CZK obrat klientů ročně"
            underline
            borderRight
            borderLeft
          />
          <MetricCard
            icon={<TransactionIcon />}
            value="720k+"
            subValue="~60k/měsíc"
            label="Transakcí ročně"
            borderLeft
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 lg:mt-20">
          <button className="bg-black h-[60px] px-[51px] rounded-[62px] hover:bg-gray-900 transition-colors">
            <span className="font-['Sora'] font-extrabold text-[14px] text-white text-center tracking-[-0.28px] uppercase">
              ověřit kompatibilitu
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  subValue: string;
  label: string;
  borderRight?: boolean;
  borderLeft?: boolean;
  underline?: boolean;
}

function MetricCard({ icon, value, subValue, label, borderRight, borderLeft, underline }: MetricCardProps) {
  return (
    <div className="w-[350px] shrink-0">
      {/* Top Card */}
      <div
        className={`bg-white relative
          h-[296px] lg:h-[434.45px]
          border-[0.4px] border-[#a9a9a9]
        `}
      >
        <div className="flex flex-col justify-end items-center lg:items-start h-full pt-[40px] lg:pt-14 px-0 lg:px-[39.326px] pb-[22px] gap-[30px] lg:gap-[148px]">
          {/* Icon with decorative backgrounds */}
          <div className="relative">
            <div className="bg-[#b9b4d0] h-[27.694px] w-[97.742px] opacity-26 absolute" style={{ top: '13.03px' }} />
            <div className="bg-[#dfbcd9] h-[27.694px] w-[97.742px] opacity-26 absolute" style={{ left: '65.16px', top: '73.31px' }} />
            <div className="relative z-10">
              {icon}
            </div>
          </div>

          {/* Value */}
          <div className="flex flex-col items-center lg:items-start pb-[8.848px]">
            <p className="font-['Sora'] font-bold text-[68px] text-black tracking-[-2.72px] leading-normal">
              {value}
            </p>
            <p
              className="font-['Noto_Sans'] font-normal text-[17px] leading-[32px] text-center bg-clip-text text-transparent bg-no-repeat bg-size-[100%_100%]"
              style={{
                fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                backgroundImage: `url('${imgRectangle4}')`,
                WebkitTextFillColor: "transparent"
              }}
            >
              {subValue}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Label */}
      <div
        className={`bg-[#ececec] h-[43.258px] relative flex items-center justify-center
          border-[0.4px] border-[#c9c6c6]
        `}
      >
        <p className={`font-['Sora'] font-semibold text-[11px] text-black text-center tracking-[2.2px] uppercase leading-[17px] ${underline ? 'underline' : ''}`}>
          {label}
        </p>
      </div>
    </div>
  );
}

function ChartIcon() {
  return (
    <div className="w-[115.067px] h-[84.473px] relative lg:ml-[18.62px] mt-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115.067 84.4727">
        <g>
          <path d={svgPaths.p360dce80} fill="black" />
        </g>
      </svg>
    </div>
  );
}

function MoneyIcon() {
  return (
    <div className="w-[83.47px] h-[83.47px] relative lg:ml-[33.1px]">
      <svg className="absolute block inset-[0_8.68%] size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.9801 83.4696">
        <g>
          <path d={svgPaths.p285d600} fill="black" />
          <path d={svgPaths.p3041c000} fill="black" />
          <path d={svgPaths.p4975880} fill="black" />
          <path d={svgPaths.p31201d00} fill="black" />
          <path d={svgPaths.p23d71170} fill="black" />
          <path d={svgPaths.p23baf800} fill="black" />
        </g>
      </svg>
    </div>
  );
}

function GlobeIcon() {
  return (
    <div className="w-[162.531px] h-[99.3px] relative">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 162.531 99.625">
        <g>
          <rect fill="#B9B4D0" height="27.6302" opacity="0.26" width="97.5184" x="0" y="11.8585" />
          <rect fill="#DFBCD9" height="27.6302" opacity="0.26" width="97.5184" x="65.0123" y="71.9948" />
          <g>
            <mask fill="black" height="88" id="path-3-outside-1_1_2246" maskUnits="userSpaceOnUse" width="88" x="44.3523" y="-0.674988">
              <rect fill="white" height="88" width="88" x="44.3523" y="-0.674988" />
              <path d={svgPaths.p1d914100} />
            </mask>
            <path d={svgPaths.p1d914100} fill="black" />
            <path d={svgPaths.p1d914100} mask="url(#path-3-outside-1_1_2246)" stroke="black" strokeWidth="0.650122" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TransactionIcon() {
  return (
    <div className="w-[72.784px] h-[88.439px] relative lg:ml-[41.76px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.7839 88.4391">
        <g>
          <path d={svgPaths.p37b12200} fill="black" stroke="white" strokeWidth="0.155156" />
          <path d={svgPaths.p10255c00} fill="black" stroke="white" strokeWidth="0.155156" />
        </g>
      </svg>
    </div>
  );
}
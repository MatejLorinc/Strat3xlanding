import svgPaths from "../../imports/svg-59wapeqsll";
import imgRectangle5 from "figma:asset/3ad0cbf86082bb5c0deed567f95b0ba4f3a3b0bb.png";
import { imgRectangle6138, imgEllipse1 } from "../../imports/svg-76oh5";

export function ComparisonSection() {
  return (
    <section className="relative w-full py-12 lg:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-[60px] lg:gap-[124px] items-center w-full">
          <div className="font-['Sora'] font-extrabold text-center tracking-[-2.46px] uppercase">
            <p className="mb-0 text-[56px] lg:text-[68px] leading-[50px]">
              <span className="text-[#e8e8e8]">nejsme agentura</span>
              <span>{" "}</span>
            </p>
            <p className="text-[61px] lg:text-[82px] leading-[50px] text-black">Jsme váš partner.</p>
          </div>

          {/* Cards Row */}
          <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[32px] items-center w-full">
            {/* Left Card - Kdo jsme */}
            <KdoJsmeCard />

            {/* Right Card - Kdo nejsme */}
            <KdoNejsmeCard />
          </div>
        </div>

        {/* Description text */}
        <div className="flex justify-center mt-12 lg:mt-20">
          <p className="font-['Noto_Sans'] font-normal text-[17px] text-black text-center w-[332px] lg:w-full max-w-[594px] leading-[32px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            <span>{"Díky způsobu spolupráce a odměňování navázaného na ziskovost máme "}</span>
            <span className="font-bold" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>{"stejný zájem jako vy. "}</span>
            <span>Táhneme za stejnou stranu provazu.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

const kdoJsmeItems = [
  'Strategic Growth Partner s podílem na úspěchu',
  'Budovatel komplexních online businessů',
  'Technologický lídr s vlastním vývojem',
  'Partner, jehož zisk roste společně s vaším'
];

const kdoNejsmeItems = [
  'Klasická agentura přeprodávající hodiny',
  'Dodavatel jednorázových kampaní',
  'Servisní firma bez zájmu o váš zisk',
  'Partner s vysokou marží bez ohledu na výsledky'
];

function KdoJsmeCard() {
  return (
    <div className="relative min-h-[344px] lg:h-[344px] rounded-[9px] shrink-0 w-full max-w-[349px] lg:max-w-none lg:w-[684px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.25)]">
      {/* Background with glassmorphism */}
      <div className="absolute inset-0 rounded-[9px] overflow-hidden">
        {/* Gray base - Mobile */}
        <div
          className="lg:hidden absolute bg-[rgba(120,120,120,0.89)] blur-[2px] h-[577px] left-0 rounded-[9px] top-0 w-[684px]"
          style={{
            maskImage: `url('${imgRectangle6138}')`,
            maskSize: '349px 437px',
            maskPosition: '0px 0px',
            maskRepeat: 'no-repeat',
          }}
        />
        {/* Gray base - Desktop */}
        <div
          className="hidden lg:block absolute bg-[rgba(120,120,120,0.89)] blur-[2px] h-[344px] left-0 rounded-[9px] top-0 w-[684px]"
          style={{
            maskImage: `url('${imgRectangle6138}')`,
            maskSize: '684px 344px',
            maskPosition: '0px 0px',
            maskRepeat: 'no-repeat',
          }}
        />
        {/* Colorful gradient - covers entire card */}
        <div className="absolute inset-0 rounded-[9px] overflow-hidden mix-blend-hard-light">
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
            src={imgRectangle5}
          />
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col gap-[24px] lg:gap-[34px] pl-[35px] lg:pl-[50px] pt-[42px] lg:pt-[40px] rounded-[9px] shadow-[0px_0px_6.3px_0px_rgba(0,0,0,0.15)]">
        <p className="font-['Sora'] font-extrabold text-[23px] text-white tracking-[-0.69px] uppercase w-full">
          kdo jsme
        </p>
        <div className="flex flex-col gap-2">
          {kdoJsmeItems.map((item, index) => (
            <div key={index} className="flex gap-5 items-start">
              <div className="h-[13px] shrink-0 w-[7px] relative">
                <div className="absolute inset-[-0.77%_-1.43%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.2 13.2">
                    <path d={svgPaths.p8921180} fill="white" stroke="white" strokeWidth="0.1" />
                  </svg>
                </div>
              </div>
              <p className="font-['Noto_Sans'] font-bold text-[17px] text-white leading-[24px] lg:leading-[32px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Green accent circle */}
      <div className="absolute contents left-[516px] top-[175px]">
        <div
          className="absolute left-[525px] top-[310px] size-[105px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9px_-135px] mask-size-[168px_169px]"
          style={{ maskImage: `url('${imgEllipse1}')` }}
        >
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 105">
            <circle cx="52.5" cy="52.5" fill="#84D3C5" r="52.5" />
          </svg>
        </div>
        <div
          className="absolute inset-[62.51%_0.06%_-0.29%_79.55%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-28.151px_-40.027px] mask-size-[168px_169px]"
          style={{ maskImage: `url('${imgEllipse1}')` }}
        >
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.426 129.973">
            <g>
              <path d={svgPaths.p3c021180} fill="white" />
              <path d={svgPaths.p30105580} fill="white" />
            </g>
          </svg>
        </div>
      </div>

      {/* Inner shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0_0_4px_2px_rgba(255,255,255,0.35)]" />
    </div>
  );
}

function KdoNejsmeCard() {
  return (
    <div className="relative min-h-[443px] lg:min-h-0 lg:h-[344px] rounded-[9px] shrink-0 w-full max-w-[345px] lg:max-w-none lg:w-[683px]">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[11px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)]" />

      {/* Dark background content */}
      <div className="absolute bg-[rgba(110,110,110,0.2)] flex flex-col gap-[24px] lg:gap-[34px] h-full items-start pl-[33px] lg:pl-[50px] pt-[40px] right-0 lg:right-[-1px] rounded-[9px] top-0 w-full lg:w-[684px]">
        <p className="font-['Sora'] font-extrabold text-[23px] text-white tracking-[-0.69px] uppercase w-full">
          kdo nejsme
        </p>
        <div className="flex flex-col gap-2">
          {kdoNejsmeItems.map((item, index) => (
            <div key={index} className="flex gap-5 items-start">
              <div className="h-[13px] shrink-0 w-[7px] relative">
                <div className="absolute inset-[-0.77%_-1.43%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.2 13.2">
                    <path d={svgPaths.p8921180} fill="white" stroke="white" strokeWidth="0.1" />
                  </svg>
                </div>
              </div>
              <p className="font-['Noto_Sans'] font-bold text-[17px] text-white leading-[24px] lg:leading-[32px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pink/magenta accent circle */}
      <div className="absolute contents left-0 top-0">
        <div
          className="absolute left-[525px] top-[310px] size-[105px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9px_-135px] mask-size-[168px_169px]"
          style={{ maskImage: `url('${imgEllipse1}')` }}
        >
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 105">
            <circle cx="52.5" cy="52.5" fill="#D93EB2" r="52.5" />
          </svg>
        </div>
        <div
          className="absolute inset-[62.51%_-0.08%_-0.29%_79.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-28.151px_-40.027px] mask-size-[168px_169px]"
          style={{ maskImage: `url('${imgEllipse1}')` }}
        >
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.426 129.973">
            <g>
              <path d={svgPaths.p3c021180} fill="white" />
              <path d={svgPaths.p1ccde600} fill="white" />
            </g>
          </svg>
        </div>
      </div>

      {/* Inner shadow */}
      <div className="absolute inset-[-2px] pointer-events-none rounded-[inherit] shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.35)]" />
    </div>
  );
}
import svgPaths from "../../imports/svg-59wapeqsll";
import imgRectangle from "figma:asset/320b8c287414bc6a4263c44fb04247eb957ea265.png";
import imgRectangle4 from "figma:asset/1f7cbf18e91bd11d865e7e7dd625df2af6bb157d.png";
import { imgRectangle3, imgVector } from "../../imports/svg-76oh5";

export function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Background gradient */}
      <div className="absolute inset-[3.38%_-1.63%_8.04%_-28.8%] flex items-center justify-center pointer-events-none">
        <div className="-scale-y-100 flex-none h-[760px] w-[2504.229px]">
          <div className="opacity-70 relative size-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-0 max-w-none size-full top-0"
                src={imgRectangle}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vector decoration */}
      <div className="absolute inset-[22.14%_20.16%_9.33%_56.51%] pointer-events-none">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 447.992 587.966"
        >
          <path
            d={svgPaths.p1dad8600}
            fill="white"
            fillOpacity="0.2"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center w-full px-6 lg:px-[154px] py-[40px] lg:py-[80px]">
        <div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[162px] h-auto lg:h-[698px] items-start lg:items-center w-full max-w-[1400px]">
          {/* Left Column - Frame18 */}
          <div className="flex flex-col gap-[28px] h-auto lg:h-[698px] items-start w-full lg:w-auto">
            {/* Frame9 - Title, description, buttons */}
            <div className="flex flex-col gap-[32px] lg:gap-[48px] items-start pt-[32px] w-full lg:w-[663px]">
              {/* Frame8 - Label + Headline */}
              <div className="flex flex-col gap-[40px] lg:gap-[73px] items-start">
                <div className="flex items-center justify-center">
                  <p className="font-['Sora'] font-semibold text-[11px] text-black tracking-[2.2px] uppercase leading-[17px]">
                    Strategic Growth Partner
                  </p>
                </div>
                <div className="font-['Sora'] font-bold text-[36px] sm:text-[48px] lg:text-[68px] text-black tracking-[-2.72px] uppercase leading-normal lg:whitespace-nowrap">
                  <p className="mb-0">{`Váš růst, náš `}</p>
                  <p>společný zisk.</p>
                </div>
              </div>

              {/* Description */}
              <p
                className="font-['Noto_Sans'] text-[15px] lg:text-[17px] text-black leading-[28px] lg:leading-[32px] w-full lg:w-[663px]"
                style={{
                  fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                }}
              >
                Nejsme agentura, která fakturuje hodiny. Jsme partner, jehož
                zisk roste s tím vaším. Budujeme a škálujeme online businessy
                s minimálním růstem 3X za první rok.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-[16px] items-center sm:items-center w-full sm:w-auto">
                <button className="bg-black flex h-[60px] items-center justify-center px-[51px] rounded-[62px] hover:bg-gray-900 transition-colors w-full sm:w-auto">
                  <span className="font-['Sora'] font-extrabold text-[14px] text-white text-center tracking-[-0.28px] uppercase leading-normal">
                    ověřit kompatibilitu
                  </span>
                </button>

                <button className="backdrop-blur-[20.25px] bg-[rgba(255,255,255,0.2)] flex h-[60px] items-center justify-center px-[51px] rounded-[62px] relative hover:bg-[rgba(255,255,255,0.3)] transition-colors w-full sm:w-auto">
                  <div
                    aria-hidden="true"
                    className="absolute border-2 border-[#a038b6] border-solid inset-0 pointer-events-none rounded-[62px] shadow-[0px_0px_10.3px_0px_rgba(0,0,0,0.25)]"
                  />
                  <span className="font-['Sora'] font-extrabold text-[14px] text-black text-center tracking-[-0.28px] uppercase leading-normal relative">
                    Jak fungujeme
                  </span>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_3px_5px_4px_0px_rgba(255,255,255,0.3)]" />
                </button>
              </div>
            </div>

            {/* Frame13 - Info Badge */}
            <div className="flex gap-[8px] items-start lg:items-center leading-[0]">
              {/* Green circle with info icon - Group140 */}
              <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start">
                <div className="col-start-1 row-start-1 ml-0 mt-[3px] relative size-[15px]">
                  <svg
                    className="absolute block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 15 15"
                  >
                    <circle cx="7.5" cy="7.5" fill="#84D3C5" r="7.5" />
                  </svg>
                </div>
                <div className="col-start-1 row-start-1 ml-[2px] mt-0 overflow-clip relative size-[19px]">
                  <div className="absolute contents inset-0">
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 19 19"
                    >
                      <path d={svgPaths.p19348280} fill="black" />
                    </svg>
                  </div>
                  <div className="absolute inset-[41.68%_44.87%_26.99%_44.93%]">
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 1.93822 5.95231"
                    >
                      <path d={svgPaths.p19b51b00} fill="black" />
                    </svg>
                  </div>
                  <div className="absolute inset-[26.21%_44.67%_64.38%_44.6%]">
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 2.03831 1.78823"
                    >
                      <path d={svgPaths.p179009f0} fill="black" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Sora'] text-[#1c3430] text-[11px] tracking-[2.2px] uppercase leading-[19px]">
                <span className="font-normal">
                  Aktuálně přijímáme
                </span>
                <span className="font-extrabold">
                  {` max. 3 nové partnery`}
                </span>
                <span>{` `}</span>
                <span className="font-normal">měsíčně.</span>
              </p>
            </div>
          </div>

          {/* Right Column - Frame15 */}
          <div className="hidden lg:flex flex-col gap-[24px] items-start overflow-clip w-[492px]">
            {/* Stats Cards - Group141 */}
            <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
              {/* Frame16 - 3X stat */}
              <div className="col-start-1 row-start-1 flex gap-[22px] items-center ml-0 mt-0 relative">
                {/* H - 3X graphic */}
                <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                  <div
                    className="col-start-1 row-start-1 h-[54px] relative w-[86px] ml-[3px] mt-[14px]"
                    style={{
                      maskImage: `url('${imgRectangle3}')`,
                      maskSize: "86.417px 50.932px",
                      maskPosition: "-0.688px 2.36px",
                      maskRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        alt=""
                        className="absolute left-0 max-w-none size-full top-0"
                        src={imgRectangle4}
                      />
                    </div>
                  </div>
                </div>
                <div className="font-['Sora'] font-semibold text-[11px] text-black tracking-[2.2px] uppercase leading-[19px] w-[130px] mt-[12px]">
                  <p className="mb-0">{`Minimální `}</p>
                  <p>růst v prvním roce</p>
                </div>
              </div>

              {/* Frame20 - >15 stat */}
              <div className="col-start-1 row-start-1 flex gap-[22px] items-center ml-[258px] mt-0 relative">
                {/* H1 - >15 text */}
                <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                  <p className="col-start-1 row-start-1 font-['Sora'] font-bold text-[68px] text-black tracking-[-2.72px] uppercase leading-normal ml-0 mt-[-10px] relative">{`>15`}</p>
                </div>
                <p className="font-['Sora'] font-semibold text-[11px] text-black tracking-[2.2px] uppercase leading-[19px] w-[104px] mt-[-16px]">
                  Let zkušeností v oboru
                </p>
              </div>
            </div>

            {/* Vector Decoration - Vrstva */}
            <div className="h-[588px] w-[448px] overflow-clip relative">
              <div
                className="absolute inset-[0_0_0.01%_0]"
                style={{
                  maskImage: `url('${imgVector}')`,
                  maskSize: "447.992px 587.966px",
                  maskPosition: "0px 0px",
                  maskRepeat: "no-repeat",
                }}
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 447.992 587.966"
                >
                  <path
                    d={svgPaths.p1dad8600}
                    fill="white"
                    fillOpacity="0.1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
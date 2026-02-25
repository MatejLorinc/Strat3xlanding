import svgPaths from "../../imports/svg-59wapeqsll";
import imgRectangle from "figma:asset/320b8c287414bc6a4263c44fb04247eb957ea265.png";
import imgRectangle4 from "figma:asset/1f7cbf18e91bd11d865e7e7dd625df2af6bb157d.png";
import { imgRectangle3, imgVector } from "../../imports/svg-76oh5";

export function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Background gradient */}
      <div className="absolute inset-[3.38%_-1.63%_8.04%_-28.8%] flex items-center justify-center pointer-events-none">
        <div className="-scale-y-100 h-[760px] w-[2504.229px] opacity-70">
          <div className="relative size-full">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
            </div>
          </div>
        </div>
      </div>

      {/* Vector decoration */}
      <div className="absolute inset-[22.14%_20.16%_9.33%_56.51%] pointer-events-none">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 447.992 587.966">
          <path d={svgPaths.p1dad8600} fill="white" fillOpacity="0.2" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-8 py-20">
        <div className="flex items-center justify-between gap-40">
          {/* Left Column - Main Content */}
          <div className="flex flex-col gap-12 w-[663px] pt-8">
            {/* Top Label */}
            <div className="flex flex-col gap-[73px]">
              <p className="font-['Sora'] font-semibold text-[11px] text-black tracking-[2.2px] uppercase leading-[17px]">
                Strategic Growth Partner
              </p>

              {/* Main Headline */}
              <div className="font-['Sora'] font-bold text-[68px] text-black tracking-[-2.72px] uppercase leading-normal">
                <p className="mb-0">Váš růst, náš</p>
                <p>společný zisk.</p>
              </div>
            </div>

            {/* Description */}
            <p className="font-['Noto_Sans'] font-normal text-[17px] text-black leading-[32px] w-[663px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
              Nejsme agentura, která fakturuje hodiny. Jsme partner, jehož zisk roste s tím vaším. Budujeme a škálujeme online businessy s minimálním růstem 3X za první rok.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button className="bg-black h-[60px] px-[51px] rounded-[62px] hover:bg-gray-900 transition-colors">
                <span className="font-['Sora'] font-extrabold text-[14px] text-white text-center tracking-[-0.28px] uppercase">
                  ověřit kompatibilitu
                </span>
              </button>

              <button className="backdrop-blur-[20.25px] bg-[rgba(255,255,255,0.2)] h-[60px] px-[51px] rounded-[62px] relative border-2 border-[#a038b6] shadow-[0px_0px_10.3px_0px_rgba(0,0,0,0.25)] hover:bg-[rgba(255,255,255,0.3)] transition-colors">
                <span className="font-['Sora'] font-extrabold text-[14px] text-black text-center tracking-[-0.28px] uppercase relative z-10">
                  Jak fungujeme
                </span>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_3px_5px_4px_0px_rgba(255,255,255,0.3)]" />
              </button>
            </div>

            {/* Info Badge */}
            <div className="flex items-center gap-2">
              <div className="relative w-[19px] h-[19px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <circle cx="7.5" cy="7.5" fill="#84D3C5" r="7.5" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-[15px] h-[15px]" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                    <g>
                      <path d={svgPaths.p19348280} fill="black" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Sora'] text-[11px] text-[#1c3430] tracking-[2.2px] uppercase leading-[17px]">
                <span className="font-normal">Aktuálně přijímáme</span>
                <span className="font-extrabold"> max. 3 nové partnery </span>
                <span className="font-normal">měsíčně.</span>
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="flex flex-col gap-6 w-[492px]">
            {/* Stats Cards */}
            <div className="flex gap-[258px]">
              <StatsCard
                number="3X"
                description="Minimální růst v prvním roce"
                maskImage={imgRectangle3}
                imageSrc={imgRectangle4}
              />
              <StatsCard
                number=">15"
                description="Let zkušeností v oboru"
                isText={true}
              />
            </div>

            {/* Vector Decoration */}
            <div className="h-[588px] w-[448px] overflow-clip relative">
              <div className="absolute inset-[0_0_0.01%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[447.992px_587.966px]" style={{ maskImage: `url('${imgVector}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 447.992 587.966">
                  <path d={svgPaths.p1dad8600} fill="white" fillOpacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatsCardProps {
  number: string;
  description: string;
  maskImage?: string;
  imageSrc?: string;
  isText?: boolean;
}

function StatsCard({ number, description, maskImage, imageSrc, isText }: StatsCardProps) {
  return (
    <div className="flex items-center gap-[22px]">
      {isText ? (
        <div className="font-['Sora'] font-bold text-[68px] text-black tracking-[-2.72px] uppercase leading-normal">
          {number}
        </div>
      ) : (
        <div className="h-[54px] w-[86px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.688px_2.36px] mask-size-[86.417px_50.932px] relative" style={{ maskImage: `url('${maskImage}')` }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imageSrc} />
          </div>
        </div>
      )}
      <p className="font-['Sora'] font-semibold text-[11px] text-black tracking-[2.2px] uppercase leading-[19px] w-[130px] whitespace-pre-wrap">
        {description}
      </p>
    </div>
  );
}

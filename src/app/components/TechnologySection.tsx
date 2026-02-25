import imgRectangle4 from "@/assets/1f7cbf18e91bd11d865e7e7dd625df2af6bb157d.png";
import svgPaths from "../../imports/svg-59wapeqsll";
import { imgG283 } from "../../imports/svg-76oh5";

export function TechnologySection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col gap-[80px] items-center justify-center w-full py-[80px]">
        {/* Section Header */}
        <div className="flex flex-col gap-[28px] items-center text-center text-black max-w-[655px] px-6">
          <div className="flex flex-col gap-[32px] items-center uppercase w-full max-w-[600px]">
            <p className="font-['Sora'] font-semibold text-[11px] tracking-[2.2px] leading-[17px] w-full">
              Technologie
            </p>
            <p className="font-['Sora'] font-extrabold text-[52px] tracking-[-1.56px] leading-normal w-full">
              Data-Driven přístup
            </p>
          </div>
          <p
            className="font-['Noto_Sans'] text-[17px] leading-[32px] w-full"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            Každé rozhodnutí podložené daty. Vlastní vývoj nástrojů pro
            maximální efektivitu.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex gap-[54px] items-center w-full max-w-[1392px] mx-auto px-6 xl:px-0">
          {/* Left Content */}
          <div className="flex flex-col gap-[60px] items-start w-full max-w-[1006px]">
            {/* Top feature row */}
            <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[246px] items-start lg:items-center w-full">
              <div className="flex flex-col gap-[24px] items-start w-full max-w-[494px]">
                <div className="flex flex-col gap-[28px] items-start max-w-[384px]">
                  {/* Gradient bar */}
                  <div className="h-[3px] w-[63px] rounded-[33px] overflow-hidden relative">
                    <img
                      alt=""
                      className="absolute left-0 max-w-none size-full top-[21.88%]"
                      src={imgRectangle4}
                      style={{ position: "absolute", objectFit: "cover" }}
                    />
                  </div>
                  <p className="font-['Sora'] font-extrabold text-[35px] text-black tracking-[-1.05px] uppercase leading-[49px]">
                    Pokročilá datová analytika
                  </p>
                </div>
                <p
                  className="font-['Noto_Sans'] text-[17px] text-black tracking-[-0.34px] leading-[32px] w-full"
                  style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                >
                  Vlastní tým datových specialistů. Nejde jen o měření – jde o
                  predikci, optimalizaci a rozhodování na základě dat, ne
                  pocitů.
                </p>
              </div>

              {/* Stat block */}
              <div className="relative w-[264px] h-[164px] bg-[#171717] shrink-0">
                <p className="absolute left-[76px] top-[30px] font-['Sora'] font-bold text-[42px] text-white text-center tracking-[-1.68px] uppercase leading-normal">
                  100 %
                </p>
                <p className="absolute left-[32px] top-[94px] font-['Sora'] font-semibold text-[11px] text-white text-center tracking-[2.2px] uppercase leading-[20px] opacity-61 w-[210px]">
                  rozhodnutí podložených daty
                </p>
              </div>
            </div>

            {/* 2x2 Tech Cards Grid */}
            <div className="flex flex-col items-start w-full max-w-[1006px]">
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row items-center">
                <TechCard
                  icon={<DatabaseIcon />}
                  title="Data Warehouse"
                  description="BigQuery & vlastní datové sklady pro agregaci dat ze všech kanálů"
                />
                <TechCard
                  icon={<ServerTrackingIcon />}
                  title="Server-side Tracking"
                  description="GTM na serveru = přesnější data bez ztráty konverzí"
                />
              </div>
              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row items-center">
                <TechCard
                  icon={<PredictiveIcon />}
                  title="Prediktivní modely"
                  description="LTV predikce, churn analýza, inventory forecasting"
                />
                <TechCard
                  icon={<AttributionIcon />}
                  title="Attribution Modeling"
                  description="Vlastní atribuční modely pro skutečnou hodnotu kanálů"
                />
              </div>
            </div>

            {/* Bottom text row */}
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[73px] items-start w-full">
              <div
                className="text-[15px] text-black leading-[24px] w-full max-w-[724px]"
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                <p
                  className="font-['Noto_Sans'] font-bold inline"
                  style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
                >
                  Lidská intuice jako třešnička na dortu.{" "}
                </p>
                <p
                  className="font-['Noto_Sans'] inline"
                  style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                >
                  Data nám řeknou co funguje, lidé pak proč a jak to vylepšit.
                </p>
              </div>
              <div className="flex gap-[8px] items-center shrink-0">
                <div className="relative shrink-0 size-[9px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    viewBox="0 0 9 9"
                  >
                    <circle cx="4.5" cy="4.5" fill="#84D3C5" r="4.5" />
                  </svg>
                </div>
                <p
                  className="font-['Noto_Sans'] font-bold text-[15px] text-black text-right leading-[24px]"
                  style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
                >
                  Real-time data processing.
                </p>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden xl:flex h-[740px] items-center justify-center shrink-0 w-0">
            <div className="rotate-90">
              <div className="h-0 relative w-[740px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 740 1"
                  >
                    <line
                      opacity="0.1"
                      stroke="black"
                      x2="740"
                      y1="0.5"
                      y2="0.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Checklist */}
          <div className="hidden xl:flex flex-col h-[595px] items-start justify-between shrink-0 w-[278px]">
            <ChecklistItem
              title="Prodejní platformy"
              description="E-shop, který unese vaše ambice a roste s vámi"
            />
            <ChecklistItem
              title="Měření každé koruny"
              description="Víme přesně, co funguje a kde investovat více"
            />
            <ChecklistItem
              title="Automatizace"
              description="Méně ruční práce, více času na strategii"
            />
            <ChecklistItem
              title="AI nástroje"
              description="Chytré rozhodování podpořené daty a predikce"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative bg-white flex flex-col h-[168px] items-center justify-center shrink-0 w-full sm:w-[503px]">
      <div
        aria-hidden="true"
        className="absolute border-[#c9c6c6] border-[0.4px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col items-start w-[408.406px]">
        <div className="flex gap-[32px] h-[98px] items-start w-full">
          <div className="shrink-0 mt-[4px]">{icon}</div>
          <div className="flex flex-col gap-[12px] items-start text-black w-[336.406px]">
            <p className="font-['Sora'] font-bold text-[22px] tracking-[-0.22px] leading-[38px]">
              {title}
            </p>
            <p
              className="font-['Noto_Sans'] text-[15px] leading-[24px] w-[336.406px]"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChecklistItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start justify-between w-full">
      <div className="flex items-center py-[6px] shrink-0">
        <div className="relative shrink-0 size-[22.382px]">
          <svg
            className="block size-full"
            fill="none"
            viewBox="0 0 22.3821 22.3821"
          >
            <rect fill="#BFBFBF" height="22.382" width="22.382" />
            <path
              d={svgPaths.p13deb200}
              stroke="white"
              strokeWidth="2.166"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] items-start text-black w-[224.406px]">
        <p className="font-['Sora'] font-bold text-[22px] tracking-[-0.22px] leading-[38px]">
          {title}
        </p>
        <p
          className="font-['Noto_Sans'] text-[15px] leading-[24px] w-full"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* Icon Components using exact Figma SVG paths */

function DatabaseIcon() {
  return (
    <div className="h-[39px] relative w-[35px]">
      <div className="absolute inset-[7.69%_1.79%_0_-4.64%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <path
            d={svgPaths.p1cb02d00}
            fill="black"
            stroke="white"
            strokeWidth="0.05"
          />
          <path
            d={svgPaths.p1cebc60}
            fill="black"
            stroke="white"
            strokeWidth="0.05"
          />
          <path
            d={svgPaths.p35b09d00}
            fill="black"
            stroke="white"
            strokeWidth="0.05"
          />
          <path
            d={svgPaths.p2a3b9f00}
            fill="black"
            stroke="white"
            strokeWidth="0.05"
          />
          <path
            d={svgPaths.p167d1a00}
            fill="black"
            stroke="white"
            strokeWidth="0.05"
          />
          <path
            d={svgPaths.p137d7172}
            fill="black"
            stroke="white"
            strokeWidth="0.05"
          />
          <path
            d={svgPaths.pb0e7600}
            fill="black"
            stroke="white"
            strokeWidth="0.05"
          />
        </svg>
      </div>
    </div>
  );
}

function ServerTrackingIcon() {
  return (
    <div className="relative shrink-0 size-[38.38px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 38.38 38.38"
      >
        <path
          d={svgPaths.p3f091f80}
          fill="black"
          stroke="white"
          strokeWidth="0.25"
        />
        <path
          d={svgPaths.pd01fa00}
          fill="black"
          stroke="white"
          strokeWidth="0.25"
        />
        <path
          d={svgPaths.p32d61840}
          fill="black"
          stroke="white"
          strokeWidth="0.25"
        />
        <path
          d={svgPaths.p2ec80f00}
          fill="black"
          stroke="white"
          strokeWidth="0.25"
        />
        <path
          d={svgPaths.p33275100}
          fill="black"
          stroke="white"
          strokeWidth="0.25"
        />
      </svg>
    </div>
  );
}

function PredictiveIcon() {
  return (
    <div className="h-[39px] relative w-[35px]">
      <div className="absolute inset-[0_-3.31%_0_-9.98%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 39.6497 39"
        >
          <path
            d={svgPaths.p2ccb8a80}
            fill="black"
            stroke="black"
            strokeWidth="0.2"
          />
        </svg>
      </div>
    </div>
  );
}

function AttributionIcon() {
  return (
    <div className="flex items-center justify-center shrink-0">
      <div className="-scale-y-100">
        <div
          className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start relative"
        >
          <div
            className="col-start-1 row-start-1 relative size-[37.656px]"
            style={{
              maskImage: `url('${imgG283}')`,
              maskSize: "40px 40px",
              maskPosition: "-1.172px -1.172px",
              maskRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-[-3.05%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 39.9562 39.9562"
              >
                <path
                  d={svgPaths.p26bfdb00}
                  stroke="black"
                  strokeMiterlimit="10"
                  strokeWidth="2.3"
                />
              </svg>
            </div>
          </div>
          <div
            className="col-start-1 row-start-1 relative size-[24.101px] ml-[18%] mt-[18%]"
            style={{
              maskImage: `url('${imgG283}')`,
              maskSize: "40px 40px",
              maskPosition: "-7.949px -7.95px",
              maskRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-[-4.77%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 26.4014 26.4014"
              >
                <path
                  d={svgPaths.p1a6a5b80}
                  stroke="black"
                  strokeMiterlimit="10"
                  strokeWidth="2.3"
                />
              </svg>
            </div>
          </div>
          <div
            className="col-start-1 row-start-1 relative size-[10.402px] ml-[36.19%] mt-[36.19%]"
            style={{
              maskImage: `url('${imgG283}')`,
              maskSize: "40px 40px",
              maskPosition: "-14.799px -14.799px",
              maskRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-[-11.06%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 12.702 12.7019"
              >
                <path
                  d={svgPaths.p2f2ef080}
                  stroke="black"
                  strokeMiterlimit="10"
                  strokeWidth="2.3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

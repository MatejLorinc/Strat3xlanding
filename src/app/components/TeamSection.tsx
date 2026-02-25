import svgPaths from "../../imports/svg-59wapeqsll";
import { img21421 } from "../../imports/svg-76oh5";
import img21422 from "figma:asset/9b1d2ddbf19b0238d4280b485f192cb251cc412e.png";
import img299071 from "figma:asset/833c20c5b36b9a1249674a86d21094fb642f86ad.png";
import img275361 from "figma:asset/04f5ba96c056b3e085d330d72f09fb171a91a27d.png";

export function TeamSection() {
  return (
    <section className="relative w-full">
      <div className="flex flex-col gap-[80px] items-center justify-center w-full py-[80px]">
        {/* Section Header */}
        <div className="flex flex-col gap-[28px] items-center text-center text-black w-[769px] max-w-full px-6 xl:px-0">
          <div className="flex flex-col gap-[32px] items-center uppercase w-full">
            <p className="font-['Sora'] font-semibold text-[11px] tracking-[2.2px] leading-[17px] w-full">
              Vedení
            </p>
            <p className="font-['Sora'] font-extrabold text-[52px] tracking-[-1.56px] leading-normal w-full">
              Absolutní seniorita
            </p>
          </div>
          <p
            className="font-['Noto_Sans'] text-[17px] leading-[32px] min-w-full"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            3 partneři. Desetiletí zkušeností na nejvyšších pozicích.
          </p>
        </div>

        {/* Team Cards Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch shrink-0 w-full max-w-[1254px] mx-auto px-6 xl:px-0">
          {/* Card 1 - Jan Dědic */}
          <div className="flex flex-col items-start shrink-0 w-full lg:w-[418px]">
            {/* Department bar */}
            <DepartmentBar label="Business &amp; Sales" />

            {/* Photo area with mask */}
            <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start relative shrink-0 leading-[0]">
              <div
                className="col-start-1 row-start-1 relative pointer-events-none"
                style={{
                  width: 658,
                  height: 439,
                  marginLeft: -120,
                  marginTop: -4,
                  maskImage: `url('${img21421}')`,
                  maskSize: "418px 345px",
                  maskPosition: "120px 4px",
                  maskRepeat: "no-repeat",
                }}
              >
                <img
                  alt="Jan Dědic"
                  className="absolute inset-0 max-w-none object-cover size-full"
                  src={img21422}
                />
                <div
                  aria-hidden="true"
                  className="absolute border-[#a9a9a9] border-l-[0.4px] border-r-[0.4px] border-solid border-t-[0.4px] inset-0"
                />
              </div>
              <ExperienceLabel
                text="15+ let v obchodním vedení"
                ml={190}
                mt={290}
              />
              <LinkedInIcon />
            </div>

            {/* Info block */}
            <div className="bg-white h-[180px] relative shrink-0 w-full">
              <div
                aria-hidden="true"
                className="absolute border-[#a9a9a9] border-[0.4px] border-solid inset-0 pointer-events-none"
              />
              <div className="flex flex-col justify-center size-full">
                <div className="flex flex-col gap-[16px] items-start justify-center pl-[40px] relative size-full text-black">
                  <div className="flex flex-col gap-[16px] items-start w-[158px]">
                    <p className="font-['Sora'] font-extrabold text-[26px] tracking-[-0.78px] leading-normal w-full">
                      Jan Dědic
                    </p>
                    <p className="font-['Sora'] font-semibold text-[11px] tracking-[2.2px] uppercase leading-[17px] w-full">
                      Managing Partner
                    </p>
                  </div>
                  <p
                    className="font-['Noto_Sans'] text-[15px] leading-[24px] w-[289px]"
                    style={{
                      fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                    }}
                  >
                    Řídí STRAT3X. Expertíza v business developmentu a
                    strategickém řízení.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Štěpán Svoboda */}
          <div className="flex flex-col items-start shrink-0 w-full lg:w-[418px]">
            {/* Department bar */}
            <DepartmentBar label="Technologie &amp; Systémy" />

            {/* Photo area with mask */}
            <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start relative shrink-0 leading-[0]">
              <div
                className="col-start-1 row-start-1 relative pointer-events-none"
                style={{
                  width: 1100,
                  height: 733,
                  marginLeft: -366,
                  marginTop: -42,
                  maskImage: `url('${img21421}')`,
                  maskSize: "418px 345px",
                  maskPosition: "366px 42px",
                  maskRepeat: "no-repeat",
                }}
              >
                <img
                  alt="Štěpán Svoboda"
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={img299071}
                />
              </div>
              <ExperienceLabel
                text="Alza, Home Credit, Economia"
                ml={190}
                mt={290}
              />
              <LinkedInIcon />
            </div>

            {/* Info block */}
            <div className="bg-white h-[180px] relative shrink-0 w-full">
              <div
                aria-hidden="true"
                className="absolute border-[#a9a9a9] border-[0.4px] border-solid inset-0 pointer-events-none"
              />
              <div className="flex flex-col justify-center size-full">
                <div className="flex flex-col gap-[16px] items-start justify-center pl-[40px] relative size-full text-black">
                  <div className="flex flex-col gap-[16px] items-start w-[158px]">
                    <p className="font-['Sora'] font-extrabold text-[26px] tracking-[-0.78px] leading-normal shrink-0">
                      Štěpán Svoboda
                    </p>
                    <p className="font-['Sora'] font-semibold text-[11px] tracking-[2.2px] uppercase leading-[17px] shrink-0">
                      {`Tech & Systems Partner`}
                    </p>
                  </div>
                  <p
                    className="font-['Noto_Sans'] text-[15px] leading-[24px] w-[316px]"
                    style={{
                      fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                    }}
                  >
                    {`Bývalý marketingový ředitel Alzy, manažer `}
                    <br aria-hidden="true" />v Home Credit, Head of Digital v
                    Economii.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Mikuláš Lysek */}
          <div className="flex flex-col items-start shrink-0 w-full lg:w-[418px]">
            {/* Department bar */}
            <DepartmentBar label="Marketing &amp; Automatizace" />

            {/* Photo area with mask */}
            <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start relative shrink-0 leading-[0]">
              <div
                className="col-start-1 row-start-1 relative pointer-events-none"
                style={{
                  width: 722,
                  height: 482,
                  marginLeft: -161,
                  marginTop: -19,
                  maskImage: `url('${img21421}')`,
                  maskSize: "418px 345px",
                  maskPosition: "161px 19px",
                  maskRepeat: "no-repeat",
                }}
              >
                <img
                  alt="Mikuláš Lysek"
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={img275361}
                />
              </div>
              <ExperienceLabel
                text="10+ let v performance marketingu"
                ml={160}
                mt={290}
              />
              <LinkedInIcon />
            </div>

            {/* Info block */}
            <div className="bg-white h-[180px] relative shrink-0 w-full">
              <div
                aria-hidden="true"
                className="absolute border-[#a9a9a9] border-[0.4px] border-solid inset-0 pointer-events-none"
              />
              <div className="flex flex-col justify-center size-full">
                <div className="flex flex-col gap-[16px] items-start justify-center pl-[40px] relative size-full text-black">
                  <div className="flex flex-col gap-[16px] items-start w-[158px]">
                    <p className="font-['Sora'] font-extrabold text-[26px] tracking-[-0.78px] leading-normal shrink-0">
                      Mikuláš Lysek
                    </p>
                    <p className="font-['Sora'] font-semibold text-[11px] tracking-[-0.15px] uppercase leading-[17px] shrink-0">
                      Performance Partner
                    </p>
                  </div>
                  <p
                    className="font-['Noto_Sans'] text-[15px] leading-[24px] w-[289px]"
                    style={{
                      fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                    }}
                  >
                    {`Expert na výkonnostní marketing `}
                    <br aria-hidden="true" />a škálování e-commerce projektů.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DepartmentBar({ label }: { label: string }) {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#a9a9a9] border-[0.4px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col justify-center size-full">
        <div className="flex flex-col items-start justify-center pl-[40px] relative size-full">
          <div className="flex flex-col items-start w-[158px]">
            <p
              className="font-['Sora'] font-semibold text-[11px] text-black tracking-[2.2px] uppercase leading-[17px]"
              dangerouslySetInnerHTML={{ __html: label }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceLabel({
  text,
  ml,
  mt,
}: {
  text: string;
  ml: number;
  mt: number;
}) {
  return (
    <div
      className="col-start-1 row-start-1 bg-white flex items-center justify-center px-[10px] relative"
      style={{
        marginLeft: ml,
        marginTop: mt,
        maskImage: `url('${img21421}')`,
        maskSize: "418px 345px",
        maskPosition: `-${ml}px -${mt}px`,
        maskRepeat: "no-repeat",
      }}
    >
      <p
        className="font-['Noto_Sans'] font-medium text-[13px] text-black leading-[32px] shrink-0"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        {text}
      </p>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <div
      className="col-start-1 row-start-1 relative size-[50px]"
      style={{
        marginLeft: 331,
        marginTop: 25,
        maskImage: `url('${img21421}')`,
        maskSize: "418px 345px",
        maskPosition: "-331px -25px",
        maskRepeat: "no-repeat",
      }}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 50 50"
      >
        <circle cx="25" cy="25" fill="black" r="25" />
        <path d={svgPaths.pf597740} fill="white" />
        <path d={svgPaths.pee17100} fill="white" />
        <path d={svgPaths.p3bfce670} fill="white" />
      </svg>
    </div>
  );
}

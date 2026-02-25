import svgPaths from "../../imports/svg-59wapeqsll";
import imgRectangle2 from "figma:asset/237f5127621aac5fb508fd8af02ad944505f7f78.png";
import imgDottedWorldMapGrayColorIsolatedWhite1 from "figma:asset/0e1644e0a7d4153de2a407721bc9408b9eb68e17.png";
import { imgRectangle1 } from "../../imports/svg-76oh5";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      <div className="flex flex-col gap-[120px] items-center justify-center py-[80px] w-full max-w-[1920px] mx-auto px-6 xl:px-0">
        {/* Top section */}
        <div className="flex flex-col xl:flex-row gap-[48px] xl:gap-[99px] items-center">
          {/* Left column - Logo & info */}
          <div className="flex flex-col gap-[48px] h-auto xl:h-[296px] items-start w-full xl:w-[390px] shrink-0">
            <div className="flex flex-col gap-[40px] items-start w-full xl:w-[349px]">
              <FooterLogo />
              <p
                className="font-['Noto_Sans'] leading-[27px] text-[15px] text-black"
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                Strategic Growth Partner. Budujeme kompletní, funkční a
                výdělečné online businessy.
              </p>
            </div>
            <p className="font-['Sora'] font-bold text-[15px] text-black tracking-[-0.15px] leading-[31px]">
              <span className="underline decoration-solid">
                +420 777 888 999
              </span>
              <span>{`    `}</span>
              <span className="underline decoration-solid">
                info@strat3x.com
              </span>
            </p>
            {/* Social icons */}
            <div className="flex gap-[16px] h-[23px] items-center">
              {/* LinkedIn */}
              <div className="size-[23px] overflow-clip relative">
                <div className="absolute inset-[10%]">
                  <svg
                    className="absolute block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 18.4 18.3994"
                  >
                    <path d={svgPaths.p4cd5200} fill="black" />
                    <path d={svgPaths.p93a6b80} fill="black" />
                    <path d={svgPaths.p2fbcbe00} fill="black" />
                  </svg>
                </div>
              </div>
              {/* X/Twitter */}
              <div className="h-[19px] w-[25.027px] relative shrink-0">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 25.027 19"
                >
                  <path d={svgPaths.p395c6f00} fill="black" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right section - Links & Map */}
          <div className="flex flex-col sm:flex-row h-auto xl:h-[298px] items-start justify-between pt-[7px] w-full xl:w-[911px] gap-8 sm:gap-0">
            {/* Informace */}
            <div className="flex flex-col gap-[38px] items-start text-black w-[97px]">
              <p className="font-['Sora'] font-bold leading-normal text-[15px] tracking-[-0.15px] uppercase w-full">
                informace
              </p>
              <div className="flex flex-col font-['Noto_Sans'] gap-[8px] items-start leading-[32px] text-[17px] underline w-full">
                {["O nás", "Služby", "Metodiky", "Technologie", "Tým", "Kontakt"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="decoration-solid hover:opacity-70 transition-opacity"
                      style={{
                        fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                      }}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Zajímá vás */}
            <div className="flex flex-col gap-[38px] items-start text-black">
              <p className="font-['Sora'] font-bold leading-normal text-[15px] tracking-[-0.15px] uppercase w-full">
                zajímá vás
              </p>
              <div className="flex flex-col font-['Noto_Sans'] gap-[8px] items-start leading-[32px] text-[17px] underline w-full">
                {["Tým", "FAQ", "Partnerský program"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="decoration-solid hover:opacity-70 transition-opacity"
                    style={{
                      fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
              <p className="col-start-1 row-start-1 font-['Sora'] font-bold leading-normal text-[15px] text-black tracking-[-0.15px] uppercase ml-[20px] mt-0 relative">
                kde nás najdete
              </p>
              <div className="col-start-1 row-start-1 h-[227px] ml-0 mt-[33px] relative w-[321px]">
                <img
                  alt="World map"
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgDottedWorldMapGrayColorIsolatedWhite1}
                />
              </div>
              {/* Praha pin */}
              <div className="col-start-1 row-start-1 ml-[169px] mt-[116px] relative size-[23px]">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 23 23"
                >
                  <path d={svgPaths.pfb5f480} fill="black" />
                </svg>
              </div>
              {/* Praha label */}
              <div className="col-start-1 row-start-1 inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start ml-[196px] mt-[107px] relative">
                <div className="col-start-1 row-start-1 bg-white h-[21px] ml-0 mt-[10px] rounded-[14px] w-[67px]" />
                <p
                  className="col-start-1 row-start-1 font-['Noto_Sans'] font-medium leading-[39px] ml-[6px] mt-0 relative text-[13px] text-black w-[102px]"
                  style={{
                    fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                  }}
                >
                  🇨🇿 Praha
                </p>
              </div>
              {/* Bangkok pin */}
              <div className="col-start-1 row-start-1 ml-[231px] mt-[164px] relative size-[23px]">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 23 23"
                >
                  <path d={svgPaths.pfb5f480} fill="black" />
                </svg>
              </div>
              {/* Bangkok label */}
              <div className="col-start-1 row-start-1 inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start ml-[250px] mt-[171px] relative">
                <div className="col-start-1 row-start-1 bg-white h-[21px] ml-0 mt-[10px] rounded-[14px] w-[67px]" />
                <p
                  className="col-start-1 row-start-1 font-['Noto_Sans'] font-medium leading-[39px] ml-[6px] mt-0 relative text-[13px] text-black w-[91px]"
                  style={{
                    fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                  }}
                >
                  🇹🇭 Bangkok
                </p>
              </div>
              {/* Grenoble pin */}
              <div className="col-start-1 row-start-1 ml-[148px] mt-[120px] relative size-[23px]">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 23 23"
                >
                  <path d={svgPaths.pfb5f480} fill="black" />
                </svg>
              </div>
              {/* Grenoble label */}
              <div className="col-start-1 row-start-1 inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start ml-[68px] mt-[128px] relative">
                <div className="col-start-1 row-start-1 bg-white h-[21px] ml-0 mt-[10px] rounded-[14px] w-[86px]" />
                <p
                  className="col-start-1 row-start-1 font-['Noto_Sans'] font-medium leading-[39px] ml-[7px] mt-0 relative text-[13px] text-black w-[102px]"
                  style={{
                    fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                  }}
                >
                  🇫🇷 Grenoble
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between leading-[27px] text-[14px] text-black w-full max-w-[1400px] gap-4 sm:gap-0">
          <p
            className="font-['Noto_Sans'] font-semibold w-[331px] max-w-full"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            © 2026 STRAT3X. Všechna práva vyhrazena.
          </p>
          <div className="flex flex-wrap gap-[24px] items-center text-right underline">
            {["Ochrana soukromí", "Obchodní podmínky", "Tým", "Majitel"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="font-['Noto_Sans'] decoration-solid hover:opacity-70 transition-opacity"
                  style={{
                    fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                  }}
                >
                  {item}
                </a>
              )
            )}
            <a
              href="#"
              className="font-['Noto_Sans'] font-semibold decoration-solid hover:opacity-70 transition-opacity"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              Staň se partnerem
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <div className="h-[22px] w-[135px] relative overflow-clip">
      <div className="absolute inset-[0_87.73%_5.71%_0]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16.5601 20.7442"
        >
          <path d={svgPaths.p5b36400} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[2.69%_75.41%_8.03%_12.93%]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 15.7498 19.6419"
        >
          <path d={svgPaths.p11eba200} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[1.95%_60.47%_8.03%_26.68%]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17.34 19.8046"
        >
          <path d={svgPaths.p2358ae80} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[2.69%_44.57%_8.03%_40.09%]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20.7118 19.6419"
        >
          <path d={svgPaths.p3c991300} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[2.69%_33.51%_8.03%_54.82%]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 15.7498 19.6419"
        >
          <path d={svgPaths.p11eba200} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[2.32%_0_8.39%_85.71%]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 19.2897 19.6442"
        >
          <path d={svgPaths.p236aca80} fill="black" />
        </svg>
      </div>
      <div className="absolute contents inset-[3.16%_15.57%_7.68%_67.77%]">
        <div className="absolute contents inset-[0.25%_13.46%_-0.25%_65.7%]">
          <div
            className="absolute inset-[0.25%_13.46%_-0.25%_65.7%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.798px_0.639px] mask-size-[22.493px_19.617px]"
            style={{ maskImage: `url('${imgRectangle1}')` }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute left-0 max-w-none size-full top-0"
                src={imgRectangle2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import svgPaths from "../../imports/svg-59wapeqsll";
import { img21421 } from "../../imports/svg-76oh5";
import img21422 from "figma:asset/9b1d2ddbf19b0238d4280b485f192cb251cc412e.png";
import img299071 from "figma:asset/833c20c5b36b9a1249674a86d21094fb642f86ad.png";
import img275361 from "figma:asset/04f5ba96c056b3e085d330d72f09fb171a91a27d.png";

export function TeamSection() {
  return (
    <section className="relative w-full">
      <div className="flex flex-col gap-[48px] lg:gap-[80px] items-center justify-center w-full py-[60px] lg:py-[80px]">
        {/* Section Header */}
        <div className="flex flex-col gap-[28px] items-center text-center text-black w-full max-w-[769px] px-6 xl:px-0">
          <div className="flex flex-col gap-[32px] items-center uppercase w-full">
            <p className="font-['Sora'] font-semibold text-[11px] tracking-[2.2px] leading-[17px] w-full">
              Vedení
            </p>
            <p className="font-['Sora'] font-extrabold text-[32px] lg:text-[52px] tracking-[-0.96px] lg:tracking-[-1.56px] leading-normal w-full">
              Absolutní seniorita
            </p>
          </div>
          <p
            className="font-['Noto_Sans'] text-[17px] leading-[32px] w-[267px] lg:w-full"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            3 partneři. Desetiletí zkušeností na nejvyšších pozicích.
          </p>
        </div>

        {/* Team Cards Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch shrink-0 w-full max-w-[1254px] mx-auto px-6 xl:px-0 gap-0">
          {/* Card 1 - Jan Dědic */}
          <TeamCard
            departmentLabel="Business &amp; Sales"
            photoSrc={img21422}
            photoAlt="Jan Dědic"
            photoContainerDesktop={{ width: 658, height: 439, ml: -120, mt: -4 }}
            photoContainerMobile={{ width: 658, height: 439, ml: -147, mt: -4 }}
            hasBorderTop
            expLabelText="15+ let v obchodním vedení"
            expLabelDesktop={{ ml: 190, mt: 290 }}
            expLabelMobile={{ ml: 141, mt: 290 }}
            linkedInDesktop={{ ml: 331, mt: 25 }}
            linkedInMobile={{ ml: 294, mt: 18 }}
            name="Jan Dědic"
            role="Managing Partner"
            roleTracking="tracking-[2.2px]"
            description={
              <>
                Řídí STRAT3X. Expertíza v business developmentu a strategickém
                řízení.
              </>
            }
            descriptionWidth="w-full max-w-[289px]"
          />

          {/* Card 2 - Štěpán Svoboda */}
          <TeamCard
            departmentLabel="Technologie &amp; Systémy"
            photoSrc={img299071}
            photoAlt="Štěpán Svoboda"
            photoContainerDesktop={{ width: 1100, height: 733, ml: -366, mt: -42 }}
            photoContainerMobile={{ width: 1100, height: 733, ml: -399, mt: -42 }}
            expLabelText="Alza, Home Credit, Economia"
            expLabelDesktop={{ ml: 190, mt: 290 }}
            expLabelMobile={{ ml: 133, mt: 290 }}
            linkedInDesktop={{ ml: 331, mt: 25 }}
            linkedInMobile={{ ml: 294, mt: 25 }}
            name="Štěpán Svoboda"
            role={`Tech & Systems Partner`}
            roleTracking="tracking-[2.2px]"
            description={
              <>
                {`Bývalý marketingový ředitel Alzy, manažer `}
                <br aria-hidden="true" />v Home Credit, Head of Digital v
                Economii.
              </>
            }
            descriptionWidth="w-full max-w-[316px]"
          />

          {/* Card 3 - Mikuláš Lysek */}
          <TeamCard
            departmentLabel="Marketing &amp; Automatizace"
            photoSrc={img275361}
            photoAlt="Mikuláš Lysek"
            photoContainerDesktop={{ width: 722, height: 482, ml: -161, mt: -19 }}
            photoContainerMobile={{ width: 722, height: 482, ml: -181, mt: -19 }}
            expLabelText="10+ let v performance marketingu"
            expLabelDesktop={{ ml: 160, mt: 290 }}
            expLabelMobile={{ ml: 99, mt: 290 }}
            linkedInDesktop={{ ml: 331, mt: 25 }}
            linkedInMobile={{ ml: 294, mt: 25 }}
            name="Mikuláš Lysek"
            role="Performance Partner"
            roleTracking="tracking-[-0.15px]"
            description={
              <>
                {`Expert na výkonnostní marketing `}
                <br aria-hidden="true" />a škálování e-commerce projektů.
              </>
            }
            descriptionWidth="w-full max-w-[289px]"
          />
        </div>
      </div>
    </section>
  );
}

interface PhotoDimensions {
  width: number;
  height: number;
  ml: number;
  mt: number;
}

interface Position {
  ml: number;
  mt: number;
}

interface TeamCardProps {
  departmentLabel: string;
  photoSrc: string;
  photoAlt: string;
  photoContainerDesktop: PhotoDimensions;
  photoContainerMobile: PhotoDimensions;
  hasBorderTop?: boolean;
  expLabelText: string;
  expLabelDesktop: Position;
  expLabelMobile: Position;
  linkedInDesktop: Position;
  linkedInMobile: Position;
  name: string;
  role: string;
  roleTracking: string;
  description: React.ReactNode;
  descriptionWidth: string;
}

function TeamCard({
  departmentLabel,
  photoSrc,
  photoAlt,
  photoContainerDesktop,
  photoContainerMobile,
  hasBorderTop,
  expLabelText,
  expLabelDesktop,
  expLabelMobile,
  linkedInDesktop,
  linkedInMobile,
  name,
  role,
  roleTracking,
  description,
  descriptionWidth,
}: TeamCardProps) {
  const MASK_W_MOBILE = 359;
  const MASK_W_DESKTOP = 418;
  const MASK_H = 345;

  return (
    <div className="flex flex-col items-start shrink-0 w-[359px] lg:w-[418px]">
      {/* Department bar */}
      <DepartmentBar label={departmentLabel} />

      {/* Photo area with mask - Mobile */}
      <div className="lg:hidden inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start relative shrink-0 leading-[0] overflow-hidden w-[359px] h-[345px]">
        <div
          className="col-start-1 row-start-1 relative pointer-events-none"
          style={{
            width: photoContainerMobile.width,
            height: photoContainerMobile.height,
            marginLeft: photoContainerMobile.ml,
            marginTop: photoContainerMobile.mt,
            maskImage: `url('${img21421}')`,
            maskSize: `${MASK_W_MOBILE}px ${MASK_H}px`,
            maskPosition: `${-photoContainerMobile.ml}px ${-photoContainerMobile.mt}px`,
            maskRepeat: "no-repeat",
          }}
        >
          <img
            alt={photoAlt}
            className="absolute inset-0 max-w-none object-cover size-full"
            src={photoSrc}
          />
          {hasBorderTop && (
            <div
              aria-hidden="true"
              className="absolute border-[#a9a9a9] border-l-[0.4px] border-r-[0.4px] border-solid border-t-[0.4px] inset-0"
            />
          )}
        </div>
        <ExperienceLabel
          text={expLabelText}
          ml={expLabelMobile.ml}
          mt={expLabelMobile.mt}
          maskW={MASK_W_MOBILE}
          maskH={MASK_H}
        />
        <LinkedInIcon
          ml={linkedInMobile.ml}
          mt={linkedInMobile.mt}
          maskW={MASK_W_MOBILE}
          maskH={MASK_H}
        />
      </div>

      {/* Photo area with mask - Desktop */}
      {/*<div className="hidden lg:inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start relative shrink-0 leading-[0] overflow-hidden w-[418px] h-[345px]">*/}
      {/*  <div*/}
      {/*    className="col-start-1 row-start-1 relative pointer-events-none"*/}
      {/*    style={{*/}
      {/*      width: photoContainerDesktop.width,*/}
      {/*      height: photoContainerDesktop.height,*/}
      {/*      marginLeft: photoContainerDesktop.ml,*/}
      {/*      marginTop: photoContainerDesktop.mt,*/}
      {/*      maskImage: `url('${img21421}')`,*/}
      {/*      maskSize: `${MASK_W_DESKTOP}px ${MASK_H}px`,*/}
      {/*      maskPosition: `${-photoContainerDesktop.ml}px ${-photoContainerDesktop.mt}px`,*/}
      {/*      maskRepeat: "no-repeat",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <img*/}
      {/*      alt={photoAlt}*/}
      {/*      className="absolute inset-0 max-w-none object-cover size-full"*/}
      {/*      src={photoSrc}*/}
      {/*    />*/}
      {/*    {hasBorderTop && (*/}
      {/*      <div*/}
      {/*        aria-hidden="true"*/}
      {/*        className="absolute border-[#a9a9a9] border-l-[0.4px] border-r-[0.4px] border-solid border-t-[0.4px] inset-0"*/}
      {/*      />*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*  <ExperienceLabel*/}
      {/*    text={expLabelText}*/}
      {/*    ml={expLabelDesktop.ml}*/}
      {/*    mt={expLabelDesktop.mt}*/}
      {/*    maskW={MASK_W_DESKTOP}*/}
      {/*    maskH={MASK_H}*/}
      {/*  />*/}
      {/*  <LinkedInIcon*/}
      {/*    ml={linkedInDesktop.ml}*/}
      {/*    mt={linkedInDesktop.mt}*/}
      {/*    maskW={MASK_W_DESKTOP}*/}
      {/*    maskH={MASK_H}*/}
      {/*  />*/}
      {/*</div>*/}

      {/* Info block */}
      <div className="bg-white h-[180px] relative shrink-0 w-full">
        <div
          aria-hidden="true"
          className="absolute border-[#a9a9a9] border-[0.4px] border-solid inset-0 pointer-events-none"
        />
        <div className="flex flex-col justify-center size-full">
          <div className="flex flex-col gap-[16px] items-start justify-center pl-[40px] relative size-full text-black">
            <div className="flex flex-col gap-[16px] items-start w-[158px]">
              <p className="font-['Sora'] font-extrabold text-[26px] tracking-[-0.78px] leading-normal w-full whitespace-nowrap">
                {name}
              </p>
              <p
                className={`font-['Sora'] font-semibold text-[11px] ${roleTracking} uppercase leading-[17px] w-full whitespace-nowrap`}
              >
                {role}
              </p>
            </div>
            <p
              className={`font-['Noto_Sans'] text-[15px] leading-[24px] ${descriptionWidth}`}
              style={{
                fontVariationSettings: "'CTGR' 0, 'wdth' 100",
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
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
  maskW,
  maskH,
}: {
  text: string;
  ml: number;
  mt: number;
  maskW: number;
  maskH: number;
}) {
  return (
    <div
      className="col-start-1 row-start-1 bg-white flex items-center justify-center px-[10px] relative"
      style={{
        marginLeft: ml,
        marginTop: mt,
        maskImage: `url('${img21421}')`,
        maskSize: `${maskW}px ${maskH}px`,
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

function LinkedInIcon({
  ml,
  mt,
  maskW,
  maskH,
}: {
  ml: number;
  mt: number;
  maskW: number;
  maskH: number;
}) {
  return (
    <div
      className="col-start-1 row-start-1 relative size-[50px]"
      style={{
        marginLeft: ml,
        marginTop: mt,
        maskImage: `url('${img21421}')`,
        maskSize: `${maskW}px ${maskH}px`,
        maskPosition: `-${ml}px -${mt}px`,
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
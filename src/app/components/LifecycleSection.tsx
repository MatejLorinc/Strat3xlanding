import svgPaths from "../../imports/svg-59wapeqsll";

export function LifecycleSection() {
  return (
    <section className="overflow-clip relative w-full">
      <div className="flex flex-col xl:flex-row gap-[60px] xl:gap-[142px] items-start justify-center w-full pb-[80px] pt-[120px] px-6 max-w-[1400px] mx-auto">
        {/* Left column - header */}
        <div className="flex flex-col gap-[28px] items-center xl:items-start shrink-0 text-black w-full xl:w-[468px] xl:max-w-[468px]">
          <div className="flex flex-col gap-[32px] items-center xl:items-start uppercase w-full text-center xl:text-left">
            <p className="font-['Sora'] font-semibold leading-[17px] text-[11px] tracking-[2.2px] w-full">
              Komplexní ekosystém
            </p>
            <p className="font-['Sora'] font-extrabold leading-[44px] lg:leading-normal text-[32px] lg:text-[52px] tracking-[-0.96px] lg:tracking-[-1.56px] w-full max-w-[333px] lg:max-w-none">
              Celý životní cyklus online byznysu
            </p>
          </div>
          <p
            className="font-['Noto_Sans'] text-[17px] leading-[31px] lg:leading-[32px] text-center xl:text-left w-full max-w-[325px] lg:max-w-none"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            Od strategie po hlubokou automatizaci. Vše pod jednou střechou.
          </p>
        </div>

        {/* Right side - two service columns */}
        <div className="flex flex-col md:flex-row gap-[60px] md:gap-[40px] lg:gap-[82px] items-start w-full">
          {/* Left service column */}
          <div className="flex flex-col gap-[64px] items-start w-full md:w-1/2 md:max-w-none">
            {/* Management & Consulting */}
            <ServiceRow
              icon={<ManagementIcon />}
              title="Management & Consulting"
              description={
                <>
                  {`Strategické roadmapy, finanční `}
                  <br aria-hidden="true" />
                  modely a krizový management
                </>
              }
            />
            {/* Design & Brand */}
            <ServiceRow
              icon={<DesignIcon />}
              title="Design & Brand"
              description={
                <>
                  Brand identity, UX/UI design
                  <br aria-hidden="true" />a vizuální produkce
                </>
              }
            />
            {/* Performance */}
            <ServiceRow
              icon={<PerformanceIcon />}
              title="Performance"
              description={
                <>
                  {`PPC kampaně, automatizace `}
                  <br aria-hidden="true" />a retenční systémy
                </>
              }
            />
          </div>

          {/* Right service column */}
          <div className="flex flex-col gap-[64px] items-start shrink-0">
            {/* Data & Analytika */}
            <ServiceRow
              icon={<DataIcon />}
              title="Data & Analytika"
              description={
                <>
                  Pokročilé měření a prediktivní modely
                  <br aria-hidden="true" />
                  pro rozhodování
                </>
              }
            />
            {/* Technologie */}
            <ServiceRow
              icon={<TechIcon />}
              title="Technologie"
              description={
                <>
                  E-commerce platformy, custom vývoj
                  <br aria-hidden="true" />a integrace
                </>
              }
            />
            {/* AI & Automatizace */}
            <ServiceRow
              icon={<AIIcon />}
              title="AI & Automatizace"
              description={
                <>
                  AI agenti, workflow automatizace
                  <br aria-hidden="true" />a lokalizace
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="flex gap-[34px] items-start shrink-0 w-full">
      {icon}
      <div className="flex flex-col gap-[12px] items-start shrink-0 text-black">
        <p className="font-['Sora'] font-bold leading-[38px] text-[22px] tracking-[-0.22px]">
          {title}
        </p>
        <p
          className="font-['Noto_Sans'] leading-[24px] text-[15px]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* Management & Consulting icon (chat bubble) */
function ManagementIcon() {
  return (
    <div className="h-[41px] relative shrink-0 w-[39px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 41"
      >
        <mask fill="white" id="path-mgmt-mask">
          <path
            clipRule="evenodd"
            d={svgPaths.p4deca80}
            fillRule="evenodd"
          />
        </mask>
        <path
          clipRule="evenodd"
          d={svgPaths.p4deca80}
          fill="black"
          fillRule="evenodd"
        />
        <path
          d={svgPaths.p9dd2600}
          fill="white"
          mask="url(#path-mgmt-mask)"
        />
        <path
          d={svgPaths.p23089400}
          fill="black"
          stroke="white"
          strokeWidth="0.4"
        />
        <path
          d={svgPaths.p157351c0}
          fill="black"
          stroke="white"
          strokeWidth="0.4"
        />
      </svg>
    </div>
  );
}

/* Design & Brand icon (compass/pen) */
function DesignIcon() {
  return (
    <div className="flex items-center justify-center leading-[0] relative shrink-0">
      <div className="-scale-y-100">
        <svg
          width="39"
          height="38.133"
          viewBox="0 0 39 38.133"
          fill="none"
          className="block"
          preserveAspectRatio="none"
        >
          {/* Small top rectangle */}
          <path
            d={svgPaths.p1781a700}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.73333"
            transform="translate(16.072, 32.547)"
          />
          {/* Main pen body */}
          <path
            d={svgPaths.p2cc37880}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.73333"
            transform="translate(11.5, 5.58)"
          />
          {/* Left circle */}
          <path
            d={svgPaths.p362d4870}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.73333"
            transform="translate(1.143, 1.117)"
          />
          {/* Rectangle in center */}
          <path
            d={svgPaths.p35ee6d00}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.73333"
            transform="translate(1.143, 1.117)"
          />
          {/* Right circle */}
          <path
            d={svgPaths.p26b7900}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.73333"
            transform="translate(1.143, 1.117)"
          />
          {/* Center vertical line */}
          <path
            d="M19.2241 16.5818V0.866667"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.73333"
            transform="translate(1.143, 1.117)"
          />
          {/* Left horizontal line */}
          <path
            d="M5.43698 23.2849H16.9389"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.73333"
            transform="translate(1.143, 1.117)"
          />
          {/* Right horizontal line */}
          <path
            d="M21.5092 23.2849H33.0112"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.73333"
            transform="translate(1.143, 1.117)"
          />
          {/* Left curve */}
          <path
            d={svgPaths.p135b6080}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.73333"
            transform="translate(1.143, 1.117)"
          />
          {/* Right curve */}
          <path
            d={svgPaths.p33f53ac0}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.73333"
            transform="translate(1.143, 1.117)"
          />
        </svg>
      </div>
    </div>
  );
}

/* Performance icon (rocket) */
function PerformanceIcon() {
  return (
    <div className="h-[40px] relative shrink-0 w-[39px]">
      <div className="absolute inset-[0_-0.35%_-0.35%_0]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 39.1365 40.14"
        >
          <path
            d={svgPaths.p32c04100}
            fill="black"
            stroke="white"
            strokeWidth="0.1"
          />
          <path
            d={svgPaths.p264ebc00}
            fill="black"
            stroke="white"
            strokeWidth="0.1"
          />
          <path
            d={svgPaths.p1b51a880}
            fill="black"
            stroke="white"
            strokeWidth="0.1"
          />
        </svg>
      </div>
    </div>
  );
}

/* Data & Analytika icon (chart) */
function DataIcon() {
  return (
    <div className="relative shrink-0 size-[39px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 39"
      >
        <path
          d={svgPaths.p3bc67200}
          fill="black"
          stroke="white"
          strokeWidth="0.104"
        />
      </svg>
    </div>
  );
}

/* Technologie icon (arrows) */
function TechIcon() {
  return (
    <div className="h-[33px] relative shrink-0 w-[39px]">
      {/* Right arrow */}
      <div className="absolute inset-[14.38%_-9.72%_14.98%_75.79%]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 13.2349 23.3109"
        >
          <path
            d={svgPaths.p2636f300}
            fill="black"
            stroke="white"
            strokeWidth="0.2"
          />
        </svg>
      </div>
      {/* Left arrow */}
      <div className="absolute inset-[14.38%_67.15%_14.98%_-1.09%]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 13.2354 23.3111"
        >
          <path
            d={svgPaths.p1a373300}
            fill="black"
            stroke="white"
            strokeWidth="0.2"
          />
        </svg>
      </div>
      {/* Center vertical */}
      <div className="absolute inset-[0_35.43%_0.61%_44.07%]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7.99591 32.8"
        >
          <path
            d={svgPaths.p9149600}
            fill="black"
            stroke="white"
            strokeWidth="0.2"
          />
        </svg>
      </div>
    </div>
  );
}

/* AI & Automatizace icon (robot head) */
function AIIcon() {
  return (
    <div className="h-[43px] relative shrink-0 w-[39px]">
      <div className="absolute inset-[0_-16.17%_0_-3.26%]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 46.5766 43"
        >
          <path
            d={svgPaths.p2201a180}
            fill="black"
            stroke="white"
            strokeWidth="0.1"
          />
          <path
            d={svgPaths.p14169e80}
            fill="black"
            stroke="white"
            strokeWidth="0.1"
          />
          <path
            d={svgPaths.p113c700}
            fill="black"
            stroke="white"
            strokeWidth="0.1"
          />
        </svg>
      </div>
    </div>
  );
}
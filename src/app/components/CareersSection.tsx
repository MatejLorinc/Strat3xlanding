import svgPaths from "../../imports/svg-59wapeqsll";

const jobPositions = [
  {
    id: 1,
    urgent: true,
    title: "Senior PPC Specialist",
    department: "Performance",
    tags: ["Plný úvazek", "Hybrid", "Senior"],
    description:
      "Hledáme zkušeného PPC specialistu pro správu kampaní našich klientů. Budeš mít na starosti Google Ads ...",
    salary: "55 000 - 75 000 CZK/měsíc",
    applicants: "12 uchazečů",
    borderClass: "border-2 border-[#a038b6]",
  },
  {
    id: 2,
    urgent: true,
    title: "Senior PPC Specialist",
    department: "Performance",
    tags: ["Plný úvazek", "Hybrid", "Senior"],
    description:
      "Hledáme zkušeného PPC specialistu pro správu kampaní našich klientů. Budeš mít na starosti Google Ads ...",
    salary: "55 000 - 75 000 CZK/měsíc",
    applicants: "12 uchazečů",
    borderClass: "border-2 border-[#a038b6] md:border-l-0",
  },
];

const capacityItems = [
  {
    title: "Performance",
    subtitle: "Google Ads",
    used: 180,
    total: 280,
    barWidth: "w-[148px]",
  },
  {
    title: "Analytics",
    subtitle: "Data Analysis",
    used: 160,
    total: 200,
    barWidth: "w-[186px]",
  },
  {
    title: "Development",
    subtitle: "React/Shopify",
    used: 140,
    total: 160,
    barWidth: "w-[208px]",
  },
];

export function CareersSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col gap-[60px] items-center justify-center px-6 xl:px-[110px] py-[80px] w-full max-w-[1920px] mx-auto">
        {/* Top Row: Header + Stats */}
        <div className="flex flex-col xl:flex-row gap-[40px] xl:gap-[130px] items-start xl:items-end justify-center w-full">
          {/* Left: Header */}
          <div className="flex flex-col gap-[28px] items-start text-black w-full xl:w-[557px] shrink-0">
            <div className="flex flex-col gap-[32px] items-start uppercase w-[468px] max-w-full">
              <p className="font-['Sora'] font-semibold leading-[17px] text-[11px] tracking-[2.2px] w-full">
                kariéra
              </p>
              <p className="font-['Sora'] font-extrabold leading-normal text-[32px] lg:text-[52px] tracking-[-0.96px] lg:tracking-[-1.56px] w-full">
                Přidej se k nám
              </p>
            </div>
            <p
              className="font-['Noto_Sans'] leading-[32px] text-[17px] w-full"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              Hledáme talentované lidi, kteří chtějí budovat úspěšné online
              businessy. Nabízíme flexibilitu, zajímavé projekty a prostor pro
              růst.
            </p>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 sm:flex gap-[20px] sm:gap-[30px] items-start">
            <StatItem
              icon={<TeamIcon />}
              value="15+"
              label="Členů týmu"
              width="w-[152px]"
            />
            <StatItem
              icon={<ProjectsIcon />}
              value="40+"
              label="Aktivních projektů"
              width="w-[167px]"
            />
            <StatItem
              icon={<LocationIcon />}
              value="3"
              label="Lokace"
              width="w-[152px]"
            />
            <StatItem
              icon={<PositionsIcon />}
              value="3"
              label="Otevřené pozice"
              width="w-[152px]"
            />
          </div>
        </div>

        {/* Bottom Row: Job Cards + Divider + Capacity */}
        <div className="flex flex-col xl:flex-row gap-[54px] items-center justify-center w-full">
          {/* Left: Job Cards + CTA */}
          <div className="flex flex-col gap-[60px] items-start w-full xl:w-[1004px] shrink-0">
            {/* Job Cards Row */}
            <div className="flex flex-col md:flex-row items-center w-full">
              {jobPositions.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {/* Black CTA Bar */}
            <div className="bg-[#171717] flex flex-col md:flex-row gap-[40px] md:gap-[117px] h-auto md:h-[148px] items-center justify-center w-full px-6 py-8 md:py-0">
              <p className="font-['Sora'] font-bold leading-[38px] text-[22px] text-white tracking-[-0.22px] uppercase w-full md:w-[431px] text-center md:text-left">
                Nevidíš pozici, která by ti seděla? Napiš nám stejně!
              </p>
              <div className="bg-black flex h-[60px] items-center justify-center px-[51px] rounded-[62px] relative shrink-0">
                <div
                  aria-hidden="true"
                  className="absolute border-2 border-[#a038b6] border-solid inset-0 pointer-events-none rounded-[62px]"
                />
                <p className="font-['Sora'] font-extrabold leading-normal text-[14px] text-center text-white tracking-[-0.28px] uppercase whitespace-nowrap">
                  Poslat otevřenou přihlášku
                </p>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden xl:flex h-[556px] items-center justify-center w-0 shrink-0">
            <div className="rotate-90 w-[556px] h-0 relative">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 556 1"
                >
                  <line
                    opacity="0.1"
                    stroke="black"
                    x2="556"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Capacity */}
          <div className="flex flex-col gap-[28px] items-center xl:items-start w-full xl:w-[288px]">
            <p className="font-['Sora'] font-bold leading-[38px] text-[22px] text-black tracking-[-0.22px] w-[237.406px]">
              {`Aktuální `}
              <br aria-hidden="true" />
              kapacitní potřeby
            </p>
            <div className="flex flex-col gap-[8px] items-start w-[228px]">
              {capacityItems.map((item) => (
                <CapacityBar key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  icon,
  value,
  label,
  width,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  width: string;
}) {
  return (
    <div
      className={`flex flex-col gap-[10px] items-center shrink-0 ${width}`}
    >
      <div className="h-[32px] flex items-end justify-center">
        {icon}
      </div>
      <p className="font-['Sora'] font-extrabold leading-normal text-[36px] lg:text-[52px] text-black tracking-[-1.08px] lg:tracking-[-1.56px] uppercase">
        {value}
      </p>
      <p className="font-['Sora'] font-semibold leading-[17px] text-[11px] text-black text-center tracking-[2.2px] uppercase">
        {label}
      </p>
    </div>
  );
}

function TeamIcon() {
  return (
    <div className="h-[32px] relative shrink-0 w-[41px]">
      <svg className="absolute left-0 bottom-0" width="15" height="15" fill="none" viewBox="0 0 15 15">
        <circle cx="7.5" cy="7.5" fill="#84D3C5" r="7.5" />
      </svg>
      <svg
        className="absolute right-0 top-0"
        width="41"
        height="30"
        fill="none"
        viewBox="0 0 40.8182 29.9652"
      >
        <path d={svgPaths.p28e65500} fill="black" />
      </svg>
    </div>
  );
}

function ProjectsIcon() {
  return (
    <div className="h-[32px] relative shrink-0 w-[29.787px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 29.7868 32"
      >
        <circle cx="7.5" cy="24.5" fill="#84D3C5" r="7.5" />
        <path
          d={svgPaths.p2dab1480}
          fill="black"
          stroke="white"
          strokeWidth="0.1"
        />
        <path
          d={svgPaths.p9330000}
          fill="black"
          stroke="white"
          strokeWidth="0.1"
        />
        <path
          d={svgPaths.p715dac0}
          fill="black"
          stroke="white"
          strokeWidth="0.1"
        />
        <path
          d={svgPaths.pd945c00}
          fill="black"
          stroke="white"
          strokeWidth="0.1"
        />
        <path
          d={svgPaths.p35de2000}
          fill="black"
          stroke="white"
          strokeWidth="0.1"
        />
      </svg>
    </div>
  );
}

function LocationIcon() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32px]">
      <svg className="block size-full" fill="none" viewBox="0 0 32 32">
        <circle cx="8.5" cy="24.5" r="7.5" fill="#84D3C5" />
        <mask id="mask0_42_4861" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="29">
          <path d="M0 3.8147e-06H32V29H0V3.8147e-06Z" fill="white" />
        </mask>
        <g mask="url(#mask0_42_4861)">
          <path d="M16 28.1504C12.25 23.0527 5.6875 16.1426 5.6875 10.1953C5.6875 5.04209 10.3137 0.849613 16 0.849613C21.6863 0.849613 26.3125 5.04209 26.3125 10.1953C26.3125 16.1426 19.75 23.0527 16 28.1504Z" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 14.4434C13.4154 14.4434 11.3125 12.5376 11.3125 10.1953C11.3125 7.85305 13.4154 5.94727 16 5.94727C18.5846 5.94727 20.6875 7.85305 20.6875 10.1953C20.6875 12.5376 18.5846 14.4434 16 14.4434Z" stroke="black" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function PositionsIcon() {
  return (
    <div className="h-[32px] relative shrink-0 w-[36px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 36 31"
      >
        <circle cx="7.5" cy="23.5" fill="#84D3C5" r="7.5" />
        <path
          d={svgPaths.p3d989cc0}
          fill="black"
          stroke="white"
          strokeWidth="0.15"
        />
      </svg>
    </div>
  );
}

function JobCard({
  job,
}: {
  job: (typeof jobPositions)[number];
}) {
  return (
    <div
      className={`bg-white flex flex-col gap-[20px] h-auto md:h-[348px] items-center justify-center relative shrink-0 w-full md:w-1/2 p-[40px]`}
    >
      <div
        aria-hidden="true"
        className={`absolute ${job.borderClass} border-solid inset-0 pointer-events-none`}
      />
      {/* Urgent badge + content */}
      <div className="flex flex-col items-end w-[422px] max-w-full pb-[12px]">
        {job.urgent && (
          <div className="bg-[#bf5456] flex items-center justify-center mb-[-12px] px-[10px] py-[4px]">
            <p className="font-['Sora'] font-semibold leading-[12px] text-[11px] text-white tracking-[-0.11px]">
              Urgentní
            </p>
          </div>
        )}
        <div className="flex flex-col gap-[14px] items-start mb-[-12px] w-full">
          {/* Title + Department */}
          <div className="flex flex-col gap-[4px] items-start text-black w-full">
            <p className="font-['Sora'] font-bold leading-[38px] text-[22px] tracking-[-0.22px] underline decoration-solid w-full">
              {job.title}
            </p>
            <p className="font-['Sora'] font-semibold leading-[17px] text-[11px] tracking-[2.2px] uppercase w-full">
              {job.department}
            </p>
          </div>
          {/* Tags */}
          <div className="flex gap-[4px] items-center w-full max-w-[401px]">
            {job.tags.map((tag) => (
              <div
                key={tag}
                className="bg-[#eff2f8] flex items-center justify-center px-[10px] py-[4px]"
              >
                <p
                  className="font-['Noto_Sans'] leading-[24px] text-[15px] text-black"
                  style={{
                    fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                  }}
                >
                  {tag}
                </p>
              </div>
            ))}
          </div>
          {/* Description */}
          <p
            className="font-['Noto_Sans'] leading-[24px] text-[15px] text-black w-full max-w-[422px]"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            {job.description}
          </p>
        </div>
      </div>

      {/* Salary */}
      <p
        className="font-['Noto_Sans'] font-bold leading-[32px] text-[17px] text-black w-[422px] max-w-full"
        style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
      >
        {job.salary}
      </p>

      {/* Divider */}
      <div className="h-0 w-[422px] max-w-full relative">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 422 1"
          >
            <line opacity="0.1" stroke="black" x2="422" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-end justify-between w-[422px] max-w-full">
        <p
          className="font-['Noto_Sans'] leading-[24px] text-[15px] text-black"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          {job.applicants}
        </p>
        <div className="flex gap-[13px] items-center justify-end">
          <p
            className="font-['Noto_Sans'] font-bold leading-[24px] text-[15px] text-black text-right underline decoration-solid"
            style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
          >
            Zobrazit detail
          </p>
          <div className="h-[9px] w-[13px]">
            <svg className="block size-full" fill="none" viewBox="0 0 13 9">
              <path d={svgPaths.p26469100} fill="black" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CapacityBar({
  item,
}: {
  item: (typeof capacityItems)[number];
}) {
  return (
    <div className="flex flex-col gap-[16px] items-start w-full max-w-[228px]">
      {/* Labels */}
      <div className="flex flex-col gap-px items-start leading-[24px] text-[15px] text-black w-[93px]">
        <p
          className="font-['Noto_Sans'] font-bold w-full"
          style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
        >
          {item.title}
        </p>
        <p
          className="font-['Noto_Sans']"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          {item.subtitle}
        </p>
      </div>
      {/* Progress Bar + Hours */}
      <div className="flex flex-col gap-px items-end w-full">
        <div className="inline-grid relative">
          <div className="bg-[#e9e9e9] col-start-1 row-start-1 h-[10px] rounded-[14px] w-full max-w-[227px]" />
          <div
            className={`bg-[#84d3c5] col-start-1 row-start-1 h-[10px] rounded-[14px] ${item.barWidth}`}
          />
        </div>
        <p
          className="font-['Noto_Sans'] font-medium leading-[32px] text-[12px] text-black text-right w-full"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          {item.used}/{item.total}h
        </p>
      </div>
    </div>
  );
}
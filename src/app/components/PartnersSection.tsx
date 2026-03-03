import { useState } from "react";
import img41641 from "figma:asset/1ae7eb4f61ade708f7114d50825956cbed9c81a3.png";
import img255402 from "figma:asset/c137d10fde9bfceb8fe155765a39a643cd1e631b.png";
import img2437921 from "figma:asset/4b725ea6e43c85fd0b312c10b6227e4d5c25b560.png";

interface PartnerCardProps {
  imageSrc: string;
  tags: { label: string; fullWidth?: boolean }[];
  title: string;
  children: React.ReactNode;
  gradientAngle: string;
  flipImage?: boolean;
}

function PartnerCard({
  imageSrc,
  tags,
  title,
  children,
  gradientAngle,
  flipImage,
}: PartnerCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full lg:flex-1 overflow-hidden"
      style={{
        height: isHovered ? "700px" : "350px",
        transition: "height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered((prev) => !prev)}
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-solid border-white inset-0 pointer-events-none z-10"
      />
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          alt=""
          className={`absolute inset-0 w-full h-full object-cover${flipImage ? " -scale-y-100 rotate-180" : ""}`}
          style={{
            objectPosition: isHovered ? "center" : "top",
            transition: "object-position 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          src={imageSrc}
        />
      </div>
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${gradientAngle}, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.64) 100%)`,
          transition: "background 0.45s ease",
        }}
      />
      {/* Content */}
      <div className="absolute inset-0 w-full flex items-center justify-center pb-[50px] pt-[50px]">
        <div className="flex flex-col justify-between items-start w-[356.643px] max-w-[calc(100%-40px)] h-full">
          {/* Tags */}
          <div className="flex flex-col gap-[4px] items-start w-[158px]">
            {tags.map((tag) => (
              <Tag key={tag.label} label={tag.label} fullWidth={tag.fullWidth} />
            ))}
          </div>
          {/* Description */}
          <div className="flex flex-col gap-[32px] items-start text-white w-full">
            <p className="font-['Sora'] font-extrabold leading-normal text-[26px] tracking-[-0.78px] uppercase w-[257px]">
              {title}
            </p>
            <div
              style={{
                maxHeight: isHovered ? "400px" : "0px",
                opacity: isHovered ? 1 : 0,
                overflow: "hidden",
                transition:
                  "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col gap-[80px] items-center justify-center w-full py-[80px]">
        {/* Header */}
        <div className="flex flex-col gap-[28px] items-center text-center text-black w-[675px] max-w-full px-6">
          <div className="flex flex-col gap-[32px] items-center uppercase w-full">
            <p className="font-['Sora'] font-semibold leading-[17px] text-[11px] tracking-[2.2px] w-full">
              Ideální partneři
            </p>
            <p className="font-['Sora'] font-extrabold leading-normal text-[32px] lg:text-[52px] tracking-[-0.96px] lg:tracking-[-1.56px] w-full">
              S kým spolupracujeme
            </p>
          </div>
          <p
            className="font-['Noto_Sans'] leading-[32px] text-[17px] w-full"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
          >
            Vybíráme si partnery, kterým naše technologie a přístup přinese
            největší hodnotu.
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex flex-col lg:flex-row h-auto items-stretch justify-center w-full max-w-[1401px] px-6 xl:px-0">
          {/* Card 1: Old School Businessy */}
          <PartnerCard
            imageSrc={img41641}
            tags={[
              { label: "Výrobní společnosti", fullWidth: true },
              { label: "Tradiční retail" },
              { label: "B2B firmy" },
            ]}
            title="Old School Businessy"
            gradientAngle="208.805deg"
          >
            <div
              className="font-['Noto_Sans'] leading-[24px] text-[15px] w-full"
              style={{
                fontVariationSettings: "'CTGR' 0, 'wdth' 100",
              }}
            >
              <p
                className="font-semibold mb-0"
                style={{
                  fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                }}
              >
                Firmy etablované v offline světě s zajímavými produkty,
                které v online zaostávají.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                {`Zastupujeme kompletně digitální team, zajistíme hladký vstup do aktivního e-commerce, postaráme se o nastavení procesů, proškolíme personál, nastavíme e-shop, vyrobíme kreativu, nastavíme budgety, spravujeme kampaně, určíme strategii `}
                <br aria-hidden="true" />a plně vás etablujeme v online
                světě.
              </p>
            </div>
          </PartnerCard>

          {/* Card 2: Komplikované Businessy */}
          <PartnerCard
            imageSrc={img255402}
            tags={[
              { label: "Alkohol & tabák" },
              { label: "Farmacie" },
              { label: "Kasina" },
              { label: "Erotické zboží" },
            ]}
            title="Komplikované Businessy"
            gradientAngle="207.12deg"
          >
            <div
              className="font-['Noto_Sans'] font-semibold leading-[24px] text-[15px] w-full"
              style={{
                fontVariationSettings: "'CTGR' 0, 'wdth' 100",
              }}
            >
              <p className="mb-0">
                Firmy podléhající regulacím či jiným restrikcím, např.
                pravidlům platforem.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                {`Jsme specialisté na hledání funkčních hranic mezi byznysem a regulací. Umíme pracovat tak, abychom v tomto komplikovaném světě uspěli `}
                <br aria-hidden="true" />a neohrozili naše klienty.
              </p>
            </div>
          </PartnerCard>

          {/* Card 3: Fundované Start-upy */}
          <PartnerCard
            imageSrc={img2437921}
            tags={[
              { label: "Seed/Series A" },
              { label: "D2C brandy" },
              { label: "Tech start-upy" },
            ]}
            title="Fundované Start-upy"
            gradientAngle="206.258deg"
            flipImage
          >
            <div
              className="font-['Noto_Sans'] font-semibold leading-[24px] text-[15px] w-full"
              style={{
                fontVariationSettings: "'CTGR' 0, 'wdth' 100",
              }}
            >
              <p className="mb-0">
                Firmy se zajištěným kapitálem a jasnou vizí,
                <br aria-hidden="true" />
                ve kterých spatřujeme potenciál.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                Dokážeme pomoct mezi výrazné hráče na trhu. Spojujeme
                technologickou expertízu s byznys know-how pro rychlý
                scale.
              </p>
            </div>
          </PartnerCard>
        </div>
      </div>
    </section>
  );
}

function Tag({ label, fullWidth }: { label: string; fullWidth?: boolean }) {
  return (
    <div
      className={`bg-white flex h-[32px] items-center justify-center p-[10px] shrink-0 ${fullWidth ? "w-full" : ""}`}
    >
      <p
        className="font-['Noto_Sans'] leading-[24px] text-[15px] text-black"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        {label}
      </p>
    </div>
  );
}
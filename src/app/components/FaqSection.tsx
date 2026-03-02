import { useState } from "react";
import svgPaths from "../../imports/svg-59wapeqsll";

const faqItems = [
  {
    question: "Proč nejste klasická agentura?",
    answer:
      "Klasická agentura fakturuje hodiny bez ohledu na výsledky. My jsme Strategic Growth Partner – náš zisk je přímo navázán na váš růst. Budujeme komplexní online businessy a neseme odpovědnost za výsledky.",
  },
  {
    question: "Jak funguje Success Fee?",
    answer:
      "Success Fee je podíl z vaší hrubé marže. Aktivuje se až ve chvíli, kdy váš byznys prokazatelně roste a generuje zisk. Nejprve prokážeme funkčnost modelu v Setup a Kampaňové fázi, teprve pak přecházíme na tento model. Je to férové pro obě strany – táhneme za stejný provaz.",
  },
  {
    question: "Pro koho nejste?",
    answer:
      "Nejsme pro firmy, které hledají jednorázovou kampaň nebo levného dodavatele. Pracujeme s ambiciózními byznysy, které chtějí systematicky růst a jsou připraveny na dlouhodobé partnerství.",
  },
  {
    question: "Kolik to celkově stojí?",
    answer:
      "Záleží na rozsahu a fázi spolupráce. Setup fáze je jednorázová investice, kampaňová fáze má fixní sazbu + % z ad spendu, a Scale fáze funguje na Success Fee modelu. Konkrétní čísla probereme na úvodní konzultaci.",
  },
  {
    question: "Jak dlouho trvá, než uvidím výsledky?",
    answer:
      "První výsledky vidíte typicky během 2-3 měsíců. Významný růst (3X+) dosahujeme v horizontu 12 měsíců. Každý byznys je jiný, ale transparentně komunikujeme očekávání od prvního dne.",
  },
  {
    question: "Pracujete i s firmami mimo Česko?",
    answer:
      "Ano, spolupracujeme s firmami v celé Evropě. Máme zkušenosti s expanzí na zahraniční trhy a lokalizací kampaní pro různé regiony.",
  },
  {
    question: "Co když spolupráce nefunguje?",
    answer:
      "Máme jasně definované milníky a KPIs. Pokud spolupráce nenaplňuje očekávání, transparentně to komunikujeme a hledáme řešení. Nejsme vázáni dlouhodobými smlouvami – důvěra se buduje výsledky.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col gap-[120px] items-center py-[80px] w-full max-w-[1920px] mx-auto px-6">
        {/* Header + FAQ Items */}
        <div className="flex flex-col gap-[80px] items-center w-full">
          {/* Header */}
          <div className="flex flex-col gap-[28px] items-center text-black text-center w-[469px] max-w-full">
            <div className="flex flex-col gap-[32px] items-center uppercase w-[419px] max-w-full">
              <p className="font-['Sora'] font-semibold leading-[17px] text-[11px] tracking-[2.2px] w-full">
                Časté dotazy
              </p>
              <p className="font-['Sora'] font-extrabold leading-normal text-[32px] lg:text-[52px] tracking-[-0.96px] lg:tracking-[-1.56px] w-full">
                Co vás zajímá
              </p>
            </div>
            <p
              className="font-['Noto_Sans'] leading-[32px] text-[17px] w-full"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              Odpovědi na nejčastější otázky o naší spolupráci a modelu.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="flex flex-col items-start w-full max-w-[769px]">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="flex flex-col items-start w-full"
                >
                  {/* Question row */}
                  <button
                    className="flex items-center justify-between w-full cursor-pointer"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <p className="font-['Sora'] font-bold leading-[71px] text-[22px] text-black tracking-[-0.22px] text-left">
                      {item.question}
                    </p>
                    <div className="shrink-0 size-[22px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 22 22"
                        style={{
                          transform: isOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <path
                          d={svgPaths.p300cf980}
                          fill="black"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Answer (if open) */}
                  {isOpen && item.answer && (
                    <p
                      className="font-['Noto_Sans'] leading-[27px] text-[15px] text-black w-full max-w-[693px]"
                      style={{
                        fontVariationSettings:
                          "'CTGR' 0, 'wdth' 100",
                      }}
                    >
                      {item.answer}
                    </p>
                  )}

                  {/* Divider line (not after open item) */}
                  {!isOpen && (
                    <div className="h-0 w-full relative">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 769 1"
                        >
                          <line
                            opacity="0.11"
                            stroke="black"
                            x2="769"
                            y1="0.5"
                            y2="0.5"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="bg-white flex h-[60px] items-center justify-center px-[51px] relative rounded-[62px] shrink-0 cursor-pointer">
          <div
            aria-hidden="true"
            className="absolute border-2 border-[#a038b6] border-solid inset-0 pointer-events-none rounded-[62px]"
          />
          <p className="font-['Sora'] font-extrabold leading-normal text-[14px] text-black text-center tracking-[-0.28px] uppercase">
            máte otázku? napište nám
          </p>
        </div>
      </div>
    </section>
  );
}
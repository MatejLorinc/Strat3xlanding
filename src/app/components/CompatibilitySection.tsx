import { useState } from "react";
import imgRectangle from "figma:asset/320b8c287414bc6a4263c44fb04247eb957ea265.png";
import { imgRectangle8 } from "../../imports/svg-76oh5";

export function CompatibilitySection() {
  const [formData, setFormData] = useState({
    ico: "",
    nazevSpolecnosti: "",
    kontaktniOsoba: "",
    nazevSpolecnosti2: "",
    telefon: "",
    zprava: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative w-full py-[80px] px-6 xl:px-0">
      {/* Dark contained card */}
      <div className="relative bg-[#171717] w-full max-w-[1400px] mx-auto overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 mix-blend-screen opacity-50"
          >
            <div className="absolute inset-0 opacity-70 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover size-full"
                src={imgRectangle}
              />
            </div>
          </div>
          <div
            className="absolute right-0 bottom-0 w-[288px] h-[825px] bg-gradient-to-l from-[#171717] to-[rgba(23,23,23,0)] opacity-[0.43]"
            style={{
              maskImage: `url('${imgRectangle8}')`,
              maskSize: "1400px 1300px",
              maskRepeat: "no-repeat",
              maskPosition: "-205px -661px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-[80px] items-center w-full max-w-[838px] mx-auto py-[140px] lg:py-[200px] px-6 lg:px-0">
          {/* Header */}
          <div className="flex flex-col gap-[28px] items-center text-center text-white w-full">
            <div className="flex flex-col gap-[32px] items-center uppercase w-full max-w-[772px]">
              <p className="font-['Sora'] font-semibold leading-[17px] text-[11px] tracking-[2.2px] w-full">
                Ověření kompatibility
              </p>
              <p className="font-['Sora'] font-extrabold leading-normal text-[28px] sm:text-[36px] lg:text-[52px] tracking-[-0.96px] lg:tracking-[-1.56px] w-full">
                Zjistěte, zda jsme pro vás
              </p>
            </div>
            <p
              className="font-['Noto_Sans'] leading-[32px] opacity-65 text-[17px] w-full max-w-[665px]"
              style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
            >
              Zadejte své IČO a kontaktní údaje. Do 48 hodin se ozveme s
              výsledkem kompatibility a v případě shody si domluvíme úvodní
              schůzku.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-[60px] items-start w-full">
            <div className="flex flex-col gap-[36px] items-start w-full">
              {/* Row 1: IČO + Název společnosti */}
              <div className="flex flex-col sm:flex-row gap-[36px] items-center w-full">
                <FormField
                  label="IČO firmy"
                  required
                  name="ico"
                  placeholder="např. 0598456"
                  value={formData.ico}
                  onChange={handleChange}
                />
                <FormField
                  label="Název společnosti"
                  required
                  name="nazevSpolecnosti"
                  placeholder="např. Almedica s.r.o."
                  value={formData.nazevSpolecnosti}
                  onChange={handleChange}
                />
              </div>

              {/* Row 2: Kontaktní osoba + Název společnosti */}
              <div className="flex flex-col sm:flex-row gap-[36px] items-center w-full">
                <FormField
                  label="Kontaktní osoba"
                  required
                  name="kontaktniOsoba"
                  placeholder="např. Jan Novák"
                  value={formData.kontaktniOsoba}
                  onChange={handleChange}
                />
                <FormField
                  label="Název společnosti"
                  required
                  name="nazevSpolecnosti2"
                  placeholder="např. Almedica s.r.o."
                  value={formData.nazevSpolecnosti2}
                  onChange={handleChange}
                />
              </div>

              {/* Row 3: Telefon */}
              <div className="flex flex-col gap-[16px] items-start w-full">
                <div className="flex items-center justify-center w-full">
                  <p
                    className="flex-1 font-['Noto_Sans'] font-semibold leading-[32px] text-[15px] text-white"
                    style={{
                      fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                    }}
                  >
                    Telefon
                  </p>
                </div>
                <div className="relative w-full h-[56px] bg-[#171717]">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none"
                  />
                  <input
                    type="tel"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    placeholder="např. +420 621 565 987"
                    className="w-full h-full bg-transparent px-[20px] py-[10px] font-['Noto_Sans'] text-[17px] text-white leading-[32px] placeholder:text-white placeholder:opacity-65 outline-none"
                    style={{
                      fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                    }}
                  />
                </div>
              </div>

              {/* Row 4: Zpráva */}
              <div className="flex flex-col gap-[16px] items-start w-full">
                <div className="flex items-center justify-center w-full">
                  <p
                    className="flex-1 font-['Noto_Sans'] font-semibold leading-[32px] text-[15px] text-white"
                    style={{
                      fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                    }}
                  >
                    Zpráva (nepovinné)
                  </p>
                </div>
                <div className="relative w-full h-[158px] bg-[#171717]">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none"
                  />
                  <textarea
                    name="zprava"
                    value={formData.zprava}
                    onChange={handleChange}
                    placeholder="Stručně popište váš byznys a co od spolupráce očekáváte"
                    className="w-full h-full bg-transparent px-[20px] py-[10px] font-['Noto_Sans'] text-[17px] text-white leading-[32px] placeholder:text-white placeholder:opacity-65 outline-none resize-none"
                    style={{
                      fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Submit row */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6">
              <button className="relative bg-white h-[60px] flex items-center justify-center px-[51px] rounded-[62px] shrink-0 cursor-pointer">
                <div
                  aria-hidden="true"
                  className="absolute border-2 border-[#a038b6] border-solid inset-0 pointer-events-none rounded-[62px]"
                />
                <span className="font-['Sora'] font-extrabold leading-normal text-[14px] text-black text-center tracking-[-0.28px] uppercase">
                  ověřit kompatibilitu
                </span>
              </button>

              <p
                className="font-['Noto_Sans'] text-[17px] text-right text-white w-[331px] max-w-full"
                style={{
                  fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                }}
              >
                <span
                  className="leading-[32px]"
                  style={{
                    fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                  }}
                >
                  Odpovíme do 48 hodin
                  <br />
                </span>
                <span
                  className="leading-[32px] text-[rgba(255,255,255,0.57)]"
                  style={{
                    fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                  }}
                >
                  Kapacita pro nové partnery je omezená
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  required,
  name,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-[16px] items-start w-full sm:w-[400px]">
      <p
        className="font-['Noto_Sans'] font-semibold leading-[32px] text-[15px] text-white w-full"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
      >
        <span className="leading-[32px]">{`${label} `}</span>
        {required && (
          <span className="leading-[32px] text-[#be1e1e]">*</span>
        )}
      </p>
      <div className="relative w-full h-[56px] bg-[#171717]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none"
        />
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-full bg-transparent px-[20px] py-[10px] font-['Noto_Sans'] text-[17px] text-white leading-[32px] placeholder:text-white placeholder:opacity-65 outline-none"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        />
      </div>
    </div>
  );
}
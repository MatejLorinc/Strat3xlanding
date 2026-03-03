import { useState } from "react";
import imgRectangle from "figma:asset/320b8c287414bc6a4263c44fb04247eb957ea265.png";
import { imgRectangle8 } from "../../imports/svg-76oh5";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
  ico?: string;
  nazevSpolecnosti?: string;
  kontaktniOsoba?: string;
  telefon?: string;
}

export function CompatibilitySection() {
  const [formData, setFormData] = useState({
    ico: "",
    nazevSpolecnosti: "",
    kontaktniOsoba: "",
    telefon: "",
    zprava: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.ico.trim()) newErrors.ico = "IČO firmy je povinné";
    if (!formData.nazevSpolecnosti.trim())
      newErrors.nazevSpolecnosti = "Název společnosti je povinný";
    if (!formData.kontaktniOsoba.trim())
      newErrors.kontaktniOsoba = "Kontaktní osoba je povinná";
    if (!formData.telefon.trim()) newErrors.telefon = "Telefon je povinný";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setStatusMessage(
          data.message || "Zpráva byla úspěšně odeslána. Ozveme se vám do 48 hodin."
        );
        // Reset form
        setFormData({
          ico: "",
          nazevSpolecnosti: "",
          kontaktniOsoba: "",
          telefon: "",
          zprava: "",
        });
      } else {
        setStatus("error");
        if (data.errors) {
          // Server-side validation errors
          setErrors(data.errors);
          setStatusMessage("Vyplňte prosím všechna povinná pole.");
        } else {
          setStatusMessage(
            data.message || "Nepodařilo se odeslat zprávu. Zkuste to prosím později."
          );
        }
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Nepodařilo se připojit k serveru. Zkuste to prosím později."
      );
    }
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[60px] items-start w-full"
            noValidate
          >
            <div className="flex flex-col gap-[36px] items-start w-full">
              {/* Row 1: IČO + Název společnosti */}
              <div className="flex flex-col sm:flex-row gap-[36px] items-start w-full">
                <FormField
                  label="IČO firmy"
                  required
                  name="ico"
                  placeholder="např. 0598456"
                  value={formData.ico}
                  onChange={handleChange}
                  error={errors.ico}
                />
                <FormField
                  label="Název společnosti"
                  required
                  name="nazevSpolecnosti"
                  placeholder="např. Almedica s.r.o."
                  value={formData.nazevSpolecnosti}
                  onChange={handleChange}
                  error={errors.nazevSpolecnosti}
                />
              </div>

              {/* Row 2: Kontaktní osoba + Telefon */}
              <div className="flex flex-col sm:flex-row gap-[36px] items-start w-full">
                <FormField
                  label="Kontaktní osoba"
                  required
                  name="kontaktniOsoba"
                  placeholder="např. Jan Novák"
                  value={formData.kontaktniOsoba}
                  onChange={handleChange}
                  error={errors.kontaktniOsoba}
                />
                <FormField
                  label="Telefon"
                  required
                  name="telefon"
                  type="tel"
                  placeholder="např. +420 621 565 987"
                  value={formData.telefon}
                  onChange={handleChange}
                  error={errors.telefon}
                />
              </div>

              {/* Row 3: Zpráva */}
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

            {/* Status message */}
            {statusMessage && (
              <div
                className={`w-full px-[20px] py-[14px] rounded-[8px] font-['Noto_Sans'] text-[15px] leading-[24px] ${status === "success"
                    ? "bg-[rgba(34,197,94,0.12)] text-[#22c55e] border border-[rgba(34,197,94,0.3)]"
                    : "bg-[rgba(239,68,68,0.12)] text-[#ef4444] border border-[rgba(239,68,68,0.3)]"
                  }`}
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                {statusMessage}
              </div>
            )}

            {/* Submit row */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6">
              <button
                type="submit"
                disabled={status === "loading"}
                className="relative bg-white h-[60px] flex items-center justify-center px-[51px] rounded-[62px] shrink-0 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
              >
                <div
                  aria-hidden="true"
                  className="absolute border-2 border-[#a038b6] border-solid inset-0 pointer-events-none rounded-[62px]"
                />
                {status === "loading" ? (
                  <span className="font-['Sora'] font-extrabold leading-normal text-[14px] text-black text-center tracking-[-0.28px] uppercase flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    odesílání...
                  </span>
                ) : (
                  <span className="font-['Sora'] font-extrabold leading-normal text-[14px] text-black text-center tracking-[-0.28px] uppercase">
                    ověřit kompatibilitu
                  </span>
                )}
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
          </form>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  required,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  required?: boolean;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
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
          className={`absolute border border-solid inset-0 pointer-events-none ${error
              ? "border-[#ef4444]"
              : "border-[rgba(255,255,255,0.35)]"
            }`}
        />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-full bg-transparent px-[20px] py-[10px] font-['Noto_Sans'] text-[17px] text-white leading-[32px] placeholder:text-white placeholder:opacity-65 outline-none"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        />
      </div>
      {error && (
        <p
          className="font-['Noto_Sans'] text-[13px] text-[#ef4444] leading-[18px] -mt-[8px]"
          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
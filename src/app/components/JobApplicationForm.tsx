"use client";
import { useState } from "react";
import imgRectangle from "@/assets/320b8c287414bc6a4263c44fb04247eb957ea265.png";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
    jmeno?: string;
    prijmeni?: string;
    email?: string;
    telefon?: string;
}

export function JobApplicationForm({ jobTitle }: { jobTitle: string }) {
    const [formData, setFormData] = useState({
        jmeno: "",
        prijmeni: "",
        email: "",
        telefon: "",
        cvBase64: "",
        cvName: "",
        linkedin: "",
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
        if (errors[name as keyof FormErrors]) {
            setErrors({ ...errors, [name]: undefined });
        }
    };

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.jmeno.trim()) newErrors.jmeno = "Jméno je povinné";
        if (!formData.prijmeni.trim()) newErrors.prijmeni = "Příjmení je povinné";
        if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
            newErrors.email = "Zadejte platný e-mail";
        if (!formData.telefon.trim()) newErrors.telefon = "Telefon je povinný";

        // Custom simple check for CV (if we wanted it required, we'd add it to FormErrors interface)

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const result = event.target?.result as string;
            // The result is a data URL (e.g., "data:application/pdf;base64,JVBERi...")
            // We need to strip the prefix to send raw base64 to Resend
            const base64Content = result.split(',')[1];

            setFormData(prev => ({
                ...prev,
                cvBase64: base64Content || "",
                cvName: file.name
            }));
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setStatus("loading");
        setStatusMessage("");

        try {
            // Map to the existing contact API format or send as raw data
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "jobApplication",
                    jobTitle: jobTitle,
                    jmeno: formData.jmeno,
                    prijmeni: formData.prijmeni,
                    email: formData.email,
                    telefon: formData.telefon,
                    linkedin: formData.linkedin,
                    zprava: formData.zprava,
                    cvBase64: formData.cvBase64,
                    cvName: formData.cvName,
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus("success");
                setStatusMessage("Přihláška byla úspěšně odeslána. Ozveme se vám do 48 hodin.");
                setFormData({
                    jmeno: "",
                    prijmeni: "",
                    email: "",
                    telefon: "",
                    cvBase64: "",
                    cvName: "",
                    linkedin: "",
                    zprava: "",
                });
            } else {
                setStatus("error");
                setStatusMessage(
                    data.message || "Nepodařilo se odeslat přihlášku. Zkuste to prosím později."
                );
            }
        } catch {
            setStatus("error");
            setStatusMessage("Nepodařilo se připojit k serveru. Zkuste to prosím později.");
        }
    };

    return (
        <section id="mam-zajem" className="relative w-full py-[80px] px-6 xl:px-0">
            {/* Dark contained card */}
            <div className="relative bg-[#171717] w-full max-w-[1400px] mx-auto overflow-hidden">
                {/* Background decorative element inside form box */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden h-full">
                    <img
                        alt=""
                        className="absolute -bottom-[10%] -left-[30%] w-[1100px] h-auto mix-blend-screen opacity-50"
                        src={(typeof imgRectangle === 'object' && imgRectangle !== null && 'src' in imgRectangle) ? (imgRectangle as any).src : imgRectangle}
                    />
                </div>

                <div className="relative z-10 flex flex-col gap-[80px] items-center w-full max-w-[838px] mx-auto py-[140px] lg:py-[200px] px-6 lg:px-0">
                    <div className="flex flex-col gap-[28px] items-center text-center text-white w-full">
                        <div className="flex flex-col gap-[16px] items-center uppercase w-full">
                            <p className="font-['Sora'] font-semibold leading-[17px] text-[11px] tracking-[2.2px] w-full text-white/70">
                                KONTAKTNÍ FORMULÁŘ
                            </p>
                            <p className="font-['Sora'] font-extrabold leading-normal text-[28px] sm:text-[36px] lg:text-[52px] tracking-[-0.96px] lg:tracking-[-1.56px] w-full">
                                MÁM ZÁJEM O POZICI
                            </p>
                        </div>
                        <p
                            className="font-['Noto_Sans'] leading-[32px] opacity-65 text-[17px] w-full max-w-[500px] text-center"
                            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                        >
                            Vyplňte formulář níže a my se vám do 48 hodin zkusíme ozvat. V případě shody si domluvíme úvodní pohovor.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-[40px] lg:gap-[60px] items-start w-full" noValidate>
                        <div className="flex flex-col gap-[36px] items-start w-full">
                            {/* Row 1 */}
                            <div className="flex flex-col sm:flex-row gap-[36px] items-start w-full">
                                <FormField
                                    label="Jméno"
                                    required
                                    name="jmeno"
                                    placeholder="např. Jan"
                                    value={formData.jmeno}
                                    onChange={handleChange}
                                    error={errors.jmeno}
                                />
                                <FormField
                                    label="Příjmení"
                                    required
                                    name="prijmeni"
                                    placeholder="např. Novák"
                                    value={formData.prijmeni}
                                    onChange={handleChange}
                                    error={errors.prijmeni}
                                />
                            </div>

                            {/* Row 2 */}
                            <div className="flex flex-col sm:flex-row gap-[36px] items-start w-full">
                                <FormField
                                    label="E-mail"
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="např. jan.novak@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={errors.email}
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

                            {/* Row 3 */}
                            <div className="flex flex-col sm:flex-row gap-[36px] items-start w-full">
                                {/* CV Upload File Input */}
                                <div className="flex flex-col gap-[16px] items-start w-full sm:w-[400px]">
                                    <p
                                        className="font-['Noto_Sans'] font-semibold leading-[32px] text-[15px] text-white w-full"
                                        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                                    >
                                        <span className="leading-[32px]">CV (Životopis) </span>
                                        <span className="leading-[32px] text-[#be1e1e]">*</span>
                                    </p>
                                    <div className="relative w-full h-[56px] bg-[#171717]">
                                        <div
                                            aria-hidden="true"
                                            className="absolute border border-solid inset-0 pointer-events-none border-[rgba(255,255,255,0.35)]"
                                        />
                                        <div className="w-full h-full flex items-center justify-between px-[20px]">
                                            <span className="font-['Noto_Sans'] text-[17px] text-white/65 truncate pr-2">
                                                {formData.cvName || "Nahrajte soubor .pdf, .docx"}
                                            </span>
                                            <div className="rounded-[4px] bg-white text-black px-4 py-1 text-[13px] font-bold font-['Sora'] uppercase cursor-pointer pointer-events-none shrink-0">
                                                Nahrát
                                            </div>
                                        </div>
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            required
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                    </div>
                                </div>

                                <FormField
                                    label="LinkedIn"
                                    name="linkedin"
                                    placeholder="např. linkedin.com/in/jannovak1"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Row 4: Zpráva */}
                            <div className="flex flex-col gap-[16px] items-start w-full">
                                <div className="flex items-center justify-start w-full">
                                    <p
                                        className="font-['Noto_Sans'] font-semibold leading-[32px] text-[15px] text-white"
                                        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                                    >
                                        Zpráva (nepovinné)
                                    </p>
                                </div>
                                <div className="relative w-full h-[158px] bg-transparent">
                                    <div
                                        aria-hidden="true"
                                        className="absolute border border-[rgba(255,255,255,0.35)] border-solid inset-0 pointer-events-none"
                                    />
                                    <textarea
                                        name="zprava"
                                        value={formData.zprava}
                                        onChange={handleChange}
                                        placeholder="Sem můžete napsat cokoliv byste nám chtěl/a říct..."
                                        className="w-full h-full bg-transparent px-[20px] py-[10px] font-['Noto_Sans'] text-[17px] text-white leading-[32px] placeholder:text-white placeholder:opacity-50 outline-none resize-none"
                                        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                                    />
                                </div>
                            </div>
                        </div>

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

                        <div className="flex items-center justify-center w-full mt-4">
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="relative bg-white h-[60px] flex items-center justify-center px-[51px] rounded-[62px] shrink-0 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition-opacity w-full sm:w-auto"
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute border-2 border-[#a038b6] border-solid inset-0 pointer-events-none rounded-[62px]"
                                />
                                {status === "loading" ? (
                                    <span className="font-['Sora'] font-extrabold leading-normal text-[14px] text-black text-center tracking-[-0.28px] uppercase flex items-center gap-2">
                                        <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Odesílání...
                                    </span>
                                ) : (
                                    <span className="font-['Sora'] font-extrabold leading-normal text-[14px] text-black text-center tracking-[-0.28px] uppercase">
                                        Odeslat formulář
                                    </span>
                                )}
                            </button>
                        </div>

                        <p
                            className="font-['Noto_Sans'] text-[15px] text-center text-white/60 mx-auto w-full max-w-[400px]"
                            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                        >
                            Odpovíme do 48 hodin.
                            <br />
                            Zpětnou vazbu dáme všem zájemcům.
                        </p>
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

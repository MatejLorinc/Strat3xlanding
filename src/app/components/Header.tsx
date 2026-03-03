"use client";
import svgPaths from "../../imports/svg-59wapeqsll";
import imgRectangle2 from "@/assets/237f5127621aac5fb508fd8af02ad944505f7f78.png";
import { imgRectangle1 } from "../../imports/svg-76oh5";
import { useState, useEffect } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? "py-3 lg:py-5 shadow-md" : "py-6 lg:py-10"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <LogoGradient />
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden relative size-[30px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="block size-full" fill="none" viewBox="0 0 30 30">
            {menuOpen ? (
              <path d="M8 8L22 22M22 8L8 22" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <>
                <rect x="3" y="6" width="24" height="3" rx="1.5" fill="black" />
                <rect x="3" y="13.5" width="24" height="3" rx="1.5" fill="black" />
                <rect x="9" y="21" width="18" height="3" rx="1.5" fill="black" />
              </>
            )}
          </svg>
        </button>

        {/* Navigation and Actions - Desktop */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-12">
          {/* Main Navigation */}
          <nav className="flex items-center gap-4 xl:gap-7 font-['Sora'] font-semibold text-[13px] text-black text-center tracking-[-0.26px] uppercase">
            <a href="#o-nas" className="hover:opacity-70 transition-opacity">O nás</a>
            <a href="#sluzby" className="hover:opacity-70 transition-opacity">Služby</a>
            <a href="#metodika" className="hover:opacity-70 transition-opacity">Metodika</a>
            <a href="#technologie" className="hover:opacity-70 transition-opacity">Technologie</a>
            <a href="#tym" className="hover:opacity-70 transition-opacity">Tým</a>
            <a href="#kontakt" className="hover:opacity-70 transition-opacity">Kontakt</a>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <CzechFlag />
            <div className="flex items-center gap-2">
              <span className="font-['Sora'] font-semibold text-[13px] text-black text-center tracking-[-0.26px] uppercase">cz</span>
              <svg className="w-[9px] h-[5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
                <path d={svgPaths.p2568da00} fill="black" />
              </svg>
            </div>
          </div>

          {/* Login Button - commented out for now
          <button className="relative border-2 border-[#a038b6] rounded-[63px] h-11 w-[157px] flex items-center justify-center hover:bg-[#a038b6] hover:text-white transition-colors group">
            <span className="font-['Sora'] font-bold text-[12px] text-black text-center tracking-[-0.24px] uppercase group-hover:text-white">přihlášení</span>
            <svg className="absolute right-4 w-[9px] h-[5px] rotate-180" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
              <path d={svgPaths.p2568da00} fill="black" className="group-hover:fill-white" />
            </svg>
          </button>
          */}

          {/* CTA Button */}
          <a href="#kontakt" className="bg-black h-11 px-[34px] rounded-[62px] hover:bg-gray-900 transition-colors flex items-center justify-center">
            <span className="font-['Sora'] font-bold text-[12px] text-white text-center tracking-[-0.24px] uppercase">ověřit kompatibilitu</span>
          </a>
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 top-[76px] bg-white z-50 lg:hidden flex flex-col items-center pt-8 gap-6">
            <nav className="flex flex-col items-center gap-6 font-['Sora'] font-semibold text-[15px] text-black tracking-[-0.26px] uppercase">
              <a href="#o-nas" className="hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>O nás</a>
              <a href="#sluzby" className="hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>Služby</a>
              <a href="#metodika" className="hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>Metodika</a>
              <a href="#technologie" className="hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>Technologie</a>
              <a href="#tym" className="hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>Tým</a>
              <a href="#kontakt" className="hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>Kontakt</a>
            </nav>
            <a href="#kontakt" className="bg-black h-11 px-[34px] rounded-[62px] flex items-center justify-center" onClick={() => setMenuOpen(false)}>
              <span className="font-['Sora'] font-bold text-[12px] text-white text-center tracking-[-0.24px] uppercase">ověřit kompatibilitu</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function LogoGradient() {
  return (
    <div className="h-[22px] w-[135px] relative overflow-clip">
      <div className="absolute inset-[0_87.73%_5.71%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5601 20.7442">
          <path d={svgPaths.p5b36400} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[2.69%_75.41%_8.03%_12.93%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7498 19.6419">
          <path d={svgPaths.p11eba200} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[1.95%_60.47%_8.03%_26.68%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.34 19.8046">
          <path d={svgPaths.p2358ae80} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[2.69%_44.57%_8.03%_40.09%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7118 19.6419">
          <path d={svgPaths.p3c991300} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[2.69%_33.51%_8.03%_54.82%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7498 19.6419">
          <path d={svgPaths.p11eba200} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[2.32%_0_8.39%_85.71%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2897 19.6442">
          <path d={svgPaths.p236aca80} fill="black" />
        </svg>
      </div>
      <div className="absolute contents inset-[3.16%_15.57%_7.68%_67.77%]">
        <div className="absolute contents inset-[0.25%_13.46%_-0.25%_65.7%]">
          <div className="absolute inset-[0.25%_13.46%_-0.25%_65.7%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.798px_0.639px] mask-size-[22.493px_19.617px]" style={{ maskImage: `url('${imgRectangle1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={(typeof imgRectangle2 === 'object' && imgRectangle2 !== null && 'src' in imgRectangle2) ? (imgRectangle2 as any).src : imgRectangle2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CzechFlag() {
  return (
    <div className="w-[17px] h-[17px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_1_2329)">
          <path d={svgPaths.pce22900} fill="#F0F0F0" />
          <path d={svgPaths.p33084d0} fill="#D80027" />
          <path d={svgPaths.p18116100} fill="#0052B4" />
        </g>
        <defs>
          <clipPath id="clip0_1_2329">
            <rect fill="white" height="17" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
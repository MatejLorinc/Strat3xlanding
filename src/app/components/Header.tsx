"use client";
import imgHamburgerBg from "@/assets/HamburgerMenu.png";
import newLogoImg from "@/assets/new-logo.png";
import svgPaths from "../../imports/svg-59wapeqsll";
import { useState, useEffect } from "react";

const hamburgerBgSrc = (typeof imgHamburgerBg === 'object' && imgHamburgerBg !== null && 'src' in imgHamburgerBg)
  ? (imgHamburgerBg as any).src
  : imgHamburgerBg;

const newLogoSrc = (typeof newLogoImg === 'object' && newLogoImg !== null && 'src' in newLogoImg)
  ? (newLogoImg as any).src
  : newLogoImg;

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

  const navItems = [
    { href: "#o-nas", label: "O nás" },
    { href: "#sluzby", label: "Služby" },
    { href: "#metodika", label: "Metodika" },
    { href: "#technologie", label: "Technologie" },
    { href: "#tym", label: "Tým" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${menuOpen ? "bg-transparent" : "bg-white"} ${!menuOpen && scrolled ? "py-3 lg:py-5 shadow-md" : "py-6 lg:py-10"}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0" onClick={() => setMenuOpen(false)}>
            <img
              src={newLogoSrc}
              alt="Strat3x Logo"
              className={`h-[22px] w-auto object-contain relative transition-all duration-300 ${menuOpen ? "z-[60]" : ""}`}
            />
          </a>

          {/* Mobile hamburger / close */}
          <button
            className={`lg:hidden flex items-center gap-2 z-[60] ${menuOpen ? "text-white" : "text-black"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative size-[30px]">
              <svg className="block size-full" fill="none" viewBox="0 0 30 30">
                {menuOpen ? (
                  <path d="M8 8L22 22M22 8L8 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                ) : (
                  <>
                    <rect x="3" y="6" width="24" height="3" rx="1.5" fill="black" />
                    <rect x="3" y="13.5" width="24" height="3" rx="1.5" fill="black" />
                    <rect x="9" y="21" width="18" height="3" rx="1.5" fill="black" />
                  </>
                )}
              </svg>
            </div>
            <span className={`font-['Sora'] font-bold text-[15px] leading-[17px] tracking-[-0.45px] uppercase ${menuOpen ? "text-white" : "text-black"}`}>
              Menu
            </span>
          </button>

          {/* Navigation and Actions - Desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-12">
            {/* Main Navigation */}
            <nav className="flex items-center gap-4 xl:gap-7 font-['Sora'] font-semibold text-[13px] text-black text-center tracking-[-0.26px] uppercase">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:opacity-70 transition-opacity">{item.label}</a>
              ))}
            </nav>

            {/* Language Selector - commented out for now */}
            {/* <div className="flex items-center gap-2">
              <CzechFlag />
              <div className="flex items-center gap-2">
                <span className="font-['Sora'] font-semibold text-[13px] text-black text-center tracking-[-0.26px] uppercase">cz</span>
                <svg className="w-[9px] h-[5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
                  <path d={svgPaths.p2568da00} fill="black" />
                </svg>
              </div>
            </div> */}

            {/* CTA Button */}
            <a href="#kontakt" className="bg-black h-11 px-[34px] rounded-[62px] hover:bg-gray-900 transition-colors flex items-center justify-center">
              <span className="font-['Sora'] font-bold text-[12px] text-white text-center tracking-[-0.24px] uppercase">ověřit kompatibilitu</span>
            </a>
          </div>
        </div>
      </header >

      {/* Mobile menu fullscreen overlay */}
      {
        menuOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{
              backgroundImage: `url('${hamburgerBgSrc}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Decorative SVG - positioned on the right side */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" style={{ width: "170px", height: "233px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="170" height="233" viewBox="0 0 170 233" fill="none" className="w-full h-full">
                <g opacity="0.24" clipPath="url(#clip0_42_7204)">
                  <path d="M202.551 103.781C202.551 103.781 202.239 103.781 202.083 103.781H145.84H34.9954C27.8869 103.781 22.1065 98.0067 22.1065 90.9059V90.3597C22.1065 83.2589 27.8869 77.4846 34.9954 77.4846H145.84V51.8905H34.9954C27.8869 51.8905 22.1065 46.1162 22.1065 39.0154V38.4692C22.1065 31.3684 27.8869 25.5941 34.9954 25.5941H145.84V0H34.9954C34.9954 0 34.6829 0 34.5267 0H0V129.297H34.5267C34.5267 129.297 34.8392 129.297 34.9954 129.297H91.238H202.083C209.191 129.297 214.972 135.071 214.972 142.172V142.718C214.972 149.819 209.191 155.593 202.083 155.593H91.238V181.188H202.083C209.191 181.188 214.972 186.962 214.972 194.063V194.609C214.972 201.71 209.191 207.484 202.083 207.484H91.238V233.078H202.083C202.083 233.078 202.395 233.078 202.551 233.078H237.078V103.781H202.551Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_42_7204">
                    <rect width="237" height="233" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Nav links - left-aligned, starting below header */}
            <nav className="flex flex-col gap-2 px-6 mt-[120px]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-['Sora'] font-bold text-[22px] text-white tracking-[-0.44px] uppercase py-3 hover:opacity-70 transition-opacity"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Bottom section - CTA */}
            <div className="mt-auto px-6 pb-10 flex flex-col gap-6">
              {/* Language selector - commented out for now */}
              {/* <div className="flex items-center gap-2">
                <CzechFlag />
                <div className="flex items-center gap-1.5">
                  <span className="font-['Sora'] font-semibold text-[14px] text-white tracking-[-0.26px] uppercase">cz</span>
                  <svg className="w-[9px] h-[5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
                    <path d={svgPaths.p2568da00} fill="white" />
                  </svg>
                </div>
              </div> */}

              {/* CTA Button */}
              <a
                href="#kontakt"
                className="bg-black h-[52px] rounded-[62px] flex items-center justify-center max-w-[320px]"
                onClick={() => setMenuOpen(false)}
              >
                <span className="font-['Sora'] font-bold text-[13px] text-white text-center tracking-[-0.26px] uppercase">ověřit kompatibilitu</span>
              </a>
            </div>
          </div>
        )}
    </>
  );
}


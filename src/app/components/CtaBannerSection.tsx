export function CtaBannerSection() {
  return (
    <section className="relative w-full pb-12 lg:pb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="bg-[#171717] flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between h-auto md:h-[244px] px-6 md:px-20 py-10 md:py-0">
          <p className="font-['Sora'] font-extrabold text-[26px] text-white tracking-[-0.78px] uppercase leading-normal w-full md:w-[493px]">
            {"Chcete vidět podobnou křivku "}
            <br className="hidden md:block" />u svého businessu?
          </p>
          <a href="#kontakt" className="bg-[#171717] h-[60px] px-[51px] rounded-[62px] border-2 border-[#a038b6] hover:bg-[#a038b6] transition-colors flex items-center justify-center">
            <span className="font-['Sora'] font-extrabold text-[14px] text-white text-center tracking-[-0.28px] uppercase">
              ověřit kompatibilitu
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
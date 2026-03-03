export function DashboardCtaSection() {
  return (
    <section className="h-auto lg:h-[472px] overflow-clip relative w-full">
      <div className="flex flex-col gap-[40px] items-center justify-center w-full py-[60px] lg:py-[120px]">
        <div className="font-['Sora'] font-extrabold leading-normal min-w-full relative shrink-0 text-[28px] sm:text-[36px] lg:text-[52px] text-black text-center tracking-[-0.96px] lg:tracking-[-1.56px] uppercase whitespace-pre-wrap px-6">
          <p className="mb-0">{`Chcete mít přístup k vlastnímu `}</p>
          <p>dashboardu s vašimi daty?</p>
        </div>
        <a href="#kontakt" className="bg-black flex h-[60px] items-center justify-center px-[51px] relative rounded-[62px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
          <p className="font-['Sora'] font-extrabold leading-normal relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] uppercase">
            ověřit kompatibilitu
          </p>
        </a>
      </div>
    </section>
  );
}
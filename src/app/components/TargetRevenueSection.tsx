export function TargetRevenueSection() {
  return (
    <section className="relative w-full py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-[24px] lg:gap-[32px] h-auto py-[40px] lg:py-0 lg:h-[202px] items-center justify-center border border-[#a038b6]">
          <p className="font-['Sora'] font-semibold text-[11px] text-black text-center tracking-[2.2px] uppercase leading-[17px]">
            Cílový obrat klientů
          </p>
          <p className="font-['Sora'] text-black text-center px-4">
            <span className="font-extrabold text-[32px] lg:text-[52px] tracking-[-0.96px] lg:tracking-[-1.56px] uppercase leading-[38px]">
              {"50 - 600 mil. CZK  "}
            </span>
            <span className="font-bold text-[17px] leading-[65px]">/ rok</span>
          </p>
        </div>
      </div>
    </section>
  );
}
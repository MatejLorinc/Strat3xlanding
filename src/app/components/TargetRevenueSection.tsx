export function TargetRevenueSection() {
  return (
    <section className="relative w-full py-20">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col gap-[32px] h-[202px] items-center justify-center border border-[#a038b6]">
          <p className="font-['Sora'] font-semibold text-[11px] text-black text-center tracking-[2.2px] uppercase leading-[17px]">
            Cílový obrat klientů
          </p>
          <p className="font-['Sora'] text-black text-center">
            <span className="font-extrabold text-[52px] tracking-[-1.56px] uppercase leading-[38px]">
              {"50 - 600 mil. CZK  "}
            </span>
            <span className="font-bold text-[17px] leading-[65px]">/ rok</span>
          </p>
        </div>
      </div>
    </section>
  );
}

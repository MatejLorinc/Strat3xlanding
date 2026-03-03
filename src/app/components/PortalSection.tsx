import clientPortalPreview from "../../assets/client_portal_preview.png";
import rectangleBg from "../../assets/Rectangle.png";

export function PortalSection() {
  return (
    <section className="relative w-full py-12 lg:py-20 overflow-x-clip">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-[32px] items-center text-center mb-12 lg:mb-20">
          <p className="font-['Sora'] font-semibold text-[11px] text-black tracking-[2.2px] uppercase leading-[17px]">
            interaktivní ukázka
          </p>
          <p className="font-['Sora'] font-extrabold text-[32px] lg:text-[52px] text-black tracking-[-0.96px] lg:tracking-[-1.56px] uppercase leading-normal w-full max-w-[948px]">
            Klientský portál již brzy
          </p>
        </div>

        {/* Portal Preview with background */}
        <div className="relative w-full max-w-[1200px] mx-auto">
          {/* Rectangle background - overflows top and sides, not bottom */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: "-80px",
              left: "-80px",
              right: "-80px",
              bottom: "190px",
              backgroundImage: `url('${rectangleBg}')`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Browser bar */}
            <div className="flex items-center justify-between px-[80px] pt-6 pb-4">
              {/* Dots */}
              <svg width="41" height="10" viewBox="0 0 41 10" fill="none">
                <circle cx="5" cy="5" r="5" fill="white" />
                <circle cx="20" cy="5" r="5" fill="white" />
                <circle cx="36" cy="5" r="5" fill="white" />
              </svg>
              {/* URL */}
              <p
                className="font-['Noto_Sans'] font-normal text-[13px] text-white text-center leading-[32px]"
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                dashboard.strat3x.cz
              </p>
              {/* Open link */}
              <p
                className="font-['Noto_Sans'] font-normal text-[13px] text-white text-right leading-[32px]"
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                Otevřít celý
              </p>
            </div>
          </div>
          {/* Portal preview image */}
          <img
            alt="Klientský portál preview"
            className="relative w-full h-auto object-contain rounded-lg shadow-xl bg-white"
            src={(typeof clientPortalPreview === 'object' && clientPortalPreview !== null && 'src' in clientPortalPreview) ? (clientPortalPreview as any).src : clientPortalPreview}
          />
        </div>
      </div>
    </section>
  );
}

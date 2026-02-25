import imgRectangle5 from "@/assets/3ad0cbf86082bb5c0deed567f95b0ba4f3a3b0bb.png";
import { imgRectangle6146 } from "../../imports/svg-76oh5";

const sidebarItems = [
  { label: "Dashboard", active: true },
  { label: "Kampaně", active: false },
  { label: "Klienti", active: false },
  { label: "Objednávky", active: false },
  { label: "Dokumenty", active: false },
  { label: "Kalendář", active: false },
  { label: "Cíle & KPIs", active: false },
  { label: "Reporty", active: false },
  { label: "Fakturace", active: false },
];

export function PortalSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-[32px] items-center text-center mb-20">
          <p className="font-['Sora'] font-semibold text-[11px] text-black tracking-[2.2px] uppercase leading-[17px]">
            interaktivní ukázka
          </p>
          <p className="font-['Sora'] font-extrabold text-[52px] text-black tracking-[-1.56px] uppercase leading-normal w-[948px]">
            Vyzkoušejte si klientský portál
          </p>
        </div>

        {/* Portal Preview */}
        <div className="relative w-[1399px] h-[639px] mx-auto rounded-lg overflow-hidden">
          {/* Background effect */}
          <div className="absolute inset-0">
            <div
              className="bg-[#8d8c8c] absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[1399px_639px]"
              style={{ maskImage: `url('${imgRectangle6146}')` }}
            />
            <div className="absolute inset-0 flex items-center justify-center mix-blend-hard-light">
              <div className="h-[1112px] w-[2105px] rotate-180">
                <div
                  className="relative size-full mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[188px_195px] mask-size-[1399px_639px]"
                  style={{ maskImage: `url('${imgRectangle6146}')` }}
                >
                  <img
                    alt=""
                    className="absolute backdrop-blur-[7.6px] inset-0 max-w-none object-cover opacity-80 pointer-events-none size-full"
                    src={imgRectangle5}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Portal Chrome */}
          <div className="absolute inset-0 flex flex-col">
            {/* Browser bar */}
            <div className="flex items-center justify-between px-6 h-[44px] bg-black/20 backdrop-blur-sm">
              <div className="flex gap-[5px]">
                <div className="w-[10px] h-[10px] rounded-full bg-white/60" />
                <div className="w-[10px] h-[10px] rounded-full bg-white/60" />
                <div className="w-[10px] h-[10px] rounded-full bg-white/60" />
              </div>
              <p
                className="font-['Noto_Sans'] font-normal text-[13px] text-white text-center"
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                dashboard.strat3x.cz
              </p>
              <p
                className="font-['Noto_Sans'] font-normal text-[13px] text-white text-right"
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                Otevřít celý
              </p>
            </div>

            {/* Portal content area */}
            <div className="flex flex-1">
              {/* Sidebar */}
              <div className="w-[200px] bg-white/10 backdrop-blur-md border-r border-white/10 flex flex-col pt-6 px-4 gap-1">
                {/* Logo placeholder */}
                <div className="mb-6 px-2">
                  <div className="h-[20px] w-[100px] bg-white/20 rounded" />
                </div>
                {sidebarItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${item.active ? "bg-white/15" : "hover:bg-white/5"} cursor-pointer`}
                  >
                    <p
                      className="font-['Noto_Sans'] font-semibold text-[15px] text-white/80 leading-[32px]"
                      style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Main content placeholder */}
              <div className="flex-1 p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg h-[100px] p-4">
                    <div className="h-3 w-20 bg-white/20 rounded mb-3" />
                    <div className="h-8 w-16 bg-white/30 rounded" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg h-[100px] p-4">
                    <div className="h-3 w-20 bg-white/20 rounded mb-3" />
                    <div className="h-8 w-16 bg-white/30 rounded" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg h-[100px] p-4">
                    <div className="h-3 w-20 bg-white/20 rounded mb-3" />
                    <div className="h-8 w-16 bg-white/30 rounded" />
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg h-[300px] p-4">
                  <div className="h-3 w-32 bg-white/20 rounded mb-6" />
                  <div className="h-[200px] flex items-end gap-3 px-4">
                    {[40, 55, 35, 70, 85, 60, 90, 75, 95, 80, 65, 88].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/20 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

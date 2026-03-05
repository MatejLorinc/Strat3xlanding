import Link from "next/link";
import svgPaths from "../../imports/svg-59wapeqsll";
import { JobPosition } from "@/data/jobData";

export function RelatedJobCard({ job }: { job: JobPosition }) {
    const detailHref = `/kariera/${job.slug}`;

    return (
        <div className={`bg-white flex flex-col gap-[20px] h-auto items-center justify-center relative shrink-0 w-full p-[40px] border-2 border-[#e9e9e9] hover:border-[#a038b6] transition-colors group`}>
            {/* Urgent badge + content */}
            <div className="flex flex-col items-end w-full pb-[12px]">
                {job.urgent && (
                    <div className="bg-[#bf5456] flex items-center justify-center mb-[-12px] px-[10px] py-[4px]">
                        <p className="font-['Sora'] font-semibold leading-[12px] text-[11px] text-white tracking-[-0.11px]">
                            Urgentní
                        </p>
                    </div>
                )}
                <div className="flex flex-col gap-[14px] items-start mb-[-12px] w-full">
                    {/* Title + Department */}
                    <div className="flex flex-col gap-[4px] items-start text-black w-full">
                        <p className="font-['Sora'] font-bold leading-[30px] text-[20px] tracking-[-0.2px] group-hover:underline decoration-solid w-full">
                            {job.title}
                        </p>
                        <p className="font-['Sora'] font-semibold leading-[17px] text-[11px] tracking-[2.2px] uppercase w-full opacity-60">
                            {job.department}
                        </p>
                    </div>
                    {/* Tags */}
                    <div className="flex gap-[4px] items-center w-full flex-wrap">
                        {job.tags.map((tag) => (
                            <div
                                key={tag}
                                className="bg-[#eff2f8] flex items-center justify-center px-[10px] py-[4px]"
                            >
                                <p
                                    className="font-['Noto_Sans'] leading-[24px] text-[13px] text-black"
                                    style={{
                                        fontVariationSettings: "'CTGR' 0, 'wdth' 100",
                                    }}
                                >
                                    {tag}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* Description */}
                    <p
                        className="font-['Noto_Sans'] leading-[24px] text-[14px] text-black w-full opacity-80"
                        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                    >
                        {job.description}
                    </p>
                </div>
            </div>

            {/* Salary */}
            <p
                className="font-['Noto_Sans'] font-bold leading-[32px] text-[15px] text-black w-full"
                style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
            >
                {job.salary}
            </p>

            {/* Divider */}
            <div className="h-0 w-full relative">
                <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 1">
                        <line opacity="0.1" stroke="black" x2="100%" y1="0.5" y2="0.5" />
                    </svg>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-end justify-end w-full">
                <Link href={detailHref} className="flex gap-[8px] items-center justify-end group/link">
                    <p
                        className="font-['Noto_Sans'] font-bold leading-[24px] text-[14px] text-[#a038b6] text-right underline decoration-solid group-hover/link:opacity-70 transition-opacity"
                        style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
                    >
                        Zobrazit detail
                    </p>
                    <div className="h-[9px] w-[13px]">
                        <svg className="block size-full" fill="none" viewBox="0 0 13 9">
                            <path d={svgPaths.p26469100} fill="#a038b6" />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    );
}

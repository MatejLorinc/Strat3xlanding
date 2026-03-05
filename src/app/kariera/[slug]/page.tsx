import { notFound } from "next/navigation";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { jobPositions } from "@/data/jobData";
import { JobApplicationForm } from "@/app/components/JobApplicationForm";
import { RelatedJobCard } from "@/app/components/RelatedJobCard";
import Link from "next/link";
import svgPaths from "../../../imports/svg-59wapeqsll";

// Correct type signature for Next.js 15 dynamic route parameter
export default async function JobDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const jobParams = jobPositions.find((j) => j.slug === slug);

    if (!jobParams) {
        notFound();
    }

    const relatedJobs = jobPositions
        .filter((j) => j.id !== jobParams.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-white relative overflow-x-hidden pt-[102px]">
            <Header />

            <main className="w-full">
                {/* Breadcrumb section */}
                <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 py-8 md:py-12">
                    <div className="flex items-center gap-2 font-['Sora'] text-[13px] uppercase font-semibold text-black/60 tracking-[1.3px]">
                        <Link href="/#kariera" className="hover:text-black transition-colors">Kariéra</Link>
                        <span>/</span>
                        <span className="text-black">{jobParams.title}</span>
                    </div>

                    <div className="mt-6 md:mt-12 flex flex-col items-center justify-center text-center">
                        <h1 className="font-['Sora'] text-[36px] md:text-[52px] lg:text-[64px] font-extrabold tracking-[-1.92px] uppercase">
                            {jobParams.title}
                        </h1>

                        {/* Tags */}
                        <div className="flex items-center gap-[6px] mt-6 md:mt-10 justify-center flex-wrap">
                            {jobParams.tags.map((tag) => (
                                <div key={tag} className="bg-[#f0f3f7] px-[16px] py-[6px] rounded-[4px] flex items-center justify-center">
                                    <span className="font-['Noto_Sans'] text-[15px] text-black">
                                        {tag}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 py-12 md:py-20 flex flex-col lg:flex-row gap-16 lg:gap-[100px]">

                    {/* Left Column: Content */}
                    <div className="flex-1 flex flex-col gap-[60px]">
                        {/* Intro */}
                        <p className="font-['Noto_Sans'] text-[17px] leading-[32px] text-black">
                            {jobParams.description} A mnohem více. Přidej se k nám a pomáhej klientům škálovat jejich business pomocí
                            odborných znalostí, špičkových technologií a unikátního know-how, které tě u nás naučíme.
                            Jsme tým nadšenců do e-commerce a baví nás posouvat projekty kupředu.
                        </p>

                        {/* Co vám nabídneme */}
                        <div className="flex flex-col gap-[24px]">
                            <h2 className="font-['Sora'] text-[24px] font-bold tracking-[-0.24px]">
                                Co vám nabídneme
                            </h2>
                            <div className="flex flex-col gap-[16px]">
                                {jobParams.offerItems.map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <svg className="mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M5.50003 13.5C5.37216 13.5 5.24416 13.4511 5.14653 13.3535C4.95116 13.1581 4.95116 12.8417 5.14653 12.6465L9.79303 7.99998L5.14653 3.35348C4.95116 3.15811 4.95116 2.84173 5.14653 2.64648C5.34191 2.45123 5.65828 2.45111 5.85353 2.64648L10.8535 7.64648C11.0489 7.84186 11.0489 8.15823 10.8535 8.35348L5.85353 13.3535C5.75591 13.4511 5.62791 13.5 5.50003 13.5Z" fill="black" />
                                        </svg>
                                        <p className="font-['Noto_Sans'] text-[17px] leading-[32px] text-black opacity-80">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Co u nás budete dělat */}
                        <div className="flex flex-col gap-[24px]">
                            <h2 className="font-['Sora'] text-[24px] font-bold tracking-[-0.24px]">
                                Co u nás budete dělat
                            </h2>
                            <div className="flex flex-col gap-[16px]">
                                {jobParams.responsibilities.map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <svg className="mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M5.50003 13.5C5.37216 13.5 5.24416 13.4511 5.14653 13.3535C4.95116 13.1581 4.95116 12.8417 5.14653 12.6465L9.79303 7.99998L5.14653 3.35348C4.95116 3.15811 4.95116 2.84173 5.14653 2.64648C5.34191 2.45123 5.65828 2.45111 5.85353 2.64648L10.8535 7.64648C11.0489 7.84186 11.0489 8.15823 10.8535 8.35348L5.85353 13.3535C5.75591 13.4511 5.62791 13.5 5.50003 13.5Z" fill="black" />
                                        </svg>
                                        <p className="font-['Noto_Sans'] text-[17px] leading-[32px] text-black opacity-80">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Co od vás očekáváme */}
                        <div className="flex flex-col gap-[24px]">
                            <h2 className="font-['Sora'] text-[24px] font-bold tracking-[-0.24px]">
                                Co od vás očekáváme
                            </h2>
                            <div className="flex flex-col gap-[16px]">
                                {jobParams.expectations.map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <svg className="mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M5.50003 13.5C5.37216 13.5 5.24416 13.4511 5.14653 13.3535C4.95116 13.1581 4.95116 12.8417 5.14653 12.6465L9.79303 7.99998L5.14653 3.35348C4.95116 3.15811 4.95116 2.84173 5.14653 2.64648C5.34191 2.45123 5.65828 2.45111 5.85353 2.64648L10.8535 7.64648C11.0489 7.84186 11.0489 8.15823 10.8535 8.35348L5.85353 13.3535C5.75591 13.4511 5.62791 13.5 5.50003 13.5Z" fill="black" />
                                        </svg>
                                        <p className="font-['Noto_Sans'] text-[17px] leading-[32px] text-black opacity-80">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Sidebar Info Card */}
                    <div className="w-full lg:w-[460px] flex-shrink-0">
                        <div className="sticky top-[140px] p-[2px] rounded-[6px] bg-gradient-to-br from-[#a038b6] to-[#bf5456]">
                            <div className="bg-white rounded-[4px] w-full h-full p-8 md:px-[40px] md:py-[50px] flex flex-col items-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">

                                {/* Urgent badge */}
                                <div className="w-full flex justify-start mb-10">
                                    {jobParams.urgent && (
                                        <div className="bg-[#cc5959] flex items-center justify-center px-[16px] py-[6px] rounded-[6px]">
                                            <p className="font-['Noto_Sans'] font-semibold text-[15px] text-white">
                                                Urgentní
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Spec list */}
                                <div className="flex flex-col gap-[22px] w-full mb-12 px-2">
                                    {/* Employment */}
                                    <div className="flex items-center gap-[20px]">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                        </svg>
                                        <span className="font-['Noto_Sans'] text-[20px] text-black">{jobParams.employment}</span>
                                    </div>

                                    {/* Seniority */}
                                    <div className="flex items-center gap-[20px]">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span className="font-['Noto_Sans'] text-[20px] text-black">
                                            {jobParams.seniority === 'Senior' ? 'Seniorská pozice' : jobParams.seniority}
                                        </span>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-[20px]">
                                        <svg className="shrink-0 mt-[4px]" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span className="font-['Noto_Sans'] text-[20px] text-black leading-[32px] max-w-[300px]">
                                            {jobParams.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Salary */}
                                <div className="w-full text-center mb-10">
                                    <span className="font-['Noto_Sans'] text-[28px] font-bold text-black tracking-[-0.5px]">{jobParams.salary}</span>
                                </div>

                                {/* CTA */}
                                <a href="#mam-zajem" className="bg-black h-[80px] rounded-full flex items-center justify-center cursor-pointer hover:bg-black/90 transition-colors w-full mb-8">
                                    <span className="font-['Sora'] font-bold text-[20px] text-white text-center uppercase tracking-[0.5px]">
                                        Mám zájem
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Application Form mapped from jobTitle */}
                <JobApplicationForm jobTitle={jobParams.title} />

                {/* Related Jobs Section */}
                {relatedJobs.length > 0 && (
                    <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 py-20 pb-32">
                        <h3 className="font-['Sora'] text-[24px] md:text-[32px] font-extrabold tracking-[-0.96px] uppercase text-center mb-12">
                            Související nabídky
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedJobs.map((job) => (
                                <RelatedJobCard key={job.id} job={job} />
                            ))}
                        </div>
                    </div>
                )}

            </main>

            <Footer />
        </div>
    );
}

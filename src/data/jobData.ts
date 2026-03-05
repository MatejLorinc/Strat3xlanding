export interface JobPosition {
    id: number;
    slug: string;
    urgent: boolean;
    title: string;
    department: string;
    tags: string[];
    description: string;
    salary: string;
    borderClass: string;
    location: string;
    employment: string;
    seniority: string;
    offerItems: string[];
    responsibilities: string[];
    expectations: string[];
}

export const jobPositions: JobPosition[] = [
    {
        id: 1,
        slug: "senior-ppc-specialist",
        urgent: true,
        title: "Senior PPC Specialist",
        department: "Performance",
        tags: ["Plný úvazek", "Hybrid", "Senior"],
        description:
            "Hledáme zkušeného PPC specialistu pro správu kampaní našich klientů. Budeš mít na starosti Google Ads ...",
        salary: "55 000 - 75 000 CZK/měsíc",
        borderClass: "border-2 border-[#a038b6]",
        location: "Náměstí Republiky 1078/1, 11000 Praha - Nové Město",
        employment: "Plný úvazek / Hybrid",
        seniority: "Senior",
        offerItems: [
            "Práci na zajímavých projektech s rozpočty v řádech milionů korun měsíčně",
            "Flexibilní pracovní dobu a možnost práce z domova",
            "Neomezené vzdělávání — konference, kurzy, certifikace",
            "Moderní technologie a nástroje pro efektivní práci",
            "Prostor pro vlastní nápady a iniciativu",
            "Transparentní firemní kulturu bez zbytečné byrokracie",
        ],
        responsibilities: [
            "Správa a optimalizace PPC kampaní (Google Ads, Sklik, Meta Ads) pro portfolio klientů",
            "Analýza výkonnosti kampaní a příprava reportů s actionable insighty",
            "Spolupráce s kreativním týmem na přípravě reklamních materiálů a landing pages",
            "Identifikace nových příležitostí pro růst a škálování kampaní",
            "Komunikace s klienty, prezentace výsledků a strategických doporučení",
            "Testování nových formátů, strategií a automatizací",
        ],
        expectations: [
            "Minimálně 3 roky zkušeností s PPC kampaněmi",
            "Znalost platforem Google Ads, Meta Ads a analytických nástrojů",
            "Schopnost pracovat s daty a vytvářet actionable insighty",
            "Certifikace Google Ads (Search, Display, Video)",
            "Zkušenosti s rozpočty nad 500 000 CZK měsíčně",
            "Samostatnost, proaktivní přístup a orientace na výsledky",
        ],
    },
    {
        id: 2,
        slug: "senior-data-analyst",
        urgent: true,
        title: "Senior Data Analyst",
        department: "Data & Analytics",
        tags: ["Plný úvazek", "Hybrid", "Senior"],
        description:
            "Hledáme zkušeného datového analytika, který dokáže přeměnit surová data na strategická rozhodnutí ...",
        salary: "80 000 - 110 000 CZK/měsíc",
        borderClass: "border-2 border-[#a038b6] md:border-l-0",
        location: "Plně vzdáleně / STRAT3X, 11000 Praha, Nové Město",
        employment: "Plný úvazek / Hybridní",
        seniority: "Senior",
        offerItems: [
            "Práci na zajímavých projektech a komplexních datových sadách s velkým dopadem na byznys",
            "Flexibilní pracovní dobu a možnost práce z domova",
            "Neomezené vzdělávání — konference, kurzy, certifikace",
            "Moderní datový stack (např. SQL, Keboola, BigQuery, Power BI / Tableau)",
            "Prostor pro vlastní nápady a iniciativu při stavbě datových řešení",
            "Transparentní firemní kulturu bez zbytečné byrokracie",
        ],
        responsibilities: [
            "Analýza rozsáhlých datových setů a hledání skrytých příležitostí pro růst a optimalizaci",
            "Návrh, vývoj a automatizace přehledných dashboardů a reportů s actionable insighty",
            "Spolupráce s marketingovými a vývojářskými týmy na zajištění kvality a propojování dat",
            "Definování klíčových metrik (KPIs), modelování dat a vyhodnocování A/B testů",
            "Komunikace s klienty, prezentace výsledků a strategických doporučení na základě dat",
            "Podílení se na návrhu datové architektury a optimalizaci datových toků (ETL/ELT)",
        ],
        expectations: [
            "Minimálně 3 roky zkušeností na pozici Data Analyst nebo v příbuzném oboru",
            "Pokročilá znalost SQL a silná zkušenost s BI nástroji (Power BI, Tableau, Looker atp.)",
            "Schopnost transformovat komplexní data do srozumitelných závěrů pro netechnické publikum",
            "Zkušenost s Pythonem nebo R pro analýzu dat je velkou výhodou",
            "Znalost marketingové analytiky (Google Analytics 4, marketingové atribuce) potěší",
            "Samostatnost, analytické kritické myšlení a orientace na výsledky",
        ],
    }
];

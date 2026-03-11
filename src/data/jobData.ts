export interface JobPosition {
    id: number;
    slug: string;
    urgent: boolean;
    title: string;
    department: string;
    tags: string[];
    shortDescription: string;
    fullDescription: string;
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
        slug: "meta-ads-specialist",
        urgent: true,
        title: "Meta Ads Specialist - Performance Marketing",
        department: "Performance",
        tags: ["Plný úvazek", "Remote / Hybrid", "Senior"],
        shortDescription:
            "Do týmu hledáme zkušeného specialistu na výkonnostní marketing, pro kterého jsou Meta Ads ...",
        fullDescription:
            "Do týmu hledáme zkušeného specialistu na výkonnostní marketing, pro kterého jsou Meta Ads přirozeným prostředím. Hledáme skutečného profesionála, který se opírá o tvrdá data a pokročilou analytiku, avšak plně si uvědomuje klíčovou roli kreativy pro úspěch kampaní. Očekáváme od tebe komplexní byznysové myšlení a schopnost strategicky rozvíjet projekty našich klientů v oblastech e-commerce a lead generation.",
        salary: "65 000 - 80 000 CZK/měsíc",
        borderClass: "border-2 border-[#a038b6]",
        location: "K dispozici kanceláře na Praze 4",
        employment: "Plný úvazek / Remote / Hybrid",
        seniority: "Senior",
        offerItems: [
            "Práci na strategických e-commerce a lead gen projektech s významnými klientskými rozpočty",
            "Flexibilní pracovní dobu a možnost práce z domova (můžeš pracovat 100% remote, nebo využívat naše pražské kanceláře)",
            "Vysokou míru autonomie, prostor pro vlastní nápady a iniciativu při návrhu strategií a testování nových formátů",
            "Transparentní firemní kulturu bez zbytečné byrokracie v týmu seniorních profesionálů",
        ],
        responsibilities: [
            "Tvořit, řídit a optimalizovat výkonnostní kampaně primárně v Meta Ads, s přesahem do Google Ads a TikTok Ads",
            "Přinášet nápady a kreativy pro sale, ale i lead gen kampaně",
            "Vyhodnocovat výkonnost, řešit atribuci a hledat maxima",
            "Zajišťovat kontinuitu a kvalitu kampaní",
        ],
        expectations: [
            "Máš pokročilé znalosti META a už jsi někomu reálně vydělal/a peníze",
            "Umíš si vytvořit / vygenerovat kreativu a dokážeš si sestříhat ShortForm video",
            "Kontroluješ kampaně, protože tě reálně zajímá jak se jim daří",
            "Máš byznysové myšlení, vidíš celý kontext, dokážeš navrhnout vlastní řešení a nové nápady",
            "Vyznačuješ se vysokou mírou samostatnosti, neseš plnou zodpovědnost za svěřené rozpočty a jsi striktně orientovaný na plnění stanovených KPIs",
            "Jsi silný v analytice a dokážeš interpretovat data v širším byznysovém kontextu",
            "Baví tě hledat nová řešení a cesty k efektivitě a lepším výsledkům",
        ],
    },
    {
        id: 2,
        slug: "senior-data-analyst",
        urgent: true,
        title: "Senior Data Analyst",
        department: "Data & Analytics",
        tags: ["Plný úvazek", "Hybrid", "Senior"],
        shortDescription:
            "Hledáme zkušeného datového analytika, který dokáže přeměnit surová data na strategická rozhodnutí ...",
        fullDescription:
            "Hledáme zkušeného datového analytika, který dokáže přeměnit surová data na strategická rozhodnutí. Budeš analyzovat rozsáhlé datové sady, vytvářet přehledné dashboardy a pomáhat týmu i klientům činit lepší rozhodnutí založená na datech.",
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

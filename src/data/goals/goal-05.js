// File: src/data/goals/goal-05.js

export const goalData = {
    id: "05",
    title: "Gender Equality",
    description: "Achieve gender equality and empower all women and girls. In Indonesia, gender parity in education is nearly achieved, but significant gaps remain in workforce participation, political representation, and the eradication of child marriage.",
    pulseText: "While literacy parity is strong, female representation in parliament (22.1%) is still below the 30% quota, and the female labor force participation rate (54.4%) lags significantly behind men.",

    // Data untuk Bento Grid (Berdasarkan data HTML SDGs Indonesia 2024)
    pulseMetrics: [
        {
            label: "Women in Parliament",
            value: "22.1%",
            trend: "2024 (Target min 30%)",
            trendColor: "#f59e0b", // Kuning (Belum capai target)
            source: "KPU Pemilu 2024",
            sourceUrl: "https://www.kpu.go.id"
        },
        {
            label: "Labor Force Participation",
            value: "54.4%",
            trend: "vs Male 84.4% (High gap)",
            trendColor: "#ef4444", // Merah (Kesenjangan besar)
            source: "BPS Ketenagakerjaan",
            sourceUrl: "https://www.bps.go.id/en/statistics-table?subject=6"
        },
        {
            label: "Literacy Parity Index (F/M)",
            value: "0.96",
            trend: "Approaching parity",
            trendColor: "#22c55e", // Hijau (Capaian sangat baik)
            source: "World Bank",
            sourceUrl: "https://data.worldbank.org/indicator/SE.ADT.LITR.ZS?locations=ID"
        },
        {
            label: "Gender Development Index",
            value: "91.85",
            trend: "2023 (Scale 0-100)",
            trendColor: "#22c55e", // Hijau
            source: "Kemen PPPA",
            sourceUrl: "https://kemenpppa.go.id/page/view/indeks-pembangunan-gender"
        },
        {
            label: "Child Marriage (<18 yrs)",
            value: "6.92%",
            trend: "Still prevalent in some regions",
            trendColor: "#ef4444", // Merah
            source: "BPS SDGs Kesra 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Gender Inequality Index",
            value: "0.447",
            trend: "UNDP HDR 2023",
            trendColor: "#f59e0b", // Kuning
            source: "UNDP HDR 2023",
            sourceUrl: "https://hdr.undp.org/data-center/country-insights#/ranks"
        }
    ],

    // Data untuk Targets & Indicators disesuaikan dengan Official UN/SDSN Framework
    targets: [
        {
            targetId: "5.1",
            description: "End all forms of discrimination against all women and girls everywhere",
            indicators: [
                {
                    id: "5.1.1",
                    description: "Whether or not legal frameworks are in place to promote, enforce and monitor equality and non-discrimination on the basis of sex"
                }
            ]
        },
        {
            targetId: "5.2",
            description: "Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual and other types of exploitation",
            indicators: [
                {
                    id: "5.2.1",
                    description: "Proportion of ever-partnered women and girls aged 15 years and older subjected to physical, sexual or psychological violence by a current or former intimate partner in the previous 12 months, by form of violence and by age"
                },
                {
                    id: "5.2.2",
                    description: "Proportion of women and girls aged 15 years and older subjected to sexual violence by persons other than an intimate partner in the previous 12 months, by age and place of occurrence"
                }
            ]
        },
        {
            targetId: "5.3",
            description: "Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation",
            indicators: [
                {
                    id: "5.3.1",
                    description: "Proportion of women aged 20–24 years who were married or in a union before age 15 and before age 18"
                },
                {
                    id: "5.3.2",
                    description: "Proportion of girls and women aged 15–49 years who have undergone female genital mutilation/cutting, by age"
                }
            ]
        },
        {
            targetId: "5.4",
            description: "Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies and the promotion of shared responsibility within the household and the family as nationally appropriate",
            indicators: [
                {
                    id: "5.4.1",
                    description: "Proportion of time spent on unpaid domestic and care work, by sex, age and location"
                }
            ]
        },
        {
            targetId: "5.5",
            description: "Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life",
            indicators: [
                {
                    id: "5.5.1",
                    description: "Proportion of seats held by women in (a) national parliaments and (b) local governments"
                },
                {
                    id: "5.5.2",
                    description: "Proportion of women in managerial positions"
                }
            ]
        },
        {
            targetId: "5.6",
            description: "Ensure universal access to sexual and reproductive health and reproductive rights as agreed in accordance with the Programme of Action of the International Conference on Population and Development and the Beijing Platform for Action and the outcome documents of their review conferences",
            indicators: [
                {
                    id: "5.6.1",
                    description: "Proportion of women aged 15–49 years who make their own informed decisions regarding sexual relations, contraceptive use and reproductive health care"
                },
                {
                    id: "5.6.2",
                    description: "Number of countries with laws and regulations that guarantee full and equal access to women and men aged 15 years and older to sexual and reproductive health care, information and education"
                }
            ]
        },
        {
            targetId: "5.a",
            description: "Undertake reforms to give women equal rights to economic resources, as well as access to ownership and control over land and other forms of property, financial services, inheritance and natural resources, in accordance with national laws",
            indicators: [
                {
                    id: "5.a.1",
                    description: "(a) Proportion of total agricultural population with ownership or secure rights over agricultural land, by sex; and (b) share of women among owners or rights-bearers of agricultural land, by type of tenure"
                },
                {
                    id: "5.a.2",
                    description: "Proportion of countries where the legal framework (including customary law) guarantees women’s equal rights to land ownership and/or control"
                }
            ]
        },
        {
            targetId: "5.b",
            description: "Enhance the use of enabling technology, in particular information and communications technology, to promote the empowerment of women",
            indicators: [
                {
                    id: "5.b.1",
                    description: "Proportion of individuals who own a mobile telephone, by sex"
                }
            ]
        },
        {
            targetId: "5.c",
            description: "Adopt and strengthen sound policies and enforceable legislation for the promotion of gender equality and the empowerment of all women and girls at all levels",
            indicators: [
                {
                    id: "5.c.1",
                    description: "Proportion of countries with systems to track and make public allocations for gender equality and women’s empowerment"
                }
            ]
        }
    ]
};
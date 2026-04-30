// File: src/data/goals/goal-05.js

export const goalData = {
    id: "05",
    title: "Gender Equality",
    description: "Achieve gender equality and empower all women and girls. While Indonesia has made progress in education and gender development, disparities remain in workforce participation, political representation, and social norms.",
    pulseText: "Indonesia is approaching parity in education, but gaps in economic participation, leadership roles, and child marriage still present major barriers to full gender equality.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Women in Parliament",
            value: "22.1%",
            trend: "below 30% target (2024)",
            trendColor: "#f59e0b",
            source: "KPU Indonesia",
            sourceUrl: "https://www.kpu.go.id"
        },
        {
            label: "Female Labor Force Participation",
            value: "54.4%",
            trend: "vs male 84.4%",
            trendColor: "#ef4444",
            source: "BPS Employment Data",
            sourceUrl: "https://www.bps.go.id/en/statistics-table?subject=6"
        },
        {
            label: "Literacy Gender Ratio (F/M)",
            value: "0.96",
            trend: "near parity",
            trendColor: "#22c55e",
            source: "World Bank",
            sourceUrl: "https://data.worldbank.org/indicator/SE.ADT.LITR.ZS?locations=ID"
        },
        {
            label: "Gender Development Index",
            value: "91.85",
            trend: "2023 (scale 0–100)",
            trendColor: "#22c55e",
            source: "Ministry of Women Empowerment",
            sourceUrl: "https://kemenpppa.go.id/page/view/indeks-pembangunan-gender"
        },
        {
            label: "Child Marriage Rate (<18)",
            value: "6.92%",
            trend: "still high in several regions",
            trendColor: "#ef4444",
            source: "BPS SDGs Welfare Indicators 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Gender Inequality Index",
            value: "0.447",
            trend: "UNDP HDR 2023",
            trendColor: "#f59e0b",
            source: "UNDP Human Development Report",
            sourceUrl: "https://hdr.undp.org/data-center/country-insights#/ranks"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "5.1",
            description: "End all forms of discrimination against all women and girls everywhere.",
            indicators: [
                {
                    id: "5.1.1",
                    description: "Legal frameworks to promote, enforce and monitor equality and non-discrimination."
                }
            ]
        },
        {
            targetId: "5.2",
            description: "Eliminate all forms of violence against women and girls.",
            indicators: [
                {
                    id: "5.2.1",
                    description: "Proportion of women subjected to violence by intimate partners."
                },
                {
                    id: "5.2.2",
                    description: "Proportion of women subjected to sexual violence by non-partners."
                }
            ]
        },
        {
            targetId: "5.3",
            description: "Eliminate harmful practices such as child marriage and female genital mutilation.",
            indicators: [
                {
                    id: "5.3.1",
                    description: "Proportion of women married before age 18."
                }
            ]
        },
        {
            targetId: "5.4",
            description: "Recognize and value unpaid care and domestic work.",
            indicators: [
                {
                    id: "5.4.1",
                    description: "Time spent on unpaid domestic and care work."
                }
            ]
        },
        {
            targetId: "5.5",
            description: "Ensure women's full participation and equal opportunities for leadership.",
            indicators: [
                {
                    id: "5.5.1",
                    description: "Proportion of seats held by women in national parliaments."
                },
                {
                    id: "5.5.2",
                    description: "Proportion of women in managerial positions."
                }
            ]
        },
        {
            targetId: "5.c",
            description: "Adopt and strengthen policies for gender equality and empowerment.",
            indicators: [
                {
                    id: "5.c.1",
                    description: "Systems to track gender equality allocations in public spending."
                }
            ]
        }
    ]
};
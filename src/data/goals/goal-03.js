// File: src/data/goals/goal-03.js

export const goalData = {
    id: "03",
    title: "Good Health and Well-being",
    description: "Ensure healthy lives and promote well-being for all at all ages. Access to healthcare has improved significantly in Indonesia, but challenges remain in maternal mortality, tuberculosis, and health disparities.",
    pulseText: "Indonesia has expanded universal health coverage through JKN, yet preventable deaths, infectious diseases, and uneven healthcare access remain key national concerns.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Maternal Mortality Ratio",
            value: "189",
            trend: "per 100,000 live births",
            trendColor: "#f97316",
            source: "WHO Global Health Observatory",
            sourceUrl: "https://www.who.int/data/gho/data/countries/country-details/GHO/indonesia"
        },
        {
            label: "Under-5 Mortality Rate",
            value: "21",
            trend: "per 1,000 live births (2023)",
            trendColor: "#64748b",
            source: "Asian Development Bank",
            sourceUrl: "https://www.adb.org/id/where-we-work/indonesia/poverty"
        },
        {
            label: "Tuberculosis Incidence",
            value: "354",
            trend: "per 100,000 population (2022)",
            trendColor: "#ef4444",
            source: "WHO Global TB Report",
            sourceUrl: "https://www.who.int/teams/global-tuberculosis-programme/tb-reports"
        },
        {
            label: "JKN / BPJS Coverage",
            value: "265 Million",
            trend: "~98% of population enrolled (2024)",
            trendColor: "#22c55e",
            source: "BPJS Kesehatan",
            sourceUrl: "https://www.bpjs-kesehatan.go.id/bpjs/"
        },
        {
            label: "Life Expectancy",
            value: "73.5 Years",
            trend: "2023",
            trendColor: "#22c55e",
            source: "World Bank",
            sourceUrl: "https://data.worldbank.org/indicator/SP.DYN.LE00.IN?locations=ID"
        },
        {
            label: "Skilled Birth Attendance",
            value: "91%",
            trend: "births assisted by health personnel",
            trendColor: "#64748b",
            source: "BPS SDGs Welfare Indicators 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "3.1",
            description: "By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births.",
            indicators: [
                {
                    id: "3.1.1",
                    description: "Maternal mortality ratio."
                },
                {
                    id: "3.1.2",
                    description: "Proportion of births attended by skilled health personnel."
                }
            ]
        },
        {
            targetId: "3.2",
            description: "By 2030, end preventable deaths of newborns and children under 5 years of age.",
            indicators: [
                {
                    id: "3.2.1",
                    description: "Under-five mortality rate."
                },
                {
                    id: "3.2.2",
                    description: "Neonatal mortality rate."
                }
            ]
        },
        {
            targetId: "3.3",
            description: "By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis and water-borne diseases.",
            indicators: [
                {
                    id: "3.3.1",
                    description: "Number of new HIV infections per 1,000 uninfected population."
                },
                {
                    id: "3.3.2",
                    description: "Tuberculosis incidence per 100,000 population."
                },
                {
                    id: "3.3.3",
                    description: "Malaria incidence per 1,000 population."
                }
            ]
        },
        {
            targetId: "3.4",
            description: "By 2030, reduce premature mortality from non-communicable diseases and promote mental health and well-being.",
            indicators: [
                {
                    id: "3.4.1",
                    description: "Mortality rate attributed to cardiovascular disease, cancer, diabetes or chronic respiratory disease."
                },
                {
                    id: "3.4.2",
                    description: "Suicide mortality rate."
                }
            ]
        },
        {
            targetId: "3.8",
            description: "Achieve universal health coverage, including financial risk protection and access to quality essential healthcare services.",
            indicators: [
                {
                    id: "3.8.1",
                    description: "Coverage of essential health services."
                },
                {
                    id: "3.8.2",
                    description: "Proportion of population with large household expenditures on health."
                }
            ]
        },
        {
            targetId: "3.c",
            description: "Substantially increase health financing and the recruitment, development, training and retention of the health workforce.",
            indicators: [
                {
                    id: "3.c.1",
                    description: "Health worker density and distribution."
                }
            ]
        }
    ]
};
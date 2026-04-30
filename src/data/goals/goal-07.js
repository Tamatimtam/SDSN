// File: src/data/goals/goal-07.js

export const goalData = {
    id: "07",
    title: "Affordable and Clean Energy",
    description: "Ensure access to affordable, reliable, sustainable and modern energy for all. Indonesia has nearly achieved universal electrification, but clean energy adoption remains far below targets.",
    pulseText: "Electricity access is nearly universal in Indonesia, but the transition to renewable energy is slow, with heavy reliance on fossil fuels, especially coal.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Electrification Rate",
            value: "99.7%",
            trend: "near universal access (2024)",
            trendColor: "#22c55e",
            source: "Ministry of Energy (ESDM)",
            sourceUrl: "https://www.esdm.go.id/id/media-center/arsip-berita/capaian-kinerja-sektor-energi-2024"
        },
        {
            label: "Clean Cooking Fuel Access",
            value: "78%",
            trend: "LPG usage (2023)",
            trendColor: "#64748b",
            source: "ESMAP Tracking SDG7",
            sourceUrl: "https://trackingsdg7.esmap.org/country/indonesia"
        },
        {
            label: "Renewable Energy Share",
            value: "13.1%",
            trend: "below 23% target (2025)",
            trendColor: "#ef4444",
            source: "Ministry of Energy (ESDM)",
            sourceUrl: "https://www.esdm.go.id/id/media-center/arsip-berita/capaian-kinerja-sektor-energi-2024"
        },
        {
            label: "Renewable Target 2030",
            value: "34%",
            trend: "RUPTL PLN 2021–2030",
            trendColor: "#f59e0b",
            source: "PLN RUPTL",
            sourceUrl: "https://web.pln.co.id/statics/uploads/2021/10/ruptl-pln-2021-2030.pdf"
        },
        {
            label: "CO₂ Emissions per kWh",
            value: "846 g",
            trend: "coal-dominated power mix",
            trendColor: "#ef4444",
            source: "ESMAP Tracking SDG7",
            sourceUrl: "https://trackingsdg7.esmap.org/country/indonesia"
        },
        {
            label: "Global Energy Data",
            value: "IRENA",
            trend: "international reference",
            trendColor: "#64748b",
            source: "IRENA",
            sourceUrl: "https://www.irena.org/countries/Indonesia"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "7.1",
            description: "By 2030, ensure universal access to affordable, reliable and modern energy services.",
            indicators: [
                {
                    id: "7.1.1",
                    description: "Proportion of population with access to electricity."
                },
                {
                    id: "7.1.2",
                    description: "Proportion of population with primary reliance on clean fuels and technology."
                }
            ]
        },
        {
            targetId: "7.2",
            description: "By 2030, increase substantially the share of renewable energy in the global energy mix.",
            indicators: [
                {
                    id: "7.2.1",
                    description: "Renewable energy share in total final energy consumption."
                }
            ]
        },
        {
            targetId: "7.3",
            description: "By 2030, double the global rate of improvement in energy efficiency.",
            indicators: [
                {
                    id: "7.3.1",
                    description: "Energy intensity measured in terms of primary energy and GDP."
                }
            ]
        },
        {
            targetId: "7.a",
            description: "Enhance international cooperation to facilitate access to clean energy research and technology.",
            indicators: [
                {
                    id: "7.a.1",
                    description: "International financial flows to developing countries in support of clean energy."
                }
            ]
        },
        {
            targetId: "7.b",
            description: "Expand infrastructure and upgrade technology for supplying modern and sustainable energy services.",
            indicators: [
                {
                    id: "7.b.1",
                    description: "Installed renewable energy-generating capacity in developing countries."
                }
            ]
        }
    ]
};
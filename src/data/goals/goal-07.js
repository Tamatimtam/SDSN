// File: src/data/goals/goal-07.js

export const goalData = {
    id: "07",
    title: "Affordable and Clean Energy",
    description: "Ensure access to affordable, reliable, sustainable and modern energy for all. Indonesia has achieved near-universal electrification, but its energy mix remains heavily reliant on coal, making the transition to renewable energy a critical challenge.",
    pulseText: "Electrification is a massive success story (99.7%), but the share of renewable energy (13.1%) is far behind the 23% target for 2025, keeping carbon emissions per kWh very high.",

    // Data untuk Bento Grid (Berdasarkan data HTML SDGs Indonesia 2024)
    pulseMetrics: [
        {
            label: "Electrification Ratio",
            value: "99.7%",
            trend: "Almost universal (2024)",
            trendColor: "#22c55e", // Hijau (Capaian sangat luar biasa)
            source: "Kemen ESDM 2024",
            sourceUrl: "https://www.esdm.go.id/id/media-center/arsip-berita/capaian-kinerja-sektor-energi-2024"
        },
        {
            label: "Clean Cooking Access",
            value: "~78%",
            trend: "Mostly LPG 3kg (2023)",
            trendColor: "#f59e0b", // Kuning (Cukup baik tapi perlu peningkatan)
            source: "ESMAP Tracking SDG 7",
            sourceUrl: "https://trackingsdg7.esmap.org/country/indonesia"
        },
        {
            label: "Renewable Energy Share",
            value: "13.1%",
            trend: "Far below 23% target by 2025",
            trendColor: "#ef4444", // Merah (Kritis/Jauh dari target)
            source: "Kemen ESDM 2024",
            sourceUrl: "https://www.esdm.go.id/id/media-center/arsip-berita/capaian-kinerja-sektor-energi-2024"
        },
        {
            label: "Renewable Target 2030",
            value: "34%",
            trend: "RUPTL PLN 2021–2030",
            trendColor: "#64748b", // Abu-abu (Target masa depan)
            source: "PLN RUPTL 2021–2030",
            sourceUrl: "https://web.pln.co.id/statics/uploads/2021/10/ruptl-pln-2021-2030.pdf"
        },
        {
            label: "CO₂ Emissions per kWh",
            value: "~846 g",
            trend: "Coal-dominated grid",
            trendColor: "#ef4444", // Merah (Tinggi polusi)
            source: "ESMAP Tracking SDG 7",
            sourceUrl: "https://trackingsdg7.esmap.org/country/indonesia"
        },
        {
            label: "Global Energy Data",
            value: "IRENA",
            trend: "International reference",
            trendColor: "#64748b",
            source: "IRENA Indonesia",
            sourceUrl: "https://www.irena.org/countries/Indonesia"
        }
    ],

    // Data untuk Targets & Indicators disesuaikan dengan Official UN Framework
    targets: [
        {
            targetId: "7.1",
            description: "By 2030, ensure universal access to affordable, reliable and modern energy services",
            indicators: [
                {
                    id: "7.1.1",
                    description: "Proportion of population with access to electricity"
                },
                {
                    id: "7.1.2",
                    description: "Proportion of population with primary reliance on clean fuels and technology"
                }
            ]
        },
        {
            targetId: "7.2",
            description: "By 2030, increase substantially the share of renewable energy in the global energy mix",
            indicators: [
                {
                    id: "7.2.1",
                    description: "Renewable energy share in the total final energy consumption"
                }
            ]
        },
        {
            targetId: "7.3",
            description: "By 2030, double the global rate of improvement in energy efficiency",
            indicators: [
                {
                    id: "7.3.1",
                    description: "Energy intensity measured in terms of primary energy and GDP"
                }
            ]
        },
        {
            targetId: "7.a",
            description: "By 2030, enhance international cooperation to facilitate access to clean energy research and technology, including renewable energy, energy efficiency and advanced and cleaner fossil-fuel technology, and promote investment in energy infrastructure and clean energy technology",
            indicators: [
                {
                    id: "7.a.1",
                    description: "International financial flows to developing countries in support of clean energy research and development and renewable energy production, including in hybrid systems"
                }
            ]
        },
        {
            targetId: "7.b",
            description: "By 2030, expand infrastructure and upgrade technology for supplying modern and sustainable energy services for all in developing countries, in particular least developed countries, small island developing States, and land-locked developing countries, in accordance with their respective programmes of support",
            indicators: [
                {
                    id: "7.b.1",
                    description: "Installed renewable energy-generating capacity in developing countries (in watts per capita)"
                }
            ]
        }
    ]
};
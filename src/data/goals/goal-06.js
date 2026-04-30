// File: src/data/goals/goal-06.js

export const goalData = {
    id: "06",
    title: "Clean Water and Sanitation",
    description: "Ensure availability and sustainable management of water and sanitation for all. Indonesia has improved access significantly, but rural gaps and wastewater treatment remain major issues.",
    pulseText: "Access to clean water and sanitation is improving, but inequality between urban and rural areas and very low wastewater treatment rates remain critical challenges.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Access to Safe Drinking Water",
            value: "91.2%",
            trend: "2023",
            trendColor: "#22c55e",
            source: "BPS SDGs Welfare Indicators 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Access to Improved Sanitation",
            value: "82.4%",
            trend: "2023",
            trendColor: "#22c55e",
            source: "BPS SDGs Welfare Indicators 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Open Defecation Free (ODF)",
            value: "79%",
            trend: "villages declared ODF",
            trendColor: "#64748b",
            source: "STBM Kemenkes",
            sourceUrl: "https://monev.stbm.kemkes.go.id"
        },
        {
            label: "Rural Water Access",
            value: "83%",
            trend: "vs urban ~99%",
            trendColor: "#f59e0b",
            source: "WHO/UNICEF JMP",
            sourceUrl: "https://washdata.org/data/household#!/idn"
        },
        {
            label: "Wastewater Treatment",
            value: "<10%",
            trend: "very low national coverage",
            trendColor: "#ef4444",
            source: "SDG Index 2025",
            sourceUrl: "https://dashboards.sdgindex.org/profiles/indonesia/indicators/"
        },
        {
            label: "Water & Sanitation Data",
            value: "WHO/UNICEF",
            trend: "official monitoring platform",
            trendColor: "#64748b",
            source: "WHO/UNICEF JMP",
            sourceUrl: "https://washdata.org/data/household#!/idn"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "6.1",
            description: "By 2030, achieve universal and equitable access to safe and affordable drinking water.",
            indicators: [
                {
                    id: "6.1.1",
                    description: "Proportion of population using safely managed drinking water services."
                }
            ]
        },
        {
            targetId: "6.2",
            description: "By 2030, achieve access to adequate and equitable sanitation and hygiene.",
            indicators: [
                {
                    id: "6.2.1",
                    description: "Proportion of population using safely managed sanitation services."
                }
            ]
        },
        {
            targetId: "6.3",
            description: "Improve water quality by reducing pollution and increasing wastewater treatment.",
            indicators: [
                {
                    id: "6.3.1",
                    description: "Proportion of wastewater safely treated."
                },
                {
                    id: "6.3.2",
                    description: "Proportion of bodies of water with good ambient water quality."
                }
            ]
        },
        {
            targetId: "6.4",
            description: "Increase water-use efficiency and ensure sustainable withdrawals.",
            indicators: [
                {
                    id: "6.4.1",
                    description: "Change in water-use efficiency over time."
                },
                {
                    id: "6.4.2",
                    description: "Level of water stress."
                }
            ]
        },
        {
            targetId: "6.5",
            description: "Implement integrated water resources management.",
            indicators: [
                {
                    id: "6.5.1",
                    description: "Degree of integrated water resources management implementation."
                }
            ]
        },
        {
            targetId: "6.b",
            description: "Support local participation in water and sanitation management.",
            indicators: [
                {
                    id: "6.b.1",
                    description: "Proportion of local administrative units with participation policies."
                }
            ]
        }
    ]
};
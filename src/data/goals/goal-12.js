// File: src/data/goals/goal-12.js

export const goalData = {
    id: "12",
    title: "Responsible Consumption and Production",
    description: "Ensure sustainable consumption and production patterns. Indonesia faces major challenges in waste management, plastic pollution, and resource efficiency.",
    pulseText: "Waste generation is rising fast in Indonesia, with plastic pollution becoming a global concern, while recycling and circular economy adoption remain limited.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Total Waste Generation",
            value: "68 million tons",
            trend: "per year (2023)",
            trendColor: "#ef4444",
            source: "KLHK Indonesia",
            sourceUrl: "https://sipsn.menlhk.go.id"
        },
        {
            label: "Plastic Waste Share",
            value: "17%",
            trend: "of total waste",
            trendColor: "#ef4444",
            source: "World Bank",
            sourceUrl: "https://www.worldbank.org/en/country/indonesia/publication/plastic-waste-indonesia"
        },
        {
            label: "Recycling Rate",
            value: "12%",
            trend: "national average",
            trendColor: "#f59e0b",
            source: "KLHK Indonesia",
            sourceUrl: "https://sipsn.menlhk.go.id"
        },
        {
            label: "Food Waste",
            value: "23–48 million tons",
            trend: "per year",
            trendColor: "#ef4444",
            source: "Bappenas",
            sourceUrl: "https://lcdi-indonesia.id"
        },
        {
            label: "Waste Managed Properly",
            value: "~60%",
            trend: "remaining unmanaged",
            trendColor: "#f59e0b",
            source: "KLHK Indonesia",
            sourceUrl: "https://sipsn.menlhk.go.id"
        },
        {
            label: "Marine Plastic Leakage",
            value: "2nd largest globally",
            trend: "estimated ranking",
            trendColor: "#ef4444",
            source: "Jambeck et al.",
            sourceUrl: "https://www.science.org/doi/10.1126/science.1260352"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "12.2",
            description: "By 2030, achieve sustainable management and efficient use of natural resources.",
            indicators: [
                {
                    id: "12.2.1",
                    description: "Material footprint per capita."
                }
            ]
        },
        {
            targetId: "12.3",
            description: "By 2030, halve global food waste at the retail and consumer levels.",
            indicators: [
                {
                    id: "12.3.1",
                    description: "Food loss index and food waste index."
                }
            ]
        },
        {
            targetId: "12.4",
            description: "Achieve environmentally sound management of chemicals and wastes.",
            indicators: [
                {
                    id: "12.4.2",
                    description: "Hazardous waste generated and treated."
                }
            ]
        },
        {
            targetId: "12.5",
            description: "Substantially reduce waste generation through prevention, reduction, recycling and reuse.",
            indicators: [
                {
                    id: "12.5.1",
                    description: "National recycling rate."
                }
            ]
        },
        {
            targetId: "12.6",
            description: "Encourage companies to adopt sustainable practices.",
            indicators: [
                {
                    id: "12.6.1",
                    description: "Number of companies publishing sustainability reports."
                }
            ]
        },
        {
            targetId: "12.8",
            description: "Ensure people have relevant information for sustainable lifestyles.",
            indicators: [
                {
                    id: "12.8.1",
                    description: "Extent of education for sustainable development."
                }
            ]
        }
    ]
};
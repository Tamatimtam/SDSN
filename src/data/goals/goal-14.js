// File: src/data/goals/goal-14.js

export const goalData = {
    id: "14",
    title: "Life Below Water",
    description: "Conserve and sustainably use the oceans, seas and marine resources. Indonesia, as the world’s largest archipelagic country, faces major challenges in marine pollution, overfishing, and coral reef degradation.",
    pulseText: "Indonesia has vast marine resources, but plastic pollution, overfishing, and coral reef damage threaten long-term ocean sustainability.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Marine Protected Areas",
            value: "28.9 million ha",
            trend: "towards 30M ha target",
            trendColor: "#22c55e",
            source: "KKP Indonesia",
            sourceUrl: "https://kkp.go.id"
        },
        {
            label: "Coral Reef Condition",
            value: "6.4%",
            trend: "in excellent condition",
            trendColor: "#ef4444",
            source: "LIPI / BRIN",
            sourceUrl: "https://oseanografi.lipi.go.id"
        },
        {
            label: "Plastic Waste to Ocean",
            value: "0.62 million tons",
            trend: "per year",
            trendColor: "#ef4444",
            source: "World Bank",
            sourceUrl: "https://www.worldbank.org/en/country/indonesia/publication/plastic-waste-indonesia"
        },
        {
            label: "Overfished Stocks",
            value: "38%",
            trend: "of total fish stocks",
            trendColor: "#ef4444",
            source: "FAO Fisheries",
            sourceUrl: "https://www.fao.org/fishery/en"
        },
        {
            label: "Mangrove Area",
            value: "3.36 million ha",
            trend: "largest globally",
            trendColor: "#22c55e",
            source: "KLHK Indonesia",
            sourceUrl: "https://www.menlhk.go.id"
        },
        {
            label: "Blue Economy Program",
            value: "Active",
            trend: "sustainable fisheries & conservation",
            trendColor: "#64748b",
            source: "KKP Indonesia",
            sourceUrl: "https://kkp.go.id"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "14.1",
            description: "Prevent and significantly reduce marine pollution of all kinds.",
            indicators: [
                {
                    id: "14.1.1",
                    description: "Index of coastal eutrophication and floating plastic debris density."
                }
            ]
        },
        {
            targetId: "14.2",
            description: "Sustainably manage and protect marine and coastal ecosystems.",
            indicators: [
                {
                    id: "14.2.1",
                    description: "Proportion of national exclusive economic zones managed using ecosystem-based approaches."
                }
            ]
        },
        {
            targetId: "14.4",
            description: "Effectively regulate harvesting and end overfishing.",
            indicators: [
                {
                    id: "14.4.1",
                    description: "Proportion of fish stocks within biologically sustainable levels."
                }
            ]
        },
        {
            targetId: "14.5",
            description: "Conserve at least 10% of coastal and marine areas.",
            indicators: [
                {
                    id: "14.5.1",
                    description: "Coverage of protected areas in relation to marine areas."
                }
            ]
        },
        {
            targetId: "14.7",
            description: "Increase economic benefits from sustainable use of marine resources.",
            indicators: [
                {
                    id: "14.7.1",
                    description: "Sustainable fisheries as a proportion of GDP."
                }
            ]
        }
    ]
};
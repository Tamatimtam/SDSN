// File: src/data/goals/goal-15.js

export const goalData = {
    id: "15",
    title: "Life on Land",
    description: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt biodiversity loss. Indonesia is one of the most biodiverse countries but faces deforestation and habitat loss.",
    pulseText: "Indonesia holds some of the world’s richest biodiversity, but deforestation, land conversion, and wildlife trafficking continue to threaten ecosystems.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Forest Area",
            value: "95 million ha",
            trend: "~50% of land area",
            trendColor: "#22c55e",
            source: "KLHK Indonesia",
            sourceUrl: "https://www.menlhk.go.id"
        },
        {
            label: "Deforestation Rate",
            value: "104K ha",
            trend: "2023 (declining trend)",
            trendColor: "#f59e0b",
            source: "KLHK Indonesia",
            sourceUrl: "https://www.menlhk.go.id"
        },
        {
            label: "Protected Land Area",
            value: "23%",
            trend: "of total land",
            trendColor: "#22c55e",
            source: "World Bank",
            sourceUrl: "https://data.worldbank.org/indicator/ER.LND.PTLD.ZS?locations=ID"
        },
        {
            label: "Threatened Species",
            value: "1,300+",
            trend: "IUCN Red List",
            trendColor: "#ef4444",
            source: "IUCN",
            sourceUrl: "https://www.iucnredlist.org"
        },
        {
            label: "Land Degradation",
            value: "14 million ha",
            trend: "critical land",
            trendColor: "#ef4444",
            source: "Bappenas",
            sourceUrl: "https://www.bappenas.go.id"
        },
        {
            label: "Reforestation Program",
            value: "Active",
            trend: "national restoration efforts",
            trendColor: "#64748b",
            source: "KLHK Indonesia",
            sourceUrl: "https://www.menlhk.go.id"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "15.1",
            description: "Ensure the conservation and sustainable use of terrestrial ecosystems.",
            indicators: [
                {
                    id: "15.1.1",
                    description: "Forest area as a proportion of total land area."
                }
            ]
        },
        {
            targetId: "15.2",
            description: "Promote sustainable management of all types of forests.",
            indicators: [
                {
                    id: "15.2.1",
                    description: "Progress towards sustainable forest management."
                }
            ]
        },
        {
            targetId: "15.3",
            description: "Combat desertification and restore degraded land.",
            indicators: [
                {
                    id: "15.3.1",
                    description: "Proportion of land that is degraded."
                }
            ]
        },
        {
            targetId: "15.5",
            description: "Take urgent action to reduce biodiversity loss.",
            indicators: [
                {
                    id: "15.5.1",
                    description: "Red List Index."
                }
            ]
        },
        {
            targetId: "15.c",
            description: "Enhance support to combat poaching and trafficking of protected species.",
            indicators: [
                {
                    id: "15.c.1",
                    description: "Proportion of wildlife traded illegally."
                }
            ]
        }
    ]
};
// File: src/data/goals/goal-02.js

export const goalData = {
    id: "02",
    title: "Zero Hunger",
    description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture. Indonesia has reduced undernourishment, but faces challenges in child stunting and food system resilience.",
    pulseText: "Indonesia has improved food availability, but malnutrition, especially stunting in children, and agricultural productivity remain major concerns.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Stunting Rate (Under-5)",
            value: "21.5%",
            trend: "▼ down from 24.4% (2021)",
            trendColor: "#f59e0b",
            source: "SSGI 2023 (Ministry of Health)",
            sourceUrl: "https://ssgi.kemkes.go.id"
        },
        {
            label: "Undernourishment",
            value: "7.6%",
            trend: "population (2022)",
            trendColor: "#64748b",
            source: "FAO",
            sourceUrl: "https://www.fao.org/faostat"
        },
        {
            label: "Food Security Index",
            value: "60.2",
            trend: "Global Food Security Index",
            trendColor: "#64748b",
            source: "Economist Impact",
            sourceUrl: "https://impact.economist.com/sustainability/project/food-security-index"
        },
        {
            label: "Rice Production",
            value: "31.5 million tons",
            trend: "2024",
            trendColor: "#22c55e",
            source: "BPS Indonesia",
            sourceUrl: "https://www.bps.go.id"
        },
        {
            label: "Agriculture Employment",
            value: "29%",
            trend: "of workforce",
            trendColor: "#64748b",
            source: "BPS Indonesia",
            sourceUrl: "https://www.bps.go.id"
        },
        {
            label: "Food Loss & Waste",
            value: "23–48 million tons",
            trend: "per year",
            trendColor: "#ef4444",
            source: "Bappenas",
            sourceUrl: "https://lcdi-indonesia.id"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "2.1",
            description: "By 2030, end hunger and ensure access to safe, nutritious and sufficient food all year round.",
            indicators: [
                {
                    id: "2.1.1",
                    description: "Prevalence of undernourishment."
                }
            ]
        },
        {
            targetId: "2.2",
            description: "By 2030, end all forms of malnutrition.",
            indicators: [
                {
                    id: "2.2.1",
                    description: "Prevalence of stunting among children under 5."
                },
                {
                    id: "2.2.2",
                    description: "Prevalence of malnutrition (wasting and overweight)."
                }
            ]
        },
        {
            targetId: "2.3",
            description: "By 2030, double agricultural productivity and incomes of small-scale food producers.",
            indicators: [
                {
                    id: "2.3.1",
                    description: "Volume of production per labour unit."
                }
            ]
        },
        {
            targetId: "2.4",
            description: "Ensure sustainable food production systems and resilient agricultural practices.",
            indicators: [
                {
                    id: "2.4.1",
                    description: "Proportion of agricultural area under productive and sustainable agriculture."
                }
            ]
        },
        {
            targetId: "2.c",
            description: "Adopt measures to ensure proper functioning of food commodity markets.",
            indicators: [
                {
                    id: "2.c.1",
                    description: "Indicator of food price anomalies."
                }
            ]
        }
    ]
};
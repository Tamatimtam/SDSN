// File: src/data/goals/goal-11.js

export const goalData = {
    id: "11",
    title: "Sustainable Cities and Communities",
    description: "Make cities and human settlements inclusive, safe, resilient and sustainable. Indonesia is rapidly urbanizing, creating pressure on housing, transport, and environmental sustainability.",
    pulseText: "Indonesia’s urban population keeps growing fast, but challenges like slums, air pollution, and disaster risk make sustainable city development a major priority.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Urban Population",
            value: "57%",
            trend: "projected to reach ~66% by 2035",
            trendColor: "#22c55e",
            source: "World Bank",
            sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=ID"
        },
        {
            label: "People Living in Slums",
            value: "18%",
            trend: "urban population (2023)",
            trendColor: "#ef4444",
            source: "UN-Habitat",
            sourceUrl: "https://unhabitat.org"
        },
        {
            label: "Air Pollution (PM2.5)",
            value: "30 µg/m³",
            trend: "above WHO safe level",
            trendColor: "#ef4444",
            source: "IQAir 2024",
            sourceUrl: "https://www.iqair.com/world-most-polluted-countries"
        },
        {
            label: "Access to Public Transport",
            value: "<25%",
            trend: "limited in major cities",
            trendColor: "#f59e0b",
            source: "ITDP Indonesia",
            sourceUrl: "https://itdp-indonesia.org"
        },
        {
            label: "Disaster Risk Exposure",
            value: "High",
            trend: "earthquake, flood, volcano",
            trendColor: "#ef4444",
            source: "BNPB Indonesia",
            sourceUrl: "https://www.bnpb.go.id"
        },
        {
            label: "Green Space in Cities",
            value: "<20%",
            trend: "below ideal 30%",
            trendColor: "#f59e0b",
            source: "Ministry of Public Works",
            sourceUrl: "https://www.pu.go.id"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "11.1",
            description: "By 2030, ensure access for all to adequate, safe and affordable housing.",
            indicators: [
                {
                    id: "11.1.1",
                    description: "Proportion of urban population living in slums or inadequate housing."
                }
            ]
        },
        {
            targetId: "11.2",
            description: "Provide access to safe, affordable, accessible and sustainable transport systems.",
            indicators: [
                {
                    id: "11.2.1",
                    description: "Proportion of population with convenient access to public transport."
                }
            ]
        },
        {
            targetId: "11.3",
            description: "Enhance inclusive and sustainable urbanization.",
            indicators: [
                {
                    id: "11.3.1",
                    description: "Ratio of land consumption rate to population growth rate."
                }
            ]
        },
        {
            targetId: "11.5",
            description: "Reduce the number of deaths and economic losses caused by disasters.",
            indicators: [
                {
                    id: "11.5.1",
                    description: "Number of deaths and affected persons due to disasters."
                }
            ]
        },
        {
            targetId: "11.6",
            description: "Reduce environmental impact of cities, including air quality and waste management.",
            indicators: [
                {
                    id: "11.6.2",
                    description: "Annual mean levels of fine particulate matter (PM2.5)."
                }
            ]
        },
        {
            targetId: "11.7",
            description: "Provide universal access to safe, inclusive and accessible green and public spaces.",
            indicators: [
                {
                    id: "11.7.1",
                    description: "Average share of built-up area that is open space for public use."
                }
            ]
        }
    ]
};
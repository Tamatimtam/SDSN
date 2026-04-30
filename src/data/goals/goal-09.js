// File: src/data/goals/goal-09.js

export const goalData = {
    id: "09",
    title: "Industry, Innovation and Infrastructure",
    description: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation. Indonesia’s digital economy is rapidly growing, but infrastructure gaps remain, especially in rural areas.",
    pulseText: "Indonesia’s digital sector is booming with massive internet adoption, but connectivity gaps and uneven infrastructure still limit inclusive growth.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Internet Users",
            value: "221 million",
            trend: "79.5% of population (2024)",
            trendColor: "#22c55e",
            source: "APJII Survey 2024",
            sourceUrl: "https://apjii.or.id/survei"
        },
        {
            label: "Mobile Broadband Penetration",
            value: "121",
            trend: "per 100 people",
            trendColor: "#22c55e",
            source: "GSMA Intelligence",
            sourceUrl: "https://www.opensignal.com/2025/06/indonesia-path-to-network-excellence/dt"
        },
        {
            label: "Fixed Broadband Access",
            value: "21%",
            trend: "household access (2024)",
            trendColor: "#f59e0b",
            source: "GSMA Intelligence",
            sourceUrl: "https://www.opensignal.com/2025/06/indonesia-path-to-network-excellence/dt"
        },
        {
            label: "Digital Economy Value",
            value: ">$130 Billion",
            trend: "projected 2025",
            trendColor: "#22c55e",
            source: "Google / Temasek",
            sourceUrl: "https://www.trade.gov/country-commercial-guides/indonesia-digital-economy"
        },
        {
            label: "ICT Contribution to GDP",
            value: "4.34%",
            trend: "growing 7.57% (2024)",
            trendColor: "#22c55e",
            source: "BPS Telecommunications 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2025/08/29/beaa2be400eda6ce6c636ef8/telecommunication-statistics-in-indonesia-2024.html"
        },
        {
            label: "Villages Without 4G",
            value: "30%",
            trend: "unserved rural areas",
            trendColor: "#ef4444",
            source: "Freedom House 2024",
            sourceUrl: "https://freedomhouse.org/country/indonesia/freedom-net/2024"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "9.1",
            description: "Develop quality, reliable, sustainable and resilient infrastructure.",
            indicators: [
                {
                    id: "9.1.1",
                    description: "Proportion of rural population who live within 2 km of an all-season road."
                }
            ]
        },
        {
            targetId: "9.2",
            description: "Promote inclusive and sustainable industrialization.",
            indicators: [
                {
                    id: "9.2.1",
                    description: "Manufacturing value added as a proportion of GDP."
                }
            ]
        },
        {
            targetId: "9.5",
            description: "Enhance scientific research and upgrade technological capabilities.",
            indicators: [
                {
                    id: "9.5.1",
                    description: "Research and development expenditure as a proportion of GDP."
                }
            ]
        },
        {
            targetId: "9.c",
            description: "Increase access to information and communications technology.",
            indicators: [
                {
                    id: "9.c.1",
                    description: "Proportion of population covered by a mobile network."
                }
            ]
        }
    ]
};
// File: src/data/goals/goal-17.js

export const goalData = {
    id: "17",
    title: "Partnerships for the Goals",
    description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development. Indonesia actively collaborates with international partners but still faces gaps in financing and technology transfer.",
    pulseText: "Achieving SDGs in Indonesia depends heavily on partnerships, financing, and international cooperation, especially in technology and sustainable investment.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Official Development Assistance (ODA)",
            value: "$4.5 Billion",
            trend: "annual inflow (2023)",
            trendColor: "#64748b",
            source: "OECD",
            sourceUrl: "https://data.oecd.org/oda/net-oda.htm"
        },
        {
            label: "Government Revenue",
            value: "14.7% GDP",
            trend: "tax-to-GDP ratio",
            trendColor: "#f59e0b",
            source: "World Bank",
            sourceUrl: "https://data.worldbank.org/indicator/GC.TAX.TOTL.GD.ZS?locations=ID"
        },
        {
            label: "External Debt",
            value: "$408 Billion",
            trend: "2024",
            trendColor: "#ef4444",
            source: "Bank Indonesia",
            sourceUrl: "https://www.bi.go.id"
        },
        {
            label: "Internet Penetration",
            value: "79.5%",
            trend: "supports digital partnerships",
            trendColor: "#22c55e",
            source: "APJII 2024",
            sourceUrl: "https://apjii.or.id"
        },
        {
            label: "Foreign Direct Investment",
            value: "$47 Billion",
            trend: "2024 inflow",
            trendColor: "#22c55e",
            source: "BKPM Indonesia",
            sourceUrl: "https://www.bkpm.go.id"
        },
        {
            label: "SDG Financing Gap",
            value: ">$1 Trillion",
            trend: "estimated until 2030",
            trendColor: "#ef4444",
            source: "UNDP Indonesia",
            sourceUrl: "https://www.undp.org/indonesia"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "17.1",
            description: "Strengthen domestic resource mobilization.",
            indicators: [
                {
                    id: "17.1.1",
                    description: "Total government revenue as a proportion of GDP."
                }
            ]
        },
        {
            targetId: "17.3",
            description: "Mobilize additional financial resources for developing countries.",
            indicators: [
                {
                    id: "17.3.1",
                    description: "Foreign direct investment and ODA flows."
                }
            ]
        },
        {
            targetId: "17.6",
            description: "Enhance international cooperation on science, technology and innovation.",
            indicators: [
                {
                    id: "17.6.1",
                    description: "Fixed Internet broadband subscriptions per 100 inhabitants."
                }
            ]
        },
        {
            targetId: "17.17",
            description: "Encourage effective public, public-private and civil society partnerships.",
            indicators: [
                {
                    id: "17.17.1",
                    description: "Amount of USD committed to partnerships."
                }
            ]
        },
        {
            targetId: "17.18",
            description: "Enhance capacity-building support to increase availability of data.",
            indicators: [
                {
                    id: "17.18.1",
                    description: "Statistical capacity indicators."
                }
            ]
        }
    ]
};
// File: src/data/goals/goal-16.js

export const goalData = {
    id: "16",
    title: "Peace, Justice and Strong Institutions",
    description: "Promote peaceful and inclusive societies, provide access to justice for all, and build effective, accountable and inclusive institutions. Indonesia has strengthened governance, but corruption and access to justice remain concerns.",
    pulseText: "Indonesia has made progress in governance and digital public services, but corruption perception and unequal access to justice still challenge institutional trust.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Corruption Perception Index",
            value: "34",
            trend: "rank 110 globally (2023)",
            trendColor: "#ef4444",
            source: "Transparency International",
            sourceUrl: "https://www.transparency.org/en/countries/indonesia"
        },
        {
            label: "Homicide Rate",
            value: "0.6",
            trend: "per 100,000 population",
            trendColor: "#22c55e",
            source: "UNODC",
            sourceUrl: "https://dataunodc.un.org"
        },
        {
            label: "Birth Registration",
            value: "94%",
            trend: "children under 5",
            trendColor: "#22c55e",
            source: "UNICEF Indonesia",
            sourceUrl: "https://www.unicef.org/indonesia"
        },
        {
            label: "E-Government Index",
            value: "0.716",
            trend: "UN EGDI 2022",
            trendColor: "#22c55e",
            source: "United Nations",
            sourceUrl: "https://publicadministration.un.org/egovkb/en-us"
        },
        {
            label: "Prison Overcapacity",
            value: "200%",
            trend: "overcrowded facilities",
            trendColor: "#ef4444",
            source: "Ministry of Law and Human Rights",
            sourceUrl: "https://www.kemenkumham.go.id"
        },
        {
            label: "Access to Legal Aid",
            value: "Limited",
            trend: "especially rural areas",
            trendColor: "#f59e0b",
            source: "Bappenas / UNDP",
            sourceUrl: "https://www.undp.org/indonesia"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "16.1",
            description: "Significantly reduce all forms of violence and related death rates everywhere.",
            indicators: [
                {
                    id: "16.1.1",
                    description: "Number of victims of intentional homicide per 100,000 population."
                }
            ]
        },
        {
            targetId: "16.3",
            description: "Promote the rule of law and ensure equal access to justice.",
            indicators: [
                {
                    id: "16.3.1",
                    description: "Proportion of victims of violence who reported to authorities."
                }
            ]
        },
        {
            targetId: "16.5",
            description: "Substantially reduce corruption and bribery.",
            indicators: [
                {
                    id: "16.5.1",
                    description: "Proportion of persons who paid a bribe."
                }
            ]
        },
        {
            targetId: "16.6",
            description: "Develop effective, accountable and transparent institutions.",
            indicators: [
                {
                    id: "16.6.1",
                    description: "Primary government expenditures as a proportion of original approved budget."
                }
            ]
        },
        {
            targetId: "16.9",
            description: "Provide legal identity for all, including birth registration.",
            indicators: [
                {
                    id: "16.9.1",
                    description: "Proportion of children under 5 with birth registration."
                }
            ]
        },
        {
            targetId: "16.10",
            description: "Ensure public access to information and protect fundamental freedoms.",
            indicators: [
                {
                    id: "16.10.2",
                    description: "Number of countries adopting guarantees for public access to information."
                }
            ]
        }
    ]
};
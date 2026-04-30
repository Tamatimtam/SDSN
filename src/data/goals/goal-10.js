// File: src/data/goals/goal-10.js

export const goalData = {
    id: "10",
    title: "Reduced Inequalities",
    description: "Reduce inequality within and among countries. Indonesia has made progress in human development, but disparities across regions and between urban and rural areas remain significant.",
    pulseText: "Economic and human development gaps remain wide in Indonesia, especially between provinces, urban vs rural areas, and western vs eastern regions.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Gini Ratio (National)",
            value: "0.379",
            trend: "March 2024",
            trendColor: "#f59e0b",
            source: "BPS Indonesia",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/07/01/2374/gini-ratio-maret-2024-tercatat-sebesar-0-379.html"
        },
        {
            label: "Urban Gini Ratio",
            value: "0.398",
            trend: "higher than rural areas",
            trendColor: "#ef4444",
            source: "BPS Indonesia",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/07/01/2374/gini-ratio-maret-2024-tercatat-sebesar-0-379.html"
        },
        {
            label: "Rural Gini Ratio",
            value: "0.317",
            trend: "March 2024",
            trendColor: "#22c55e",
            source: "BPS Indonesia",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/07/01/2374/gini-ratio-maret-2024-tercatat-sebesar-0-379.html"
        },
        {
            label: "Human Development Index",
            value: "73.55",
            trend: "2023",
            trendColor: "#22c55e",
            source: "BPS Indonesia",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/04/29/2367/indeks-pembangunan-manusia--ipm--indonesia-2023-meningkat-menjadi-73-55.html"
        },
        {
            label: "Regional HDI Gap",
            value: "27 points",
            trend: "DKI Jakarta vs Papua Highlands",
            trendColor: "#ef4444",
            source: "BPS Indonesia",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/04/29/2367/indeks-pembangunan-manusia--ipm--indonesia-2023-meningkat-menjadi-73-55.html"
        },
        {
            label: "SDG Index Score",
            value: "70.2",
            trend: "SDSN 2023",
            trendColor: "#64748b",
            source: "SDG Index Dashboard",
            sourceUrl: "https://dashboards.sdgindex.org/profiles/indonesia/"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "10.1",
            description: "By 2030, progressively achieve and sustain income growth of the bottom 40% of the population.",
            indicators: [
                {
                    id: "10.1.1",
                    description: "Growth rates of household expenditure or income per capita among the bottom 40%."
                }
            ]
        },
        {
            targetId: "10.2",
            description: "Empower and promote the social, economic and political inclusion of all.",
            indicators: [
                {
                    id: "10.2.1",
                    description: "Proportion of people living below 50% of median income."
                }
            ]
        },
        {
            targetId: "10.3",
            description: "Ensure equal opportunity and reduce inequalities of outcome.",
            indicators: [
                {
                    id: "10.3.1",
                    description: "Proportion of population reporting discrimination."
                }
            ]
        },
        {
            targetId: "10.4",
            description: "Adopt policies to achieve greater equality.",
            indicators: [
                {
                    id: "10.4.1",
                    description: "Labour share of GDP."
                }
            ]
        },
        {
            targetId: "10.7",
            description: "Facilitate orderly, safe, regular and responsible migration.",
            indicators: [
                {
                    id: "10.7.1",
                    description: "Recruitment costs borne by employees."
                }
            ]
        },
        {
            targetId: "10.c",
            description: "Reduce transaction costs of remittances.",
            indicators: [
                {
                    id: "10.c.1",
                    description: "Remittance costs as a proportion of the amount remitted."
                }
            ]
        }
    ]
};
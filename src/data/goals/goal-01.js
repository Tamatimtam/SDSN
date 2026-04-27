// File: src/data/goals/goal-01.js

export const goalData = {
    id: "01",
    title: "No Poverty",
    description: "End poverty in all its forms everywhere. More than 700 million people still live in extreme poverty, struggling to fulfill the most basic needs.",
    pulseText: "Indonesia has made significant progress in reducing extreme poverty over the last decade, yet vulnerabilities remain, especially in rural areas.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "National Poverty Rate",
            value: "8.57%",
            trend: "▼ down from 9.36% (Mar 2023)",
            trendColor: "#22c55e",
            source: "BPS, Jan 2025",
            sourceUrl: "https://www.bps.go.id"
        },
        {
            label: "Number of People Living in Poverty",
            value: "24.06 million",
            trend: "▼ decreased by 1.84 million from 2023",
            trendColor: "#22c55e",
            source: "BPS, Jan 2025",
            sourceUrl: "https://www.bps.go.id"
        },
        {
            label: "Urban Poverty Rate",
            value: "6.66%",
            trend: "Sep 2024",
            trendColor: "#64748b",
            source: "BPS, Jan 2025",
            sourceUrl: "https://www.bps.go.id"
        },
        {
            label: "Rural Poverty Rate",
            value: "11.34%",
            trend: "Sep 2024",
            trendColor: "#64748b",
            source: "BPS, Jan 2025",
            sourceUrl: "https://www.bps.go.id"
        },
        {
            label: "Poverty Line",
            value: "IDR 595K",
            trend: "per capita/month, Sep 2024",
            trendColor: "#64748b",
            source: "BPS, Jan 2025",
            sourceUrl: "https://www.bps.go.id"
        },
        {
            label: "Extreme Poverty ($2.15/day)",
            value: "2.0%",
            trend: "2024",
            trendColor: "#64748b",
            source: "Asian Development Bank",
            sourceUrl: "https://www.adb.org"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "1.1",
            description: "By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day.",
            indicators: [
                {
                    id: "1.1.1",
                    description: "Proportion of the population living below the international poverty line by sex, age, employment status and geographical location (urban/rural)."
                }
            ]
        },
        {
            targetId: "1.2",
            description: "By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions.",
            indicators: [
                {
                    id: "1.2.1",
                    description: "Proportion of population living below the national poverty line, by sex and age."
                },
                {
                    id: "1.2.2",
                    description: "Proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions."
                }
            ]


        },
        {
            targetId: "1.4",
            description: "By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance",
            indicators: [
                {
                    id: "1.4.1",
                    description: "Proportion of population living in households with access to basic services"
                },
                {
                    id: "1.4.2",
                    description: "Proportion of total adult population with secure tenure rights to land, (a) with legally recognized documentation, and (b) who perceive their rights to land as secure, by sex and by type of tenure"
                }
            ]
        },
        {
            targetId: "1.5",
            description: "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
            indicators: [
                {
                    id: "1.5.1",
                    description: "Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population"
                },
                {
                    id: "1.5.2",
                    description: "Direct economic loss attributed to disasters in relation to global gross domestic product (GDP)"
                },
                {
                    id: "1.5.3",
                    description: "Number of countries that adopt and implement national disaster risk reduction strategies in line with the Sendai Framework for Disaster Risk Reduction 2015-2030"
                },
                {
                    id: "1.5.4",
                    description: "Proportion of local governments that adopt and implement local disaster risk reduction strategies in line with national disaster risk reduction strategies"
                }
            ]
        },
        {
            targetId: "1.a",
            description: "Ensure significant mobilization of resources from a variety of sources, including through enhanced development cooperation, in order to provide adequate and predictable means for developing countries, in particular least developed countries, to implement programmes and policies to end poverty in all its dimensions",
            indicators: [
                {
                    id: "1.a.1",
                    description: "Total official development assistance grants that focus on poverty reduction as a share of the recipient country’s gross national income"
                },
                {
                    id: "1.a.2",
                    description: "Proportion of total government spending on essential services (education, health and social protection)"
                }
            ]
        },
        {
            targetId: "1.b",
            description: "Create sound policy frameworks at the national, regional and international levels, based on pro-poor and gender-sensitive development strategies, to support accelerated investment in poverty eradication actions",
            indicators: [
                {
                    id: "1.b.1",
                    description: "Pro-poor public social spending"
                }
            ]
        }
    ]
};
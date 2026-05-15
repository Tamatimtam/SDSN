// File: src/data/goals/goal-10.js

export const goalData = {
    id: "10",
    title: "Reduced Inequalities",
    description: "Reduce inequality within and among countries. While Indonesia has made progress in overall human development, severe disparities persist between urban and rural areas, as well as between western and eastern regions of the country.",
    pulseText: "Income inequality (Gini ratio) remains stagnant at around 0.38. Regional disparities are stark, highlighted by a massive 27-point Human Development Index gap between Jakarta and Highland Papua.",

    // Data untuk Bento Grid (Berdasarkan data HTML SDGs Indonesia 2024)
    pulseMetrics: [
        {
            label: "National Gini Ratio",
            value: "0.379",
            trend: "March 2024",
            trendColor: "#f59e0b", // Kuning (Ketimpangan moderat, cenderung stagnan)
            source: "BPS Gini Ratio 2024",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/07/01/2374/gini-ratio-maret-2024-tercatat-sebesar-0-379.html"
        },
        {
            label: "Urban Gini Ratio",
            value: "0.398",
            trend: "Higher inequality in cities",
            trendColor: "#ef4444", // Merah (Ketimpangan kota lebih tinggi)
            source: "BPS Gini Ratio 2024",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/07/01/2374/gini-ratio-maret-2024-tercatat-sebesar-0-379.html"
        },
        {
            label: "Rural Gini Ratio",
            value: "0.317",
            trend: "March 2024",
            trendColor: "#22c55e", // Hijau (Relatif lebih merata dibanding kota)
            source: "BPS Gini Ratio 2024",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/07/01/2374/gini-ratio-maret-2024-tercatat-sebesar-0-379.html"
        },
        {
            label: "Human Development Index",
            value: "73.55",
            trend: "Improved in 2023",
            trendColor: "#22c55e", // Hijau
            source: "BPS IPM 2023",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/04/29/2367/indeks-pembangunan-manusia--ipm--indonesia-2023-meningkat-menjadi-73-55.html"
        },
        {
            label: "HDI Regional Disparity",
            value: "~27 points",
            trend: "Gap: DKI vs Papua Pegunungan",
            trendColor: "#ef4444", // Merah (Kesenjangan antar wilayah sangat tinggi)
            source: "BPS IPM Provinsi 2023",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/04/29/2367/indeks-pembangunan-manusia--ipm--indonesia-2023-meningkat-menjadi-73-55.html"
        },
        {
            label: "SDG Index Score",
            value: "70.2",
            trend: "SDSN 2023",
            trendColor: "#64748b", // Abu-abu
            source: "SDG Index Dashboard",
            sourceUrl: "https://dashboards.sdgindex.org/profiles/indonesia/"
        }
    ],

    // Data untuk Targets & Indicators disesuaikan dengan Official UN Framework
    targets: [
        {
            targetId: "10.1",
            description: "By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average",
            indicators: [
                {
                    id: "10.1.1",
                    description: "Growth rates of household expenditure or income per capita among the bottom 40 per cent of the population and the total population"
                }
            ]
        },
        {
            targetId: "10.2",
            description: "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status",
            indicators: [
                {
                    id: "10.2.1",
                    description: "Proportion of people living below 50 per cent of median income, by sex, age and persons with disabilities"
                }
            ]
        },
        {
            targetId: "10.3",
            description: "Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation, policies and action in this regard",
            indicators: [
                {
                    id: "10.3.1",
                    description: "Proportion of population reporting having personally felt discriminated against or harassed in the previous 12 months on the basis of a ground of discrimination prohibited under international human rights law"
                }
            ]
        },
        {
            targetId: "10.4",
            description: "Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality",
            indicators: [
                {
                    id: "10.4.1",
                    description: "Labour share of GDP, comprising wages and social protection transfers"
                },
                {
                    id: "10.4.2",
                    description: "Redistributive impact of fiscal policy"
                }
            ]
        },
        {
            targetId: "10.5",
            description: "Improve the regulation and monitoring of global financial markets and institutions and strengthen the implementation of such regulations",
            indicators: [
                {
                    id: "10.5.1",
                    description: "Financial Soundness Indicators"
                }
            ]
        },
        {
            targetId: "10.6",
            description: "Ensure enhanced representation and voice for developing countries in decision-making in global international economic and financial institutions in order to deliver more effective, credible, accountable and legitimate institutions",
            indicators: [
                {
                    id: "10.6.1",
                    description: "Proportion of members and voting rights of developing countries in international organizations"
                }
            ]
        },
        {
            targetId: "10.7",
            description: "Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies",
            indicators: [
                {
                    id: "10.7.1",
                    description: "Recruitment cost borne by employee as a proportion of monthly income earned in country of destination"
                },
                {
                    id: "10.7.2",
                    description: "Number of countries with migration policies that facilitate orderly, safe, regular and responsible migration and mobility of people"
                },
                {
                    id: "10.7.3",
                    description: "Number of people who died or disappeared in the process of migration towards an international destination"
                },
                {
                    id: "10.7.4",
                    description: "Proportion of the population who are refugees, by country of origin"
                }
            ]
        },
        {
            targetId: "10.a",
            description: "Implement the principle of special and differential treatment for developing countries, in particular least developed countries, in accordance with World Trade Organization agreements",
            indicators: [
                {
                    id: "10.a.1",
                    description: "Proportion of tariff lines applied to imports from least developed countries and developing countries with zero-tariff"
                }
            ]
        },
        {
            targetId: "10.b",
            description: "Encourage official development assistance and financial flows, including foreign direct investment, to States where the need is greatest, in particular least developed countries, African countries, small island developing States and landlocked developing countries, in accordance with their national plans and programmes",
            indicators: [
                {
                    id: "10.b.1",
                    description: "Total resource flows for development, by recipient and donor countries and type of flow"
                }
            ]
        },
        {
            targetId: "10.c",
            description: "By 2030, reduce to less than 3 per cent the transaction costs of migrant remittances and eliminate remittance corridors with costs higher than 5 per cent",
            indicators: [
                {
                    id: "10.c.1",
                    description: "Remittance costs as a proportion of the amount remitted"
                }
            ]
        }
    ]
};
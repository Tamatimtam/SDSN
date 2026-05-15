// File: src/data/goals/goal-13.js

export const goalData = {
    id: "13",
    title: "Climate Action",
    description: "Take urgent action to combat climate change and its impacts. Indonesia is highly vulnerable to climate change, facing frequent hydro-meteorological disasters, while simultaneously striving to balance economic development with its ambitious NDC emission reduction targets.",
    pulseText: "Climate action is at a crossroads. Deforestation and greenhouse gas emissions remain significant, and Indonesia faced over 5,400 hydro-meteorological disasters in 2023, underscoring the urgency of climate resilience.",

    // Data untuk Bento Grid (Berdasarkan data HTML SDGs Indonesia 2024)
    pulseMetrics: [
        {
            label: "Total GHG Emissions",
            value: "1.87 Gt",
            trend: "CO₂eq (2022)",
            trendColor: "#ef4444", // Merah (Tinggi/Perlu diturunkan)
            source: "Climate Watch / WRI",
            sourceUrl: "https://www.climatewatchdata.org/ghg-emissions?end_year=2022&start_year=1990&regions=IDN"
        },
        {
            label: "NDC Reduction Target",
            value: "31.9%",
            trend: "Unconditional target by 2030",
            trendColor: "#22c55e", // Hijau (Target ambisius)
            source: "UNFCCC NDC 2022",
            sourceUrl: "https://unfccc.int/sites/default/files/NDC/2022-09/Updated%20NDC%20Indonesia%202022.pdf"
        },
        {
            label: "Annual Deforestation",
            value: "~113k ha",
            trend: "2023",
            trendColor: "#ef4444", // Merah (Kritis)
            source: "Global Forest Watch",
            sourceUrl: "https://www.globalforestwatch.org/dashboards/country/IDN/"
        },
        {
            label: "Forest Cover",
            value: "95.6M ha",
            trend: "2022",
            trendColor: "#22c55e", // Hijau (Data cadangan karbon)
            source: "Global Forest Watch",
            sourceUrl: "https://www.globalforestwatch.org/dashboards/country/IDN/"
        },
        {
            label: "Climate Disasters",
            value: "5,400+",
            trend: "Hydro-meteorological (2023)",
            trendColor: "#ef4444", // Merah (Dampak perubahan iklim)
            source: "BNPB 2023",
            sourceUrl: "https://www.bnpb.go.id/infografis/bencana-alam-2023"
        },
        {
            label: "Emissions per Capita",
            value: "~6.8 t",
            trend: "CO₂eq per year",
            trendColor: "#f59e0b", // Kuning (Perlu diperhatikan)
            source: "Our World in Data",
            sourceUrl: "https://ourworldindata.org/co2/country/indonesia"
        }
    ],

    // Data untuk Targets & Indicators disesuaikan dengan Official UN Framework
    targets: [
        {
            targetId: "13.1",
            description: "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
            indicators: [
                {
                    id: "13.1.1",
                    description: "Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population"
                },
                {
                    id: "13.1.2",
                    description: "Number of countries that adopt and implement national disaster risk reduction strategies in line with the Sendai Framework for Disaster Risk Reduction 2015–2030"
                }
            ]
        },
        {
            targetId: "13.2",
            description: "Integrate climate change measures into national policies, strategies and planning",
            indicators: [
                {
                    id: "13.2.1",
                    description: "Number of countries with nationally determined contributions, long-term strategies, national adaptation plans and adaptation communications"
                }
            ]
        },
        {
            targetId: "13.3",
            description: "Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning",
            indicators: [
                {
                    id: "13.3.1",
                    description: "Extent to which (i) global citizenship education and (ii) education for sustainable development are mainstreamed in (a) national education policies; (b) curricula; (c) teacher education and (d) student assessment"
                }
            ]
        },
        {
            targetId: "13.a",
            description: "Implement the commitment undertaken by developed-country parties to the United Nations Framework Convention on Climate Change to a goal of mobilizing jointly $100 billion annually by 2020 from all sources to address the needs of developing countries in the context of meaningful mitigation actions and transparency on implementation and fully operationalize the Green Climate Fund through its capitalization as soon as possible",
            indicators: [
                {
                    id: "13.a.1",
                    description: "Amounts provided and mobilized in United States dollars per year in relation to the continued existing collective mobilization goal of the $100 billion commitment through to 2025"
                }
            ]
        },
        {
            targetId: "13.b",
            description: "Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States, including focusing on women, youth and local and marginalized communities",
            indicators: [
                {
                    id: "13.b.1",
                    description: "Number of least developed countries and small island developing States with nationally determined contributions, long-term strategies, national adaptation plans and adaptation communications"
                }
            ]
        }
    ]
};
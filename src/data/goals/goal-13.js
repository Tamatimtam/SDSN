// File: src/data/goals/goal-13.js

export const goalData = {
    id: "13",
    title: "Climate Action",
    description: "Take urgent action to combat climate change and its impacts. Indonesia is highly vulnerable to climate risks, while also being a major emitter due to land use and energy.",
    pulseText: "Indonesia has committed to reducing emissions, but deforestation, coal dependency, and climate vulnerability make this one of the toughest SDGs to achieve.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Total GHG Emissions",
            value: "1.24 Gt CO₂e",
            trend: "including land-use (2023)",
            trendColor: "#ef4444",
            source: "Climate Watch / WRI",
            sourceUrl: "https://www.climatewatchdata.org/countries/IDN"
        },
        {
            label: "Emission Reduction Target",
            value: "31.89%",
            trend: "unconditional by 2030",
            trendColor: "#f59e0b",
            source: "Indonesia NDC",
            sourceUrl: "https://unfccc.int/sites/default/files/NDC/2022-09/Indonesia%20Enhanced%20NDC.pdf"
        },
        {
            label: "Forest Loss",
            value: "~100K ha/year",
            trend: "declining but ongoing",
            trendColor: "#f59e0b",
            source: "Global Forest Watch",
            sourceUrl: "https://www.globalforestwatch.org"
        },
        {
            label: "Renewable Energy Share",
            value: "13%",
            trend: "linked to emissions reduction",
            trendColor: "#ef4444",
            source: "ESDM Indonesia",
            sourceUrl: "https://www.esdm.go.id"
        },
        {
            label: "Climate Risk Index",
            value: "High",
            trend: "frequent floods & disasters",
            trendColor: "#ef4444",
            source: "Germanwatch",
            sourceUrl: "https://www.germanwatch.org/en/cri"
        },
        {
            label: "Carbon Market Launch",
            value: "2023",
            trend: "Indonesia Carbon Exchange",
            trendColor: "#22c55e",
            source: "IDX Carbon",
            sourceUrl: "https://www.idx.co.id"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "13.1",
            description: "Strengthen resilience and adaptive capacity to climate-related hazards.",
            indicators: [
                {
                    id: "13.1.1",
                    description: "Number of deaths and affected persons attributed to disasters."
                }
            ]
        },
        {
            targetId: "13.2",
            description: "Integrate climate change measures into national policies and planning.",
            indicators: [
                {
                    id: "13.2.1",
                    description: "Existence of integrated climate policies and strategies."
                }
            ]
        },
        {
            targetId: "13.3",
            description: "Improve education and awareness on climate change mitigation and adaptation.",
            indicators: [
                {
                    id: "13.3.1",
                    description: "Extent of climate change education and awareness."
                }
            ]
        },
        {
            targetId: "13.a",
            description: "Implement commitment to the UNFCCC for climate financing.",
            indicators: [
                {
                    id: "13.a.1",
                    description: "Mobilized climate finance for developing countries."
                }
            ]
        },
        {
            targetId: "13.b",
            description: "Promote capacity for effective climate-related planning.",
            indicators: [
                {
                    id: "13.b.1",
                    description: "Number of countries with climate planning capacity."
                }
            ]
        }
    ]
};
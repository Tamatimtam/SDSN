// File: src/data/goals/goal-15.js

export const goalData = {
    id: "15",
    title: "Life on Land",
    description: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss. Indonesia holds vast tropical forests, yet faces significant challenges from deforestation and habitat loss for endangered species.",
    pulseText: "As a global megadiverse nation, Indonesia's biodiversity is under immense pressure. Annual deforestation and recurring peatland fires threaten ecosystems that house over 800 endangered species on the IUCN Red List.",

    // Data untuk Bento Grid (Berdasarkan data HTML SDGs Indonesia 2024)
    pulseMetrics: [
        {
            label: "Forest Cover",
            value: "95.6M ha",
            trend: "2022",
            trendColor: "#22c55e", // Hijau
            source: "Global Forest Watch",
            sourceUrl: "https://www.globalforestwatch.org/dashboards/country/IDN/"
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
            label: "Endangered Species",
            value: "800+",
            trend: "In IUCN Red List",
            trendColor: "#ef4444", // Merah
            source: "IUCN Red List",
            sourceUrl: "https://www.iucnredlist.org"
        },
        {
            label: "Terrestrial Conservation",
            value: "~17%",
            trend: "of total land area",
            trendColor: "#22c55e", // Hijau
            source: "KLHK / MoEF",
            sourceUrl: "https://www.menlhk.go.id"
        },
        {
            label: "Forest & Land Fires",
            value: "~355k ha",
            trend: "2023 (El Niño effect)",
            trendColor: "#ef4444", // Merah
            source: "BNPB 2023",
            sourceUrl: "https://www.bnpb.go.id"
        },
        {
            label: "Megadiversity Status",
            value: "Top 3",
            trend: "Global biodiversity ranking",
            trendColor: "#22c55e", // Hijau
            source: "KLHK / MoEF",
            sourceUrl: "https://www.menlhk.go.id"
        }
    ],

    // Data untuk Targets & Indicators disesuaikan dengan Official UN Framework
    targets: [
        {
            targetId: "15.1",
            description: "By 2020, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands, in line with obligations under international agreements",
            indicators: [
                {
                    id: "15.1.1",
                    description: "Forest area as a proportion of total land area"
                },
                {
                    id: "15.1.2",
                    description: "Proportion of important sites for terrestrial and freshwater biodiversity that are covered by protected areas, by ecosystem type"
                }
            ]
        },
        {
            targetId: "15.2",
            description: "By 2020, promote the implementation of sustainable management of all types of forests, halt deforestation, restore degraded forests and substantially increase afforestation and reforestation globally",
            indicators: [
                {
                    id: "15.2.1",
                    description: "Progress towards sustainable forest management"
                }
            ]
        },
        {
            targetId: "15.3",
            description: "By 2030, combat desertification, restore degraded land and soil, including land affected by desertification, drought and floods, and strive to achieve a land degradation-neutral world",
            indicators: [
                {
                    id: "15.3.1",
                    description: "Proportion of land that is degraded over total land area"
                }
            ]
        },
        {
            targetId: "15.4",
            description: "By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, in order to enhance their capacity to provide benefits that are essential for sustainable development",
            indicators: [
                {
                    id: "15.4.1",
                    description: "Coverage by protected areas of important sites for mountain biodiversity"
                },
                {
                    id: "15.4.2",
                    description: "Mountain Green Cover Index"
                }
            ]
        },
        {
            targetId: "15.5",
            description: "Take urgent and significant action to reduce the degradation of natural habitats, halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species",
            indicators: [
                {
                    id: "15.5.1",
                    description: "Red List Index"
                }
            ]
        },
        {
            targetId: "15.6",
            description: "Promote fair and equitable sharing of the benefits arising from the utilization of genetic resources and promote appropriate access to such resources, as internationally agreed",
            indicators: [
                {
                    id: "15.6.1",
                    description: "Number of countries that have adopted legislative, administrative and policy frameworks to ensure fair and equitable sharing of benefits"
                }
            ]
        },
        {
            targetId: "15.7",
            description: "Take urgent action to end poaching and trafficking of protected species of flora and fauna and address both demand and supply of illegal wildlife products",
            indicators: [
                {
                    id: "15.7.1",
                    description: "Proportion of traded wildlife that was poached or illicitly trafficked"
                }
            ]
        },
        {
            targetId: "15.8",
            description: "By 2020, introduce measures to prevent the introduction and significantly reduce the impact of invasive alien species on land and water ecosystems and control or eradicate the priority species",
            indicators: [
                {
                    id: "15.8.1",
                    description: "Proportion of countries adopting relevant national legislation and adequately resourcing the prevention or control of invasive alien species"
                }
            ]
        },
        {
            targetId: "15.9",
            description: "By 2020, integrate ecosystem and biodiversity values into national and local planning, development processes, poverty reduction strategies and accounts",
            indicators: [
                {
                    id: "15.9.1",
                    description: "Progress towards national targets established in accordance with Aichi Biodiversity Target 2 of the Strategic Plan for Biodiversity 2011–2020"
                }
            ]
        },
        {
            targetId: "15.a",
            description: "Mobilize and significantly increase financial resources from all sources to conserve and sustainably use biodiversity and ecosystems",
            indicators: [
                {
                    id: "15.a.1",
                    description: "Official development assistance on conservation and sustainable use of biodiversity"
                }
            ]
        },
        {
            targetId: "15.b",
            description: "Mobilize significant resources from all sources and at all levels to finance sustainable forest management and provide adequate incentives to developing countries to advance such management, including for conservation and reforestation",
            indicators: [
                {
                    id: "15.b.1",
                    description: "Official development assistance on conservation and sustainable use of biodiversity"
                }
            ]
        },
        {
            targetId: "15.c",
            description: "Enhance global support for efforts to combat poaching and trafficking of protected species, including by increasing the capacity of local communities to pursue sustainable livelihood opportunities",
            indicators: [
                {
                    id: "15.c.1",
                    description: "Proportion of traded wildlife that was poached or illicitly trafficked"
                }
            ]
        }
    ]
};
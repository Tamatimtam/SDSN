// File: src/data/goals/goal-12.js

export const goalData = {
    id: "12",
    title: "Responsible Consumption and Production",
    description: "Ensure sustainable consumption and production patterns. Indonesia faces a massive crisis in waste management, being one of the world's largest contributors to marine plastic debris, with the majority of its solid waste remaining unmanaged.",
    pulseText: "Waste management is in a critical state. Indonesia dumps approximately 5,000 tons of plastic into the ocean daily (2nd highest globally), with over 60% of total waste being burned or improperly managed.",

    // Data untuk Bento Grid (Berdasarkan data HTML SDGs Indonesia 2024)
    pulseMetrics: [
        {
            label: "Marine Plastic Debris",
            value: "5,000 tons",
            trend: "per day (2nd highest globally)",
            trendColor: "#ef4444", // Merah (Krisis lingkungan parah)
            source: "ADB Marine Debris Program",
            sourceUrl: "https://www.adb.org/projects/57018-001/main"
        },
        {
            label: "Unmanaged Waste",
            value: ">60%",
            trend: "Burned or improperly disposed",
            trendColor: "#ef4444", // Merah
            source: "ADB 2023",
            sourceUrl: "https://www.adb.org/projects/57018-001/main"
        },
        {
            label: "Marine Plastic Reduction Target",
            value: "70%",
            trend: "Target by 2025 (from 2017 baseline)",
            trendColor: "#64748b", // Abu-abu (Target kebijakan)
            source: "UN SDGs Partnership",
            sourceUrl: "https://sdgs.un.org/partnerships/indonesia-against-marine-plastic-debris"
        },
        {
            label: "Local Waste Mgt. Budget",
            value: "~5%",
            trend: "of regional budgets (APBD)",
            trendColor: "#ef4444", // Merah (Anggaran sangat kurang)
            source: "UNDP Indonesia",
            sourceUrl: "https://www.undp.org/indonesia/press-releases/sdg-talks-marine-plastic-waste-creates-havoc-among-communities-beyond-waterways"
        },
        {
            label: "ADB Plastic Loan",
            value: "$500 million",
            trend: "For debris reduction program",
            trendColor: "#22c55e", // Hijau (Pendanaan masuk)
            source: "ADB Marine Debris Program",
            sourceUrl: "https://www.adb.org/projects/57018-001/main"
        },
        {
            label: "Blue Finance Program",
            value: "Active",
            trend: "Launched in 2022 (Bappenas)",
            trendColor: "#22c55e", // Hijau (Inisiatif baik)
            source: "World Bank Oceans Program",
            sourceUrl: "https://www.worldbank.org/en/programs/indonesia-sustainable-oceans-program/news-n-events"
        }
    ],

    // Data untuk Targets & Indicators disesuaikan dengan Official UN Framework
    targets: [
        {
            targetId: "12.1",
            description: "Implement the 10-Year Framework of Programmes on Sustainable Consumption and Production Patterns, all countries taking action, with developed countries taking the lead, taking into account the development and capabilities of developing countries",
            indicators: [
                {
                    id: "12.1.1",
                    description: "Number of countries with sustainable consumption and production (SCP) national action plans or SCP mainstreamed as a priority or a target into national policies"
                }
            ]
        },
        {
            targetId: "12.2",
            description: "By 2030, achieve the sustainable management and efficient use of natural resources",
            indicators: [
                {
                    id: "12.2.1",
                    description: "Material footprint, material footprint per capita, and material footprint per GDP"
                },
                {
                    id: "12.2.2",
                    description: "Domestic material consumption, domestic material consumption per capita, and domestic material consumption per GDP"
                }
            ]
        },
        {
            targetId: "12.3",
            description: "By 2030, halve per capita global food waste at the retail and consumer levels and reduce food losses along production and supply chains, including post-harvest losses",
            indicators: [
                {
                    id: "12.3.1",
                    description: "(a) Food loss index and (b) food waste index"
                }
            ]
        },
        {
            targetId: "12.4",
            description: "By 2020, achieve the environmentally sound management of chemicals and all wastes throughout their life cycle, in accordance with agreed international frameworks, and significantly reduce their release to air, water and soil in order to minimize their adverse impacts on human health and the environment",
            indicators: [
                {
                    id: "12.4.1",
                    description: "Number of parties to international multilateral environmental agreements on hazardous waste, and other chemicals that meet their commitments and obligations in transmitting information as required by each relevant agreement"
                },
                {
                    id: "12.4.2",
                    description: "(a) Hazardous waste generated per capita and proportion of hazardous waste treated, by type of treatment; and (b) proportion of safely managed electronic waste"
                }
            ]
        },
        {
            targetId: "12.5",
            description: "By 2030, substantially reduce waste generation through prevention, reduction, recycling and reuse",
            indicators: [
                {
                    id: "12.5.1",
                    description: "National recycling rate, tons of material recycled"
                }
            ]
        },
        {
            targetId: "12.6",
            description: "Encourage companies, especially large and transnational companies, to adopt sustainable practices and to integrate sustainability information into their reporting cycle",
            indicators: [
                {
                    id: "12.6.1",
                    description: "Number of companies publishing sustainability reports"
                }
            ]
        },
        {
            targetId: "12.7",
            description: "Promote public procurement practices that are sustainable, in accordance with national policies and priorities",
            indicators: [
                {
                    id: "12.7.1",
                    description: "Number of countries implementing sustainable public procurement policies and action plans"
                }
            ]
        },
        {
            targetId: "12.8",
            description: "By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature",
            indicators: [
                {
                    id: "12.8.1",
                    description: "Extent to which (i) global citizenship education and (ii) education for sustainable development are mainstreamed in (a) national education policies; (b) curricula; (c) teacher education; and (d) student assessment"
                }
            ]
        },
        {
            targetId: "12.a",
            description: "Support developing countries to strengthen their scientific and technological capacity to move towards more sustainable patterns of consumption and production",
            indicators: [
                {
                    id: "12.a.1",
                    description: "Amount of support to developing countries on research and development for sustainable consumption and production and environmentally sound technologies"
                }
            ]
        },
        {
            targetId: "12.b",
            description: "Develop and implement tools to monitor sustainable development impacts for sustainable tourism that creates jobs and promotes local culture and products",
            indicators: [
                {
                    id: "12.b.1",
                    description: "Implementation of standard accounting tools to monitor the economic and environmental aspects of tourism sustainability"
                }
            ]
        },
        {
            targetId: "12.c",
            description: "Rationalize inefficient fossil-fuel subsidies that encourage wasteful consumption by removing market distortions, in accordance with national circumstances, including by restructuring taxation and phasing out those harmful subsidies, where they exist, to reflect their environmental impacts, taking fully into account the specific needs and conditions of developing countries and minimizing the possible adverse impacts on their development in a manner that protects the poor and the affected communities",
            indicators: [
                {
                    id: "12.c.1",
                    description: "Amount of fossil-fuel subsidies (production and consumption) per unit of GDP"
                }
            ]
        }
    ]
};
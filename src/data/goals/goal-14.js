// File: src/data/goals/goal-14.js

export const goalData = {
    id: "14",
    title: "Life Below Water",
    description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development. Indonesia has exceeded its national targets for marine protected areas, but marine debris and the degradation of coral reefs pose serious threats to its marine biodiversity.",
    pulseText: "Marine conservation is a bright spot, with 28.4 million hectares protected. However, the ecosystem remains under heavy pressure from plastic pollution and a significant portion of coral reefs remain in critical condition.",

    // Data untuk Bento Grid (Berdasarkan data HTML SDGs Indonesia 2024)
    pulseMetrics: [
        {
            label: "Marine Protected Areas",
            value: "28.4M ha",
            trend: "~8.3% of marine territory",
            trendColor: "#22c55e", // Hijau (Capaian melampaui target)
            source: "KKP (Kemen Kelautan)",
            sourceUrl: "https://kkp.go.id/djprl/artikel/56027-luas-kawasan-konservasi-laut-indonesia-2024"
        },
        {
            label: "Marine Plastic Debris",
            value: "5,000 tons",
            trend: "Entering ocean daily",
            trendColor: "#ef4444", // Merah (Ancaman serius)
            source: "ADB Marine Debris Program",
            sourceUrl: "https://www.adb.org/projects/57018-001/main"
        },
        {
            label: "Coral Reef Condition",
            value: "~36%",
            trend: "In poor or critical condition",
            trendColor: "#ef4444", // Merah (Kritis)
            source: "Kemen Kelautan & Perikanan",
            sourceUrl: "https://kkp.go.id"
        },
        {
            label: "Number of MPAs",
            value: "196+",
            trend: "Marine Protected Areas",
            trendColor: "#22c55e", // Hijau
            source: "World Bank Oceans Program",
            sourceUrl: "https://www.worldbank.org/en/programs/indonesia-sustainable-oceans-program/news-n-events"
        },
        {
            label: "Indonesia Coral Bond",
            value: "2024",
            trend: "Raja Ampat & Alor initiative",
            trendColor: "#22c55e", // Hijau (Inovasi pendanaan)
            source: "World Bank Oceans Program",
            sourceUrl: "https://www.worldbank.org/en/programs/indonesia-sustainable-oceans-program/news-n-events"
        },
        {
            label: "Conservation Target",
            value: "Exceeded",
            trend: "Surpassed 20M ha goal",
            trendColor: "#22c55e", // Hijau
            source: "World Bank Oceans Program",
            sourceUrl: "https://www.worldbank.org/en/programs/indonesia-sustainable-oceans-program/news-n-events"
        }
    ],

    // Data untuk Targets & Indicators disesuaikan dengan Official UN Framework
    targets: [
        {
            targetId: "14.1",
            description: "By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution",
            indicators: [
                {
                    id: "14.1.1",
                    description: "Index of coastal eutrophication and floating plastic debris density"
                }
            ]
        },
        {
            targetId: "14.2",
            description: "By 2020, sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts, including by strengthening their resilience, and take action for their restoration in order to achieve healthy and productive oceans",
            indicators: [
                {
                    id: "14.2.1",
                    description: "Number of countries using ecosystem-based approaches to managing marine areas"
                }
            ]
        },
        {
            targetId: "14.3",
            description: "Minimize and address the impacts of ocean acidification, including through enhanced scientific cooperation at all levels",
            indicators: [
                {
                    id: "14.3.1",
                    description: "Average marine acidity (pH) measured at agreed suite of representative sampling stations"
                }
            ]
        },
        {
            targetId: "14.4",
            description: "By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and unregulated fishing and destructive fishing practices and implement science-based management plans, in order to restore fish stocks in the shortest time feasible, at least to levels that can produce maximum sustainable yield as determined by their biological characteristics",
            indicators: [
                {
                    id: "14.4.1",
                    description: "Proportion of fish stocks within biologically sustainable levels"
                }
            ]
        },
        {
            targetId: "14.5",
            description: "By 2020, conserve at least 10 per cent of coastal and marine areas, consistent with national and international law and based on the best available scientific information",
            indicators: [
                {
                    id: "14.5.1",
                    description: "Coverage of protected areas in relation to marine areas"
                }
            ]
        },
        {
            targetId: "14.6",
            description: "By 2020, prohibit certain forms of fisheries subsidies which contribute to overcapacity and overfishing, eliminate subsidies that contribute to illegal, unreported and unregulated fishing and refrain from introducing new such subsidies, recognizing that appropriate and effective special and differential treatment for developing and least developed countries should be an integral part of the World Trade Organization fisheries subsidies negotiation",
            indicators: [
                {
                    id: "14.6.1",
                    description: "Degree of implementation of international instruments aiming to combat illegal, unreported and unregulated fishing"
                }
            ]
        },
        {
            targetId: "14.7",
            description: "By 2030, increase the economic benefits to small island developing States and least developed countries from the sustainable use of marine resources, including through sustainable management of fisheries, aquaculture and tourism",
            indicators: [
                {
                    id: "14.7.1",
                    description: "Sustainable fisheries as a percentage of GDP in small island developing States, least developed countries and all countries"
                }
            ]
        },
        {
            targetId: "14.a",
            description: "Increase scientific knowledge, develop research capacity and transfer marine technology, taking into account the Intergovernmental Oceanographic Commission Criteria and Guidelines on the Transfer of Marine Technology, in order to improve ocean health and to enhance the contribution of marine biodiversity to the development of developing countries, in particular small island developing States and least developed countries",
            indicators: [
                {
                    id: "14.a.1",
                    description: "Proportion of total research budget allocated to research in the field of marine technology"
                }
            ]
        },
        {
            targetId: "14.b",
            description: "Provide access for small-scale artisanal fishers to marine resources and markets",
            indicators: [
                {
                    id: "14.b.1",
                    description: "Degree of application of a legal/regulatory/policy/institutional framework which recognizes and protects access rights for small-scale fisheries"
                }
            ]
        },
        {
            targetId: "14.c",
            description: "Enhance the conservation and sustainable use of oceans and their resources by implementing international law as reflected in the United Nations Convention on the Law of the Sea, which provides the legal framework for the conservation and sustainable use of oceans and their resources, as recalled in paragraph 158 of “The future we want”",
            indicators: [
                {
                    id: "14.c.1",
                    description: "Number of countries making progress in ratifying, accepting and implementing through legal, policy and institutional frameworks, ocean-related instruments that implement international law, as reflected in the United Nations Convention on the Law of the Sea"
                }
            ]
        }
    ]
};
// File: src/data/goals/goal-11.js

export const goalData = {
    id: "11",
    title: "Sustainable Cities and Communities",
    description: "Make cities and human settlements inclusive, safe, resilient and sustainable. Indonesia's rapid urbanization faces massive challenges, particularly concerning severe air pollution in major cities, inadequate public transport, and expanding informal settlements.",
    pulseText: "Jakarta consistently ranks among the most polluted cities in Asia. Rapid urbanization without adequate infrastructure has left roughly 24% of the urban population living in slum areas.",

    // Data untuk Bento Grid (Berdasarkan data HTML SDGs Indonesia 2024)
    pulseMetrics: [
        {
            label: "Urban Population",
            value: "58.5%",
            trend: "of total population (2024)",
            trendColor: "#64748b", // Abu-abu (Data demografi)
            source: "World Bank Urban Data",
            sourceUrl: "https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=ID"
        },
        {
            label: "Slum Population",
            value: "~24%",
            trend: "of urban population (estimate)",
            trendColor: "#ef4444", // Merah (Kawasan kumuh masih tinggi)
            source: "SDG Index 2025",
            sourceUrl: "https://dashboards.sdgindex.org/profiles/indonesia/indicators/"
        },
        {
            label: "Jakarta PM2.5 Levels",
            value: ">35 µg/m³",
            trend: "5–10x above WHO limit (5 µg/m³)",
            trendColor: "#ef4444", // Merah (Krisis polusi udara)
            source: "CREA Air Quality 2024",
            sourceUrl: "https://energyandcleanair.org/publication/indonesia-air-quality-2024/"
        },
        {
            label: "Pollution Ranking",
            value: "Worst",
            trend: "Most polluted city in ASEAN",
            trendColor: "#ef4444", // Merah
            source: "CREA Air Quality 2024",
            sourceUrl: "https://energyandcleanair.org/publication/indonesia-air-quality-2024/"
        },
        {
            label: "Public Transport Access",
            value: "~40%",
            trend: "in major Indonesian cities",
            trendColor: "#f59e0b", // Kuning (Masih kurang memadai)
            source: "SDG Index 2025",
            sourceUrl: "https://dashboards.sdgindex.org/profiles/indonesia/indicators/"
        },
        {
            label: "Zero Slum Target",
            value: "2045",
            trend: "RPJMN & Vision 2045 Target",
            trendColor: "#64748b", // Abu-abu
            source: "BAPPENAS RPJMN",
            sourceUrl: "https://www.bappenas.go.id/id/rencana-pembangunan/rpjmn/"
        }
    ],

    // Data untuk Targets & Indicators disesuaikan dengan Official UN Framework
    targets: [
        {
            targetId: "11.1",
            description: "By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums",
            indicators: [
                {
                    id: "11.1.1",
                    description: "Proportion of urban population living in slums, informal settlements or inadequate housing"
                }
            ]
        },
        {
            targetId: "11.2",
            description: "By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons",
            indicators: [
                {
                    id: "11.2.1",
                    description: "Proportion of population that has convenient access to public transport, by sex, age and persons with disabilities"
                }
            ]
        },
        {
            targetId: "11.3",
            description: "By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries",
            indicators: [
                {
                    id: "11.3.1",
                    description: "Ratio of land consumption rate to population growth rate"
                },
                {
                    id: "11.3.2",
                    description: "Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically"
                }
            ]
        },
        {
            targetId: "11.4",
            description: "Strengthen efforts to protect and safeguard the world’s cultural and natural heritage",
            indicators: [
                {
                    id: "11.4.1",
                    description: "Total per capita expenditure on the preservation, protection and conservation of all cultural and natural heritage, by type of heritage, level of government, type of expenditure and type of private funding"
                }
            ]
        },
        {
            targetId: "11.5",
            description: "By 2030, significantly reduce the number of deaths and the number of people affected and substantially decrease the direct economic losses relative to global gross domestic product caused by disasters, including water-related disasters, with a focus on protecting the poor and people in vulnerable situations",
            indicators: [
                {
                    id: "11.5.1",
                    description: "Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population"
                },
                {
                    id: "11.5.2",
                    description: "Direct economic loss in relation to global GDP, damage to critical infrastructure and number of disruptions to basic services, attributed to disasters"
                }
            ]
        },
        {
            targetId: "11.6",
            description: "By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management",
            indicators: [
                {
                    id: "11.6.1",
                    description: "Proportion of municipal solid waste collected and managed in controlled facilities out of total municipal waste generated, by cities"
                },
                {
                    id: "11.6.2",
                    description: "Annual mean levels of fine particulate matter (e.g. PM2.5 and PM10) in cities (population weighted)"
                }
            ]
        },
        {
            targetId: "11.7",
            description: "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
            indicators: [
                {
                    id: "11.7.1",
                    description: "Average share of the built-up area of cities that is open space for public use for all, by sex, age and persons with disabilities"
                },
                {
                    id: "11.7.2",
                    description: "Proportion of persons victim of physical or sexual harassment, by sex, age, disability status and place of occurrence, in the previous 12 months"
                }
            ]
        },
        {
            targetId: "11.a",
            description: "Support positive economic, social and environmental links between urban, peri-urban and rural areas by strengthening national and regional development planning",
            indicators: [
                {
                    id: "11.a.1",
                    description: "Number of countries that have national urban policies or regional development plans that (a) respond to population dynamics; (b) ensure balanced territorial development; and (c) increase local fiscal space"
                }
            ]
        },
        {
            targetId: "11.b",
            description: "By 2020, substantially increase the number of cities and human settlements adopting and implementing integrated policies and plans towards inclusion, resource efficiency, mitigation and adaptation to climate change, resilience to disasters, and develop and implement, in line with the Sendai Framework for Disaster Risk Reduction 2015–2030, holistic disaster risk management at all levels",
            indicators: [
                {
                    id: "11.b.1",
                    description: "Number of countries that adopt and implement national disaster risk reduction strategies in line with the Sendai Framework for Disaster Risk Reduction 2015–2030"
                },
                {
                    id: "11.b.2",
                    description: "Proportion of local governments that adopt and implement local disaster risk reduction strategies in line with national disaster risk reduction strategies"
                }
            ]
        },
        {
            targetId: "11.c",
            description: "Support least developed countries, including through financial and technical assistance, in building sustainable and resilient buildings utilizing local materials",
            indicators: [
                {
                    id: "11.c.1",
                    description: "Proportion of financial support to the least developed countries that is allocated to the construction and retrofitting of sustainable, resilient and resource-efficient buildings utilizing local materials"
                }
            ]
        }
    ]
};
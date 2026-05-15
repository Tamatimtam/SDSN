// File: src/data/goals/goal-09.js

export const goalData = {
    id: "09",
    title: "Industry, Innovation and Infrastructure",
    description: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation. Indonesia is experiencing a massive boom in its digital economy and mobile connectivity, though fixed broadband and rural infrastructure still lag.",
    pulseText: "The digital economy is thriving with 221 million internet users, making it one of the largest globally. However, the urban-rural digital divide remains stark, with ~30% of villages still lacking 4G signal.",

    // Data untuk Bento Grid (Berdasarkan data HTML SDGs Indonesia 2024)
    pulseMetrics: [
        {
            label: "Internet Users",
            value: "221 million",
            trend: "79.5% of population (2024)",
            trendColor: "#22c55e", // Hijau (Sangat baik/tinggi)
            source: "APJII Survei 2024",
            sourceUrl: "https://apjii.or.id/survei"
        },
        {
            label: "Mobile Broadband",
            value: "121",
            trend: "Penetration per 100 people",
            trendColor: "#22c55e", // Hijau
            source: "GSMA Intelligence 2024",
            sourceUrl: "https://www.opensignal.com/2025/06/indonesia-path-to-network-excellence/dt"
        },
        {
            label: "Fixed Broadband",
            value: "21%",
            trend: "Household penetration (2024)",
            trendColor: "#f59e0b", // Kuning (Masih rendah dibanding mobile)
            source: "GSMA Intelligence 2024",
            sourceUrl: "https://www.opensignal.com/2025/06/indonesia-path-to-network-excellence/dt"
        },
        {
            label: "Digital Economy",
            value: ">$130 B",
            trend: "Projected value by 2025",
            trendColor: "#22c55e", // Hijau (Pertumbuhan pesat)
            source: "ITA US Dept of Commerce",
            sourceUrl: "https://www.trade.gov/country-commercial-guides/indonesia-digital-economy"
        },
        {
            label: "ICT Sector to GDP",
            value: "4.34%",
            trend: "Grew by 7.57% in 2024",
            trendColor: "#22c55e", // Hijau
            source: "BPS Telekomunikasi 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2025/08/29/beaa2be400eda6ce6c636ef8/telecommunication-statistics-in-indonesia-2024.html"
        },
        {
            label: "Villages without 4G",
            value: "~30%",
            trend: "Rural digital divide (2023)",
            trendColor: "#ef4444", // Merah (Kesenjangan infrastruktur)
            source: "Freedom House 2024",
            sourceUrl: "https://freedomhouse.org/country/indonesia/freedom-net/2024"
        }
    ],

    // Data untuk Targets & Indicators disesuaikan dengan Official UN Framework
    targets: [
        {
            targetId: "9.1",
            description: "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
            indicators: [
                {
                    id: "9.1.1",
                    description: "Proportion of the rural population who live within 2 km of an all-season road"
                },
                {
                    id: "9.1.2",
                    description: "Passenger and freight volumes, by mode of transport"
                }
            ]
        },
        {
            targetId: "9.2",
            description: "Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry’s share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries",
            indicators: [
                {
                    id: "9.2.1",
                    description: "Manufacturing value added as a proportion of GDP and per capita"
                },
                {
                    id: "9.2.2",
                    description: "Manufacturing employment as a proportion of total employment"
                }
            ]
        },
        {
            targetId: "9.3",
            description: "Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains and markets",
            indicators: [
                {
                    id: "9.3.1",
                    description: "Proportion of small-scale industries in total industry value added"
                },
                {
                    id: "9.3.2",
                    description: "Proportion of small-scale industries with a loan or line of credit"
                }
            ]
        },
        {
            targetId: "9.4",
            description: "By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities",
            indicators: [
                {
                    id: "9.4.1",
                    description: "CO2 emission per unit of value added"
                }
            ]
        },
        {
            targetId: "9.5",
            description: "Enhance scientific research, upgrade the technological capabilities of industrial sectors in all countries, in particular developing countries, including, by 2030, encouraging innovation and substantially increasing the number of research and development workers per 1 million people and public and private research and development spending",
            indicators: [
                {
                    id: "9.5.1",
                    description: "Research and development expenditure as a proportion of GDP"
                },
                {
                    id: "9.5.2",
                    description: "Researchers (in full-time equivalent) per million inhabitants"
                }
            ]
        },
        {
            targetId: "9.a",
            description: "Facilitate sustainable and resilient infrastructure development in developing countries through enhanced financial, technological and technical support to African countries, least developed countries, landlocked developing countries and small island developing States",
            indicators: [
                {
                    id: "9.a.1",
                    description: "Total official international support (official development assistance plus other official flows) to infrastructure"
                }
            ]
        },
        {
            targetId: "9.b",
            description: "Support domestic technology development, research and innovation in developing countries, including by ensuring a conducive policy environment for, inter alia, industrial diversification and value addition to commodities",
            indicators: [
                {
                    id: "9.b.1",
                    description: "Proportion of medium and high-tech industry value added in total value added"
                }
            ]
        },
        {
            targetId: "9.c",
            description: "Significantly increase access to information and communications technology and strive to provide universal and affordable access to the Internet in least developed countries by 2020",
            indicators: [
                {
                    id: "9.c.1",
                    description: "Proportion of population covered by a mobile network, by technology"
                }
            ]
        }
    ]
};
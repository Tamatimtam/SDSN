// File: src/data/goals/goal-08.js

export const goalData = {
    id: "08",
    title: "Decent Work and Economic Growth",
    description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all. Indonesia has maintained stable post-pandemic growth, but a highly informal labor market remains a massive challenge.",
    pulseText: "GDP growth is stable at ~5% and unemployment has dropped to 4.82%, however, nearly 59% of the workforce is still trapped in the informal sector with limited social protection.",

    // Data untuk Bento Grid (Berdasarkan data HTML SDGs Indonesia 2024)
    pulseMetrics: [
        {
            label: "GDP Growth",
            value: "5.05%",
            trend: "2024",
            trendColor: "#22c55e", // Hijau (Pertumbuhan stabil/baik)
            source: "BPS PDB 2024",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2025/02/05/2434/ekonomi-indonesia-triwulan-iv-2024-tumbuh-5-02-persen.html"
        },
        {
            label: "Unemployment Rate",
            value: "4.82%",
            trend: "▼ down from 5.32% (2023)",
            trendColor: "#22c55e", // Hijau (Pengangguran turun)
            source: "BPS Agustus 2024",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/11/05/2397/tingkat-pengangguran-terbuka--tpt--sebesar-4-91-persen-dan-rata-rata-upah-buruh-sebesar-3-04-juta-rupiah-per-bulan.html"
        },
        {
            label: "Total Labor Force",
            value: "149.4 jt",
            trend: "2024",
            trendColor: "#64748b", // Abu-abu (Data demografi)
            source: "BPS Agustus 2024",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/11/05/2397/tingkat-pengangguran-terbuka--tpt--sebesar-4-91-persen-dan-rata-rata-upah-buruh-sebesar-3-04-juta-rupiah-per-bulan.html"
        },
        {
            label: "Informal Employment",
            value: "~59%",
            trend: "of total workers",
            trendColor: "#ef4444", // Merah (Terlalu tinggi, kurang perlindungan)
            source: "BPS Ketenagakerjaan",
            sourceUrl: "https://www.bps.go.id/en/statistics-table?subject=6"
        },
        {
            label: "Financial Inclusion",
            value: "~75%",
            trend: "Have bank accounts",
            trendColor: "#f59e0b", // Kuning (Meningkat tapi masih perlu didorong)
            source: "OJK SNLIK 2024",
            sourceUrl: "https://www.ojk.go.id/id/berita-dan-kegiatan/publikasi/Pages/Survei-Nasional-Literasi-dan-Inklusi-Keuangan-2024.aspx"
        },
        {
            label: "GDP per Capita (PPP)",
            value: "$15.3K",
            trend: "USD 2024",
            trendColor: "#22c55e", // Hijau
            source: "IMF WEO Oct 2024",
            sourceUrl: "https://www.imf.org/en/Publications/WEO/weo-database/2024/October/weo-report?c=536"
        }
    ],

    // Data untuk Targets & Indicators disesuaikan dengan Official UN Framework
    targets: [
        {
            targetId: "8.1",
            description: "Sustain per capita economic growth in accordance with national circumstances and, in particular, at least 7 per cent gross domestic product growth per annum in the least developed countries",
            indicators: [
                {
                    id: "8.1.1",
                    description: "Annual growth rate of real GDP per capita"
                }
            ]
        },
        {
            targetId: "8.2",
            description: "Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labour-intensive sectors",
            indicators: [
                {
                    id: "8.2.1",
                    description: "Annual growth rate of real GDP per employed person"
                }
            ]
        },
        {
            targetId: "8.3",
            description: "Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sized enterprises, including through access to financial services",
            indicators: [
                {
                    id: "8.3.1",
                    description: "Proportion of informal employment in non-agriculture employment, by sex"
                }
            ]
        },
        {
            targetId: "8.4",
            description: "Improve progressively, through 2030, global resource efficiency in consumption and production and endeavour to decouple economic growth from environmental degradation, in accordance with the 10-Year Framework of Programmes on Sustainable Consumption and Production, with developed countries taking the lead",
            indicators: [
                {
                    id: "8.4.1",
                    description: "Material footprint, material footprint per capita, and material footprint per GDP"
                },
                {
                    id: "8.4.2",
                    description: "Domestic material consumption, domestic material consumption per capita, and domestic material consumption per GDP"
                }
            ]
        },
        {
            targetId: "8.5",
            description: "By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value",
            indicators: [
                {
                    id: "8.5.1",
                    description: "Average hourly earnings of female and male employees, by occupation, age and persons with disabilities"
                },
                {
                    id: "8.5.2",
                    description: "Unemployment rate, by sex, age and persons with disabilities"
                }
            ]
        },
        {
            targetId: "8.6",
            description: "By 2020, substantially reduce the proportion of youth not in employment, education or training",
            indicators: [
                {
                    id: "8.6.1",
                    description: "Proportion of youth (aged 15–24 years) not in education, employment or training"
                }
            ]
        },
        {
            targetId: "8.7",
            description: "Take immediate and effective measures to eradicate forced labour, end modern slavery and human trafficking and secure the prohibition and elimination of the worst forms of child labour, including recruitment and use of child soldiers, and by 2025 end child labour in all its forms",
            indicators: [
                {
                    id: "8.7.1",
                    description: "Proportion and number of children aged 5–17 years engaged in child labour, by sex and age"
                }
            ]
        },
        {
            targetId: "8.8",
            description: "Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment",
            indicators: [
                {
                    id: "8.8.1",
                    description: "Frequency rates of fatal and non-fatal occupational injuries, by sex and migrant status"
                },
                {
                    id: "8.8.2",
                    description: "Level of national compliance with labour rights (freedom of association and collective bargaining) based on International Labour Organization (ILO) textual sources and national legislation, by sex and migrant status"
                }
            ]
        },
        {
            targetId: "8.9",
            description: "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
            indicators: [
                {
                    id: "8.9.1",
                    description: "Tourism direct GDP as a proportion of total GDP and in growth rate"
                }
            ]
        },
        {
            targetId: "8.10",
            description: "Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all",
            indicators: [
                {
                    id: "8.10.1",
                    description: "(a) Number of commercial bank branches per 100,000 adults and (b) number of automated teller machines (ATMs) per 100,000 adults"
                },
                {
                    id: "8.10.2",
                    description: "Proportion of adults (15 years and older) with an account at a bank or other financial institution or with a mobile-money-service provider"
                }
            ]
        },
        {
            targetId: "8.a",
            description: "Increase Aid for Trade support for developing countries, in particular least developed countries, including through the Enhanced Integrated Framework for Trade-Related Technical Assistance to Least Developed Countries",
            indicators: [
                {
                    id: "8.a.1",
                    description: "Aid for Trade commitments and disbursements"
                }
            ]
        },
        {
            targetId: "8.b",
            description: "By 2020, develop and operationalize a global strategy for youth employment and implement the Global Jobs Pact of the International Labour Organization",
            indicators: [
                {
                    id: "8.b.1",
                    description: "Existence of a developed and operationalized national strategy for youth employment, as a distinct strategy or as part of a national employment strategy"
                }
            ]
        }
    ]
};
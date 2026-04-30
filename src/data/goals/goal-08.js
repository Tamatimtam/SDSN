// File: src/data/goals/goal-08.js

export const goalData = {
    id: "08",
    title: "Decent Work and Economic Growth",
    description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all. Indonesia maintains stable growth, but faces challenges in informal employment and job quality.",
    pulseText: "Indonesia’s economy is growing steadily around 5%, but a large informal sector and uneven job quality remain key structural challenges.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "GDP Growth",
            value: "5.05%",
            trend: "2024",
            trendColor: "#22c55e",
            source: "BPS Indonesia",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2025/02/05/2434/ekonomi-indonesia-triwulan-iv-2024-tumbuh-5-02-persen.html"
        },
        {
            label: "Unemployment Rate",
            value: "4.82%",
            trend: "▼ down from 5.32% (2023)",
            trendColor: "#22c55e",
            source: "BPS Indonesia",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/11/05/2397/tingkat-pengangguran-terbuka--tpt--sebesar-4-91-persen-dan-rata-rata-upah-buruh-sebesar-3-04-juta-rupiah-per-bulan.html"
        },
        {
            label: "Labor Force",
            value: "149.4 million",
            trend: "2024",
            trendColor: "#64748b",
            source: "BPS Indonesia",
            sourceUrl: "https://www.bps.go.id/en/pressrelease/2024/11/05/2397/tingkat-pengangguran-terbuka--tpt--sebesar-4-91-persen-dan-rata-rata-upah-buruh-sebesar-3-04-juta-rupiah-per-bulan.html"
        },
        {
            label: "Informal Employment",
            value: "59%",
            trend: "of total workforce",
            trendColor: "#ef4444",
            source: "BPS Employment Data",
            sourceUrl: "https://www.bps.go.id/en/statistics-table?subject=6"
        },
        {
            label: "Financial Inclusion",
            value: "75%",
            trend: "have bank accounts",
            trendColor: "#22c55e",
            source: "OJK SNLIK 2024",
            sourceUrl: "https://www.ojk.go.id/id/berita-dan-kegiatan/publikasi/Pages/Survei-Nasional-Literasi-dan-Inklusi-Keuangan-2024.aspx"
        },
        {
            label: "GDP per Capita (PPP)",
            value: "$15.3K",
            trend: "2024",
            trendColor: "#64748b",
            source: "IMF World Economic Outlook",
            sourceUrl: "https://www.imf.org/en/Publications/WEO/weo-database/2024/October/weo-report?c=536"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "8.1",
            description: "Sustain per capita economic growth in accordance with national circumstances.",
            indicators: [
                {
                    id: "8.1.1",
                    description: "Annual growth rate of real GDP per capita."
                }
            ]
        },
        {
            targetId: "8.3",
            description: "Promote development-oriented policies that support productive activities, decent job creation, and entrepreneurship.",
            indicators: [
                {
                    id: "8.3.1",
                    description: "Proportion of informal employment in total employment."
                }
            ]
        },
        {
            targetId: "8.5",
            description: "By 2030, achieve full and productive employment and decent work for all women and men.",
            indicators: [
                {
                    id: "8.5.1",
                    description: "Average hourly earnings of employees."
                },
                {
                    id: "8.5.2",
                    description: "Unemployment rate."
                }
            ]
        },
        {
            targetId: "8.6",
            description: "By 2020, substantially reduce the proportion of youth not in employment, education or training.",
            indicators: [
                {
                    id: "8.6.1",
                    description: "Proportion of youth not in employment, education or training (NEET)."
                }
            ]
        },
        {
            targetId: "8.8",
            description: "Protect labour rights and promote safe working environments.",
            indicators: [
                {
                    id: "8.8.1",
                    description: "Frequency rates of fatal and non-fatal occupational injuries."
                }
            ]
        },
        {
            targetId: "8.10",
            description: "Strengthen the capacity of domestic financial institutions to encourage financial inclusion.",
            indicators: [
                {
                    id: "8.10.1",
                    description: "Number of bank branches and ATMs per 100,000 adults."
                }
            ]
        }
    ]
};
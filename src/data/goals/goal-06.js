// File: src/data/goals/goal-06.js

export const goalData = {
    id: "06",
    title: "Clean Water and Sanitation",
    description: "Ensure availability and sustainable management of water and sanitation for all. While Indonesia has made great strides in basic water access, wastewater treatment and closing the urban-rural gap remain critical challenges.",
    pulseText: "Access to basic drinking water is high (91.2%), but less than 10% of wastewater is properly treated, and disparities between urban and rural areas are still prominent.",

    // Data untuk Bento Grid (Berdasarkan data HTML SDGs Indonesia 2024)
    pulseMetrics: [
        {
            label: "Safe Drinking Water Access",
            value: "91.2%",
            trend: "2023",
            trendColor: "#22c55e", // Hijau (Capaian sangat baik)
            source: "BPS SDGs Kesra 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Basic Sanitation Access",
            value: "82.4%",
            trend: "2023",
            trendColor: "#f59e0b", // Kuning (Terus meningkat tapi belum universal)
            source: "BPS SDGs Kesra 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Open Defecation Free (ODF)",
            value: "~79%",
            trend: "Villages free from open defecation",
            trendColor: "#f59e0b", // Kuning
            source: "STBM Kemenkes",
            sourceUrl: "https://monev.stbm.kemkes.go.id"
        },
        {
            label: "Rural Water Access",
            value: "~83%",
            trend: "vs Urban access at ~99%",
            trendColor: "#f59e0b", // Kuning (Ada kesenjangan)
            source: "WHO/UNICEF JMP",
            sourceUrl: "https://washdata.org/data/household#!/idn"
        },
        {
            label: "Wastewater Treatment",
            value: "< 10%",
            trend: "Safely managed wastewater (Very low)",
            trendColor: "#ef4444", // Merah (Kritis)
            source: "SDG Index 2025",
            sourceUrl: "https://dashboards.sdgindex.org/profiles/indonesia/indicators/"
        },
        {
            label: "Urban Water Access",
            value: "~99%",
            trend: "Almost universal in cities",
            trendColor: "#22c55e", // Hijau
            source: "WHO/UNICEF JMP",
            sourceUrl: "https://washdata.org/data/household#!/idn"
        }
    ],

    // Data untuk Targets & Indicators disesuaikan dengan Official UN Framework
    targets: [
        {
            targetId: "6.1",
            description: "By 2030, achieve universal and equitable access to safe and affordable drinking water for all",
            indicators: [
                {
                    id: "6.1.1",
                    description: "Proportion of population using safely managed drinking water services"
                }
            ]
        },
        {
            targetId: "6.2",
            description: "By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls and those in vulnerable situations",
            indicators: [
                {
                    id: "6.2.1",
                    description: "Proportion of population using (a) safely managed sanitation services and (b) a hand-washing facility with soap and water"
                }
            ]
        },
        {
            targetId: "6.3",
            description: "By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally",
            indicators: [
                {
                    id: "6.3.1",
                    description: "Proportion of domestic and industrial wastewater flows safely treated"
                },
                {
                    id: "6.3.2",
                    description: "Proportion of bodies of water with good ambient water quality"
                }
            ]
        },
        {
            targetId: "6.4",
            description: "By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity",
            indicators: [
                {
                    id: "6.4.1",
                    description: "Change in water-use efficiency over time"
                },
                {
                    id: "6.4.2",
                    description: "Level of water stress: freshwater withdrawal as a proportion of available freshwater resources"
                }
            ]
        },
        {
            targetId: "6.5",
            description: "By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate",
            indicators: [
                {
                    id: "6.5.1",
                    description: "Degree of integrated water resources management"
                },
                {
                    id: "6.5.2",
                    description: "Proportion of transboundary basin area with an operational arrangement for water cooperation"
                }
            ]
        },
        {
            targetId: "6.6",
            description: "By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes",
            indicators: [
                {
                    id: "6.6.1",
                    description: "Change in the extent of water-related ecosystems over time"
                }
            ]
        },
        {
            targetId: "6.a",
            description: "By 2030, expand international cooperation and capacity-building support to developing countries in water- and sanitation-related activities and programmes, including water harvesting, desalination, water efficiency, wastewater treatment, recycling and reuse technologies",
            indicators: [
                {
                    id: "6.a.1",
                    description: "Amount of water- and sanitation-related official development assistance that is part of a government-coordinated spending plan"
                }
            ]
        },
        {
            targetId: "6.b",
            description: "Support and strengthen the participation of local communities in improving water and sanitation management",
            indicators: [
                {
                    id: "6.b.1",
                    description: "Proportion of local administrative units with established and operational policies and procedures for participation of local communities in water and sanitation management"
                }
            ]
        }
    ]
};
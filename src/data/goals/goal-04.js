// File: src/data/goals/goal-04.js

export const goalData = {
    id: "04",
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. Indonesia has achieved near-universal primary education, but challenges remain in access to higher education and quality disparities.",
    pulseText: "Access to basic education in Indonesia is strong, but gaps in quality, regional inequality, and continuation to higher levels remain significant challenges.",

    // Data untuk Bento Grid
    pulseMetrics: [
        {
            label: "Adult Literacy Rate",
            value: "96.0%",
            trend: "2022",
            trendColor: "#22c55e",
            source: "World Bank",
            sourceUrl: "https://data.worldbank.org/indicator/SE.ADT.LITR.ZS?locations=ID"
        },
        {
            label: "Primary School Enrollment (Net)",
            value: "97.2%",
            trend: "2023",
            trendColor: "#22c55e",
            source: "BPS SDGs Welfare Indicators 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Junior Secondary Enrollment",
            value: "81.5%",
            trend: "2023",
            trendColor: "#64748b",
            source: "BPS SDGs Welfare Indicators 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Senior Secondary Enrollment",
            value: "70.4%",
            trend: "2023",
            trendColor: "#f59e0b",
            source: "BPS SDGs Welfare Indicators 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Tertiary Enrollment (Gross)",
            value: "31.5%",
            trend: "2023",
            trendColor: "#ef4444",
            source: "BPS SDGs Welfare Indicators 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "SDGs Education Indicators Report",
            value: "BPS 2024",
            trend: "official national report",
            trendColor: "#64748b",
            source: "BPS",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/31/936a26d5d2b168b9971d3b02/indonesian-sustainable-development-goals-indicators-2024.html"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "4.1",
            description: "By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education.",
            indicators: [
                {
                    id: "4.1.1",
                    description: "Proportion of children achieving minimum proficiency in reading and mathematics."
                }
            ]
        },
        {
            targetId: "4.2",
            description: "By 2030, ensure that all girls and boys have access to quality early childhood development and pre-primary education.",
            indicators: [
                {
                    id: "4.2.1",
                    description: "Proportion of children developmentally on track in health, learning and psychosocial well-being."
                },
                {
                    id: "4.2.2",
                    description: "Participation rate in organized learning before primary school."
                }
            ]
        },
        {
            targetId: "4.3",
            description: "By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education.",
            indicators: [
                {
                    id: "4.3.1",
                    description: "Participation rate of youth and adults in formal and non-formal education."
                }
            ]
        },
        {
            targetId: "4.4",
            description: "By 2030, substantially increase the number of youth and adults with relevant skills for employment and entrepreneurship.",
            indicators: [
                {
                    id: "4.4.1",
                    description: "Proportion of youth and adults with ICT skills."
                }
            ]
        },
        {
            targetId: "4.5",
            description: "By 2030, eliminate gender disparities in education and ensure equal access for vulnerable groups.",
            indicators: [
                {
                    id: "4.5.1",
                    description: "Parity indices for education indicators (female/male, rural/urban, etc.)."
                }
            ]
        },
        {
            targetId: "4.c",
            description: "By 2030, substantially increase the supply of qualified teachers.",
            indicators: [
                {
                    id: "4.c.1",
                    description: "Proportion of teachers with minimum required qualifications."
                }
            ]
        }
    ]
};
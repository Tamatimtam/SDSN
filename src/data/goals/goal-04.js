// File: src/data/goals/goal-04.js

export const goalData = {
    id: "04",
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. Indonesia has achieved near-universal primary education, but improving education quality, secondary/tertiary enrollment, and reducing regional disparities remain significant challenges.",
    pulseText: "Access to primary education is strong (mandatory 12-year education is ongoing), but enrollment rates drop significantly at higher education levels, and quality disparities across regions persist.",

    // Data untuk Bento Grid (Berdasarkan update data 2023/2024)
    pulseMetrics: [
        {
            label: "Adult Literacy Rate",
            value: "96.0%",
            trend: "population 15+ years (2022)",
            trendColor: "#22c55e", // Hijau (Capaian baik)
            source: "World Bank",
            sourceUrl: "https://data.worldbank.org/indicator/SE.ADT.LITR.ZS?locations=ID"
        },
        {
            label: "Primary Net Enrollment",
            value: "97.2%",
            trend: "almost universal (2023)",
            trendColor: "#22c55e", // Hijau
            source: "BPS SDGs Kesra 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Junior High Enrollment",
            value: "81.5%",
            trend: "Net Enrollment Rate / APM (2023)",
            trendColor: "#f59e0b", // Kuning (Perlu perbaikan)
            source: "BPS Indonesia",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Senior High Enrollment",
            value: "70.4%",
            trend: "Net Enrollment Rate / APM (2023)",
            trendColor: "#f59e0b", // Kuning 
            source: "BPS Indonesia",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Tertiary Enrollment",
            value: "31.5%",
            trend: "Gross Enrollment Rate / APK (2023)",
            trendColor: "#ef4444", // Merah (Masih sangat rendah)
            source: "BPS Indonesia",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Regional Disparity",
            value: "High Gap",
            trend: "Quality & infrastructure gap between regions",
            trendColor: "#ef4444", // Merah
            source: "Indonesian SDGs Indicators 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/31/936a26d5d2b168b9971d3b02/indonesian-sustainable-development-goals-indicators-2024.html"
        }
    ],

    // Data untuk Targets & Indicators yang sudah disesuaikan
    targets: [
        {
            targetId: "4.1",
            description: "By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes",
            indicators: [
                {
                    id: "4.1.1",
                    description: "Proportion of children and young people (a) in grades 2/3; (b) at the end of primary; and (c) at the end of lower secondary achieving at least a minimum proficiency level in (i) reading and (ii) mathematics, by sex"
                },
                {
                    id: "4.1.2",
                    description: "Completion rate (primary education, lower secondary education, upper secondary education)"
                }
            ]
        },
        {
            targetId: "4.2",
            description: "By 2030, ensure that all girls and boys have access to quality early childhood development, care and pre-primary education so that they are ready for primary education",
            indicators: [
                {
                    id: "4.2.1",
                    description: "Proportion of children aged 24–59 months who are developmentally on track in health, learning and psychosocial well-being, by sex"
                },
                {
                    id: "4.2.2",
                    description: "Participation rate in organized learning (one year before the official primary entry age), by sex"
                }
            ]
        },
        {
            targetId: "4.3",
            description: "By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university",
            indicators: [
                {
                    id: "4.3.1",
                    description: "Participation rate of youth and adults in formal and non-formal education and training in the previous 12 months, by sex"
                }
            ]
        },
        {
            targetId: "4.4",
            description: "By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship",
            indicators: [
                {
                    id: "4.4.1",
                    description: "Proportion of youth and adults with information and communications technology (ICT) skills, by type of skill"
                }
            ]
        },
        {
            targetId: "4.5",
            description: "By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations",
            indicators: [
                {
                    id: "4.5.1",
                    description: "Parity indices (female/male, rural/urban, bottom/top wealth quintile and others such as disability status, indigenous peoples and conflict-affected, as data become available) for all education indicators on this list that can be disaggregated"
                }
            ]
        },
        {
            targetId: "4.6",
            description: "By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy",
            indicators: [
                {
                    id: "4.6.1",
                    description: "Youth/adult literacy rate"
                }
            ]
        },
        {
            targetId: "4.7",
            description: "By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture’s contribution to sustainable development",
            indicators: [
                {
                    id: "4.7.1",
                    description: "Extent to which (i) global citizenship education and (ii) education for sustainable development are mainstreamed in (a) national education policies; (b) curricula; (c) teacher education and (d) student assessment"
                }
            ]
        },
        {
            targetId: "4.a",
            description: "Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, non-violent, inclusive and effective learning environments for all",
            indicators: [
                {
                    id: "4.a.1",
                    description: "Proportion of schools offering basic services, by type of service"
                }
            ]
        },
        {
            targetId: "4.b",
            description: "By 2020, substantially expand globally the number of scholarships available to developing countries, in particular least developed countries, small island developing States and African countries, for enrolment in higher education, including vocational training and information and communications technology, technical, engineering and scientific programmes, in developed countries and other developing countries",
            indicators: [
                {
                    id: "4.b.1",
                    description: "Volume of official development assistance flows for scholarships"
                }
            ]
        },
        {
            targetId: "4.c",
            description: "By 2030, substantially increase the supply of qualified teachers, including through international cooperation for teacher training in developing countries, especially least developed countries and small island developing States",
            indicators: [
                {
                    id: "4.c.1",
                    description: "Proportion of teachers with the minimum required qualifications, by education level"
                }
            ]
        }
    ]
};
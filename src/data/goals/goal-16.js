// File: src/data/goals/goal-16.js

export const goalData = {
    id: "16",
    title: "Peace, Justice and Strong Institutions",
    description: "Promote peaceful and inclusive societies, provide access to justice for all and build effective, accountable and inclusive institutions at all levels. While Indonesia maintains a stable democracy and low rates of violent crime, systemic corruption remains a significant obstacle to development.",
    pulseText: "The fight against corruption is ongoing. The Corruption Perception Index (CPI) improved slightly to 37/100 in 2024, but this score still indicates a serious systemic problem. On the other hand, the nation's homicide rate is remarkably low.",

    // Data untuk Bento Grid (Berdasarkan data HTML SDGs Indonesia 2024)
    pulseMetrics: [
        {
            label: "Corruption Perception Index",
            value: "37/100",
            trend: "▲ up from 34 (2023)",
            trendColor: "#f59e0b", // Kuning (Skor rendah tapi ada perbaikan)
            source: "Transparency International 2024",
            sourceUrl: "https://www.transparency.org/en/countries/indonesia"
        },
        {
            label: "Press Freedom Index",
            value: "Rank 66",
            trend: "out of 180 countries (2024)",
            trendColor: "#f59e0b", // Kuning (Posisi menengah)
            source: "Reporters Without Borders 2024",
            sourceUrl: "https://rsf.org/en/country/indonesia"
        },
        {
            label: "Homicide Rate",
            value: "~0.4",
            trend: "per 100,000 people (Low)",
            trendColor: "#22c55e", // Hijau (Sangat baik)
            source: "SDG Index / UNODC",
            sourceUrl: "https://dashboards.sdgindex.org/profiles/indonesia/indicators/"
        },
        {
            label: "Birth Registration (<5 yrs)",
            value: "~85%",
            trend: "Approaching universal coverage",
            trendColor: "#22c55e", // Hijau (Capaian baik)
            source: "BPS SDGs Kesra 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/19/61d0e5d731bebf654f5cd6b3/indikator-sdgs-kesejahteraan-rakyat-2024.html"
        },
        {
            label: "Child Labor",
            value: "~4.7%",
            trend: "Ages 10-17 engaged in work",
            trendColor: "#ef4444", // Merah (Perlu perhatian serius)
            source: "BPS SDGs Indicators 2024",
            sourceUrl: "https://www.bps.go.id/en/publication/2024/12/31/936a26d5d2b168b9971d3b02/indonesian-sustainable-development-goals-indicators-2024.html"
        },
        {
            label: "CPI Ranking",
            value: "109 / 180",
            trend: "2024 Ranking",
            trendColor: "#f59e0b", // Kuning
            source: "Transparency International 2024",
            sourceUrl: "https://www.transparency.org/en/countries/indonesia"
        }
    ],

    // Data untuk Targets & Indicators disesuaikan dengan daftar lengkap dan resmi
    targets: [
        {
            targetId: "16.1",
            description: "Significantly reduce all forms of violence and related death rates everywhere",
            indicators: [
                {
                    id: "16.1.1",
                    description: "Number of victims of intentional homicide per 100,000 population, by sex and age"
                },
                {
                    id: "16.1.2",
                    description: "Conflict-related deaths per 100,000 population, by sex, age and cause"
                },
                {
                    id: "16.1.3",
                    description: "Proportion of population subjected to (a) physical violence, (b) psychological violence and (c) sexual violence in the previous 12 months"
                },
                {
                    id: "16.1.4",
                    description: "Proportion of population that feel safe walking alone around the area they live"
                }
            ]
        },
        {
            targetId: "16.2",
            description: "End abuse, exploitation, trafficking and all forms of violence against and torture of children",
            indicators: [
                {
                    id: "16.2.1",
                    description: "Proportion of children aged 1–17 years who experienced any physical punishment and/or psychological aggression by caregivers in the past month"
                },
                {
                    id: "16.2.2",
                    description: "Number of victims of human trafficking per 100,000 population, by sex, age and form of exploitation"
                },
                {
                    id: "16.2.3",
                    description: "Proportion of young women and men aged 18–29 years who experienced sexual violence by age 18"
                }
            ]
        },
        {
            targetId: "16.3",
            description: "Promote the rule of law at the national and international levels and ensure equal access to justice for all",
            indicators: [
                {
                    id: "16.3.1",
                    description: "Proportion of victims of violence in the previous 12 months who reported their victimization to competent authorities or other officially recognized conflict resolution mechanisms"
                },
                {
                    id: "16.3.2",
                    description: "Unsentenced detainees as a proportion of overall prison population"
                },
                {
                    id: "16.3.3",
                    description: "Proportion of the population who have experienced a dispute in the past two years and who accessed a formal or informal dispute resolution mechanism, by type of mechanism"
                }
            ]
        },
        {
            targetId: "16.4",
            description: "By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery and return of stolen assets and combat all forms of organized crime",
            indicators: [
                {
                    id: "16.4.1",
                    description: "Total value of inward and outward illicit financial flows (in current United States dollars)"
                },
                {
                    id: "16.4.2",
                    description: "Proportion of seized, found or surrendered arms whose illicit origin or context has been traced or established by a competent authority in line with international instruments"
                }
            ]
        },
        {
            targetId: "16.5",
            description: "Substantially reduce corruption and bribery in all their forms",
            indicators: [
                {
                    id: "16.5.1",
                    description: "Proportion of persons who had at least one contact with a public official and who paid a bribe to a public official, or were asked for a bribe by those public officials, during the previous 12 months"
                },
                {
                    id: "16.5.2",
                    description: "Proportion of businesses that had at least one contact with a public official and that paid a bribe to a public official, or were asked for a bribe by those public officials during the previous 12 months"
                }
            ]
        },
        {
            targetId: "16.6",
            description: "Develop effective, accountable and transparent institutions at all levels",
            indicators: [
                {
                    id: "16.6.1",
                    description: "Primary government expenditures as a proportion of original approved budget, by sector (or by budget codes or similar)"
                },
                {
                    id: "16.6.2",
                    description: "Proportion of population satisfied with their last experience of public services"
                }
            ]
        },
        {
            targetId: "16.7",
            description: "Ensure responsive, inclusive, participatory and representative decision-making at all levels",
            indicators: [
                {
                    id: "16.7.1",
                    description: "Proportions of positions in national and local institutions, including (a) the legislatures; (b) the public service; and (c) the judiciary, compared to national distributions, by sex, age, persons with disabilities and population groups"
                },
                {
                    id: "16.7.2",
                    description: "Proportion of population who believe decision-making is inclusive and responsive, by sex, age, disability and population group"
                }
            ]
        },
        {
            targetId: "16.8",
            description: "Broaden and strengthen the participation of developing countries in the institutions of global governance",
            indicators: [
                {
                    id: "16.8.1",
                    description: "Proportion of members and voting rights of developing countries in international organizations"
                }
            ]
        },
        {
            targetId: "16.9",
            description: "By 2030, provide legal identity for all, including birth registration",
            indicators: [
                {
                    id: "16.9.1",
                    description: "Proportion of children under 5 years of age whose births have been registered with a civil authority, by age"
                }
            ]
        },
        {
            targetId: "16.10",
            description: "Ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements",
            indicators: [
                {
                    id: "16.10.1",
                    description: "Number of verified cases of killing, kidnapping, enforced disappearance, arbitrary detention and torture of journalists, associated media personnel, trade unionists and human rights advocates in the previous 12 months"
                },
                {
                    id: "16.10.2",
                    description: "Number of countries that adopt and implement constitutional, statutory and/or policy guarantees for public access to information"
                }
            ]
        },
        {
            targetId: "16.a",
            description: "Strengthen relevant national institutions, including through international cooperation, for building capacity at all levels, in particular in developing countries, to prevent violence and combat terrorism and crime",
            indicators: [
                {
                    id: "16.a.1",
                    description: "Existence of independent national human rights institutions in compliance with the Paris Principles"
                }
            ]
        },
        {
            targetId: "16.b",
            description: "Promote and enforce non-discriminatory laws and policies for sustainable development",
            indicators: [
                {
                    id: "16.b.1",
                    description: "Proportion of population reporting having personally felt discriminated against or harassed in the previous 12 months on the basis of a ground of discrimination prohibited under international human rights law"
                }
            ]
        }
    ]
};
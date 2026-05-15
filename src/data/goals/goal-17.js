// File: src/data/goals/goal-17.js

export const goalData = {
    id: "17",
    title: "Partnerships for the Goals",
    description: "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development. This goal focuses on finance, technology, capacity-building, trade, and systemic issues to support the achievement of all SDGs.",
    pulseText: "Indonesia has achieved an impressive 62.5% of its SDG targets—the highest in its income class in Asia. However, this progress is constrained by a critically low tax-to-GDP ratio (10.08%), which limits domestic capacity to fund sustainable development.",

    // Data untuk Bento Grid (Berdasarkan data HTML SDGs Indonesia 2024)
    pulseMetrics: [
        {
            label: "Tax-to-GDP Ratio",
            value: "10.08%",
            trend: "2024 (Far below OECD avg of 25%)",
            trendColor: "#ef4444", // Merah (Sangat rendah/Kritis)
            source: "Antara / Kemenkeu 2024",
            sourceUrl: "https://en.antaranews.com/news/397399/indonesias-new-fiscal-policy-growth-first-levies-later"
        },
        {
            label: "SDG Targets Achieved",
            value: "62.5%",
            trend: "Highest in upper-middle income Asia",
            trendColor: "#22c55e", // Hijau (Capaian luar biasa)
            source: "KemenPAN-RB Nov 2024",
            sourceUrl: "https://www.menpan.go.id/site/berita-terkini/berita-daerah/indonesia-capai-62-5-persen-target-sdgs-2030-tertinggi-di-asia"
        },
        {
            label: "FDI Inflow",
            value: "$47.3 B",
            trend: "2024 (BKPM)",
            trendColor: "#22c55e", // Hijau (Investasi kuat)
            source: "BKPM Statistik Investasi",
            sourceUrl: "https://www.bkpm.go.id/id/statistik/statistik-investasi"
        },
        {
            label: "ODA Received",
            value: "~$2.3 B",
            trend: "Decreasing (upper-middle income status)",
            trendColor: "#f59e0b", // Kuning (Reflects transition)
            source: "World Bank ODA Data",
            sourceUrl: "https://data.worldbank.org/indicator/DT.ODA.ALLD.CD?locations=ID"
        },
        {
            label: "SDG Bond Issuance",
            value: "Active",
            trend: "Issued 2021–2024",
            trendColor: "#22c55e", // Hijau (Inisiatif baik)
            source: "Kemenkeu SDG Bond",
            sourceUrl: "https://www.kemenkeu.go.id/informasi-publik/publikasi/berita-utama/Penerbitan-SDG-Bond"
        },
        {
            label: "State Revenue (APBN)",
            value: "Rp 2.8 Quadrillion",
            trend: "2024 Realization",
            trendColor: "#64748b", // Abu-abu
            source: "Kemenkeu APBN 2024",
            sourceUrl: "https://www.kemenkeu.go.id/apbn2024"
        }
    ],

    // Data untuk Targets & Indicators disesuaikan dengan daftar lengkap dan resmi
    targets: [
        {
            targetId: "17.1",
            description: "Strengthen domestic resource mobilization, including through international support to developing countries, to improve domestic capacity for tax and other revenue collection",
            indicators: [
                {
                    id: "17.1.1",
                    description: "Total government revenue as a proportion of GDP, by source"
                },
                {
                    id: "17.1.2",
                    description: "Proportion of domestic budget funded by domestic taxes"
                }
            ]
        },
        {
            targetId: "17.2",
            description: "Developed countries to implement fully their official development assistance commitments, including the commitment by many developed countries to achieve the target of 0.7 per cent of gross national income for official development assistance (ODA/GNI) to developing countries and 0.15 to 0.20 per cent of ODA/GNI to least developed countries; ODA providers are encouraged to consider setting a target to provide at least 0.20 per cent of ODA/GNI to least developed countries",
            indicators: [
                {
                    id: "17.2.1",
                    description: "Net official development assistance, total and to least developed countries, as a proportion of the Organization for Economic Cooperation and Development (OECD) Development Assistance Committee donors’ gross national income (GNI)"
                }
            ]
        },
        {
            targetId: "17.3",
            description: "Mobilize additional financial resources for developing countries from multiple sources",
            indicators: [
                {
                    id: "17.3.1",
                    description: "Foreign direct investment, official development assistance and South-South cooperation as a proportion of gross national income"
                },
                {
                    id: "17.3.2",
                    description: "Volume of remittances (in United States dollars) as a proportion of total GDP"
                }
            ]
        },
        {
            targetId: "17.4",
            description: "Assist developing countries in attaining long-term debt sustainability through coordinated policies aimed at fostering debt financing, debt relief and debt restructuring, as appropriate, and address the external debt of highly indebted poor countries to reduce debt distress",
            indicators: [
                {
                    id: "17.4.1",
                    description: "Debt service as a proportion of exports of goods and services"
                }
            ]
        },
        {
            targetId: "17.5",
            description: "Adopt and implement investment promotion regimes for least developed countries",
            indicators: [
                {
                    id: "17.5.1",
                    description: "Number of countries that adopt and implement investment promotion regimes for developing countries, including the least developed countries"
                }
            ]
        },
        {
            targetId: "17.6",
            description: "Enhance North-South, South-South and triangular regional and international cooperation on and access to science, technology and innovation and enhance knowledge-sharing on mutually agreed terms, including through improved coordination among existing mechanisms, in particular at the United Nations level, and through a global technology facilitation mechanism",
            indicators: [
                {
                    id: "17.6.1",
                    description: "Fixed Internet broadband subscriptions per 100 inhabitants, by speed"
                }
            ]
        },
        {
            targetId: "17.7",
            description: "Promote the development, transfer, dissemination and diffusion of environmentally sound technologies to developing countries on favourable terms, including on concessional and preferential terms, as mutually agreed",
            indicators: [
                {
                    id: "17.7.1",
                    description: "Total amount of funding for developing countries to promote the development, transfer, dissemination and diffusion of environmentally sound technologies"
                }
            ]
        },
        {
            targetId: "17.8",
            description: "Fully operationalize the technology bank and science, technology and innovation capacity-building mechanism for least developed countries by 2017 and enhance the use of enabling technology, in particular information and communications technology",
            indicators: [
                {
                    id: "17.8.1",
                    description: "Proportion of individuals using the Internet"
                }
            ]
        },
        {
            targetId: "17.9",
            description: "Enhance international support for implementing effective and targeted capacity-building in developing countries to support national plans to implement all the Sustainable Development Goals, including through north–south, South-South and triangular cooperation",
            indicators: [
                {
                    id: "17.9.1",
                    description: "Dollar value of financial and technical assistance (including through north–south, South‑South and triangular cooperation) committed to developing countries"
                }
            ]
        },
        {
            targetId: "17.10",
            description: "Promote a universal, rules-based, open, non‑discriminatory and equitable multilateral trading system under the World Trade Organization, including through the conclusion of negotiations under its Doha Development Agenda",
            indicators: [
                {
                    id: "17.10.1",
                    description: "Worldwide weighted tariff-average"
                }
            ]
        },
        {
            targetId: "17.11",
            description: "Significantly increase the exports of developing countries, in particular with a view to doubling the least developed countries’ share of global exports by 2020",
            indicators: [
                {
                    id: "17.11.1",
                    description: "Developing countries’ and least developed countries’ share of global exports"
                }
            ]
        },
        {
            targetId: "17.12",
            description: "Realize timely implementation of duty-free and quota-free market access on a lasting basis for all least developed countries, consistent with World Trade Organization decisions, including by ensuring that preferential rules of origin applicable to imports from least developed countries are transparent and simple, and contribute to facilitating market access",
            indicators: [
                {
                    id: "17.12.1",
                    description: "Weighted average tariffs faced by developing countries, least developed countries and small island developing States"
                }
            ]
        },
        {
            targetId: "17.13",
            description: "Enhance global macroeconomic stability, including through policy coordination and policy coherence",
            indicators: [
                {
                    id: "17.13.1",
                    description: "Macroeconomic Dashboard"
                }
            ]
        },
        {
            targetId: "17.14",
            description: "Enhance policy coherence for sustainable development",
            indicators: [
                {
                    id: "17.14.1",
                    description: "Number of countries with mechanisms in place to enhance policy coherence of sustainable development"
                }
            ]
        },
        {
            targetId: "17.15",
            description: "Respect each country's policy space and leadership to establish and implement policies for poverty eradication and sustainable development",
            indicators: [
                {
                    id: "17.15.1",
                    description: "Extent of use of country-owned results frameworks and planning tools by providers of development cooperation"
                }
            ]
        },
        {
            targetId: "17.16",
            description: "Enhance the Global Partnership for Sustainable Development, complemented by multi-stakeholder partnerships that mobilize and share knowledge, expertise, technology and financial resources, to support the achievement of the Sustainable Development Goals in all countries, in particular developing countries",
            indicators: [
                {
                    id: "17.16.1",
                    description: "Number of countries reporting progress in multi-stakeholder development effectiveness monitoring frameworks that support the achievement of the sustainable development goals"
                }
            ]
        },
        {
            targetId: "17.17",
            description: "Encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships",
            indicators: [
                {
                    id: "17.17.1",
                    description: "Amount in United States dollars committed to public-private partnerships for infrastructure"
                }
            ]
        },
        {
            targetId: "17.18",
            description: "By 2020, enhance capacity-building support to developing countries, including for least developed countries and small island developing States, to increase significantly the availability of high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory status, disability, geographic location and other characteristics relevant in national contexts",
            indicators: [
                {
                    id: "17.18.1",
                    description: "Statistical capacity indicator for Sustainable Development Goal monitoring"
                },
                {
                    id: "17.18.2",
                    description: "Number of countries that have national statistical legislation that complies with the Fundamental Principles of Official Statistics"
                },
                {
                    id: "17.18.3",
                    description: "Number of countries with a national statistical plan that is fully funded and under implementation, by source of funding"
                }
            ]
        },
        {
            targetId: "17.19",
            description: "By 2030, build on existing initiatives to develop measurements of progress on sustainable development that complement gross domestic product, and support statistical capacity-building in developing countries",
            indicators: [
                {
                    id: "17.19.1",
                    description: "Dollar value of all resources made available to strengthen statistical capacity in developing countries"
                },
                {
                    id: "17.19.2",
                    description: "Proportion of countries that (a) have conducted at least one population and housing census in the last 10 years; and (b) have achieved 100 per cent birth registration and 80 per cent death registration"
                }
            ]
        }
    ]
};
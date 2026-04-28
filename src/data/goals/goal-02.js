// File: src/data/goals/goal-02.js

export const goalData = {
    id: "02",
    title: "Zero Hunger",
    description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
    pulseText: "Food security, good nutrition, and sustainable agriculture are key pillars in Indonesia's development strategy.",

    // Data untuk Pulse Bento Grid
    pulseMetrics: [
        {
            label: "Prevalensi Stunting Balita",
            value: "19.8%",
            trend: "▼ dari 21.5% (2023)",
            trendColor: "#22c55e",
            source: "Kemenkes SSGI 2024"
        },
        {
            label: "Target Stunting 2025",
            value: "18.8%",
            trend: "Target RPJMN",
            trendColor: "#64748b",
            source: "TP2S Stunting.go.id"
        },
        {
            label: "Target Stunting 2029",
            value: "14.2%",
            trend: "Target RPJMN 2025–2029",
            trendColor: "#64748b",
            source: "TP2S Stunting.go.id"
        },
        {
            label: "Prevalensi Wasting (kurus)",
            value: "7.4%",
            trend: "balita <5 tahun",
            trendColor: "#64748b",
            source: "UN SDGs Platform"
        },
        {
            label: "Kerawanan Pangan",
            value: "~5.1%",
            trend: "Food Insecurity Scale",
            trendColor: "#64748b",
            source: "UN SDGs Platform"
        },
        {
            label: "Indikator SDGs Kesra 2024",
            value: "BPS Pub.",
            trend: "Laporan resmi",
            trendColor: "#64748b",
            source: "BPS SDGs Kesra 2024"
        }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "2.1",
            description: "By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round.",
            indicators: [
                { id: "2.1.1", description: "Prevalence of undernourishment" },
                { id: "2.1.2", description: "Prevalence of moderate or severe food insecurity in the population, based on the Food Insecurity Experience Scale (FIES)" }
            ]
        },
        {
            targetId: "2.2",
            description: "By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons.",
            indicators: [
                { id: "2.2.1", description: "Prevalence of stunting (height for age <-2 standard deviation from the median of the World Health Organization (WHO) Child Growth Standards) among children under 5 years of age" },
                { id: "2.2.2", description: "Prevalence of malnutrition (weight for height >+2 or <-2 standard deviation from the median of the WHO Child Growth Standards) among children under 5 years of age, by type (wasting and overweight)" },
                { id: "2.2.3", description: "Prevalence of anaemia in women aged 15 to 49 years, by pregnancy status (percentage)" },
                { id: "2.2.4", description: "Prevalence of minimum dietary diversity, by population group (children aged 6 to 23 months and non-pregnant women aged 15 to 49 years)" }
            ]
        },
        {
            targetId: "2.3",
            description: "By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment.",
            indicators: [
                { id: "2.3.1", description: "Volume of production per labour unit by classes of farming/pastoral/forestry enterprise size" },
                { id: "2.3.2", description: "Average income of small-scale food producers, by sex and indigenous status" }
            ]
        },
        {
            targetId: "2.4",
            description: "By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality.",
            indicators: [{ id: "2.4.1", description: "Proportion of agricultural area under productive and sustainable agriculture" }]
        },
        {
            targetId: "2.5",
            description: "By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed.",
            indicators: [
                { id: "2.5.1", description: "Number of (a) plant and (b) animal genetic resources for food and agriculture secured in either medium- or long-term conservation facilities" },
                { id: "2.5.2", description: "Proportion of local and transboundary breeds classified as being at risk of extinction" }
            ]
        },
        {
            targetId: "2.a",
            description: "Increase investment, including through enhanced international cooperation, in rural infrastructure, agricultural research and extension services, technology development and plant and livestock gene banks in order to enhance agricultural productive capacity in developing countries, in particular least developed countries.",
            indicators: [
                { id: "2.a.1", description: "The agriculture orientation index for government expenditures" },
                { id: "2.a.2", description: "Total official flows (official development assistance plus other official flows) to the agriculture sector" }
            ]
        },
        {
            targetId: "2.b",
            description: "Correct and prevent trade restrictions and distortions in world agricultural markets, including through the parallel elimination of all forms of agricultural export subsidies and all export measures with equivalent effect, in accordance with the mandate of the Doha Development Round.",
            indicators: [{ id: "2.b.1", description: "Agricultural export subsidies" }]
        },
        {
            targetId: "2.c",
            description: "Adopt measures to ensure the proper functioning of food commodity markets and their derivatives and facilitate timely access to market information, including on food reserves, in order to help limit extreme food price volatility.",
            indicators: [{ id: "2.c.1", description: "Indicator of food price anomalies" }]
        }
    ]
};
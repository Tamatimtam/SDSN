// File: src/data/goals/goal-01.js

export const goalData = {
    id: "01",
    title: "No Poverty",
    description: "End poverty in all its forms everywhere. More than 700 million people still live in extreme poverty, struggling to fulfill the most basic needs.",
    pulseText: "Indonesia has made significant progress in reducing extreme poverty over the last decade, yet vulnerabilities remain, especially in rural areas.",

    // Data untuk Bento Grid
    bento: [
        { size: "large", number: "9.36%", label: "National Poverty Rate (2023)", sub: "Down from 9.54% in 2022." },
        { size: "normal", number: "25.9M", label: "People Living in Poverty" },
        { size: "normal", number: "↑ High", label: "Network Priority", color: "#4C9F38" }
    ],

    // Data untuk Targets & Indicators
    targets: [
        {
            targetId: "1.1",
            description: "By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day.",
            indicators: [
                {
                    id: "1.1.1",
                    description: "Proportion of the population living below the international poverty line by sex, age, employment status and geographical location (urban/rural)."
                }
            ]
        },
        {
            targetId: "1.2",
            description: "By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions.",
            indicators: [
                {
                    id: "1.2.1",
                    description: "Proportion of population living below the national poverty line, by sex and age."
                },
                {
                    id: "1.2.2",
                    description: "Proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions."
                }
            ]
        }
    ]
};
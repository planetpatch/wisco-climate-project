import type { FeatureCollection } from "geojson";
import type { StoryFeature } from "@/types";

export const MOCK_STORIES: StoryFeature[] = [
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-89.4012, 43.0731] // Madison
        },
        properties: {
            id: "1",
            title: "Madison Solar Initiative",
            description: "Over 5,000 rooftop solar panels are being installed across downtown Madison's residential and commercial buildings.",
            category: "Solar",
            imageUrl: "https://placehold.co/600x400/e67e22/white?text=Solar+Project",
            date: "2026-02-15",
            bodyText: "Over 5,000 rooftop solar panels are being installed across residential and commercial buildings in Madison's downtown corridor. The project includes a workforce development component training over 200 local workers in solar installation and maintenance, and is on track to offset 12,000 metric tons of CO₂ annually.\n\nGreenhouse Gas Offset: 12,000 metric tons of CO₂",
            videoUrl: "https://www.youtube.com/embed/QvXUojBbBVU",
            galleryImages: [
                "/solar-wind-landscape.png"
            ]
        }
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-87.9065, 43.0389] // Milwaukee
        },
        properties: {
            id: "2",
            title: "Milwaukee Wind Farm",
            description: "50 floating turbines are being deployed 15–25 miles offshore in Lake Michigan, generating up to 600 MW of clean energy.",
            category: "Wind",
            imageUrl: "https://placehold.co/600x400/2980b9/white?text=Wind+Farm",
            date: "2026-02-15",
            bodyText: "50 floating turbines are being deployed at sites 15–25 miles offshore in Lake Michigan where sustained wind speeds average 18 mph. The project will generate up to 600 MW — enough to power approximately 200,000 homes — while environmental impact assessments ensure protection of migratory bird corridors and Great Lakes fisheries.\n\nGreenhouse Gas Offset: 850,000 metric tons of CO₂",
            videoUrl: "https://www.youtube.com/embed/QvXUojBbBVU",
            galleryImages: [
                "/solar-wind-landscape.png"
            ]
        }
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-88.0133, 44.5133] // Green Bay
        },
        properties: {
            id: "3",
            title: "Green Bay Bioenergy",
            description: "150 tons of agricultural waste and paper mill residuals are being converted daily into biogas through anaerobic digestion.",
            category: "Bioenergy",
            imageUrl: "https://placehold.co/600x400/27ae60/white?text=Bioenergy",
            date: "2026-02-15",
            bodyText: "150 tons of organic waste are being processed daily through anaerobic digestion, diverting it from landfills while generating 4 MW of continuous power. The biogas is also refined into renewable natural gas injected directly into the local pipeline. Manure from over 30 dairy farms is co-digested with paper waste, reducing agricultural methane emissions and producing nutrient-rich digestate returned as fertilizer.\n\nGreenhouse Gas Offset: 8,500 metric tons of CO₂, 3,200 metric tons of methane",
            videoUrl: "https://www.youtube.com/embed/QvXUojBbBVU",
            galleryImages: [
                "/solar-wind-landscape.png"
            ]
        }
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-91.2396, 43.8138] // La Crosse
        },
        properties: {
            id: "4",
            title: "La Crosse Hydro Upgrade",
            description: "Three historic hydroelectric dams on the Mississippi are being upgraded with turbines that increase efficiency by 35%.",
            category: "Hydro",
            imageUrl: "https://placehold.co/600x400/00bcd4/white?text=Hydro+Dam",
            date: "2026-02-15",
            bodyText: "Three historic hydroelectric dams are being upgraded with state-of-the-art turbines that increase efficiency by 35%. The upgraded facilities will generate 28 MW combined — a 40% increase over current capacity — supplying clean energy to 15,000 homes. New fish-friendly Kaplan turbines reduce fish mortality by over 90% compared to the original equipment, and 200 acres of riverside habitat are being restored.\n\nGreenhouse Gas Offset: 22,000 metric tons of CO₂",
            videoUrl: "https://www.youtube.com/embed/QvXUojBbBVU",
            galleryImages: [
                "/solar-wind-landscape.png"
            ]
        }
    },
    {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [-90.1774, 44.2619] // Central Sands (Approx)
        },
        properties: {
            id: "5",
            title: "Central Sands Conservation",
            description: "Sustainable water management practices are being implemented to protect one of Wisconsin's most important aquifers.",
            category: "Conservation",
            imageUrl: "https://placehold.co/600x400/795548/white?text=Conservation",
            date: "2026-02-15",
            bodyText: "Precision irrigation technology is reducing water use by 25% while cover cropping improves soil water retention across the Central Sands region. A network of 50 monitoring wells tracks groundwater levels in real-time via an online dashboard. Early results show stabilization of water tables in pilot areas, with the program expanding to cover 100,000 acres.\n\nGreenhouse Gas Offset: 4,500 metric tons of CO₂, 1,800 metric tons of methane",
            videoUrl: "https://www.youtube.com/embed/QvXUojBbBVU",
            galleryImages: [
                "/solar-wind-landscape.png"
            ]
        }
    }
];

export const STORIES_COLLECTION: FeatureCollection = {
    type: "FeatureCollection",
    features: MOCK_STORIES
};

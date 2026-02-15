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
            description: "A community-led project bringing solar to downtown Madison.",
            category: "Solar",
            imageUrl: "https://placehold.co/600x400/e67e22/white?text=Solar+Project",
            date: "2023-05-15",
            bodyText: "Madison's Solar Initiative is one of the most ambitious community-driven renewable energy projects in the Midwest. Launched in early 2023, it aims to install over 5,000 rooftop solar panels across residential and commercial buildings in the downtown corridor.\n\nThe project is a partnership between the City of Madison, local utility MGE, and the nonprofit Solar for Good. Residents can participate through a group-buy program that reduces installation costs by up to 30%.\n\nBeyond electricity generation, the initiative includes a workforce development component, training over 200 local workers in solar installation and maintenance. The program has already created 85 permanent jobs and is on track to offset 12,000 metric tons of CO₂ annually by 2025.",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            galleryImages: [
                "https://placehold.co/800x500/e67e22/white?text=Rooftop+Panels",
                "https://placehold.co/800x500/f39c12/white?text=Installation+Crew",
                "https://placehold.co/800x500/d35400/white?text=Community+Meeting"
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
            description: "Offshore wind potential being explored in Lake Michigan.",
            category: "Wind",
            imageUrl: "https://placehold.co/600x400/2980b9/white?text=Wind+Farm",
            date: "2023-08-20",
            bodyText: "Lake Michigan's eastern Wisconsin shoreline is emerging as a prime location for offshore wind energy development. The Milwaukee Wind Farm feasibility study, funded by the U.S. Department of Energy, evaluates sites 15–25 miles offshore where sustained wind speeds average 18 mph.\n\nIf approved, the project would deploy 50 floating turbines generating up to 600 MW — enough to power approximately 200,000 homes. Environmental impact assessments focus on migratory bird corridors and Great Lakes fisheries.\n\nThe project has strong community support, with 72% of Milwaukee residents favoring offshore wind in a 2023 survey. Economic modeling projects 1,200 construction jobs and $380 million in local economic activity over the project's 25-year lifespan.",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            galleryImages: [
                "https://placehold.co/800x500/2980b9/white?text=Turbine+Design",
                "https://placehold.co/800x500/3498db/white?text=Lake+Michigan+Site",
                "https://placehold.co/800x500/1abc9c/white?text=Community+Forum"
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
            description: "Converting waste to energy in the Fox River Valley.",
            category: "Bioenergy",
            imageUrl: "https://placehold.co/600x400/27ae60/white?text=Bioenergy",
            date: "2023-11-10",
            bodyText: "The Fox River Valley has long been Wisconsin's paper-making heartland, but the Green Bay Bioenergy plant is writing a new chapter. The facility converts agricultural waste and paper mill residuals into biogas through anaerobic digestion.\n\nOperating since late 2023, the plant processes 150 tons of organic waste daily, diverting it from landfills while generating 4 MW of continuous power. The biogas is also refined into renewable natural gas (RNG) injected directly into the local pipeline.\n\nA unique aspect of the project is its partnership with dairy farms in Brown County. Manure from over 30 farms is collected and co-digested with paper waste, reducing methane emissions from agriculture while providing farmers with a new revenue stream through nutrient-rich digestate returned as fertilizer.",
            galleryImages: [
                "https://placehold.co/800x500/27ae60/white?text=Digester+Facility",
                "https://placehold.co/800x500/2ecc71/white?text=Waste+Processing",
                "https://placehold.co/800x500/16a085/white?text=Farm+Partnership"
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
            description: "Modernizing historical hydroelectric dams on the Mississippi.",
            category: "Hydro",
            imageUrl: "https://placehold.co/600x400/00bcd4/white?text=Hydro+Dam",
            date: "2024-01-05",
            bodyText: "The Mississippi River has powered La Crosse for over a century. Now, a $45 million modernization effort is upgrading three historic hydroelectric dams with state-of-the-art turbines that increase efficiency by 35% while improving fish passage.\n\nThe upgraded facilities will generate 28 MW combined — a 40% increase over current capacity — supplying clean energy to 15,000 homes. New fish-friendly Kaplan turbines reduce fish mortality by over 90% compared to the original 1930s-era equipment.\n\nThe project also includes ecological restoration of 200 acres of riverside habitat and a public education center where visitors can learn about the river's role in Wisconsin's energy history. Construction is phased over three years to maintain continuous power generation.",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            galleryImages: [
                "https://placehold.co/800x500/00bcd4/white?text=Dam+Upgrade",
                "https://placehold.co/800x500/0097a7/white?text=Fish+Passage",
                "https://placehold.co/800x500/00796b/white?text=River+Restoration"
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
            description: "Protecting groundwater resources amidst agricultural expansion.",
            category: "Conservation",
            imageUrl: "https://placehold.co/600x400/795548/white?text=Conservation",
            date: "2024-02-14",
            bodyText: "Wisconsin's Central Sands region sits atop one of the state's most important aquifers, supplying water to thousands of farms and communities. But decades of high-capacity well drilling have lowered water tables, threatening lakes, streams, and wetlands.\n\nThe Central Sands Conservation Initiative brings together farmers, scientists, and policymakers to develop sustainable water management practices. Key strategies include precision irrigation technology that reduces water use by 25%, cover cropping to improve soil water retention, and a voluntary well-spacing program.\n\nA network of 50 monitoring wells tracks groundwater levels in real-time, with data publicly available through an online dashboard. Early results show stabilization of water tables in pilot areas, and the program is expanding to cover 100,000 acres by 2026.",
            galleryImages: [
                "https://placehold.co/800x500/795548/white?text=Monitoring+Well",
                "https://placehold.co/800x500/8d6e63/white?text=Precision+Irrigation",
                "https://placehold.co/800x500/a1887f/white?text=Cover+Crops"
            ]
        }
    }
];

export const STORIES_COLLECTION: FeatureCollection = {
    type: "FeatureCollection",
    features: MOCK_STORIES
};
